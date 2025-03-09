'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { SubscribeForm } from './(components)/form';

export default function Subscribe() {
	const [plan, setPlan] = useState<'standard' | 'loveful'>('standard');

	function handlePlanChange(plan: 'standard' | 'loveful') {
		setPlan(plan);
	}

	return (
		<main className="w-full flex flex-col items-center gap-36 max-xl:gap-12 pt-24 max-xl:pt-4 px-8 max-xl:px-2">
			<div className="flex flex-col items-center gap-1 mx-auto">
				<h1 className="text-2xl font-bold">Quase lá!</h1>
				<span className="text-sm font-light">
					Preencha os dados e pegue sua página!
				</span>

				<div className="flex justify-center gap-4 mt-4">
					<button
						className={cn(
							'p-2 border border-red-300 rounded-md text-xs text-center',
							{ 'bg-red-300': plan === 'standard' }
						)}
						onClick={() => handlePlanChange('standard')}
					>
						Um ano, 3 fotos e sem música - $35
					</button>

					<button
						className={cn(
							'p-2 border border-red-300 rounded-md text-xs text-center',
							{ 'bg-red-300': plan === 'loveful' }
						)}
						onClick={() => handlePlanChange('loveful')}
					>
						Eterno, 7 fotos e música - $45
					</button>
				</div>
			</div>

			<SubscribeForm plan={plan} />
		</main>
	);
}
