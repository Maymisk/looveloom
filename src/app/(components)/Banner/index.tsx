import { BlurFade } from '@/shared/components/blur-fade';
import NumberTicker from '@/shared/components/number-ticker';
import { Stars } from '@/shared/components/stars';
import { GiftIcon } from 'lucide-react';
import { LandingPageCreateCheckoutButton } from '../CreateCheckoutButton';
import { unstable_cache } from 'next/cache';
import { Couple } from '@/app/api/schemas/couple';

const getTotalCustomers = unstable_cache(
	async () => {
		return await Couple.countDocuments();
	},
	['getTotalCustomers'],
	{ revalidate: 60 * 60 * 4 }
);

function getNearestDivisibleBy10(number: number) {
	return Math.ceil((number + 15) / 10) * 10;
}

export async function LandingPageBanner() {
	const totalCustomers = await getTotalCustomers();
	const customersGoal = getNearestDivisibleBy10(totalCustomers);

	return (
		<section className="flex flex-col items-center justify-center gap-9 text-gray700 p-8 max-xl:p-2">
			<div className="flex flex-col items-center mx-auto gap-8 xl:gap-16">
				<BlurFade delay={0.3}>
					<h2 className="w-full text-8xl max-xl:text-5xl max-2xl:text-7xl leading-5 text-center 2xl:text-start drop-shadow-md 2xl:mb-12">
						<span className="max-2xl:block font-bold text-red-300 mb-1 2xl:mb-14">
							Eternalize
						</span>{' '}
						your love with{' '}
						<span className="2xl:block 2xl:text-center 2xl:mt-20 font-bold text-red-300">
							few clicks
						</span>
					</h2>
				</BlurFade>

				<BlurFade
					className="flex flex-col items-center gap-8"
					delay={0.5}
				>
					<p className="w-full xl:max-w-[75%] text-center font-light italic text-2xl max-xl:text-base">
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
								for the first {customersGoal} customers (
								{customersGoal - totalCustomers} left)
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
						value={totalCustomers}
						className="text-white font-bold"
					/>{' '}
					happy couples
				</span>
			</BlurFade>
		</section>
	);
}
