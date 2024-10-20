import { cn } from '@/lib/utils';
import { Star, LucideProps } from 'lucide-react';

interface IStarsProps extends LucideProps {
	className?: string;
	iconClassName?: string;
}

export function Stars({ className, iconClassName, ...rest }: IStarsProps) {
	return (
		<div className={cn('flex items-center gap-2', className)}>
			{Array.from({ length: 5 }).map((_, index) => {
				return (
					<Star
						key={index}
						className={cn(
							'text-yellow-500 fill-yellow-500 hover:fill-yellow-300 hover:translate-y-[-2px] transition-all',
							iconClassName
						)}
						strokeWidth={0}
						{...rest}
					/>
				);
			})}
		</div>
	);
}
