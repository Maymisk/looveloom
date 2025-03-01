'use client';

import { Input } from '@/shared/components/input';
import { MultipleFileInput } from '@/shared/components/multiple-file-input';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';
import { CameraIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

interface ISubscribeFormMainInfoProps {
	plan: 'standard' | 'loveful';
}

export function SubscribeFormMainInfo({ plan }: ISubscribeFormMainInfoProps) {
	const { register, setValue } = useFormContext();

	const planIsLoveful = plan === 'loveful';

	return (
		<>
			<div className="w-full flex gap-1">
				<Input
					{...register('name')}
					label="Name of the couple"
					placeholder="Romeo and Juliet"
				/>

				<Controller
					name="startDate"
					render={({ field }) => {
						return (
							<SingleDatePicker
								onDateChange={field.onChange}
								label="Start of the relationship"
							/>
						);
					}}
				/>
			</div>

			<Textarea
				{...register('story')}
				label="Tell us your story"
				placeholder="When we first met in 2013, I never thought.."
			/>

			<MultipleFileInput
				{...register('pictures')}
				onClearFiles={() => setValue('pictures', undefined)}
				accept="image/*"
			>
				<CameraIcon
					className="text-red-300"
					width={18}
					height={18}
					strokeWidth={1.25}
				/>
				Select your favorite pictures
			</MultipleFileInput>

			{planIsLoveful && (
				<Input
					{...register('song')}
					label="The link to your favorite song"
					placeholder="https://www.youtube.com/watch?v=kPa7bsKwL-c"
				/>
			)}
		</>
	);
}
