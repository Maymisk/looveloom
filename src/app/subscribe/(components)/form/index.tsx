import { SubscribeFormMilestones } from './milestones';
import { SubscribeFormMainInfo } from './main-info';
import { Button } from '@/shared/components/button';

export function SubscribeForm() {
	return (
		<form
			action="/api/subscribe"
			method="POST"
			className="w-full flex flex-col gap-10 pb-4"
		>
			<SubscribeFormMainInfo />

			<h3 className="w-full text-xl text-center font-bold my-6">
				Pick your{' '}
				<span className="inline-block mx-[2px] text-red-300">most</span>{' '}
				memorable{' '}
				<span className="inline-block mx-[2px] text-red-300">
					milestones
				</span>
				!
			</h3>

			<SubscribeFormMilestones />

			<Button
				type="submit"
				className="mt-4 border-none bg-red-300 hover:bg-red-400 transition-all"
			>
				Create my name
			</Button>
		</form>
	);
}
