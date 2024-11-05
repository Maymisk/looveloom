import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CouplePictureMarquee } from './(components)/photo-marquee';
import { CoupleTimeline } from './(components)/timeline';
import { CoupleTimer } from './(components)/timer';
import { Milestone, MilestoneNameType } from '@/shared/@types/milestone';
import moment from 'moment';

interface ICoupleProps {
	params: {
		id: string;
	};
}

interface IFetchResponse {
	data: {
		_id: string;
		name: string;
		story: string;
		startDate: Date;
		pictures: string[];
		song?: string;
		milestones?: Milestone[];
	};
}

const mockCouple = {
	name: 'Romeo and Juliet',
	story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione aperiam a doloremque incidunt, vitae quia recusandae quibusdam molestiae modi quos, magnam itaque blanditiis accusamus neque temporibus. Iure molestiae id et nemo perferendis fuga, sint officiis voluptate. Aliquid aut velit culpa, excepturi maxime ullam animi alias. Architecto distinctio omnis eum?',
	startDate: moment().subtract(1, 'year').toDate(),
	pictures: [
		'https://github.com/maymisk.png',
		'https://github.com/maymisk.png',
		'https://github.com/maymisk.png',
		'https://github.com/maymisk.png',
		'https://github.com/maymisk.png',
		'https://github.com/maymisk.png',
		'https://github.com/maymisk.png',
	],
	song: 'https://www.youtube.com/watch?v=kPa7bsKwL-c&pp=ygUQZGllIHdpdGggYSBzbWlsZQ%3D%3D',
	milestones: [
		{
			name: 'first-sight' as MilestoneNameType,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, distinctio voluptatum ipsa dolorem et perspiciatis maxime non asperiores laboriosam pariatur saepe aliquid tempore animi quaerat ex facere voluptas debitis nesciunt laborum, veritatis, adipisci deserunt! Molestiae, dolores sint quod vitae excepturi distinctio quas? Distinctio labore eum ipsum obcaecati sequi nulla animi.',
			date: moment().subtract(2, 'year').toDate(),
		},
		{
			name: 'first-kiss' as MilestoneNameType,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, distinctio voluptatum ipsa dolorem et perspiciatis maxime non asperiores laboriosam pariatur saepe aliquid tempore animi quaerat ex facere voluptas debitis nesciunt laborum, veritatis, adipisci deserunt! Molestiae, dolores sint quod vitae excepturi distinctio quas? Distinctio labore eum ipsum obcaecati sequi nulla animi.',
			date: moment().subtract(2, 'year').toDate(),
		},
		{
			name: 'first-date' as MilestoneNameType,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, distinctio voluptatum ipsa dolorem et perspiciatis maxime non asperiores laboriosam pariatur saepe aliquid tempore animi quaerat ex facere voluptas debitis nesciunt laborum, veritatis, adipisci deserunt! Molestiae, dolores sint quod vitae excepturi distinctio quas? Distinctio labore eum ipsum obcaecati sequi nulla animi.',
			date: moment().subtract(2, 'year').toDate(),
		},
		{
			name: 'relationship' as MilestoneNameType,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, distinctio voluptatum ipsa dolorem et perspiciatis maxime non asperiores laboriosam pariatur saepe aliquid tempore animi quaerat ex facere voluptas debitis nesciunt laborum, veritatis, adipisci deserunt! Molestiae, dolores sint quod vitae excepturi distinctio quas? Distinctio labore eum ipsum obcaecati sequi nulla animi.',
			date: moment().subtract(2, 'year').toDate(),
		},
		{
			name: 'engagement' as MilestoneNameType,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, distinctio voluptatum ipsa dolorem et perspiciatis maxime non asperiores laboriosam pariatur saepe aliquid tempore animi quaerat ex facere voluptas debitis nesciunt laborum, veritatis, adipisci deserunt! Molestiae, dolores sint quod vitae excepturi distinctio quas? Distinctio labore eum ipsum obcaecati sequi nulla animi.',
			date: moment().subtract(2, 'year').toDate(),
		},
		{
			name: 'marriage' as MilestoneNameType,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, distinctio voluptatum ipsa dolorem et perspiciatis maxime non asperiores laboriosam pariatur saepe aliquid tempore animi quaerat ex facere voluptas debitis nesciunt laborum, veritatis, adipisci deserunt! Molestiae, dolores sint quod vitae excepturi distinctio quas? Distinctio labore eum ipsum obcaecati sequi nulla animi.',
			date: moment().subtract(2, 'year').toDate(),
		},
	],
};

export default async function Couple({ params: { id } }: ICoupleProps) {
	// const response = await fetch(`/api/couple/${id}`);
	// const { data } = ((await response.json()) || {}) as IFetchResponse;

	// if (!data?._id) notFound();

	const { name, story, startDate, pictures, milestones, song } = mockCouple;

	return (
		<main className="w-full h-fit pt-4">
			<h1 className="mb-10 text-center font-bold text-red-300 text-4xl">
				{name}
			</h1>

			<CoupleTimer startDate={new Date(startDate)} />

			<CouplePictureMarquee pictures={pictures} />

			<div className="flex flex-col gap-32 w-full px-2">
				<p className="text-sm text-center font-semibold text-white mt-2">
					{story}
				</p>

				{milestones && (
					<div className="relative w-full">
						<Image
							className="absolute -top-16 left-8 -rotate-45"
							src="/cupid.png"
							alt="Cupid image"
							width={75}
							height={75}
						/>

						<CoupleTimeline milestones={milestones} />
					</div>
				)}
			</div>

			{song && <audio src={song} className="sr-only" />}
		</main>
	);
}
