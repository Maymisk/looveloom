import Link from 'next/link';
import { LandingPageAccordion } from './Accordion';

export function LandingPageFrequentlyAskedQuestions() {
	return (
		<section className="flex flex-col items-center gap-12 max-xl:gap-4 mt-24 max-xl:px-2">
			<h5 className="text-red-400 font-semibold uppercase">FAQ</h5>

			<h2 className="text-5xl max-xl:text-3xl text-gray700 font-bold font-inria-serif text-center">
				Perguntas frequentes
			</h2>

			<LandingPageAccordion />

			<span className="text-center text-sm font-light mt-2">
				Ainda tem perguntas? Contate-nos via{' '}
				<Link
					className="inline underline"
					href="mailto:support@looveloom.com"
					target="_blank"
				>
					nosso email
				</Link>
			</span>
		</section>
	);
}
