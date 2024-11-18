import { cva } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

interface ILandingPageLinkProps extends LinkProps {
	className?: string;
	children: ReactNode;
	target?: HTMLAttributeAnchorTarget;
	variant?: 'empty' | 'filled';
}

const LandingPageLinkVariants = cva(
	'w-1/2 text-center rounded-md font-bold px-4 py-2 transition-all',
	{
		variants: {
			style: {
				empty: 'text-red-500 border-2 border-red-500 hover:text-red-400 hover:border-red-400',
				filled: 'text-white bg-red-200 shadow-md shadow-gray-800 hover:bg-red-400',
			},
		},
		defaultVariants: {
			style: 'empty',
		},
	}
);

export function LandingPageLink({
	target,
	className,
	children,
	variant,
	...rest
}: ILandingPageLinkProps) {
	return (
		<Link
			target={target || '_blank'}
			className={LandingPageLinkVariants({ style: variant, className })}
			{...rest}
		>
			{children}
		</Link>
	);
}
