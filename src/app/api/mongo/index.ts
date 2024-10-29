import mongoose from 'mongoose';

if (!process.env.MONGO_URI) throw new Error('Mongo URI is not set');

const client = mongoose.connect(process.env.MONGO_URI);

export { client };
