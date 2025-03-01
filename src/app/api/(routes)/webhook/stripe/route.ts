import stripe from '@/lib/stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import dbConnect from '@/app/api/mongo';
import { SESMailProvider } from '@/app/api/shared/providers/mail/SES';
import { S3StorageProvider } from '@/app/api/shared/providers/storage/s3';
import crypto from 'crypto';
import QRCode from 'qrcode';

import { Couple } from '@/app/api/schemas/couple';
import moment from 'moment';
import PageCreatedEmailGetter from '../../couple/emails/page-created.hbs';
import { deflattenObject } from '@/app/api/shared/utils/flatten-object';

export async function POST(req: Request) {
	await dbConnect();

	try {
		const body = await req.text();
		const signature = headers().get('stripe-signature');

		if (!process.env.STRIPE_WEBHOOK_SECRET || !signature) {
			throw new Error('Missing secret or signature');
		}

		let event;

		try {
			event = stripe.webhooks.constructEvent(
				body,
				signature,
				process.env.STRIPE_WEBHOOK_SECRET
			);
		} catch (err: any) {
			return NextResponse.json(
				{ error: `Webhook error: ${err?.message}` },
				{ status: 400 }
			);
		}

		const storageProvider = new S3StorageProvider();

		switch (event.type) {
			case 'checkout.session.completed':
				if (event.data.object.payment_status === 'paid') {
					// card payment was successful

					try {
						const pageData = deflattenObject(
							event.data.object.metadata || {}
						);

						const { plan, milestones, pictures, ...data } =
							pageData;

						const email = event.data.object.customer_details?.email;
						const user = event.data.object.customer_details?.name;

						if (!plan || !email) {
							throw new Error('Missing plan or email');
						}

						const planIsLoveful = plan === 'loveful';

						milestones?.forEach((milestone: any) => {
							milestone.date = new Date(milestone.date);
						});

						const expiresAt = planIsLoveful
							? undefined
							: moment().add(1, 'year').toDate();

						const couple = await Couple.create({
							name: data.name,
							story: data.story,
							song: data.song,
							pictures,
							startDate: new Date(data.startDate),
							email,
							milestones,
							expiresAt,
						});

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

						await mailProvider.sendMail({
							templateGetter: PageCreatedEmailGetter,
							subject: 'Your Loveloom was successfully created!',
							to: email,
							variables: {
								qrcode:
									typeof qrcode === 'string' ? qrcode : '',
								user,
								url: coupleUrl,
							},
						});

						return NextResponse.json(
							{ url: coupleUrl },
							{ status: 200 }
						);
					} catch (err: any) {
						return NextResponse.json(
							{ error: `Webhook error: ${err?.message}` },
							{ status: 400 }
						);
					}
				}

				// if (
				//   event.data.object.payment_status === "unpaid" &&
				//   event.data.object.payment_intent
				// ) {
				//   // Pagamento por boleto
				//   const paymentIntent = await stripe.paymentIntents.retrieve(
				//     event.data.object.payment_intent.toString()
				//   );

				//   const hostedVoucherUrl =
				//     paymentIntent.next_action?.boleto_display_details
				//       ?.hosted_voucher_url;

				//   if (hostedVoucherUrl) {
				//     // O cliente gerou um boleto, manda um email pra ele
				//     const userEmail = event.data.object.customer_details?.email;
				//     console.log("gerou o boleto e o link é", hostedVoucherUrl);
				//   }
				// }

				break;

			case 'checkout.session.expired':
				if (event.data.object.payment_status === 'unpaid') {
					// customer left checkout
					// create some page to try to convince the customer to continue their purchase

					try {
						const pageData = deflattenObject(
							event.data.object.metadata || {}
						);
						const { pictures } = pageData;

						const fileNames = pictures.map(
							(picture: string) => picture.split('couples/')[1]
						);

						for (const file of fileNames) {
							storageProvider.delete(file, 'couples');
						}
					} catch (err: any) {
						return NextResponse.json(
							{ error: `Webhook error: ${err?.message}` },
							{ status: 400 }
						);
					}
				}
				break;

			// case "checkout.session.async_payment_succeeded":
			//   if (event.data.object.payment_status === "paid") {
			//     // O cliente pagou o boleto e o pagamento foi confirmado
			//     const testeId = event.data.object.metadata?.testeId;
			//     console.log("pagamento boleto confirmado", testeId);
			//   }
			//   break;

			// case "checkout.session.async_payment_failed":
			//   if (event.data.object.payment_status === "unpaid") {
			//     // O cliente não pagou o boleto e ele venceu
			//     const testeId = event.data.object.metadata?.testeId;
			//     console.log("pagamento boleto falhou", testeId);
			//   }
			//   break;
		}

		return NextResponse.json({ result: event, ok: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				message: error,
				ok: false,
			},
			{ status: 500 }
		);
	}
}
