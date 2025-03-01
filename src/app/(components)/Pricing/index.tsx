import { Couple } from '@/app/api/schemas/couple';
import { BlurFade } from '@/shared/components/blur-fade';
import { ShinyBorder } from '@/shared/components/shine-border';
import { ShinyText } from '@/shared/components/shiny-text';
import { Check, GiftIcon, X } from 'lucide-react';
import { unstable_cache } from 'next/cache';
import { PricingCard } from './card';

const FAKE_CUSTOMER_AMOUNT = 1202;

const getTotalCustomers = unstable_cache(
	async () => {
		const totalCouples = await Couple.countDocuments();
		return totalCouples + FAKE_CUSTOMER_AMOUNT;
	},
	['getTotalCustomers'],
	{ revalidate: 60 * 60 * 4 }
);

function getNearestDivisibleBy10(number: number) {
	return Math.ceil((number + 15) / 10) * 10;
}

export async function LandingPagePricing() {
	const totalCustomers = await getTotalCustomers();
	const customersGoal = getNearestDivisibleBy10(totalCustomers);

	return (
		<section className="flex flex-col items-center justify-center gap-6 max-xl:gap-12 mt-24">
			<BlurFade delay={0.3}>
				<div className="flex flex-col items-center gap-6">
					<h5 className="font-poppins text-sm text-red-400 font-semibold uppercase">
						Pricing
					</h5>

					<p className="max-w-[90%] font-semibold text-3xl text-center mb-4">
						Surprise your love with your custom page!
					</p>

					<div className="flex items-center gap-3 text-sm font-poppins font-light">
						<GiftIcon className="animate-pulse text-green-500 " />
						<span>
							<span className="font-medium text-green-500">
								50% off
							</span>{' '}
							for the first 30 customers (
							{customersGoal - totalCustomers} left)
						</span>
					</div>
				</div>
			</BlurFade>

			<div className="w-full flex max-xl:flex-col items-center justify-center gap-12">
				<BlurFade className="w-full max-w-[400px]" inView delay={0.4}>
					<PricingCard
						title="Starter"
						price={5}
						oldPrice={10}
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
				</BlurFade>

				<BlurFade className="w-full max-w-[400px]" delay={0.5} inView>
					<ShinyBorder
						className="w-full	 text-white rounded-lg shadow-lg shadow-gray-800"
						color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
					>
						<ShinyText
							className="w-max absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full text-white font-bold uppercase bg-gray-500 shadow-md shadow-gray-800"
							backgroundColor="#282424"
						>
							<ShinyBorder
								className="text-sm text-white bg-transparent px-4 py-3"
								borderRadius={9999}
								color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
							>
								Popular
							</ShinyBorder>
						</ShinyText>

						<PricingCard title="Loveful" oldPrice={14} price={7}>
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
				</BlurFade>
			</div>
		</section>
	);
}
