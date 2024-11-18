'use client';

import { cva } from 'class-variance-authority';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	variant?: 'default' | 'readonly';
}

const InputVariants = cva(
	'w-full h-10 px-3 py-2 text-sm font-light bg-gray-800 rounded-md border border-transparent outline-none focus:border-red-300 placeholder:text-sm placeholder:font-light placeholder:opacity-40',
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

function InputComponent(
	{ label, name, className, variant = 'default', ...rest }: IInputProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<div className="w-full flex flex-col gap-1">
			{label && (
				<label className="ml-1 text-sm font-semibold" htmlFor={name}>
					{label}
				</label>
			)}

			<input
				{...rest}
				ref={ref}
				name={name}
				className={InputVariants({ style: variant, className })}
			/>
		</div>
	);
}

export const Input = forwardRef(InputComponent);
