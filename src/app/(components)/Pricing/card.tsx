'use client';

import { cn } from '@/lib/utils';
import { currencyFormatter } from '@/utils/currencyFormatter';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface IPricingCardProps {
	children: ReactNode;
	className?: string;
	title: string;
	price: number;
	plan: 'standard' | 'loveful';
	oldPrice?: number;
}

export function PricingCard({
	children,
	className,
	title,
	oldPrice,
	price,
	plan,
}: IPricingCardProps) {
	const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

	async function handleClick(plan: 'standard' | 'loveful') {
		try {
			setIsCreatingCheckout(true);

			const checkoutResponse = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ plan }),
			});

			const stripeClient = await loadStripe(
				process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string
			);

			if (!stripeClient) throw new Error('Stripe failed to initialize.');

			const { sessionId } = await checkoutResponse.json();
			console.log(sessionId, 'session id');

			await stripeClient.redirectToCheckout({ sessionId });
		} catch (error) {
			console.error(error);
		} finally {
			setIsCreatingCheckout(false);
		}
	}

	return (
		<div
			className={cn(
				'w-full h-full max-w-[400px] flex flex-col gap-8 p-8 bg-gray-500 rounded-lg',
				className
			)}
		>
			<h3 className="text-2xl font-bold">{title}</h3>

			<div className="w-full flex flex-col">
				{oldPrice && (
					<span className="text-xl line-through font-light opacity-40">
						{currencyFormatter.format(oldPrice)}
					</span>
				)}

				<h2 className="text-5xl font-bold">
					{currencyFormatter.format(price)}
				</h2>
			</div>

			{children}

			<button
				type="button"
				className="w-full px-8 py-4 bg-red-200 uppercase font-bold text-center shadow-md shadow-gray-800 rounded-md mt-auto transition-all hover:opacity-70"
				onClick={() => handleClick(plan)}
			>
				Buy
			</button>
		</div>
	);
}
