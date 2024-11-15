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
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';

interface IFormData {
	email: string;
	emailConfirmation: string;
}

interface IEmailDialogFormProps {
	plan: 'standard' | 'loveful';
	className?: string;
	children: ReactNode;
}

export function EmailDialog({ children, className }: IEmailDialogFormProps) {
	const { register } = useForm<IFormData>();

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

				<form className="flex flex-col gap-4">
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
					>
						Submit
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
