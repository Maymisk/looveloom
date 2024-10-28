'use client';

import { cn } from '@/lib/utils';
import { ComponentType, ReactNode, useState } from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../tooltip';

interface ITimelineItemProps {
	children: ReactNode;
	tooltipContent: string;
	className?: string;
	Icon?: ComponentType<{ className?: string }>;
}

export function TimelineItem({
	children,
	tooltipContent,
	className,
	Icon,
}: ITimelineItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(true);
	}

	return (
		<TooltipProvider>
			<Tooltip open={isOpen} onOpenChange={setIsOpen}>
				<TooltipTrigger
					className="relative w-[80%] flex justify-start items-center z-50 focus:outline-none"
					onClick={handleClick}
				>
					<div className="w-10 h-10 flex items-center justify-center bg-gray-800 shadow-md shadow-gray-800 rounded-full">
						{Icon && <Icon className="w-5 h-5 text-red-300" />}
					</div>

					<div className={cn('absolute left-14 w-full', className)}>
						{children}
					</div>
				</TooltipTrigger>

				<TooltipContent className="relative -left-16 bg-gray-800 rounded-md">
					{tooltipContent}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
