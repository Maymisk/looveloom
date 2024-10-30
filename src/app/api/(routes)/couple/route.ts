import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const body = await req.json();

	const { name, story, pictures, milestones, song, token } = body;

	// validate the data, the token, the token based on the date, the data based on the token,
	// invalidate the token, remove the token from the db, create the subscription register
}
