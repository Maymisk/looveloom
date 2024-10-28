import { Children, CSSProperties, ReactNode } from 'react';

interface ITimelineStructureProps {
	children: ReactNode;
}

export function TimelineStructure({ children }: ITimelineStructureProps) {
	const items = Children.toArray(children);

	const gapHeight = 320;
	const amountOfGaps = items.length - 1;

	const itemHeight = 40;
	const amountOfIntersectingItems = items.length - 2;

	const totalHeight =
		gapHeight * amountOfGaps + amountOfIntersectingItems * itemHeight;

	return (
		<div className="relative flex flex-col my-3 gap-[20rem]">
			{children}

			<div
				style={
					{
						'--height': `${totalHeight}px`,
					} as CSSProperties
				}
				className={`absolute -Z-50 top-10 left-5 -translate-x-[2px] h-[var(--height)] w-1 bg-red-300`}
			/>
		</div>
	);
}
