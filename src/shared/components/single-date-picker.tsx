import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/shared/components/button';
import { Calendar } from '@/shared/components/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/shared/components/popover';
import { SelectSingleEventHandler } from 'react-day-picker';

interface IDatePickerProps {
	label?: string;
	value?: Date;
	onDateChange?: SelectSingleEventHandler;
}

export function SingleDatePicker({
	label,
	value,
	onDateChange,
}: IDatePickerProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [date, setDate] = React.useState<Date | undefined>();

	function handleSelect(...props: Parameters<SelectSingleEventHandler>) {
		setIsOpen(false);
		setDate(props[0]);

		if (onDateChange) onDateChange(...props);
	}

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<div className="w-full flex flex-col gap-1">
				{label && (
					<label className="ml-1 text-sm font-semibold text-white">
						{label}
					</label>
				)}

				<PopoverTrigger asChild>
					<Button
						variant={'outline'}
						className={cn(
							'w-full flex justify-start gap-4 text-left font-normal border border-transparent bg-gray-800 focus:border-red-300 focus:outline-none focus:ring-0',
							!value && 'text-muted-foreground'
						)}
					>
						<CalendarIcon
							width={20}
							height={20}
							className="text-red-300"
						/>
						{date ? (
							format(date, 'PPP')
						) : (
							<span className="font-light opacity-40">
								Escolha uma data
							</span>
						)}
					</Button>
				</PopoverTrigger>
			</div>

			<PopoverContent
				side="bottom"
				align="end"
				avoidCollisions={false}
				className="w-auto p-0 bg-gray-800 border-none"
			>
				<Calendar
					mode="single"
					selected={value}
					onSelect={handleSelect}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
