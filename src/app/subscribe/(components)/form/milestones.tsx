'use client';

import { Textarea } from '@/shared/components/textarea';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/shared/components/select';

export function SubscribeFormMilestones() {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<h3 className="font-bold">
					Milestone <span className="text-red-300">1</span>
				</h3>

				<fieldset className="flex flex-col gap-2">
					<Select>
						<SelectTrigger>
							<SelectValue
								className="font-light"
								placeholder="Select your milestone"
							/>
						</SelectTrigger>

						<SelectContent>
							<SelectItem value="first-sight">
								Love at first sight
							</SelectItem>

							<SelectItem value="first-date">
								First date
							</SelectItem>

							<SelectItem value="first-kiss">
								First kiss
							</SelectItem>

							<SelectItem value="dating">
								Making it official
							</SelectItem>

							<SelectItem value="engagement">
								Engagement
							</SelectItem>

							<SelectItem value="marriage">Marriage</SelectItem>
						</SelectContent>
					</Select>

					<Textarea placeholder="The day we married was the happiest day of my life.." />
				</fieldset>
			</div>
		</div>
	);
}
