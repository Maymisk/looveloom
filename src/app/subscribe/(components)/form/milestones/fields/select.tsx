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
								Primeira vista
							</SelectItem>

							<SelectItem value="first-date">
								Primeiro encontro
							</SelectItem>

							<SelectItem value="first-kiss">
								Primeiro beijo
							</SelectItem>

							<SelectItem value="relationship">
								Começo do namoro
							</SelectItem>

							<SelectItem value="engagement">Noivado</SelectItem>

							<SelectItem value="marriage">Casamento</SelectItem>
						</SelectContent>
					</Select>
				);
			}}
		/>
	);
}
