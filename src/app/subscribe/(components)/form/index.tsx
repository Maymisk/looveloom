'use client';

import { SubscribeFormMainInfo } from './main-info';
import { SubscribeFormMilestones } from './milestones';

import { Milestone } from '@/shared/@types/milestone';
import { Loading } from '@/shared/components/loading';
import { loadStripe } from '@stripe/stripe-js';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { SubscribePageCouplePreview } from '../preview';

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
			milestones: [],
			pictures: undefined,
		},
	});
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useFormReturn;
	const planIsLoveful = plan === 'loveful';

	useFormReturn.watch();

	async function handleOnSubmit(data: ISubscribeFormData) {
		const formData = new FormData();

		formData.append('name', data.name);
		formData.append('story', data.story);
		formData.append('startDate', data.startDate);
		formData.append('plan', plan);

		if (planIsLoveful && data.song) formData.append('song', data.song);

		if (data.pictures) {
			for (let i = 0; i < data.pictures.length; i++) {
				formData.append(`pictures`, data.pictures[i]);
			}
		}

		if (planIsLoveful && data.milestones) {
			data.milestones.forEach(milestone => {
				formData.append(`milestones`, JSON.stringify(milestone));
			});
		}

		const response = await fetch('/api/subscribe', {
			method: 'POST',
			body: formData,
		});

		const { sessionId, error } = await response.json();

		if (error) {
			toast.error(error);
			return;
		}

		const stripeClient = await loadStripe(
			process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string
		);

		if (!stripeClient) throw new Error('Stripe failed to initialize.');

		await stripeClient.redirectToCheckout({ sessionId });
	}

	const data = useFormReturn.getValues();

	return (
		<FormProvider {...useFormReturn}>
			<form
				className="w-full flex flex-col gap-10 max-xl:gap-4 pb-4 -mt-4"
				onSubmit={handleSubmit(handleOnSubmit)}
			>
				<SubscribeFormMainInfo plan={plan} />

				{planIsLoveful && (
					<h3 className="w-full text-xl text-center font-bold my-6">
						Escolha seus{' '}
						<span className="inline-block mx-[2px] text-red-300">
							marcos
						</span>{' '}
						mais{' '}
						<span className="inline-block mx-[2px] text-red-300">
							memoráveis
						</span>
						!
					</h3>
				)}

				{planIsLoveful && <SubscribeFormMilestones />}

				<SubscribePageCouplePreview plan={plan} {...data} />

				<button
					type="submit"
					className="w-full xl:min-h-14 text-center text-lg rounded-md font-bold border-none p-4 transition-all capitalize text-white bg-red-200 shadow-glow shadow-red-200/80 hover:bg-red-400 disabled:opacity-50 disabled:shadow-none' lg:max-w-[33%]"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<span className="w-full flex items-center justify-center text-lg gap-4">
							<Loading className="w-fit" />
							Criando seu site...
						</span>
					) : (
						'Criar meu site'
					)}
				</button>
			</form>
		</FormProvider>
	);
}
