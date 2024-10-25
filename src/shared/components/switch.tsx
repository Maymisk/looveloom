'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

type SwitchComponentProps = React.ComponentPropsWithoutRef<
	typeof SwitchPrimitives.Root
>;

const SwitchComponent = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	SwitchComponentProps
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			'peer flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm disabled:cursor-not-allowed disabled:opacity-50 bg-gray-500',
			className
		)}
		{...props}
		ref={ref}
	>
		<label htmlFor=""></label>
		<SwitchPrimitives.Thumb
			className={cn(
				'pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-all data-[state=checked]:translate-x-4 data-[state=checked]:bg-red-300 data-[state=unchecked]:translate-x-0'
			)}
		/>
	</SwitchPrimitives.Root>
));
SwitchComponent.displayName = SwitchPrimitives.Root.displayName;

interface ISwitchProps extends SwitchComponentProps {
	children?: React.ReactNode;
}

function Switch({ children, name, ...rest }: ISwitchProps) {
	return (
		<label
			htmlFor={name}
			className="bg-gray-800 w-full min-h-10 flex items-center justify-between pl-4 pr-2 rounded-md"
		>
			<div className="flex items-center justify-center font-semibold text-xs">
				{children}
			</div>

			<SwitchComponent name={name} {...rest} />
		</label>
	);
}

export { Switch };
