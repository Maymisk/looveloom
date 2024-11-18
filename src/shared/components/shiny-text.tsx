import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface IShinyTextProps {
	children: ReactNode;
	className?: string;
	backgroundColor?: string;
}

export function ShinyText({
	children,
	className,
	backgroundColor,
}: IShinyTextProps) {
	return (
		<div
			style={{
				background: `radial-gradient(circle at center,rgba(150, 150, 150, 0.1),#f000) -200% 50% / 200% 100% no-repeat,${
					backgroundColor || '#000'
				}`,
			}}
			className={cn('animate-shiny-text', className)}
		>
			{children}
		</div>
	);
}
