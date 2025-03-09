import { CouplePictureMarquee } from '@/app/couple/[id]/(components)/photo-marquee';
import { CoupleTimeline } from '@/app/couple/[id]/(components)/timeline';
import { CoupleTimer } from '@/app/couple/[id]/(components)/timer';
import { Milestone } from '@/shared/@types/milestone';
import Image from 'next/image';
import { CouplePictureMarqueeSkeleton } from './couple-picture-marquee-skeleton';
import { memo, useMemo } from 'react';

interface ISubscribePageCouplePreviewProps {
	plan: 'standard' | 'loveful';
	name?: string;
	story?: string;
	startDate?: string;
	milestones?: Milestone[];
	pictures?: FileList;
}

const MemoizedCoupleTimer = memo(
	({ startDate }: { startDate: Date }) => {
		return <CoupleTimer startDate={startDate} />;
	},
	(prev, next) => prev.startDate.getTime() === next.startDate.getTime()
);
MemoizedCoupleTimer.displayName = 'MemoizedCoupleTimer';

const MemoizedCouplePictureMarquee = memo(
	({ pictures }: { pictures: string[] }) => {
		return (
			<CouplePictureMarquee
				className="from-gray-800"
				pictures={pictures}
			/>
		);
	},
	(prev, next) =>
		prev.pictures.every(picture =>
			next.pictures.some(nextPicture => picture === nextPicture)
		)
);
MemoizedCouplePictureMarquee.displayName = 'MemoizedCouplePictureMarquee';

export function SubscribePageCouplePreview({
	plan,
	name,
	story,
	startDate,
	pictures,
	milestones,
}: ISubscribePageCouplePreviewProps) {
	const planIsLoveful = plan === 'loveful';

	const picturePreviews = useMemo(
		() =>
			pictures
				? Array.from(pictures).map(picture =>
						URL.createObjectURL(picture)
				  )
				: undefined,
		[pictures]
	);

	const date = useMemo(
		() => (startDate ? new Date(startDate) : new Date()),
		[startDate]
	);

	return (
		<main className="w-full max-w-[450px] h-fit py-8 bg-gray-800 rounded-md">
			<span className="w-full block mx-auto mb-12 text-white font-bold text-sm text-center">
				Como seu site vai ficar 👇
			</span>

			<h1 className="mb-10 text-center font-bold text-red-300 text-4xl xl:text-6xl">
				{name || 'Casal'}
			</h1>

			<MemoizedCoupleTimer startDate={date} />

			{picturePreviews?.length ? (
				<MemoizedCouplePictureMarquee pictures={picturePreviews} />
			) : (
				<CouplePictureMarqueeSkeleton />
			)}

			<div className="flex flex-col gap-32 w-full px-2 mt-16">
				<p className="text-lg text-center font-semibold text-white break-words xl:mx-auto">
					{story || 'Sua história aqui'}
				</p>

				{!!milestones?.length && planIsLoveful && (
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
		</main>
	);
}
