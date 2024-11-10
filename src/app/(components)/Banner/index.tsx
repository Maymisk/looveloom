import { BlurFade } from '@/shared/components/blur-fade';
import NumberTicker from '@/shared/components/number-ticker';
import { Stars } from '@/shared/components/stars';
import { GiftIcon } from 'lucide-react';
import { EmailDialog } from '../EmailDialog';
import { LandingPageCreateCheckoutButton } from '../CreateCheckoutButton';

export function LandingPageBanner() {
	return (
		<section className="flex max-md:flex-col items-center justify-center gap-9 text-gray700 p-8 max-xl:p-2">
			<div className="flex flex-col gap-8">
				<BlurFade delay={0.3}>
					<h2 className="w-full text-7xl max-xl:text-5xl leading-5 text-center drop-shadow-md">
						<span className="block font-bold text-red-300 mb-1">
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
						Create a timeless digital memory to capture your
						relationship and surprise your love with your own custom
						page and QR Code!
					</p>

					<div className="w-full flex flex-col items-center gap-5">
						<LandingPageCreateCheckoutButton>
							Get Loveloom
						</LandingPageCreateCheckoutButton>

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
