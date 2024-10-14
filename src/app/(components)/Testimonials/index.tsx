import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/components/carousel';
import { LandingPageTestimonialsCard } from './Item';

export function LandingPageTestimonials() {
	return (
		<section className="flex flex-col items-center gap-12 mt-24">
			<h2 className="text-5xl text-gray700 font-bold font-inria-serif text-center">
				Ouça de nossos clientes
			</h2>

			<Carousel className="w-full mx-auto">
				<CarouselContent className="p-2 gap-8">
					<LandingPageTestimonialsCard
						name="Laura Cunha"
						screenshot="/testimonials/cunha.jpg"
						instagram="https://www.instagram.com/_lauragcunha/"
						profile="/testimonials/laura_pfp.jpg"
					/>
					<LandingPageTestimonialsCard
						name="Eloiza Ferrari"
						instagram="https://www.instagram.com/eloiza_ferrari/"
						screenshot="/testimonials/eloiza.jpg"
						profile="/testimonials/eloiza_pfp.jpg"
						screenshotClassname="object-[0px_-40px]"
					/>
					<LandingPageTestimonialsCard
						name="Juliane Borella"
						instagram="https://www.instagram.com/julianeborellaendo/"
						screenshot="/testimonials/juliane.jpg"
						profile="/testimonials/juliane_pfp.jpg"
					/>
					<LandingPageTestimonialsCard
						name="Gabriela Rolim"
						instagram="https://www.instagram.com/gabriela.rolim/"
						screenshot="/testimonials/gabi.jpg"
						profile="/testimonials/gabi_pfp.jpg"
					/>
					<LandingPageTestimonialsCard
						name="Deisi Morawski"
						instagram="https://www.instagram.com/deisimorawski/"
						screenshot="/testimonials/deisi.jpg"
						profile="/testimonials/deisi_pfp.jpg"
					/>
				</CarouselContent>

				<CarouselPrevious className="left-1/3 bottom-[-4rem] top-auto" />
				<CarouselNext className="right-1/3 bottom-[-4rem] top-auto" />
			</Carousel>
		</section>
	);
}
