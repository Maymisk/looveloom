'use client';

import { ReactNode, useState } from 'react';
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
	Icon?: ReactNode;
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
				<div className="flex gap-6 focus:outline-none">
					<TooltipTrigger
						className="relative z-10 min-w-10 h-10 flex items-center justify-center bg-gray-800 shadow-md shadow-gray-800 rounded-full focus:outline-none"
						onClick={handleClick}
						data-timeline-item={true}
					>
						{Icon}
					</TooltipTrigger>

					<div className={className}>{children}</div>
				</div>

				<TooltipContent className="bg-gray-800 rounded-md">
					{tooltipContent}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
