'use client';

import { MultipleFileInput } from '@/shared/components/multiple-file-input';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/shared/components/select';
import { CameraIcon } from 'lucide-react';
import { Input } from '@/shared/components/input';
import { Switch } from '@/shared/components/switch';
import { SubscribeFormMilestones } from './milestones';
import { SubscribeFormMainInfo } from './main-info';

export function SubscribeForm() {
	return (
		<form className="w-full flex flex-col gap-2">
			<SubscribeFormMainInfo />

			<h3 className="w-full text-xl text-center font-bold my-6">
				Pick your{' '}
				<span className="inline-block mx-[2px] text-red-300">most</span>{' '}
				memorable{' '}
				<span className="inline-block mx-[2px] text-red-300">
					milestones
				</span>
				!
			</h3>

			<SubscribeFormMilestones />
		</form>
	);
}
