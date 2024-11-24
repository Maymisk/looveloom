'use client';

import { useEffect, useState } from 'react';

interface ISongProps {
	link: string;
}

export function Song({ link }: ISongProps) {
	const [tapped, setTapped] = useState(false);

	useEffect(() => {
		const callback = () => {
			setTapped(true);
		};

		document.addEventListener('pointerdown', callback);
		document.addEventListener('touchstart', callback);

		return () => {
			document.removeEventListener('pointerdown', callback);
			document.removeEventListener('touchstart', callback);
		};
	}, []);

	const [, halvedLink] = link?.split('v=') || [];
	const videoId = halvedLink?.slice(0, 11);

	return (
		<>
			{videoId && tapped && (
				<iframe
					className="sr-only"
					allow="autoplay"
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			)}
		</>
	);
}
