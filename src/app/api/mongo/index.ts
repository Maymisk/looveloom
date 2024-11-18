import mongoose from 'mongoose';

let cached: mongoose.Mongoose | null = null;

async function dbConnect() {
	if (cached) return cached;

	const MONGO_URI = process.env.MONGO_URI;

	if (!MONGO_URI) {
		throw new Error(
			'Please define the MONGO_URI environment variable inside .env.local'
		);
	}

	cached = await mongoose.connect(MONGO_URI);

	return cached;
}

export default dbConnect;
