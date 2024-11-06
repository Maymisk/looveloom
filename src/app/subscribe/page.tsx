import { redirect } from 'next/navigation';
import { SubscribeForm } from './(components)/form';
import jwt from 'jsonwebtoken';

interface ISubscribeProps {
	searchParams: Promise<{ [key: string]: string }>;
}

export default async function Subscribe({ searchParams }: ISubscribeProps) {
	// const { token } = await searchParams;

	// if (!token) return redirect('/');

	// let plan: 'standard' | 'loveful';

	// try {
	// 	const payload = jwt.verify(
	// 		token,
	// 		process.env.JWT_SECRET as string
	// 	) as any;
	// 	plan = payload.plan;
	// } catch {
	// 	redirect('/');
	// }

	const plan = 'loveful';

	return (
		<main className="w-full flex flex-col items-center gap-36 max-xl:gap-12 pt-24 max-xl:pt-12 px-8 max-xl:px-2">
			<div className="flex flex-col items-center gap-1 mx-auto">
				<h1 className="text-2xl font-bold">Almost there!</h1>
				<span className="text-sm font-light">
					Fill out the form and get your own name
				</span>
			</div>

			<SubscribeForm plan={plan} />
		</main>
	);
}
