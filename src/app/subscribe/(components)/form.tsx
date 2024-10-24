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
} from '@radix-ui/react-select';
import { CameraIcon } from 'lucide-react';
import { Input } from '@/shared/components/input';

export function SubscribeForm() {
	return (
		<form className="w-full flex flex-col gap-2">
			<div className="w-full flex gap-1">
				<Input label="label do input" />

				<SingleDatePicker label="Start of the relationship" />
			</div>

			<Textarea />

			<MultipleFileInput label="file input aqui">
				<CameraIcon width={18} height={18} strokeWidth={1.25} />
				Select your favorite pictures
			</MultipleFileInput>

			<Select>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					<SelectItem value="first-sight">
						Love at first sight
					</SelectItem>
					<SelectItem value="dating">Dating</SelectItem>
					<SelectItem value="engagement">Engagement</SelectItem>
					<SelectItem value="marriage">Marriage</SelectItem>
				</SelectContent>
			</Select>
		</form>
	);
}
