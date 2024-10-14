import { Stars } from '@/shared/components/stars';
import { LandingPageLink } from '../Link';

export function LandingPageBanner() {
	return (
		<section className="flex max-md:flex-col items-center justify-center gap-4 text-gray700 p-8 max-xl:p-2">
			<div className="flex flex-col gap-3">
				<h2 className="w-full text-7xl max-xl:text-5xl font-poppins text-center drop-shadow-md">
					<span className="font-bold text-red-300">Eternalize</span>{' '}
					your love with{' '}
					<span className="font-bold text-red-300">few clicks</span>
				</h2>

				<p></p>

				<p className="w-4/5 max-xl:w-full text-gray700 text-center font-light font-poppins italic text-lg max-xl:text-base">
					Create a personalized website and QR code to share your love
					story with the world and surprise your special someone in a
					unique way!
				</p>
			</div>

			<div className="h-64 flex items-center shadow-md shadow-sage-500 rounded-md">
				cardzinho do bagulhgo aqui
			</div>

			<div className="flex items-center gap-3">
				<span className="text-xs text-playfair text-red-500 italic">
					More than 10000 happy couples
				</span>

				<Stars
					className="gap-0"
					iconClassName="w-4 h-4 fill-ivory-400 hover:fill-ivory-300"
				/>
			</div>
		</section>
	);
}
