'use client';

import { Textarea } from '@/shared/components/textarea';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/shared/components/select';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Button } from '@/shared/components/button';
import { XIcon } from 'lucide-react';

export function SubscribeFormMilestones() {
	const { register } = useFormContext();
	const { append, fields, remove } = useFieldArray({
		name: 'milestones',
	});

	function handleAddMilestone() {
		append({ name: '', description: '', date: '' });
	}

	function handleRemoveMilestone(index: number) {
		remove(index);
	}

	return (
		<div className="flex flex-col gap-5">
			{fields.map((field, index) => {
				return (
					<div key={field.id} className="flex flex-col gap-2">
						<h3 className="font-bold">
							Milestone{' '}
							<span className="text-red-300">{index + 1}</span>
						</h3>

						<fieldset className="flex flex-col gap-6">
							<Controller
								name={`milestones.${index}.name`}
								render={({ field }) => {
									return (
										<Select
											name={field.name}
											onValueChange={field.onChange}
											disabled={field.disabled}
										>
											<SelectTrigger className="font-light">
												<SelectValue placeholder="Select your milestone" />
											</SelectTrigger>

											<SelectContent>
												<SelectItem value="first-sight">
													First sight
												</SelectItem>

												<SelectItem value="first-date">
													First date
												</SelectItem>

												<SelectItem value="first-kiss">
													First kiss
												</SelectItem>

												<SelectItem value="dating">
													Making it official
												</SelectItem>

												<SelectItem value="engagement">
													Engagement
												</SelectItem>

												<SelectItem value="marriage">
													Marriage
												</SelectItem>
											</SelectContent>
										</Select>
									);
								}}
							/>

							<Textarea
								{...register(`milestones.${index}.description`)}
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
			})}

			<Button
				type="button"
				className="bg-gray-800 border-none font-bold	"
				onClick={handleAddMilestone}
			>
				Add milestone
			</Button>
		</div>
	);
}
