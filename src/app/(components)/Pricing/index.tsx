import { Check, X } from 'lucide-react';
import { PricingCard } from './card';

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

			<div className="relative w-full max-w-[400px] shadow-md shadow-gray-800">
				<div className="w-max absolute -top-3 left-1/2 -translate-x-1/2 text-xl text-center font-bold capitalize bg-red-500 rounded-full px-4 ">
					Most popular deal
				</div>

				<div className=" flex flex-col justify-center p-[1px] bg-default-gradient rounded-lg">
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
				</div>
			</div>
		</section>
	);
}
