import Image from 'next/image';
import Link from 'next/link';
import { LandingPageLink } from '../Link';

export function LandingPageSecondCallToAction() {
	return (
		<section className="flex flex-col gap-4 rounded-md bg-sage-600 p-8 mt-16">
			<h2 className="text-2xl font-bold">
				Create a unique surprise for your partner in under 5 minutes
			</h2>

			<p className="font-light">It’s really that quick!</p>

			<LandingPageLink className="w-full border-white" href="/subscribe">
				Get my website
			</LandingPageLink>
		</section>
	);
}
