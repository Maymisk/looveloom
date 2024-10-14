import { Accordion } from '@/shared/components/accordion';
import { LandingPageFAQItem } from './Item';

export function LandingPageAccordion() {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-2/3 max-xl:w-full flex flex-col gap-4"
		>
			<LandingPageFAQItem
				value="item-1"
				question="What is Nome?"
				answer={
					'Nome is a platform where couples can create personalized relationship pages. You can include photos, a heartfelt message, and a timer that tracks how long you’ve been together, making it a unique way to celebrate your love.'
				}
			/>
			<LandingPageFAQItem
				value="item-2"
				question="How do i receive my personalized page after payment?"
				answer={
					"After completing the payment, you'll receive an email containing both the QR code and a link to access your personalized page, making it easy to share with your partner."
				}
			/>
			<LandingPageFAQItem
				value="item-3"
				question="Does the personalized page have an expiration date?"
				answer={
					'If you choose the Basic plan, your page will last for one year. However, with the PRO plan, your personalized page will be available for life.'
				}
			/>

			{/* <LandingPageFAQItem
				value="item-4"
				question="Can I edit my page after it is created?"
				answer={
					'Yes, once you receive the link to your page, it will include an edit section where you can make any necessary changes.'
				}
			/> */}

			<LandingPageFAQItem
				value="item-5"
				question="How long does it take to receive the QR code via email?"
				answer={
					'Credit card payments are processed instantly, so you will receive the QR code right away.'
				}
			/>
			<LandingPageFAQItem
				value="item-6"
				question="How can I contact customer support?"
				answer={'You can contact our customer support via email at x'}
			/>
		</Accordion>
	);
}
