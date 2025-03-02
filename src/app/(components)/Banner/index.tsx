import { Couple } from '@/app/api/schemas/couple';
import { BlurFade } from '@/shared/components/blur-fade';
import NumberTicker from '@/shared/components/number-ticker';
import { Stars } from '@/shared/components/stars';
import { GiftIcon } from 'lucide-react';
import { unstable_cache } from 'next/cache';
import Link from 'next/link';

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

export async function LandingPageBanner() {
	const totalCustomers = await getTotalCustomers();
	const customersGoal = getNearestDivisibleBy10(totalCustomers);

	return (
		<section className="flex flex-col items-center justify-center gap-9 text-gray700 p-8 max-xl:p-2">
			<div className="flex flex-col items-center mx-auto gap-8 xl:gap-16">
				<BlurFade delay={0.3}>
					<h2 className="w-full text-8xl max-xl:text-6xl max-2xl:text-7xl leading-5 text-center 2xl:text-start drop-shadow-md 2xl:mb-12">
						<span className="max-2xl:block bg-clip-text text-transparent font-bold bg-gradient-to-b from-red-400 to-red-300 2xl:mb-14 pb-3">
							Few clicks, eternal gift
						</span>
					</h2>
				</BlurFade>

				<BlurFade
					className="flex flex-col items-center gap-8"
					delay={0.5}
				>
					<p className="w-full xl:max-w-[75%] text-center font-light italic text-2xl max-xl:text-base">
						Create an exclusive website with a counter of your time
						together. Share it with your love and create{' '}
						<span className="text-red-300 font-medium">
							an unforgettable surprise gift.
						</span>{' '}
						Just point to the QRCode 💖
					</p>

					<div className="w-full flex flex-col items-center gap-5">
						<Link
							href="/subscribe"
							className="w-full xl:min-h-14 text-center text-xl rounded-md font-bold border-none px-6 py-5 transition-all text-white bg-red-200 shadow-glow shadow-red-200/80 hover:bg-red-400' lg:max-w-[33%]"
						>
							Design your page for free
						</Link>

						<div className="flex items-center gap-3 text-sm font-poppins font-light">
							<GiftIcon className="animate-pulse text-green-500 " />
							<span>
								<span className="font-medium text-green-500">
									50% off
								</span>{' '}
								for the next 30 customers (
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
