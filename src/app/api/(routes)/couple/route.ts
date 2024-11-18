import { S3StorageProvider } from '@/app/api/shared/providers/storage/s3';
import crypto from 'crypto';
import { verify } from 'jsonwebtoken';
import moment from 'moment';
import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';
import dbConnect from '../../mongo';
import { Couple } from '../../schemas/couple';
import { Token } from '../../schemas/token';
import { SESMailProvider } from '../../shared/providers/mail/SES';
import PageCreatedEmailGetter from './emails/page-created.hbs';
import { validationSchema } from './validation';

interface IPayload {
	name: string;
	story: string;
	startDate: string;
	song?: string;
	token: string;
}

interface ITokenPayload {
	plan: string;
	user: string;
	email: string;
}

export async function POST(req: NextRequest) {
	try {
		await dbConnect();

		const body = await req.formData();
		const data = Object.fromEntries(body) as unknown as IPayload;

		const { plan, user, email } = verify(
			data.token,
			process.env.JWT_SECRET as string
		) as ITokenPayload;

		const tokenExists = await Token.findOne({ value: data.token });
		if (!tokenExists) {
			return NextResponse.json(
				{ error: 'Invalid token for page creation' },
				{ status: 400 }
			);
		}

		const milestones = body
			.getAll('milestones')
			.map(milestone => JSON.parse(milestone.toString()));
		const pictures = body.getAll('pictures') as File[];

		const { success, error } = validationSchema.safeParse({
			...data,
			email,
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
					folder: `couples/${crypto.randomBytes(16).toString('hex')}`,
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

		milestones.forEach(milestone => {
			milestone.date = new Date(milestone.date);
		});

		const expiresAt = planIsLoveful
			? undefined
			: moment().add(1, 'year').toDate();

		const couple = await Couple.create({
			name: data.name,
			story: data.story,
			song: data.song,
			pictures: fileUrls,
			startDate: new Date(data.startDate),
			email,
			milestones,
			expiresAt,
		});

		await Token.deleteOne({ value: data.token });

		const coupleUrl = `https://${
			process.env.NEXT_PUBLIC_DOMAIN
		}/couple/${String(couple._id)}`;

		const qrCodeBuffer = await QRCode.toBuffer(coupleUrl);

		const qrcode = await storageProvider.save({
			file: {
				name: crypto.randomBytes(16).toString('hex'),
				type: 'image/png',
				content: qrCodeBuffer,
			},
			folder: 'qr-codes',
		});

		const mailProvider = new SESMailProvider();

		mailProvider.sendMail({
			templateGetter: PageCreatedEmailGetter,
			subject: 'Your Loveloom was successfully created!',
			to: email,
			variables: {
				qrcode: typeof qrcode === 'string' ? qrcode : '',
				user,
				url: coupleUrl,
			},
		});

		return NextResponse.json({ url: coupleUrl }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error?.message }, { status: 400 });
	}
}
