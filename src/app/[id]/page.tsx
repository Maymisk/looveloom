import moment from 'moment';
import { SubscriptionPhotoMarquee } from './(components)/photo-marquee';
import { SubscriptionTimeline } from './(components)/timeilne';
import { SubscriptionTimer } from './(components)/timer';
import Image from 'next/image';

interface ISubscriptionProps {
	params: {
		id: string;
	};
}

export default function Subscription({ params: { id } }: ISubscriptionProps) {
	return (
		<main className="w-full h-fit pt-4">
			<h1 className="mb-10 text-center font-bold text-red-300 text-4xl">
				Romeo and Juliet
			</h1>

			<SubscriptionTimer
				startDate={moment(new Date())
					.subtract(3, 'years')
					.subtract(4, 'days')
					.subtract(5, 'hours')
					.subtract(3, 'minutes')
					.toString()}
			/>

			<SubscriptionPhotoMarquee />

			<div className="flex flex-col gap-32 w-full px-2">
				<p className="text-sm text-center font-semibold text-white mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aspernatur itaque incidunt recusandae, asperiores est
					accusamus rem reprehenderit perspiciatis, consectetur
					dignissimos eaque, quibusdam perferendis cupiditate possimus
					debitis non accusantium! Accusantium rem nihil dolorem,
					neque inventore similique quas, ex quisquam nesciunt quae ab
					repellat perspiciatis enim maiores, asperiores atque
					perferendis magnam beatae!
				</p>

				<div className="relative w-full">
					<Image
						className="absolute -top-16 left-8 -rotate-45"
						src="/cupid.png"
						alt="Cupid image"
						width={75}
						height={75}
					/>

					<SubscriptionTimeline />
				</div>
			</div>
		</main>
	);
}
