'use client';

import {
	Children,
	CSSProperties,
	isValidElement,
	ReactNode,
	useEffect,
	useState,
} from 'react';

interface ITimelineStructureProps {
	children: ReactNode;
}

type Line = {
	height: number;
	top: number;
	left: number;
} | null;

const LINE_WIDTH = 4;

export function TimelineStructure({ children }: ITimelineStructureProps) {
	const [line, setLine] = useState<Line>(null);

	useEffect(() => {
		function calculateLinePosition() {
			const items = document.querySelectorAll(
				'[data-timeline-item="true"]'
			);

			const firstItem = items[0];
			const lastItem = items[items.length - 1];

			const parent = firstItem.closest('div .relative');

			if (!parent || items.length === 0) return;

			const parentRect = parent.getBoundingClientRect();
			const firstItemRect = firstItem.getBoundingClientRect();
			const lastItemRect = lastItem.getBoundingClientRect();

			const lineLeft = Math.round(
				(firstItemRect.left + firstItemRect.right) / 2 -
					parentRect.left -
					LINE_WIDTH / 2
			);

			const lineTop = firstItemRect.bottom - parentRect.top;
			const lineHeight = lastItemRect.top - firstItemRect.bottom + 20;

			const line = {
				height: lineHeight,
				left: lineLeft,
				top: lineTop,
			};

			setLine(line);
		}

		calculateLinePosition();

		window.addEventListener('resize', calculateLinePosition);

		return () => {
			window.removeEventListener('resize', calculateLinePosition);
		};
	}, []);

	return (
		<div className="flex flex-col my-3 gap-[20rem]">
			{children}

			<div
				style={
					line
						? {
								width: `${LINE_WIDTH}px`,
								height: `${line.height}px`,
								top: `${line.top}px`,
								left: `${line.left}px`,
						  }
						: undefined
				}
				className={`absolute -Z-50 bg-red-300`}
			/>
		</div>
	);
}
