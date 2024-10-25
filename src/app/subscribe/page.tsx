import { SubscribeForm } from './(components)/form';

export default function Subscribe() {
	return (
		<main className="w-full flex flex-col items-center gap-36 max-xl:gap-12 pt-24 max-xl:pt-12 px-8 max-xl:px-2">
			<div className="flex flex-col items-center gap-1 mx-auto">
				<h1 className="text-2xl font-bold">Almost there!</h1>
				<span className="text-sm font-light">
					Fill out the form and get your own name
				</span>
			</div>

			<SubscribeForm />
		</main>
	);
}
