import { Check, X } from 'lucide-react';
import { PricingCard } from './card';
import { ShineBorder } from '@/shared/components/shine-border';

export function LandingPagePricing() {
	return (
		<section className="flex max-xl:flex-col items-center justify-center gap-6 max-xl:gap-12">
			<PricingCard title="Standard" price={5} oldPrice={7}>
				<ul className="flex flex-col gap-3">
					<li className="flex gap-2 items-center">
						<Check className="text-green-700 w-5 h-5 mb-1" />
						<span>1 year acess</span>
					</li>

					<li className="flex gap-2 items-center">
						<Check className="text-green-700 w-5 h-5 mb-1" />
						<span>3 pictures</span>
					</li>

					<li className="flex gap-2 items-center">
						<X className="text-red-700 w-5 h-5 mb-1" />
						<span>With music</span>
					</li>

					<li className="flex gap-2 items-center">
						<X className="text-red-700 w-5 h-5 mb-1" />
						<span>Relationship milestones</span>
					</li>
				</ul>
			</PricingCard>

			<div className="relative w-full max-w-[400px]">
				<div className="w-max absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xl text-center font-bold capitalize bg-red-300 rounded-full">
					Best deal
				</div>

				<ShineBorder
					className="relative -z-10 w-full flex flex-col justify-center text-white p-[1px] bg-default-gradient rounded-lg"
					color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
				>
					<PricingCard title="Premium" oldPrice={15} price={10}>
						<ul className="flex flex-col gap-3">
							<li className="flex gap-2 items-center">
								<Check className="text-green-700 w-5 h-5 mb-1" />
								<span>Lifetime access</span>
							</li>

							<li className="flex gap-2 items-center">
								<Check className="text-green-700 w-5 h-5 mb-1" />
								<span>7 pictures</span>
							</li>

							<li className="flex gap-2 items-center">
								<Check className="text-green-700 w-5 h-5 mb-1" />
								<span>With music</span>
							</li>

							<li className="flex gap-2 items-center">
								<Check className="text-green-700 w-5 h-5 mb-1" />
								<span>Relationship milestones</span>
							</li>
						</ul>
					</PricingCard>
				</ShineBorder>
			</div>
		</section>
	);
}
