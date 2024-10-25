import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { body } = await req.json();
	console.log(body, 'REQ BODY AQUI DENTRO');

	return NextResponse.json({ status: 200, message: 'Succeeded' });
}
