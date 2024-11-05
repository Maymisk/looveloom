import dbConnect from '@/app/api/mongo';
import { Couple } from '@/app/api/schemas/couple';
import { NextResponse } from 'next/server';

interface IGetProps {
	params: Promise<{
		id: string;
	}>;
}

export async function GET(req: NextResponse, { params }: IGetProps) {
	await dbConnect();

	const { id } = await params;

	const couple = await Couple.findOne({ _id: id }, { email: 0 });

	return NextResponse.json(couple);
}
