import { Milestone } from '@/shared/@types/milestone';
import { Timeline } from '@/shared/components/timeline';
import { CoupleTimelineItem } from '@/app/couple/[id]/(components)/timeline/item';

interface ICoupleTimelineProps {
	milestones: Milestone[];
}

export function CoupleTimeline({ milestones }: ICoupleTimelineProps) {
	return (
		<Timeline>
			{milestones.map(milestone => {
				return (
					<CoupleTimelineItem
						key={milestone?._id || milestone.key}
						name={milestone.name}
						description={milestone.description}
						date={milestone.date}
					/>
				);
			})}
		</Timeline>
	);
}
