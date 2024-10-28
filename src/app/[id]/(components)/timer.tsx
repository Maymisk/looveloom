'use client';

import { Loading } from '@/shared/components/loading';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';

interface ISubscriptionTimerProps {
	startDate: string | Date;
}

export function SubscriptionTimer({ startDate }: ISubscriptionTimerProps) {
	const [difference, setDifference] = useState<number>(0);

	useEffect(() => {
		setDifference(moment(new Date()).diff(startDate, 'seconds'));
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setDifference(prev => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	let offset = difference;

	const days = Math.floor(offset / (60 * 60 * 24));
	offset %= 60 * 60 * 24;

	const hours = Math.floor(offset / (60 * 60));
	offset %= 60 * 60;

	const minutes = Math.floor(offset / 60);
	offset %= 60;

	const seconds = offset;

	// if (!difference) return <Loading className="mt-16" /	>;

	return (
		<div className="flex flex-col items-center gap-2">
			<h3 className="flex justify-center flex-wrap gap-2 text-4xl font-bold text-center">
				{days ? (
					<span>
						{days} <span className="text-red-300">days</span>,
					</span>
				) : null}

				<span>
					{hours} <span className="text-red-300">hours</span>,
				</span>

				<span>
					{minutes} <span className="text-red-300">minutes</span> and
				</span>

				<span>
					{seconds} <span className="text-red-300">seconds</span>
				</span>
			</h3>

			<span className="inline-block ml-2 font-bold text-lg">
				of <span className="text-red-300">us 💓</span>
			</span>
		</div>
	);
}
