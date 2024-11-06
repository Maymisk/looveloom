import stripe from '@/lib/stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import jwt from 'jsonwebtoken';
import dbConnect from '@/app/api/mongo';
import { Token } from '@/app/api/schemas/token';
import { SESMailProvider } from '@/app/api/shared/providers/mail/SES';
import SubscriptionCompletedGetter from '@/app/api/(routes)/webhook/stripe/emails/subscription-completed.hbs';

const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
	await dbConnect();

	try {
		const body = await req.text();
		const signature = headers().get('stripe-signature');

		if (!secret || !signature) {
			throw new Error('Missing secret or signature');
		}

		const event = stripe.webhooks.constructEvent(body, signature, secret);

		console.log(event.type, 'tipo do evento aqui dentro');

		switch (event.type) {
			case 'checkout.session.completed':
				if (event.data.object.payment_status === 'paid') {
					// card payment was successful

					// verificar meu email na aws
					const { plan } = event.data.object.metadata || {};
					const email = event.data.object.customer_email;

					console.log(plan, email, 'DADOS AQUI');

					if (!plan || !email) {
						throw new Error('Missing plan or email');
					}

					const options =
						plan === 'standard' ? { expiresIn: '1y' } : {};
					const subscriptionJWT = jwt.sign(
						{ plan, email },
						process.env.JWT_SECRET as string,
						options
					);

					await Token.create({ value: subscriptionJWT });

					const url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/subscribe?token=${subscriptionJWT}`;
					const user = email.split('@')[0];

					const mailProvider = new SESMailProvider();

					console.log(url, user, 'vars no envio do email aqui');

					// todo - send them some additional bonus upon purchase
					const message = await mailProvider.sendMail({
						templateGetter: SubscriptionCompletedGetter,
						subject: 'Your Loveloom purchase has been processed!',
						to: email,
						variables: {
							user,
							url,
						},
					});

					console.log(message, 'message de resposta do email aqui');

					return NextResponse.json({ message }, { status: 200 });
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
