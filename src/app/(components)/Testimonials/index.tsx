import { Marquee } from '@/shared/components/marquee';
import { LandingPageTestimonialsMarqueeItem } from './marquee/item';

const reviews = [
	{
		name: 'David',
		username: '@dv_stella',
		text: "Quick and simple. Definitely worth the 5 minutes for my girlfriend's happiness",
		image: '/testimonials/david.jpg',
	},
	{
		name: 'Clara',
		username: '@clara_rachellib',
		text: "My boyfriend showed up with a random QRCode, and I didn't think I'd appreciate it this much",
		image: '/testimonials/clara.jpg',
	},
	{
		name: 'Gustavo',
		username: '@guzta_c',
		text: 'This was the perfect gift for our anniversary. I could tell every detail of how much I love my girlfriend.',
		image: '/testimonials/gustavo.jpg',
	},
	{
		name: 'William',
		username: '@g.reche_774',
		text: 'My girlfriend loved this so much!!! Very much worth the price for such a quick and emotional surprise',
		image: '/testimonials/guilherme.jpg',
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
