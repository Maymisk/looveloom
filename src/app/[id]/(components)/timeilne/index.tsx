'use client';

import { Timeline, TimelineItem } from '@/shared/components/timeline';
import {
	Coffee,
	Gem,
	Eye,
	Heart,
	HeartHandshake,
	Infinity,
} from 'lucide-react';
import { SubscriptionTimelineItem } from './item';

const milestoneToIcon = {
	'first-sight': Eye,
	'first-date': Coffee,
	'first-kiss': Heart,
	dating: HeartHandshake,
	engagement: Gem,
	marriage: Infinity,
};

const milestones = [
	{
		milestone: 'first-sight' as const,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut voluptatem laborum, iusto esse exercitationem doloremque veritatis voluptates consectetur incidunt enim eius deserunt nostrum veniam aspernatur aliquid consequuntur nesciunt amet eaque est, ut molestias! Vero unde, officiis accusamus, labore assumenda provident velit error accusantium ad pariatur optio? Recusandae, eaque reprehenderit.',
	},
	{
		milestone: 'first-date' as const,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut voluptatem laborum, iusto esse exercitationem doloremque veritatis voluptates consectetur incidunt enim eius deserunt nostrum veniam aspernatur aliquid consequuntur nesciunt amet eaque est, ut molestias! Vero unde, officiis accusamus, labore assumenda provident velit error accusantium ad pariatur optio? Recusandae, eaque reprehenderit.',
	},
	{
		milestone: 'first-kiss' as const,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut voluptatem laborum, iusto esse exercitationem doloremque veritatis voluptates consectetur incidunt enim eius deserunt nostrum veniam aspernatur aliquid consequuntur nesciunt amet eaque est, ut molestias! Vero unde, officiis accusamus, labore assumenda provident velit error accusantium ad pariatur optio? Recusandae, eaque reprehenderit.',
	},
	{
		milestone: 'dating' as const,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut voluptatem laborum, iusto esse exercitationem doloremque veritatis voluptates consectetur incidunt enim eius deserunt nostrum veniam aspernatur aliquid consequuntur nesciunt amet eaque est, ut molestias! Vero unde, officiis accusamus, labore assumenda provident velit error accusantium ad pariatur optio? Recusandae, eaque reprehenderit.',
	},
	{
		milestone: 'engagement' as const,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut voluptatem laborum, iusto esse exercitationem doloremque veritatis voluptates consectetur incidunt enim eius deserunt nostrum veniam aspernatur aliquid consequuntur nesciunt amet eaque est, ut molestias! Vero unde, officiis accusamus, labore assumenda provident velit error accusantium ad pariatur optio? Recusandae, eaque reprehenderit.',
	},
	{
		milestone: 'marriage' as const,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut voluptatem laborum, iusto esse exercitationem doloremque veritatis voluptates consectetur incidunt enim eius deserunt nostrum veniam aspernatur aliquid consequuntur nesciunt amet eaque est, ut molestias! Vero unde, officiis accusamus, labore assumenda provident velit error accusantium ad pariatur optio? Recusandae, eaque reprehenderit.',
	},
];

export function SubscriptionTimeline() {
	return (
		<Timeline>
			{milestones.map(milestone => {
				return (
					<SubscriptionTimelineItem
						key={milestone.milestone}
						title={milestone.milestone.split('-').join(' ')}
						text={milestone.text}
						tooltipContent="conteudo aquiuifudifueidui"
						Icon={milestoneToIcon[milestone.milestone]}
					/>
				);
			})}
		</Timeline>
	);
}
