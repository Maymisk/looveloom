'use client';

import { Button } from '@/shared/components/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/components/dialog';
import { Input } from '@/shared/components/input';
import { loadStripe } from '@stripe/stripe-js';
import { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface IFormData {
	email: string;
	emailConfirmation: string;
}

interface IEmailDialogFormProps {
	plan: 'standard' | 'loveful';
	className?: string;
	children: ReactNode;
}

export function EmailDialog({
	children,
	className,
	plan,
}: IEmailDialogFormProps) {
	const { register, handleSubmit } = useForm<IFormData>();
	const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

	async function onSubmit(data: IFormData) {
		try {
			setIsCreatingCheckout(true);

			const checkoutResponse = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ plan, ...data }),
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

			console.log(sessionId, 'session id');

			await stripeClient.redirectToCheckout({ sessionId });
		} catch (error) {
			console.error(error);
		} finally {
			setIsCreatingCheckout(false);
		}
	}

	return (
		<Dialog>
			<DialogTrigger className={className}>{children}</DialogTrigger>

			<DialogContent className="w-full max-xl:w-[90%] bg-gray-500 border-none rounded-md">
				<DialogHeader className="mt-4 text-lg">
					<DialogTitle className="w-full text-center">
						Submit your email so we can send you{' '}
						<span className="font-bold text-red-300 leading-8">
							your QRCode!
						</span>
					</DialogTitle>

					<DialogDescription></DialogDescription>
				</DialogHeader>

				<form
					className="flex flex-col gap-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Input
						type="email"
						label="Email"
						placeholder="romeo@gmail.com"
						{...register('email')}
					/>

					<Input
						type="email"
						label="Email confirmation"
						placeholder="romeo@gmail.com"
						{...register('emailConfirmation')}
					/>

					<Button
						type="submit"
						className="bg-red-300 border-none shadow-sm shadow-gray-800 hover:bg-red-500 transition-all text-sm"
						disabled={isCreatingCheckout}
					>
						Submit
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
