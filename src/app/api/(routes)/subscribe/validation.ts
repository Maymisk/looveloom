import z from 'zod';

export const validationSchema = z.object({
	name: z.string().min(1, { message: 'Por favor, escreva o nome do casal!' }),
	story: z
		.string({ message: 'Por favor, escreva sua história!' })
		.min(1, { message: 'Por favor, escreva sua história!' })
		.max(450, {
			message: 'Por favor, limite sua história a 450 caracteres!',
		}),
	song: z.string({ message: 'Música inválida!' }).optional(),
	startDate: z
		.string({
			message: 'Por favor, informe o início do seu relacionamento!',
		})
		.refine(value => !isNaN(Date.parse(value)), {
			message:
				'Por favor, informe uma data válida para o início do seu relacionamento!',
		}),
	milestones: z.array(
		z
			.object({
				name: z.enum(
					[
						'first-sight',
						'first-date',
						'first-kiss',
						'relationship',
						'engagement',
						'marriage',
					],
					{ message: 'Tipo de marco inválido!' }
				),
				description: z
					.string({
						message:
							'Por favor, forneça uma descrição para seu marco!',
					})
					.min(1, {
						message:
							'Por favor, forneça uma descrição para seu marco!',
					})
					.max(400, {
						message:
							'Por favor, limite a descrição a 400 caracteres!',
					}),
				date: z
					.string({
						message: 'Por favor, informe a data do seu marco!',
					})
					.refine(value => !isNaN(Date.parse(value)), {
						message:
							'Por favor, informe uma data válida para seu marco!',
					}),
			})
			.optional()
	),

	pictures: z
		.array(z.any())
		.min(3, { message: 'Por favor, selecione pelo menos 3 fotos!' })
		.max(7, { message: 'Você pode enviar no máximo 7 fotos!' }),
});
