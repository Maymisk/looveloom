'use client';

import { Input } from '@/shared/components/input';
import { MultipleFileInput } from '@/shared/components/multiple-file-input';
import { SingleDatePicker } from '@/shared/components/single-date-picker';
import { Textarea } from '@/shared/components/textarea';
import { CameraIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

interface ISubscribeFormMainInfoProps {
	plan: 'standard' | 'loveful';
}

export function SubscribeFormMainInfo({ plan }: ISubscribeFormMainInfoProps) {
	const { register, setValue } = useFormContext();

	const planIsLoveful = plan === 'loveful';

	return (
		<>
			<div className="w-full flex gap-1">
				<Input
					{...register('name')}
					label="Nome do casal"
					placeholder="Romeu e Julieta"
				/>

				<Controller
					name="startDate"
					render={({ field }) => {
						return (
							<SingleDatePicker
								onDateChange={field.onChange}
								label="Início da relação"
							/>
						);
					}}
				/>
			</div>

			<Textarea
				{...register('story')}
				label="Conte-nos sua história"
				placeholder="Quando nos conhecemos em 2013, eu nunca imaginaria que..."
			/>

			<MultipleFileInput
				{...register('pictures')}
				onClearFiles={() => setValue('pictures', undefined)}
				accept="image/*"
			>
				<CameraIcon
					className="text-red-300"
					width={18}
					height={18}
					strokeWidth={1.25}
				/>
				Selecione suas fotos favoritas
			</MultipleFileInput>

			{planIsLoveful && (
				<Input
					{...register('song')}
					label="Link para sua música preferida"
					placeholder="https://www.youtube.com/watch?v=kPa7bsKwL-c"
				/>
			)}
		</>
	);
}
