'use client';

import { Input } from '@/shared/components/input';
import { MultipleFileInput } from '@/shared/components/multiple-file-input';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';
import { CameraIcon } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

interface ISubscribeFormMainInfoProps {
	plan: 'standard' | 'loveful';
}

export function SubscribeFormMainInfo({ plan }: ISubscribeFormMainInfoProps) {
	const { register } = useFormContext();

	const planIsLoveful = plan === 'loveful';

	return (
		<>
			<div className="w-full flex gap-1">
				<Input
					label="Name of the couple"
					placeholder="Romeo and Juliet"
					{...register('name')}
				/>

				<SingleDatePicker label="Start of the relationship" />
			</div>

			<Textarea
				label="Tell us your story"
				name="story"
				placeholder="When we first met in 2013, I never thought.."
			/>

			<MultipleFileInput name="pictures">
				<CameraIcon
					className="text-red-300"
					width={18}
					height={18}
					strokeWidth={1.25}
				/>
				Select your favorite pictures
			</MultipleFileInput>

			<Input
				label="The link to your favorite song"
				name="song"
				placeholder="https://youtube.com/watch?v="
			/>
		</>
	);
}
