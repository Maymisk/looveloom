import stripe from '@/lib/stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import SubscriptionCompletedGetter from '@/app/api/(routes)/webhook/stripe/emails/subscription-completed.hbs';
import dbConnect from '@/app/api/mongo';
import { Token } from '@/app/api/schemas/token';
import { SESMailProvider } from '@/app/api/shared/providers/mail/SES';
import jwt from 'jsonwebtoken';

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

		switch (event.type) {
			case 'checkout.session.completed':
				if (event.data.object.payment_status === 'paid') {
					// card payment was successful

					const { plan } = event.data.object.metadata || {};
					const email = event.data.object.customer_details?.email;
					const user = event.data.object.customer_details?.name;

					if (!plan || !email) {
						throw new Error('Missing plan or email');
					}

					const options =
						plan === 'standard' ? { expiresIn: '1y' } : {};
					const subscriptionJWT = jwt.sign(
						{ plan, user, email },
						process.env.JWT_SECRET as string,
						options
					);

					await Token.create({ value: subscriptionJWT });

					const url = `https://${process.env.NEXT_PUBLIC_DOMAIN}/subscribe?token=${subscriptionJWT}`;

					const mailProvider = new SESMailProvider();

					// todo - send them some additional bonus upon purchase
					await mailProvider.sendMail({
						templateGetter: SubscriptionCompletedGetter,
						subject: 'Your Loveloom purchase has been processed!',
						to: email,
						variables: {
							user,
							url,
						},
					});

					return NextResponse.json({}, { status: 200 });
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
