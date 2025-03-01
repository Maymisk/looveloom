import z from 'zod';

export const validationSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Please write the name of the couple!' }),
	story: z
		.string({ message: 'Please write your story!' })
		.min(1, { message: 'Please write your story!' })
		.max(450, { message: 'Please limit your story to 450 chars!' }),
	song: z.string({ message: 'Invalid song!' }).optional(),
	startDate: z
		.string({ message: 'Please tell us the start of your relationship!' })
		.refine(value => !isNaN(Date.parse(value)), {
			message: 'Please tell us the start of your relationship!',
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
					{ message: 'Invalid milestone type!' }
				),
				description: z
					.string({
						message:
							'Please provide a description for your milestone!',
					})
					.min(1, {
						message:
							'Please provide a description for your milestone!',
					})
					.max(400, {
						message:
							'Please provide a description with a maximum of 400 characters!',
					}),
				date: z
					.string({
						message:
							'Please tell us the date your milestone happened!',
					})
					.refine(value => !isNaN(Date.parse(value)), {
						message:
							'Please tell us the date your milestone happened!',
					}),
			})
			.optional()
	),

	pictures: z
		.array(z.any())
		.min(3, { message: 'Please select at least 3 pictures!' })
		.max(7, { message: 'You can only send at most 7 pictures!' }),
});
