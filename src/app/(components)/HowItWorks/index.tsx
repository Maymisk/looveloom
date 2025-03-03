import { BlurFade } from '@/shared/components/blur-fade';
import { ShinyBorder } from '@/shared/components/shine-border';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';

export function LandingPageHowItWorks() {
	return (
		<BlurFade delay={0.2} inView>
			<section className="flex flex-col items-center gap-8">
				<h5 className="text-sm text-red-400 font-semibold uppercase tracking-widest">
					How it works
				</h5>

				<div className="w-1/2 max-lg:w-full grid grid-cols-2 max-xl:grid-cols-1 gap-4">
					<BlurFade
						className="w-full max-md:max-w-[calc(100%-2rem)] mx-auto"
						delay={0.2}
						inView
					>
						<ShinyBorder
							className="w-full h-full text-white rounded-lg shadow-lg shadow-gray-800"
							color={['#F48FB1', '#F06292', '#E682AB']}
						>
							<div className="w-full h-full flex flex-col items-center gap-4 p-4 pb-0 bg-gradient-to-b from-gray-500 to-gray-600 rounded-lg">
								<h3 className="text-white text-center text-3xl font-bold capitalize">
									Customize your page
								</h3>

								<Image
									src="/form.png"
									alt="Form image"
									width={300}
									height={300}
								/>
							</div>
						</ShinyBorder>
					</BlurFade>

					<BlurFade
						className="w-full max-md:max-w-[calc(100%-2rem)] mx-auto"
						delay={0.2}
						inView
					>
						<ShinyBorder
							className="w-full h-full text-white rounded-lg shadow-lg shadow-gray-800"
							color={['#F48FB1', '#F06292', '#E682AB']}
						>
							<div className="w-full h-full flex flex-col items-center gap-4 p-4 bg-gradient-to-b from-gray-500 to-gray-600 rounded-lg">
								<h3 className="text-white text-center text-3xl font-bold capitalize">
									Make the payment
								</h3>

								<Image
									src="/coin.webp"
									alt="Coin image"
									width={100}
									height={100}
								/>
							</div>
						</ShinyBorder>
					</BlurFade>

					<BlurFade
						className="w-full max-md:max-w-[calc(100%-2rem)] mx-auto"
						delay={0.2}
						inView
					>
						<ShinyBorder
							className="w-full h-full text-white rounded-lg shadow-lg shadow-gray-800"
							color={['#F48FB1', '#F06292', '#E682AB']}
						>
							<div className="w-full h-full flex flex-col items-center gap-4 p-4 pb-0 bg-gradient-to-b from-gray-500 to-gray-600 rounded-lg">
								<h3 className="text-white text-center text-3xl font-bold capitalize">
									Receive your QRCode on Email
								</h3>

								<Image
									src="/email-phone.webp"
									alt="Email phone image"
									className="mt-6"
									width={300}
									height={300}
								/>
							</div>
						</ShinyBorder>
					</BlurFade>

					<BlurFade
						className="w-full max-md:max-w-[calc(100%-2rem)] mx-auto"
						delay={0.2}
						inView
					>
						<ShinyBorder
							className="w-full h-full text-white rounded-lg shadow-lg shadow-gray-800"
							color={['#F48FB1', '#F06292', '#E682AB']}
						>
							<div className="relative w-full h-full flex flex-col items-center gap-4 p-4 bg-gradient-to-b from-gray-500 to-gray-600 rounded-lg">
								<h3 className="text-white text-center text-3xl font-bold capitalize">
									Surprise your love
								</h3>

								<div className="relative border border-red-300 rounded-lg">
									<Image
										src="/looveloom.png"
										alt="Looveloom page image"
										className="rounded-lg"
										width={150}
										height={150}
									/>

									<HeartIcon className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 size-10 rotate-12 text-red-300 fill-red-300" />

									<Image
										src="/love_potion.png"
										alt="Love potion"
										className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/2 -rotate-[40deg]"
										width={70}
										height={70}
									/>
								</div>
							</div>
						</ShinyBorder>
					</BlurFade>
				</div>
			</section>
		</BlurFade>
	);
}
