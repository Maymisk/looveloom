import { BlurFade } from '@/shared/components/blur-fade';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import { EmailDialog } from '../EmailDialog';
import { LandingPageCreateCheckoutButton } from '../CreateCheckoutButton';

export function LandingPageSecondCallToAction() {
	return (
		<section className="mx-auto p-8 mt-24 ">
			<BlurFade
				className="relative w-full max-w-5xl flex max-xl:flex-col items-center justify-between gap-9"
				delay={0.4}
				inView
			>
				<Image
					src="/love_arrow.png"
					alt="Love arrow image"
					className="absolute -top-14 -left-10 -rotate-[20deg]"
					width={100}
					height={100}
				/>

				<Image
					src="/love_potion.png"
					alt="Love potion image"
					className="absolute -top-[3.75rem] -right-6 rotate-[-45deg]"
					width={70}
					height={70}
				/>

				<h2 className="text-2xl font-bold text-center">
					Tell your story, get your QR code, share
				</h2>

				<p className="text-center font-light">
					Create a timeless surprise for your partner in under 5
					minutes - it’s really that quick!
				</p>

				<LandingPageCreateCheckoutButton plan="loveful">
					<HeartIcon className="fill-white" />
					Get my nome
				</LandingPageCreateCheckoutButton>
			</BlurFade>
		</section>
	);
}
