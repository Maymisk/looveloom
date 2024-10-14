import { CarouselItem } from '@/shared/components/carousel';
import { cn } from '@/lib/utils';
import { InstagramIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ILandingPageTestimonialCard {
	name: string;
	instagram: string;
	profile: string;
	screenshot: string;
	screenshotClassname?: string;
}

export function LandingPageTestimonialsCard({
	name,
	instagram,
	profile,
	screenshot,
	screenshotClassname,
}: ILandingPageTestimonialCard) {
	return (
		<CarouselItem className="basis-1/2 max-xl:basis-full max-w-96 w-full flex flex-col items-center justify-center gap-6 px-6 py-3 shadow-md shadow-white300">
			<Image
				src={screenshot}
				alt="Screenshot of the testimonial"
				width={450}
				height={450}
				className={cn(
					'w-[450px] h-[450px] object-cover object-[0px_0px] rounded-md shadow-lg shadow-white300',
					screenshotClassname
				)}
			/>

			<div className="flex items-center gap-4 self-start">
				<Image
					src={profile}
					alt="Client profile picture"
					width={75}
					height={75}
					className="rounded-full"
				/>

				<div className="flex flex-col items-start justify-start gap-4">
					<h4 className="text-xl text-gray700 font-bold font-inria-serif">
						{name}
					</h4>

					<Link
						href={instagram}
						target="_blank"
						className="flex items-center gap-3 font-inria-serif font-light hover:text-brown500 transition-all"
					>
						<InstagramIcon width={20} height={20} /> Instagram
					</Link>
				</div>
			</div>
		</CarouselItem>
	);
}
