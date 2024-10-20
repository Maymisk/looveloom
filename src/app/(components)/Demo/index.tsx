import { HeroVideoDialog } from '@/shared/components/hero-video-dialog';

export function LandingPageDemo() {
	return (
		<section className="flex flex-col items-center justify-center gap-8">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Officiis, nam repudiandae odio similique labore aut quas
				necessitatibus veniam incidunt eligendi!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Officiis, nam repudiandae odio similique labore aut quas
				necessitatibus veniam incidunt eligendi!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Officiis, nam repudiandae odio similique labore aut quas
				necessitatibus veniam incidunt eligendi!
			</p>

			<HeroVideoDialog
				className="w-full max-w-[500px]"
				thumbnailSrc="https://github.com/maymisk.png"
				videoSrc="https://www.youtube.com/embed/n4nckN3f0dI?si=Lkd9kE3-NSzM9I82"
			/>
		</section>
	);
}
