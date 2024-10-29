import stripe from '@/lib/stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import jwt from 'jsonwebtoken';

const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
	try {
		const body = await req.text();
		const signature = headers().get('stripe-signature');

		console.log(body, signature, secret, 'to aqui dentro do webhook');

		if (!secret || !signature) {
			throw new Error('Missing secret or signature');
		}

		const event = stripe.webhooks.constructEvent(body, signature, secret);

		switch (event.type) {
			case 'checkout.session.completed':
				if (event.data.object.payment_status === 'paid') {
					// card payment was successful

					const { plan = 'loveful' } =
						event.data.object.metadata || {};

					const expiresIn = plan === 'standard' ? '1y' : undefined;
					const subscriptionJWT = jwt.sign(
						{ plan },
						process.env.JWT_SECRET as string,
						{ expiresIn }
					);

					// generate valid jwt to allow user to create their page
					// insert the token in the database

					// create them a link and send them an email with the link and their bonus (some random ass shit);
					const url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/subscribe?token=${subscriptionJWT}`;

					// todo: write the email
					// send the email using SES
					console.log(
						'nigga in the webhook here',
						event.data.object.metadata
					);
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
					console.log('this nigga didnt wanna pay for my shit');
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
			//     // O cliente não pagou o boleto e ele venceu :(
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
				message: `Webhook error: ${error}`,
				ok: false,
			},
			{ status: 500 }
		);
	}
}
