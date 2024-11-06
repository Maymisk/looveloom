import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { ThankYouConfetti } from './components/confetti';
import stripe from '@/lib/stripe';
import { redirect } from 'next/navigation';
import Stripe from 'stripe';

interface IThankYouProps {
	searchParams: Promise<{ sessionId: string | undefined }>;
}

export default async function ThankYou({ searchParams }: IThankYouProps) {
	const { sessionId } = await searchParams;

	if (!sessionId) redirect('/');

	let customer;

	try {
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		customer = (await stripe.customers.retrieve(
			session.customer as string
		)) as Stripe.Customer;

		if (!customer?.name) redirect('/');
	} catch {
		redirect('/');
	}

	return (
		<>
			<main className="w-full flex flex-col items-center justify-center gap-10 pt-8 px-2">
				<h1 className="font-bold text-3xl text-center">
					<span className="text-red-300">Thank you</span> for your
					purchase, {customer.name}!
				</h1>

				<div className="text-center font-light">
					Set up your Looveloom page through the link sent to your
					email and{' '}
					<span className="text-red-300 font-semibold">
						share your love story
					</span>{' '}
					with the world!
				</div>

				<div className="relative flex flex-col items-center justify-center gap-4">
					<Image
						src="/love_arrow.png"
						alt="Love arrow image"
						className="absolute -top-4 -left-28 -rotate-[12deg]"
						width={100}
						height={100}
					/>
					<Image
						src="/love_potion.png"
						alt="Love potion image"
						className="absolute -top-6 -right-24 rotate-[-45deg]"
						width={70}
						height={70}
					/>
					<span className="font-bold">Share on your socials</span>
					<div className="flex items-center gap-4 mx-auto">
						<Link
							href={'https://www.instagram.com/'}
							target="_blank"
							className="flex items-center gap-4 max-xl:gap-2 text-xl max-xl:text-base uppercase"
						>
							<FontAwesomeIcon
								className="w-8 h-8 text-red-200"
								icon={faInstagram}
							/>
						</Link>

						<Link
							href={'https://www.tiktok.com/'}
							target="_blank"
							className="flex items-center gap-4 max-xl:gap-2 text-xl max-xl:text-base uppercase"
						>
							<FontAwesomeIcon
								className="w-8 h-8 text-red-200"
								icon={faTiktok}
							/>
						</Link>
					</div>
				</div>

				<span className="text-xs text-center">
					Got any doubts? Contact us at{' '}
					<a
						className="font-light underline"
						href="mailto:support@looveloom.com"
					>
						support@looveloom.com
					</a>
				</span>
			</main>
			<ThankYouConfetti />
		</>
	);
}
