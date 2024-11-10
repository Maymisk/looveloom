'use client';

import { Button } from '@/shared/components/button';
import { SubscribeFormMainInfo } from './main-info';
import { SubscribeFormMilestones } from './milestones';

import { Milestone } from '@/shared/@types/milestone';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import { Loading } from '@/shared/components/loading';

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
	token: string;
}

export function SubscribeForm({ plan, token }: ISubscribeFormProps) {
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
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useFormReturn;
	const planIsLoveful = plan === 'loveful';

	async function handleOnSubmit(data: ISubscribeFormData) {
		const formData = new FormData();

		formData.append('name', data.name);
		formData.append('story', data.story);
		formData.append('startDate', data.startDate);
		formData.append('token', token);

		if (planIsLoveful && data.song) formData.append('song', data.song);

		if (data.pictures) {
			for (let i = 0; i < data.pictures.length; i++) {
				formData.append(`pictures`, data.pictures[i]);
			}
		}

		if (planIsLoveful && data.milestones) {
			data.milestones.forEach((milestone, index) => {
				formData.append(`milestones`, JSON.stringify(milestone));
			});
		}

		const response = await fetch('/api/couple', {
			method: 'POST',
			body: formData,
		});

		const { url, error } = await response.json();

		if (error) {
			toast.error(error);
			return;
		}

		toast.success('Your Loveloom has been created! Check your email 😊', {
			duration: 5000,
		});

		setTimeout(() => {
			redirect(url);
		}, 5000);
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

				{planIsLoveful && <SubscribeFormMilestones />}

				<Button
					type="submit"
					className="mt-4 border-none bg-red-300 hover:bg-red-400 transition-all"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<span className="flex items-center gap-4">
							<Loading />
							Creating your Loveloom...
						</span>
					) : (
						'Create your Loveloom'
					)}
				</Button>
			</form>
		</FormProvider>
	);
}
