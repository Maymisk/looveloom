import z from 'zod';

export const validationSchema = z.object({
	name: z.string().min(1),
	email: z.string().email().min(1),
	story: z.string().min(1),
	song: z.string().optional(),
	startDate: z.string().refine(value => !isNaN(Date.parse(value))),
	milestones: z.array(
		z.object({
			name: z.enum([
				'first-sight',
				'first-date',
				'first-kiss',
				'dating',
				'engagement',
				'marriage',
			]),
			description: z.string().min(1),
			date: z.string().refine(value => !isNaN(Date.parse(value))),
		})
	),

	pictures: z.array(z.any()).min(3).max(7),
});
