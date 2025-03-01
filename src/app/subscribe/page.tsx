'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { SubscribeForm } from './(components)/form';

export default function Subscribe() {
	const [plan, setPlan] = useState<'standard' | 'loveful'>('loveful');

	function handlePlanChange(plan: 'standard' | 'loveful') {
		setPlan(plan);
	}

	return (
		<main className="w-full flex flex-col items-center gap-36 max-xl:gap-12 pt-24 max-xl:pt-12 px-8 max-xl:px-2">
			<div className="flex flex-col items-center gap-1 mx-auto">
				<h1 className="text-2xl font-bold">Almost there!</h1>
				<span className="text-sm font-light">
					Fill out the form and get your own Loveloom!
				</span>

				<div className="flex justify-center gap-4 mt-4">
					<button
						className={cn(
							'p-2 border border-red-300 rounded-md text-xs text-center',
							{ 'bg-red-300': plan === 'standard' }
						)}
						onClick={() => handlePlanChange('standard')}
					>
						One year, 3 pictures and no music - $5
					</button>

					<button
						className={cn(
							'p-2 border border-red-300 rounded-md text-xs text-center',
							{ 'bg-red-300': plan === 'loveful' }
						)}
						onClick={() => handlePlanChange('loveful')}
					>
						Eternal, 7 pictures and music - $7
					</button>
				</div>
			</div>

			<SubscribeForm plan={plan} />
		</main>
	);
}
