import { Stars } from '@/shared/components/stars';
import { LandingPageLink } from '../Link';
import { BlurFade } from '@/shared/components/blur-fade';
import { GiftIcon } from 'lucide-react';
import NumberTicker from '@/shared/components/number-ticker';

export function LandingPageBanner() {
	return (
		<section className="flex max-md:flex-col items-center justify-center gap-9 text-gray700 p-8 max-xl:p-2">
			<div className="flex flex-col gap-8">
				<BlurFade delay={0.3}>
					<h2 className="w-full text-7xl max-xl:text-5xl leading-5 text-center drop-shadow-md">
						<span className="font-bold text-red-300">
							Eternalize
						</span>{' '}
						your love with{' '}
						<span className="font-bold text-red-300">
							few clicks
						</span>
					</h2>
				</BlurFade>

				<BlurFade
					className="flex flex-col items-center gap-8"
					delay={0.5}
				>
					<p className="w-full text-gray700 text-center font-light italic text-lg max-xl:text-base">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Molestias aliquam facere quam in quae aperiam
						voluptatum, ipsam iste cupiditate! Voluptatem,
						cupiditate! Ullam aliquid dolore quas tempore obcaecati
						eveniet dolores laborum.
					</p>

					<div className="w-full flex flex-col items-center gap-5">
						<LandingPageLink
							className="w-full max-w-[65%]"
							href="/subscribe"
							variant="filled"
						>
							Get Nome
						</LandingPageLink>

						<div className="flex items-center gap-3 text-sm font-poppins font-light">
							<GiftIcon className="animate-pulse text-green-500 " />
							<span>
								<span className="font-medium text-green-500">
									50% off
								</span>{' '}
								for the first 20 customers (6 left)
							</span>
						</div>
					</div>
				</BlurFade>
			</div>

			<BlurFade className="flex flex-col items-center gap-1" delay={0.5}>
				<Stars className="gap-0" />

				<span className="text-base font-light">
					More than{' '}
					<NumberTicker
						value={10000}
						className="text-white font-bold"
					/>{' '}
					happy couples
				</span>
			</BlurFade>
		</section>
	);
}
