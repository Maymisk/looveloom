'use client';

import { Marquee } from '@/shared/components/marquee';
import Image from 'next/image';

const photos = [
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
	{
		src: 'https://github.com/maymisk.png',
		alt: 'message',
		width: 300,
		height: 300,
	},
];

export function SubscriptionPhotoMarquee() {
	return (
		<div className="relative overflow-hidden mt-10">
			<Marquee duration={100} pauseOnHover>
				{photos.map((photo, i) => {
					return (
						<Image
							key={i}
							className="object-fit rounded-md shadow-md shadow-gray-800"
							{...photo}
						/>
					);
				})}
			</Marquee>

			<div className="pointer-events-none absolute top-0 bottom-0 -left-4 w-1/3 bg-gradient-to-r from-gray-500 dark:from-background" />
			<div className="pointer-events-none absolute top-0 bottom-0 -right-4 w-1/3 bg-gradient-to-l from-gray-500 dark:from-background" />
		</div>
	);
}
