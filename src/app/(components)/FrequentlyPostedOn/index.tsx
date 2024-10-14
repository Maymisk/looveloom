import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTiktok,
	faInstagram,
	faRedditAlien,
} from '@fortawesome/free-brands-svg-icons';

function Divider() {
	return <div className="h-16 max-xl:h-10 border-r-2 border-ivory-400"></div>;
}

export function FrequentlyPostedOn() {
	return (
		<section className="flex flex-col items-center gap-4">
			<span className="text-sm text-red-500 font-semibold">
				FREQUENTLY POSTED ON
			</span>

			<div className="flex items-center gap-4">
				<div className="text-4xl max-xl:text-xl italic font-inria-serif hover:scale-105 transition-all">
					<FontAwesomeIcon
						icon={faTiktok}
						className="text-ivory-400 w-6 h-6"
					/>
				</div>

				<Divider />

				<div className="text-4xl max-xl:text-xl italic font-inria-serif hover:scale-105 transition-all">
					<FontAwesomeIcon
						icon={faInstagram}
						className="text-ivory-400 w-6 h-6"
					/>
				</div>

				<Divider />

				<div className="text-4xl max-xl:text-xl italic font-inria-serif hover:scale-105 transition-all">
					<FontAwesomeIcon
						icon={faRedditAlien}
						className="text-ivory-400 w-6 h-6"
					/>
				</div>
			</div>
		</section>
	);
}
