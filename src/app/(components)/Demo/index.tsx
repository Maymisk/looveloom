import { BlurFade } from '@/shared/components/blur-fade';
import { HeroVideoDialog } from '@/shared/components/hero-video-dialog';

export function LandingPageDemo() {
	return (
		<section className="flex flex-col items-center justify-center gap-8">
			<BlurFade className="w-full" delay={0.8}>
				<HeroVideoDialog
					className="w-full max-w-[500px] shadow-md shadow-gray-800"
					thumbnailSrc="https://github.com/maymisk.png"
					videoSrc="https://www.youtube.com/embed/n4nckN3f0dI?si=Lkd9kE3-NSzM9I82"
				/>
			</BlurFade>
		</section>
	);
}
