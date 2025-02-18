import { LandingPageBanner } from '@/app/(components)/Banner';
import { LandingPageFrequentlyAskedQuestions } from '@/app/(components)/FAQ';
import { FrequentlyPostedOn } from '@/app/(components)/FeaturedOn';
import { LandingPageSecondCallToAction } from '@/app/(components)/SecondCallToAction';
import { LandingPageSocialMedia } from '@/app/(components)/SocialMedia';
import { LandingPageTestimonials } from '@/app/(components)/Testimonials';
import { LandingPageHowItWorks } from './(components)/HowItWorks';
import { LandingPagePricing } from './(components)/Pricing';

export default function LandingPage() {
	return (
		<main className="w-full pt-24 max-xl:pt-12 px-8 max-xl:px-2 flex flex-col gap-36 max-xl:gap-12">
			<LandingPageBanner />

			<LandingPageHowItWorks />

			<FrequentlyPostedOn />

			<LandingPagePricing />

			<LandingPageTestimonials />

			<LandingPageFrequentlyAskedQuestions />

			<LandingPageSecondCallToAction />

			<LandingPageSocialMedia />
		</main>
	);
}
