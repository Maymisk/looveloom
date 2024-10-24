'use client';

import { cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	variant?: 'default' | 'readonly';
}

const InputVariants = cva(
	'w-full h-10 px-3 py-2 font-light bg-gray-800 rounded-md border border-transparent outline-none focus:border-red-500 placeholder:font-light placeholder:opacity-40',
	{
		variants: {
			style: {
				default: '',
				readonly: '',
			},
		},
		defaultVariants: {
			style: 'default',
		},
	}
);

export function Input({
	label,
	name,
	className,
	variant = 'default',
	...rest
}: IInputProps) {
	return (
		<div className="w-full flex flex-col gap-1">
			{label && (
				<label className="font-light" htmlFor={name}>
					{label}
				</label>
			)}

			<input
				{...rest}
				placeholder="teste"
				className={InputVariants({ style: variant, className })}
			/>
		</div>
	);
}
