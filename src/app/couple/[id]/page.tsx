import { Milestone } from '@/shared/@types/milestone';
import { BlurFade } from '@/shared/components/blur-fade';
import { isValidObjectId } from 'mongoose';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Couple } from '../../api/schemas/couple';
import { CouplePictureMarquee } from './(components)/photo-marquee';
import { Song } from './(components)/song';
import { CoupleTimeline } from './(components)/timeline';
import { CoupleTimer } from './(components)/timer';

interface ICoupleProps {
	params: {
		id: string;
	};
}

interface ICouple {
	_id: string;
	name: string;
	story: string;
	startDate: Date;
	pictures: string[];
	song?: string;
	milestones?: Milestone[];
}

export default async function CouplePage({ params: { id } }: ICoupleProps) {
	if (!isValidObjectId(id)) notFound();

	const couple = (await Couple.findOne({ _id: id })) as ICouple | null;

	if (!couple?._id) notFound();

	const { name, story, startDate, pictures, milestones, song } = couple;

	return (
		<main className="w-full h-fit pt-4">
			<h1 className="mb-10 text-center font-bold text-red-300 text-4xl">
				{name}
			</h1>

			<BlurFade delay={0.5}>
				<CoupleTimer startDate={new Date(startDate)} />
			</BlurFade>

			<CouplePictureMarquee pictures={pictures} />

			<div className="flex flex-col gap-32 w-full px-2 mt-16">
				<p className="xl:max-w-[50%] text-lg text-center font-semibold text-white xl:mx-auto">
					{story}
				</p>

				{milestones?.length && (
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

			{song && <Song link={song} />}
		</main>
	);
}
