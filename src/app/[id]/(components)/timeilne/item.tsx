'use client';

import { TimelineItem } from '@/shared/components/timeline';
import { ComponentPropsWithoutRef } from 'react';

interface ISubscriptionTimelineItemProps
	extends Omit<
		ComponentPropsWithoutRef<typeof TimelineItem>,
		'className' | 'children'
	> {
	title: string;
	text: string;
}

export function SubscriptionTimelineItem({
	title,
	text,
	...rest
}: ISubscriptionTimelineItemProps) {
	return (
		<TimelineItem className="flex flex-col gap-2 top-1" {...rest}>
			<h3 className="text-start text-3xl text-red-300 font-bold capitalize">
				{title}
			</h3>

			<p className="text-sm text-start">{text}</p>
		</TimelineItem>
	);
}
