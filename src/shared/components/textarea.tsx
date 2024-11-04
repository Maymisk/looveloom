import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, label, ...props }, ref) => {
		return (
			<div className="flex flex-col gap-1">
				{label && (
					<label className="ml-1 text-sm font-semibold text-white">
						{label}
					</label>
				)}

				<textarea
					className={cn(
						'flex min-h-[100px] w-full rounded-md border border-transparent bg-gray-800 px-3 py-2 font-light text-sm shadow-sm placeholder:text-muted-foreground outline-none focus:border-red-300 disabled:cursor-not-allowed disabled:opacity-50 placeholder:opacity-40 placeholder:font-light',
						className
					)}
					ref={ref}
					{...props}
				/>
			</div>
		);
	}
);
Textarea.displayName = 'Textarea';

export { Textarea };
