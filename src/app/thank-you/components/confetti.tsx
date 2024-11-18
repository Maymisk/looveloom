'use client';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export function ThankYouConfetti() {
	useEffect(() => {
		const end = Date.now() + 3 * 1000; // 3 seconds
		const colors = ['#DC143C', '#FFF', '#B53D49'];

		const frame = () => {
			if (Date.now() > end) return;

			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				startVelocity: 60,
				origin: { x: 0, y: 0.5 },
				colors,
			});
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				startVelocity: 60,
				origin: { x: 1, y: 0.5 },
				colors,
			});

			requestAnimationFrame(frame);
		};

		frame();
	}, []);

	return null;
}
