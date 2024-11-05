import { Milestone } from '@/shared/@types/milestone';
import { Timeline } from '@/shared/components/timeline';
import { CoupleTimelineItem } from './item';

interface ICoupleTimelineProps {
	milestones: Milestone[];
}

export function CoupleTimeline({ milestones }: ICoupleTimelineProps) {
	return (
		<Timeline>
			{milestones.map((milestone, i) => {
				return (
					<CoupleTimelineItem key={milestone.name} {...milestone} />
				);
			})}
		</Timeline>
	);
}
