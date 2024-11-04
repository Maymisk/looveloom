import { S3StorageProvider } from '@/app/api/shared/providers/storage/s3';
import crypto from 'crypto';
import fs from 'fs';
import handlebars from 'handlebars';
import { verify } from 'jsonwebtoken';
import moment from 'moment';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import QRCode from 'qrcode';
import dbConnect from '../../mongo';
import { Couple } from '../../schemas/couple';
import { Token } from '../../schemas/token';
import { validationSchema } from './validation';
import { SESMailProvider } from '../../shared/providers/mail/SES';

interface IPayload {
	name: string;
	story: string;
	startDate: string;
	song?: string;
	token: string;
}

export async function POST(req: NextRequest) {
	try {
		await dbConnect();

		const body = await req.formData();
		const data = Object.fromEntries(body) as unknown as IPayload;

		const milestones = body
			.getAll('milestones')
			.map(milestone => JSON.parse(milestone.toString()));
		const pictures = body.getAll('pictures') as File[];

		const validation = validationSchema.safeParse({
			...data,
			milestones,
			pictures,
		});

		if (!validation.success)
			return NextResponse.json(
				{ error: validation.error },
				{ status: 400 }
			);

		const { plan, email } = verify(
			data.token,
			process.env.JWT_SECRET as string
		) as any;

		const tokenExists = await Token.findOne({ value: data.token });
		if (!tokenExists) {
			return NextResponse.json(
				{ error: 'Invalid token for page creation' },
				{ status: 400 }
			);
		}

		const planIsLoveful = plan === 'loveful';
		if (planIsLoveful && !data.song)
			return NextResponse.json(
				{ error: { field: 'song', message: 'Song is required' } },
				{ status: 400 }
			);

		if (planIsLoveful && !milestones.length)
			return NextResponse.json(
				{
					error: {
						field: 'milestones',
						message: 'Specify at least one milestone!',
					},
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

		if (!planIsLoveful && milestones.length)
			return NextResponse.json(
				{
					error: 'You cannot specify milestones with your current plan!',
				},
				{ status: 400 }
			);

		if (!planIsLoveful && pictures.length > 3)
			return NextResponse.json(
				{
					error: {
						field: 'pictures',
						message:
							"You can't specify more than 3 pictures with your current plan!",
					},
				},
				{ status: 400 }
			);

		const storageProvider = new S3StorageProvider();
		const fileUrls = [];

		for (const picture of pictures) {
			const pictureUrl = await storageProvider.save(
				picture,
				`couples/${crypto.randomBytes(16).toString('hex')}`
			);

			if (typeof pictureUrl !== 'string' && pictureUrl.error) {
				console.log('There was an error uploading ', picture);
				continue;
			}

			fileUrls.push(pictureUrl);
		}

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

		const coupleUrl = `https://${process.env.VERCEL_URL}/${String(
			couple._id
		)}`;

		const qrcode = QRCode.toDataURL(coupleUrl);
		const user = email.split('@')[0];
		const emailPath = path.join(__dirname, 'emails', 'page-created.hbs');

		const mailProvider = new SESMailProvider();

		const message = await mailProvider.sendMail({
			path: emailPath,
			subject: 'Your Loveloom was successfully created!',
			to: email,
			variables: {
				qrcode,
				user,
				url: coupleUrl,
			},
		});

		console.log(message, 'resposta do email aqui dentro');

		return NextResponse.redirect(coupleUrl, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
