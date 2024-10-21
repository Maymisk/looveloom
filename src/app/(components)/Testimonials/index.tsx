import { Marquee } from '@/shared/components/marquee';
import { LandingPageTestimonialsMarqueeItem } from './marquee/item';

const reviews = [
	{
		name: 'Jack',
		username: '@jack',
		text: "I've never seen anything like this before. It's amazing. I love it.",
		image: 'https://avatar.vercel.sh/jack',
	},
	{
		name: 'Jill',
		username: '@jill',
		text: "I don't know what to say. I'm speechless. This is amazing.",
		image: 'https://avatar.vercel.sh/jill',
	},
	{
		name: 'John',
		username: '@john',
		text: "I'm at a loss for words. This is amazing. I love it.",
		image: 'https://avatar.vercel.sh/john',
	},
	{
		name: 'Jane',
		username: '@jane',
		text: "I'm at a loss for words. This is amazing. I love it.",
		image: 'https://avatar.vercel.sh/jane',
	},
	{
		name: 'Jenny',
		username: '@jenny',
		text: "I'm at a loss for words. This is amazing. I love it.",
		image: 'https://avatar.vercel.sh/jenny',
	},
	{
		name: 'James',
		username: '@james',
		text: "I'm at a loss for words. This is amazing. I love it.",
		image: 'https://avatar.vercel.sh/james',
	},
];

export function LandingPageTestimonials() {
	return (
		<section className="relative flex flex-col items-center gap-12 mt-24">
			<div className="flex flex-col items-center justify-center gap-4">
				<h5 className="text-red-400 font-semibold uppercase">
					Testimonials
				</h5>

				<h2 className="text-5xl max-xl:text-3xl text-gray700 font-bold font-inria-serif text-center">
					What the couples are saying
				</h2>
			</div>

			<div className="w-full flex flex-col items-center justify-center gap-4 overflow-hidden">
				<Marquee className="w-full" pauseOnHover>
					{reviews.map(review => {
						return (
							<LandingPageTestimonialsMarqueeItem
								key={review.username}
								{...review}
							/>
						);
					})}
				</Marquee>
				<Marquee className="w-full" pauseOnHover reverse>
					{reviews.map(review => {
						return (
							<LandingPageTestimonialsMarqueeItem
								key={review.username}
								{...review}
							/>
						);
					})}
				</Marquee>
			</div>

			<div className="pointer-events-none absolute top-20 bottom-0 -left-2 w-1/3 bg-gradient-to-r from-gray-500 dark:from-background"></div>
			<div className="pointer-events-none absolute top-20 bottom-0 -right-2 w-1/3 bg-gradient-to-l from-gray-500 dark:from-background"></div>
		</section>
	);
}
