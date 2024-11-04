'use client';

import { Button } from '@/shared/components/button';
import { SubscribeFormMainInfo } from './main-info';
import { SubscribeFormMilestones } from './milestones';

import { Milestone } from '@/shared/@types/milestone';
import { FormProvider, useForm } from 'react-hook-form';

interface ISubscribeFormData {
	name: string;
	story: string;
	pictures: FileList;
	startDate: string;
	song?: string;
	milestones?: Milestone[];
}

interface ISubscribeFormProps {
	plan: 'standard' | 'loveful';
}

export function SubscribeForm({ plan }: ISubscribeFormProps) {
	const useFormReturn = useForm<ISubscribeFormData>({
		defaultValues: {
			name: '',
			story: '',
			song: '',
			startDate: '',
			milestones: [{ name: 'first-sight', description: '', date: '' }],
			pictures: undefined,
		},
	});
	const { handleSubmit } = useFormReturn;

	async function handleOnSubmit(data: ISubscribeFormData) {
		console.log(data, 'data aqui na submissao dessa xereca');
		const formData = new FormData();

		formData.append('name', data.name);
		formData.append('story', data.story);
		formData.append('startDate', data.startDate);

		if (data.song) formData.append('song', data.song);

		if (data.pictures) {
			for (let i = 0; i < data.pictures.length; i++) {
				formData.append(`pictures`, data.pictures[i]);
			}
		}

		if (data.milestones) {
			data.milestones.forEach((milestone, index) => {
				formData.append(`milestones`, JSON.stringify(milestone));
			});
		}

		await fetch('/api/couple', {
			method: 'POST',
			body: formData,
		});
	}

	return (
		<FormProvider {...useFormReturn}>
			<form
				className="w-full flex flex-col gap-10 pb-4"
				onSubmit={handleSubmit(handleOnSubmit)}
			>
				<SubscribeFormMainInfo plan={plan} />

				<h3 className="w-full text-xl text-center font-bold my-6">
					Pick your{' '}
					<span className="inline-block mx-[2px] text-red-300">
						most
					</span>{' '}
					memorable{' '}
					<span className="inline-block mx-[2px] text-red-300">
						milestones
					</span>
					!
				</h3>

				<SubscribeFormMilestones />

				<Button
					type="submit"
					className="mt-4 border-none bg-red-300 hover:bg-red-400 transition-all"
				>
					Create my name
				</Button>
			</form>
		</FormProvider>
	);
}
