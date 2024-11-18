import { BlurFade } from '@/shared/components/blur-fade';
import { HeroVideoDialog } from '@/shared/components/hero-video-dialog';

export function LandingPageDemo() {
	return (
		<section>
			<BlurFade
				className="w-full flex items-center justify-center gap-8"
				delay={0.8}
			>
				<HeroVideoDialog
					className="w-full max-w-[1200px] max-xl:max-w-[500px]"
					thumbnailSrc="/logo.png"
					videoSrc="https://www.youtube.com/embed/ystoRDVjPRQ?si=Wo4anweuQ8sWBMZL"
				/>
			</BlurFade>
		</section>
	);
}
