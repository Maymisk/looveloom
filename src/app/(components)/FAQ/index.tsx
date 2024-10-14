import { MailIcon, MessageCircleIcon } from 'lucide-react';
import { LandingPageLink } from '../Link';
import { LandingPageAccordion } from './Accordion';
export function LandingPageFrequentlyAskedQuestions() {
	return (
		<section className="flex flex-col items-center gap-12 max-xl:gap-4 mt-24 max-xl:px-2">
			<h2 className="text-5xl max-xl:text-3xl text-gray700 font-bold font-inria-serif text-center">
				Frequently asked questions
			</h2>

			<LandingPageAccordion />

			<h4 className="text-3xl font-inria-serif mt-12">
				Still have questions?
			</h4>

			<span className="text-xl font-inria-serif font-light text-brown500">
				Talk to us, cost free.
			</span>

			<LandingPageLink
				href="mailto:khalilbohner@gmail.com"
				className="w-40 flex justify-center"
			>
				<MailIcon />
			</LandingPageLink>
		</section>
	);
}
