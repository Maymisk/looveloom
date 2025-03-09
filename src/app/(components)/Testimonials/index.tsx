import { Marquee } from '@/shared/components/marquee';
import { LandingPageTestimonialsMarqueeItem } from './marquee/item';
import Image from 'next/image';

const reviews = [
	{
		name: 'Davi',
		username: '@dv_stella',
		text: 'Fácil e rápido. Com certeza valeu os 5 minutos pra fazer minha namorada feliz!',
		image: '/testimonials/david.jpg',
	},
	{
		name: 'Clara',
		username: '@clara_rachellib',
		text: 'Meu namorado apareceu com um QRCode aleatório, e eu não achei que fosse gostar tanto',
		image: '/testimonials/clara.jpg',
	},
	{
		name: 'Gustavo',
		username: '@guzta_c',
		text: 'Esse foi o presente perfeito pro nosso aniversário de namoro. Eu pude dizer cada detalhe do quanto amo minha mulher',
		image: '/testimonials/gustavo.jpg',
	},
	{
		name: 'Guilherme',
		username: '@g.reche_774',
		text: 'Minha namorada adorou muito!!! Valeu o preço por essa surpresa emotiva',
		image: '/testimonials/guilherme.jpg',
	},
];

const couplePages = ['/looveloom1.png', '/looveloom2.png', '/looveloom3.png'];

export function LandingPageTestimonials() {
	return (
		<section className="relative flex flex-col items-center gap-12 mt-24">
			<div className="flex flex-col items-center justify-center gap-4">
				<h5 className="text-red-400 font-semibold uppercase">
					Testemunhos
				</h5>

				<h2 className="text-5xl max-xl:text-3xl text-gray700 font-bold font-inria-serif text-center">
					O que os casais estão falando
				</h2>
			</div>

			<div className="w-full flex flex-col items-center justify-center gap-12 overflow-hidden">
				<Marquee className="w-full" pauseOnHover>
					{reviews.map(review => {
						return (
							<LandingPageTestimonialsMarqueeItem
								key={review.username}
								{...review}
							/>
						);
					})}
				</Marquee>
				<Marquee className="w-full gap-4" pauseOnHover reverse>
					{couplePages.map(couplePage => {
						return (
							<Image
								key={couplePage}
								src={couplePage}
								className="rounded-md"
								alt="Couple page"
								width={300}
								height={300}
							/>
						);
					})}
				</Marquee>
			</div>

			<div className="pointer-events-none absolute top-20 bottom-0 -left-2 w-1/3 bg-gradient-to-r from-gray-500 dark:from-background"></div>
			<div className="pointer-events-none absolute top-20 bottom-0 -right-2 w-1/3 bg-gradient-to-l from-gray-500 dark:from-background"></div>
		</section>
	);
}
