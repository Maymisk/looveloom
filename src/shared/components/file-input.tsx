'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';
import { Button } from './button';

interface IFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export function FileInput({ label, className, ...rest }: IFileInputProps) {
	return (
		<div className="flex flex-col gap-1">
			{label && <label className="font-light text-white">{label}</label>}

			<Button className="border border-transparent outline-none focus:border-red-500" />

			<input
				type="file"
				className={cn('sr-only w-full', className)}
				{...rest}
			/>
		</div>
	);
}
