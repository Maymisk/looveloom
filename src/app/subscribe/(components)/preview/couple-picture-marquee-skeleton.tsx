import { ImageIcon } from 'lucide-react';

export function CouplePictureMarqueeSkeleton() {
	return (
		<div className="w-[20rem] h-[20rem] flex items-center justify-center mt-4 mx-auto border border-red-300 rounded-md">
			<ImageIcon className="w-10 h-10" />
		</div>
	);
}
