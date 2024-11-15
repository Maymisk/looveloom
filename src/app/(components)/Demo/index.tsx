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
					className="w-full max-w-[1200px] max-xl:max-w-[500px] shadow-md shadow-gray-800"
					thumbnailSrc="https://github.com/maymisk.png"
					videoSrc="https://www.youtube.com/embed/n4nckN3f0dI?si=Lkd9kE3-NSzM9I82"
				/>
			</BlurFade>
		</section>
	);
}
