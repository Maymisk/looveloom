import {
	faInstagram,
	faTiktok,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function LandingPageSocialMedia() {
	return (
		<section className="flex flex-col items-center gap-12 max-xl:gap-4 mt-16 mb-8">
			<h2 className="text-5xl max-xl:text-3xl text-gray700 font-bold font-inria-serif">
				Nossas redes
			</h2>

			<div className="w-1/2 flex items-center justify-center gap-12 max-xl:gap-4">
				<Link
					href={'https://www.instagram.com/'}
					target="_blank"
					className="flex items-center gap-4 max-xl:gap-2 text-xl max-xl:text-base uppercase"
				>
					<FontAwesomeIcon
						className="w-6 h-6 text-red-200"
						icon={faInstagram}
					/>
					Instagram
				</Link>

				<Link
					href={'https://www.youtube.com/@Looveloom'}
					target="_blank"
					className="flex items-center gap-4 max-xl:gap-2 text-xl max-xl:text-base uppercase"
				>
					<FontAwesomeIcon
						className="w-6 h-6 text-red-200"
						icon={faYoutube}
					/>
					Youtube
				</Link>

				<Link
					href={'https://www.tiktok.com/@looveloom'}
					target="_blank"
					className="flex items-center gap-4 max-xl:gap-2 text-xl max-xl:text-base uppercase"
				>
					<FontAwesomeIcon
						className="w-6 h-6 text-red-200"
						icon={faTiktok}
					/>
					TikTok
				</Link>
			</div>
		</section>
	);
}
