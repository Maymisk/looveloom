import stripe from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { plan } = body;

	const price =
		plan === 'standard'
			? process.env.STRIPE_STANDARD_PRICE_ID
			: process.env.STRIPE_LOVEFUL_PRICE_ID;

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
			success_url: `${req.headers.get('origin')}/thank-you`,
			cancel_url: `${req.headers.get('origin')}/`,
		});

		return NextResponse.json({ sessionId: session.id });
	} catch (err) {
		console.error(err);
		return NextResponse.error();
	}
}
