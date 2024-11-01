'use client';

import { Button } from '@/shared/components/button';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';
import { Controller, useFormContext } from 'react-hook-form';
import { SubscribeFormMilestoneSelect } from './select';

interface ISubscribeFormMilestonesFields {
	index: number;
	handleRemoveMilestone(index: number): void;
}

export function SubscribeFormMilestoneFields({
	index,
	handleRemoveMilestone,
}: ISubscribeFormMilestonesFields) {
	const { register } = useFormContext();

	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between items-center">
				<h3 className="font-bold">Milestone {index + 1}</h3>

				<Button
					type="button"
					className="h-8 font-bold text-sm bg-gray-800 border-none hover:opacity-75 transition-all"
					onClick={() => handleRemoveMilestone(index)}
				>
					Remove
				</Button>
			</div>

			<fieldset className="flex flex-col gap-10">
				<SubscribeFormMilestoneSelect index={index} />

				<Textarea
					{...register(`milestones.${index}.description`)}
					label="Tell the story on this special event"
					placeholder="The day we married was the happiest day of my life.."
				/>

				<Controller
					name={`milestones.${index}.date`}
					render={({ field }) => {
						return (
							<SingleDatePicker
								label="The date when this happened"
								onDateChange={field.onChange}
							/>
						);
					}}
				/>
			</fieldset>
		</div>
	);
}
