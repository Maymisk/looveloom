'use client';

import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
	className?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	children?: React.ReactNode;
	vertical?: boolean;
	repeat?: number;
	duration?: number;
}

export function Marquee({
	className,
	reverse,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	duration = 40,
	...props
}: MarqueeProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - containerRef.current.offsetLeft);
		setScrollLeft(containerRef.current.scrollLeft);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return;
		e.preventDefault();
		const x = e.pageX - containerRef.current.offsetLeft;
		const walk = (x - startX) * 2; // Adjust scroll speed
		containerRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUpOrLeave = () => {
		setIsDragging(false);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		if (!containerRef.current) return;
		setIsDragging(true);
		setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
		setScrollLeft(containerRef.current.scrollLeft);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging || !containerRef.current) return;
		const x = e.touches[0].pageX - containerRef.current.offsetLeft;
		const walk = (x - startX) * 2; // Adjust scroll speed
		containerRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
	};

	return (
		<div
			{...props}
			style={
				{
					'--duration': `${duration}s`,
				} as React.CSSProperties
			}
			className={cn(
				'group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] cursor-grab',
				{
					'flex-row': !vertical,
					'flex-col': vertical,
					'cursor-grabbing': isDragging,
				},
				className
			)}
			ref={containerRef}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUpOrLeave}
			onMouseLeave={handleMouseUpOrLeave}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn(
							'flex shrink-0 justify-around [gap:var(--gap)]',
							{
								'animate-marquee flex-row': !vertical,
								'animate-marquee-vertical flex-col': vertical,
								'group-hover:[animation-play-state:paused]':
									pauseOnHover,
								'[animation-direction:reverse]': reverse,
							}
						)}
					>
						{children}
					</div>
				))}
		</div>
	);
}
