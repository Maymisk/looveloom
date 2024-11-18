import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/components/accordion';
import { ReactNode } from 'react';

interface ILandingPageFAQItemProps {
	value: string;
	question: string;
	answer: ReactNode;
}

export function LandingPageFAQItem({
	value,
	question,
	answer,
}: ILandingPageFAQItemProps) {
	return (
		<AccordionItem
			value={value}
			className="shadow-md shadow-gray-800 rounded-md px-4 py-2"
		>
			<AccordionTrigger className="text-left text-xl max-xl:text-base font-bold">
				{question}
			</AccordionTrigger>

			<AccordionContent className="text-sm font-light text-justify">
				{answer}
			</AccordionContent>
		</AccordionItem>
	);
}
