import { Milestone, MilestoneNameType } from '@/shared/@types/milestone';
import { TimelineItem } from '@/shared/components/timeline';
import {
	Coffee,
	Eye,
	Gem,
	Heart,
	HeartHandshake,
	Infinity as InfinityIcon,
	LucideProps,
} from 'lucide-react';
import moment from 'moment';
import { ComponentPropsWithoutRef, ComponentType } from 'react';

type ICoupleTimelineItemProps = Omit<
	ComponentPropsWithoutRef<typeof TimelineItem>,
	'className' | 'children' | 'tooltipContent'
> &
	Milestone;

const milestoneToIcon: Record<MilestoneNameType, ComponentType<LucideProps>> = {
	'first-sight': Eye,
	'first-date': Coffee,
	'first-kiss': Heart,
	relationship: HeartHandshake,
	engagement: Gem,
	marriage: InfinityIcon,
};

export function CoupleTimelineItem({
	name,
	description,
	date,
	...rest
}: ICoupleTimelineItemProps) {
	const formattedMilestoneName = name.split('-').join(' ');
	const formattedMilestoneDate = moment(date).format('YYYY/MM/DD');
	const tooltipContent = `Our ${formattedMilestoneName} started on ${formattedMilestoneDate}`;
	const Icon = milestoneToIcon[name];

	return (
		<TimelineItem
			{...rest}
			className="flex flex-col gap-2 top-1"
			tooltipContent={tooltipContent}
			Icon={<Icon className="w-5 h-5 text-red-300" />}
		>
			<h3 className="text-start text-3xl text-red-300 font-bold capitalize">
				{formattedMilestoneName}
			</h3>

			<p className="text-sm text-start">{description}</p>
		</TimelineItem>
	);
}
