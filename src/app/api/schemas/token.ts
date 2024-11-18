import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
	value: {
		type: String,
		required: true,
		trim: true,
	},
});

export const Token =
	mongoose.models.tokens || mongoose.model('tokens', tokenSchema);
