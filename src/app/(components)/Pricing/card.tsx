import { cn } from '@/lib/utils';
import { currencyFormatter } from '@/utils/currencyFormatter';
import Link from 'next/link';
import { ReactNode } from 'react';

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
	return (
		<div
			className={cn(
				'w-full h-full max-w-[400px] flex flex-col gap-8 p-8 bg-gray-500 rounded-lg',
				className
			)}
		>
			<h3 className="text-4xl font-bold">{title}</h3>

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

			<Link
				href="/subscribe"
				className="w-full h-fit max-w-none xl:min-h-14 text-center xl:text-xl rounded-md font-bold border-none  px-8 py-4 text-white bg-red-200 shadow-md shadow-gray-800 uppercase mt-auto transition-all hover:opacity-70"
			>
				Get instant access
			</Link>
		</div>
	);
}
