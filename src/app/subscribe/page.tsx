import { Input } from '@/shared/components/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/select';

export default function Subscribe() {
	return (
		<main className="w-full pt-24 max-xl:pt-12 px-8 max-xl:px-2 flex flex-col gap-36 max-xl:gap-12">
			<Input label="label do input" />

			<Select>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					<SelectItem value="1">um</SelectItem>
					<SelectItem value="2">dois</SelectItem>
					<SelectItem value="3">tres</SelectItem>
				</SelectContent>
			</Select>
		</main>
	);
}
