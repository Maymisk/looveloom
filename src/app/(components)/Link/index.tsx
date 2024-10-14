import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

interface ILandingPageLinkProps extends LinkProps {
	className?: string;
	children: ReactNode;
	target?: HTMLAttributeAnchorTarget;
}

export function LandingPageLink({
	target,
	className,
	children,
	...rest
}: ILandingPageLinkProps) {
	return (
		<Link
			target={target || '_blank'}
			className={cn(
				'w-1/2 text-center rounded-md text-brown500 font-bold px-4 py-2 border-2 border-brown500 hover:bg-brown500 hover:text-white100 transition-all',
				className
			)}
			{...rest}
		>
			{children}
		</Link>
	);
}
