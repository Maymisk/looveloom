'use client';

import { MultipleFileInput } from '@/shared/components/multiple-file-input';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';
import { Switch } from '@/shared/components/switch';
import { CameraIcon } from 'lucide-react';
import { Input } from '@/shared/components/input';

export function SubscribeFormMainInfo() {
	return (
		<>
			<Switch name="plan">
				I wanna show
				<span className="inline-block mx-1 text-red-300">all</span>
				my love
			</Switch>

			<div className="w-full flex gap-1">
				<Input
					label="Name of the couple"
					name="coupleName"
					placeholder="Romeo and Juliet"
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
		</>
	);
}
