'use client';

import { cn } from '@/lib/utils';
import {
	ChangeEvent,
	ForwardedRef,
	forwardRef,
	InputHTMLAttributes,
	MouseEvent,
	ReactNode,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { Button } from './button';
import { TrashIcon } from 'lucide-react';

interface IFileInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'multiple'> {
	children: ReactNode;
	label?: string;
	defaultFiles?: FileList;
	onClearFiles?: () => void;
}

function MultipleFileInputComponent(
	{
		children,
		label,
		className,
		onChange,
		onClearFiles,
		defaultFiles,
		...rest
	}: IFileInputProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	const [files, setFiles] = useState<FileList | null>(defaultFiles || null);
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

	function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
		setFiles(event?.target.files);
		if (onChange) onChange(event);
	}

	function handleClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		inputRef.current?.click();
	}

	function handleRemoveFiles(event: MouseEvent<SVGSVGElement>) {
		event?.stopPropagation();
		setFiles(null);
		if (onClearFiles) onClearFiles();
	}

	const fileNames = [];
	for (let i = 0; i < (files?.length || 0); i++) {
		const item = files?.item(i);

		if (!item) continue;

		fileNames.push(item.name);
	}
	const fileNameString = fileNames?.length ? fileNames.join(', ') : '';

	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label className="font-semibold text-white">{label}</label>
			)}

			<Button
				type="button"
				className="relative bg-gray-800 border border-transparent font-light outline-none focus:border-red-300"
				onClick={handleClick}
			>
				<span
					title={fileNameString}
					className={cn('max-w-[80%] truncate', {
						'flex gap-2': !fileNameString,
					})}
				>
					{fileNameString ? fileNameString : children}
				</span>

				{files?.length && (
					<TrashIcon
						width={16}
						height={16}
						className="absolute right-3 text-red-500 hover:text-red-400 transition-all"
						onClick={handleRemoveFiles}
					/>
				)}
			</Button>

			<input
				ref={inputRef}
				type="file"
				multiple
				className={cn(
					'sr-only top-[9999px] right-[9999px] w-full',
					className
				)}
				onChange={handleOnChange}
				{...rest}
			/>
		</div>
	);
}

export const MultipleFileInput = forwardRef(MultipleFileInputComponent);
