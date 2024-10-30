import mongoose from 'mongoose';

const coupleSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		story: {
			type: String,
			required: true,
			trim: true,
		},
		pictures: [{ type: String, required: true }],
		song: {
			type: String,
			required: false,
		},
		milestones: [
			{
				name: {
					type: String,
					enum: [
						'first-sight',
						'first-date',
						'first-kiss',
						'dating',
						'engagement',
						'marriage',
					],
					required: false,
				},
				description: {
					type: String,
					required: true,
				},
				date: {
					type: Date,
					required: true,
				},
			},
		],
		startDate: {
			type: Date,
			required: true,
		},
		expiresAt: {
			type: Date,
			required: false,
			expires: 0,
		},
	},
	{
		timestamps: true,
	}
);

export const couple = mongoose.model('couples', coupleSchema);
