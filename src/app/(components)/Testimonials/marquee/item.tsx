import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ILandingPageTestimonialsMarqueeItemProps {
	name: string;
	username?: string;
	text: string;
	image: string;
}

export function LandingPageTestimonialsMarqueeItem({
	name,
	username,
	text,
	image,
}: ILandingPageTestimonialsMarqueeItemProps) {
	return (
		<figure
			className={cn(
				'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',

				'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<Image
					src={image}
					alt=""
					className="w-8 h-8 rounded-full"
					width={32}
					height={32}
				/>

				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>

					{username && (
						<p className="text-xs font-medium dark:text-white/40">
							{username}
						</p>
					)}
				</div>
			</div>

			<blockquote className="mt-2 text-sm">{text}</blockquote>
		</figure>
	);
}
