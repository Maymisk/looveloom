import { Stars } from '@/shared/components/stars';
import { LandingPageLink } from '../Link';
import { BlurFade } from '@/shared/components/blur-fade';

export function LandingPageBanner() {
	return (
		<section className="flex max-md:flex-col items-center justify-center gap-4 text-gray700 p-8 max-xl:p-2">
			<div className="flex flex-col gap-3">
				<BlurFade delay={0.3}>
					<h2 className="w-full text-7xl max-xl:text-5xl text-center drop-shadow-md">
						<span className="font-bold text-red-300">
							Eternalize
						</span>{' '}
						your love with{' '}
						<span className="font-bold text-red-300">
							few clicks
						</span>
					</h2>
				</BlurFade>

				<BlurFade className="flex flex-col gap-4" delay={0.5}>
					<p className="w-full text-gray700 text-center font-light italic text-lg max-xl:text-base">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Molestias aliquam facere quam in quae aperiam
						voluptatum, ipsam iste cupiditate! Voluptatem,
						cupiditate! Ullam aliquid dolore quas tempore obcaecati
						eveniet dolores laborum.
					</p>

					<p className="w-full text-gray700 text-center font-light italic text-lg max-xl:text-base">
						Create a personalized website and QR code to share your
						love story with the world and surprise your special
						someone in a unique way!
					</p>
				</BlurFade>
			</div>

			<BlurFade delay={0.5}>
				<div className="h-64 flex items-center shadow-md shadow-sage-500 rounded-md">
					cardzinho do bagulhgo aqui
				</div>

				<div className="flex items-center gap-3 mt-5">
					<span className="text-xs text-playfair font-bold">
						More than 10000 happy couples
					</span>

					<Stars
						className="gap-0"
						iconClassName="w-4 h-4 fill-ivory-400 hover:fill-ivory-300"
					/>
				</div>
			</BlurFade>
		</section>
	);
}
