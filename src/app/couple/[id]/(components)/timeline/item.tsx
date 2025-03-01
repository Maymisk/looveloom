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
import { ComponentType } from 'react';

type ICoupleTimelineItemProps = Milestone;

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
}: ICoupleTimelineItemProps) {
	const formattedMilestoneName = name.split('-').join(' ');
	const formattedMilestoneDate = moment(date).format('YYYY/MM/DD');
	const tooltipContent = `Our ${formattedMilestoneName} happened on ${formattedMilestoneDate}`;
	const Icon = milestoneToIcon[name];

	return (
		<TimelineItem
			className="w-[calc(100%-72px)] flex flex-col gap-2 top-1"
			tooltipContent={tooltipContent}
			Icon={<Icon className="w-5 h-5 text-red-300" />}
		>
			<h3 className="w-fit text-start text-3xl text-red-300 font-bold capitalize">
				{formattedMilestoneName}
			</h3>

			<p className="w-full text-sm text-start break-words">
				{description}
			</p>
		</TimelineItem>
	);
}
