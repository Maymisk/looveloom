'use client';

import { Marquee } from '@/shared/components/marquee';
import Image from 'next/image';

interface ICouplePictureMarqueeProps {
	pictures: string[];
}

export function CouplePictureMarquee({ pictures }: ICouplePictureMarqueeProps) {
	return (
		<div className="relative overflow-hidden mt-10">
			<Marquee duration={100} pauseOnHover repeat={10}>
				{pictures.map((picture, i) => {
					return (
						<Image
							key={i}
							className="object-cover rounded-md shadow-md shadow-gray-800"
							src={picture}
							alt={`Couple picture number ${i}`}
							width={300}
							height={300}
						/>
					);
				})}
			</Marquee>

			<div className="pointer-events-none absolute top-0 bottom-0 -left-4 w-1/3 bg-gradient-to-r from-gray-500 dark:from-background" />
			<div className="pointer-events-none absolute top-0 bottom-0 -right-4 w-1/3 bg-gradient-to-l from-gray-500 dark:from-background" />
		</div>
	);
}
