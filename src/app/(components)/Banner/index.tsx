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
					<h2 className="w-full text-8xl max-xl:text-5xl max-2xl:text-7xl leading-5 text-center 2xl:text-start drop-shadow-md 2xl:mb-12">
						<span className="max-2xl:block bg-clip-text text-transparent font-bold bg-gradient-to-b from-[#E682AB] to-[#FF7696] 2xl:mb-14 pb-3">
							Surpreenda seu amor
						</span>
					</h2>
				</BlurFade>

				<BlurFade
					className="flex flex-col items-center gap-8"
					delay={0.5}
				>
					<p className="w-full xl:max-w-[75%] text-center font-light italic text-2xl max-xl:text-base">
						Crie um site exclusivo com um contador do seu tempo
						juntos. Compartilhe com seu amor e crie{' '}
						<span className="text-red-300 font-medium">
							um presente surpresa inesquecível.
						</span>{' '}
						É só apontar para o QRCode 💖
					</p>

					<div className="w-full flex flex-col items-center gap-5">
						<Link
							href="/subscribe"
							className="w-full xl:min-h-14 text-center text-xl rounded-md font-bold border-none px-6 py-5 transition-all capitalize text-white bg-red-200 shadow-glow shadow-red-200/80 hover:bg-red-400' lg:max-w-[33%]"
						>
							Quero criar meu site
						</Link>

						<div className="flex items-center gap-3 text-sm font-poppins font-light">
							<GiftIcon className="animate-pulse text-green-500 " />
							<span className="text-xs">
								<span className="font-medium text-green-500">
									50% off
								</span>{' '}
								para os próximos 30 clientes (faltam{' '}
								{customersGoal - totalCustomers})
							</span>
						</div>
					</div>
				</BlurFade>
			</div>

			<BlurFade className="flex flex-col items-center gap-1" delay={0.5}>
				<Stars className="gap-0" />

				<span className="text-base font-light">
					Mais de{' '}
					<NumberTicker
						value={totalCustomers}
						className="text-white font-bold"
					/>{' '}
					casais felizes
				</span>
			</BlurFade>
		</section>
	);
}
