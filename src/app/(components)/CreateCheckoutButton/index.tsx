'use client';

import { Button } from '@/shared/components/button';
import { ReactNode, useState } from 'react';
import { toast } from 'sonner';
import { loadStripe } from '@stripe/stripe-js';
import { cn } from '@/lib/utils';

interface ILandingPageCreateCheckoutButtonProps {
	plan?: 'standard' | 'loveful';
	className?: string;
	children: ReactNode;
}

export function LandingPageCreateCheckoutButton({
	plan = 'loveful',
	children,
	className,
}: ILandingPageCreateCheckoutButtonProps) {
	const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

	async function handleOnClick() {
		try {
			setIsCreatingCheckout(true);

			const checkoutResponse = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ plan }),
			});

			const { sessionId, error } = await checkoutResponse.json();

			if (error) {
				toast.error(error);
				return;
			}

			const stripeClient = await loadStripe(
				process.env.NEXT_PUBLIC_STRIPE_TEST_PUB_KEY as string
			);

			if (!stripeClient) throw new Error('Stripe failed to initialize.');

			await stripeClient.redirectToCheckout({ sessionId });
		} catch (error) {
			console.error(error);
		} finally {
			setIsCreatingCheckout(false);
		}
	}

	return (
		<Button
			className={cn(
				'w-full max-w-[65%] text-center rounded-md font-bold border-none px-4 py-2 transition-all text-white bg-red-200 shadow-md shadow-gray-800 hover:bg-red-400',
				className
			)}
			onClick={handleOnClick}
			disabled={isCreatingCheckout}
		>
			{children}
		</Button>
	);
}
