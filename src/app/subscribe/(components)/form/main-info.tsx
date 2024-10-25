import { MultipleFileInput } from '@/shared/components/multiple-file-input';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';
import { Switch } from '@/shared/components/switch';
import { CameraIcon } from 'lucide-react';
import { Input } from '@/shared/components/input';

export function SubscribeFormMainInfo() {
	return (
		<>
			<Switch>
				I wanna show
				<span className="inline-block mx-1 text-red-300">all</span>
				my love
			</Switch>

			<div className="w-full flex gap-1">
				<Input label="label do input" />

				<SingleDatePicker label="Start of the relationship" />
			</div>

			<Textarea />

			<MultipleFileInput label="file input aqui">
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
