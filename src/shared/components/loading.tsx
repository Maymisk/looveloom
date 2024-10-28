import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

interface ILoadingProps {
	className?: string;
}

export function Loading({ className }: ILoadingProps) {
	return (
		<div
			className={cn('w-full flex items-center justify-center', className)}
		>
			<LoaderCircle className="w-5 h-5 text-red-300 animate-spin" />
		</div>
	);
}
