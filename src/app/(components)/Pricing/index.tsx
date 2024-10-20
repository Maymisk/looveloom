import { ShinyText } from '@/shared/components/shiny-text';
import { ShinyBorder } from '@/shared/components/shine-border';
import { Check, X } from 'lucide-react';
import { PricingCard } from './card';

export function LandingPagePricing() {
	return (
		<section className="flex max-xl:flex-col items-center justify-center gap-6 max-xl:gap-12">
			<PricingCard
				title="Standard"
				price={7}
				oldPrice={12}
				className="shadow-xl shadow-gray-800"
			>
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

			<ShinyBorder
				className="w-full max-w-[400px] flex flex-col justify-center text-white rounded-lg shadow-lg shadow-gray-800"
				color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
			>
				<ShinyText
					className="w-max absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full text-white font-bold uppercase bg-gray-500 shadow-md shadow-gray-800"
					backgroundColor="#282424"
				>
					<ShinyBorder
						className="bg-transparent text-white px-8 py-3"
						borderRadius={9999}
						color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
					>
						Best deal - 50% off
					</ShinyBorder>
				</ShinyText>

				<PricingCard title="Premium" oldPrice={20} price={10}>
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
			</ShinyBorder>
		</section>
	);
}
