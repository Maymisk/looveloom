import stripe from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { plan, email, emailConfirmation } = body;

	if (email !== emailConfirmation) {
		return NextResponse.json(
			{ error: 'Emails dont match' },
			{ status: 400 }
		);
	}

	const price =
		plan === 'standard'
			? process.env.STRIPE_TEST_STANDARD_PRICE_ID
			: process.env.STRIPE_TEST_LOVEFUL_PRICE_ID;

	console.log(body, price, 'body e price aqui');
	const user = email.split('@')[0];

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price,
					quantity: 1,
				},
			],
			mode: 'payment',
			payment_method_types: ['card'],
			success_url: `${req.headers.get('origin')}/thank-you?user=${user}`,
			cancel_url: `${req.headers.get('origin')}/`,
			metadata: { plan, email },
		});

		return NextResponse.json({ sessionId: session.id });
	} catch (err) {
		console.error(err);
		return NextResponse.error();
	}
}
