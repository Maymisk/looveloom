import stripe from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../mongo';
import { validationSchema } from './validation';
import { S3StorageProvider } from '../../shared/providers/storage/s3';
import crypto from 'crypto';
import { flattenObject } from '../../shared/utils/flatten-object';

interface IPayload {
	name: string;
	story: string;
	startDate: string;
	song?: string;
	plan: 'standard' | 'loveful';
}

export async function POST(req: NextRequest) {
	try {
		await dbConnect();

		const body = await req.formData();
		const data = Object.fromEntries(body) as unknown as IPayload;
		const { plan } = data;

		const price =
			plan === 'standard'
				? process.env.STRIPE_STANDARD_PRICE_ID
				: process.env.STRIPE_LOVEFUL_PRICE_ID;

		const milestones = body
			.getAll('milestones')
			.map(milestone => JSON.parse(milestone.toString()));
		const pictures = body.getAll('pictures') as File[];

		const { success, error } = validationSchema.safeParse({
			...data,
			milestones,
			pictures,
		});

		if (!success)
			return NextResponse.json(
				{ error: error.errors[0].message },
				{ status: 400 }
			);

		const planIsLoveful = plan === 'loveful';
		if (planIsLoveful && !data.song)
			return NextResponse.json(
				{
					error: 'Please tell us the youtube link to your song of choice!',
				},
				{ status: 400 }
			);

		if (planIsLoveful && !milestones.length)
			return NextResponse.json(
				{
					error: 'Specify at least one milestone!',
				},
				{ status: 400 }
			);

		if (!planIsLoveful && data.song?.length) {
			return NextResponse.json(
				{
					error: 'You cannot specify a song with your current plan!',
				},
				{
					status: 400,
				}
			);
		}

		if (
			data.song &&
			!data.song.match(
				/^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})$/
			)
		) {
			return NextResponse.json(
				{
					error: 'Your song URL must be in the format watch?v=videoId',
				},
				{ status: 400 }
			);
		}

		if (!planIsLoveful && milestones?.length)
			return NextResponse.json(
				{
					error: 'You cannot specify milestones with your current plan!',
				},
				{ status: 400 }
			);

		if (!planIsLoveful && pictures.length > 3)
			return NextResponse.json(
				{
					error: "You can't specify more than 3 pictures with your current plan!",
				},
				{ status: 400 }
			);

		const storageProvider = new S3StorageProvider();
		const filePromises = [];

		for (const picture of pictures) {
			const pictureArrayBuffer = await picture.arrayBuffer();
			const content = Buffer.from(pictureArrayBuffer);

			filePromises.push(
				storageProvider.save({
					file: {
						type: picture.type,
						name: picture.name,
						content,
					},
					folder: 'couples',
				})
			);
		}

		const submissionToStorageResponse = await Promise.allSettled(
			filePromises
		);

		const fileUrls: string[] = [];
		submissionToStorageResponse.forEach(response => {
			if (
				response.status === 'rejected' ||
				typeof response.value !== 'string'
			)
				return;

			fileUrls.push(response.value);
		});

		const pageData = {
			...data,
			milestones,
			pictures: fileUrls,
		};

		const flattenededPageData = flattenObject(pageData);

		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price,
					quantity: 1,
				},
			],
			mode: 'payment',
			payment_method_types: ['card'],
			success_url: `${req.headers.get(
				'origin'
			)}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${req.headers.get('origin')}/`,
			metadata: { ...flattenededPageData },
		});

		return NextResponse.json({ sessionId: session.id });
	} catch (err) {
		console.error(err);
		return NextResponse.error();
	}
}
