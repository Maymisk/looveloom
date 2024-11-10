import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/select';
import { Controller } from 'react-hook-form';

interface ISubscribeFormMilestoneSelect {
	index: number;
}

export function SubscribeFormMilestoneSelect({
	index,
}: ISubscribeFormMilestoneSelect) {
	return (
		<Controller
			name={`milestones.${index}.name`}
			render={({ field }) => {
				return (
					<Select
						name={field.name}
						value={field.value}
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

							<SelectItem value="relationship">Dating</SelectItem>

							<SelectItem value="engagement">
								Engagement
							</SelectItem>

							<SelectItem value="marriage">Marriage</SelectItem>
						</SelectContent>
					</Select>
				);
			}}
		/>
	);
}
