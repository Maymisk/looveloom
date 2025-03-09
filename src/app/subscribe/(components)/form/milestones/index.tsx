import { Button } from '@/shared/components/button';
import { useFieldArray } from 'react-hook-form';
import { SubscribeFormMilestoneFields } from './fields';

export function SubscribeFormMilestones() {
	const { append, fields, remove } = useFieldArray({
		name: 'milestones',
	});

	function handleAddMilestone() {
		append({
			key: new Date().toISOString(),
			name: 'first-sight',
			description: '',
			date: '',
		});
	}

	function handleRemoveMilestone(index: number) {
		remove(index);
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-24">
				{fields.map((field, index) => (
					<SubscribeFormMilestoneFields
						key={field.id}
						index={index}
						handleRemoveMilestone={handleRemoveMilestone}
					/>
				))}
			</div>

			<Button
				type="button"
				className="bg-gray-800 border-none font-bold hover:opacity-75 transition-all"
				onClick={handleAddMilestone}
			>
				Adicionar marco
			</Button>
		</div>
	);
}
