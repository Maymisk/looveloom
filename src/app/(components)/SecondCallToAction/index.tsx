import Image from 'next/image';
import Link from 'next/link';
import { LandingPageLink } from '../Link';

export function LandingPageSecondCallToAction() {
	return (
		<section className="w-full max-w-5xl flex max-xl:flex-col items-center justify-between gap-4 mx-auto rounded-md bg-red-500 p-8 mt-16">
			<div className="h-full flex flex-col max-xl:items-center gap-4">
				<h2 className="text-2xl font-bold">
					Create a unique surprise for your partner in under 5 minutes
				</h2>

				<p className="font-light">It’s really that quick!</p>

				<LandingPageLink
					className="w-full border-white mt-auto"
					href="/subscribe"
				>
					Get my website
				</LandingPageLink>
			</div>

			<Image
				src="https://github.com/maymisk.png"
				alt="Alternative image"
				width={300}
				height={300}
				className="max-xl:hidden shadow-lg shadow-red-800 rounded-md"
			/>
		</section>
	);
}
