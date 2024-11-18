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
				question="What is Loveloom?"
				answer={
					'Loveloom is your own custom relationship page. You can include photos, a heartfelt message, and a timer that tracks how long you’ve been together, making it a unique way to celebrate your love.'
				}
			/>
			<LandingPageFAQItem
				value="item-2"
				question="How do i receive my Loveloom after payment?"
				answer={
					"After completing the payment, you'll receive an email with a link to create your Loveloom. After configuring it as you want, you'll receive both a QR code and a link to access your Loveloom, making it easy to share with the world."
				}
			/>
			<LandingPageFAQItem
				value="item-3"
				question="Does my Loveloom have an expiration date?"
				answer={
					'If you choose the Starter plan, your Loveloom will last for one year. However, with the Loveful plan, your Loveloom will be available for life!'
				}
			/>
			<LandingPageFAQItem
				value="item-4"
				question="Does my QRCode have an expiration date?"
				answer={
					'Yes! The QRCode sent to your email will disappear after one week. However, if you saved it, you can stil use it normally!'
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
					'After creating your Loveloom, you will receive the QR code in at most a few minutes!'
				}
			/>
			<LandingPageFAQItem
				value="item-6"
				question="How can I contact customer support?"
				answer={
					'You can contact our customer support via email at support@looveloom.com'
				}
			/>
		</Accordion>
	);
}
