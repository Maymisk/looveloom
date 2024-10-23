import { FileInput } from '@/shared/components/file-input';
import { Input } from '@/shared/components/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/select';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';

export default function Subscribe() {
	return (
		<main className="w-full pt-24 max-xl:pt-12 px-8 max-xl:px-2 flex flex-col gap-36 max-xl:gap-12">
			<Input label="label do input" />

			<Textarea />

			<SingleDatePicker label="Start of the relationship" />

			<FileInput label="file input aqui" />

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
		</main>
	);
}
