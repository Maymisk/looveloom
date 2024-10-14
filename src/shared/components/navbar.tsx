import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
	return (
		<nav className="w-full flex items-center justify-center px-8">
			<Link
				href={'/'}
				className="flex items-center gap-4 mx-auto object-cover"
			>
				<Image
					src={'/logo.png'}
					alt="Name Logo"
					width={120}
					height={120}
					className="h-[6.25rem] object-contain"
				/>

				<h1 className="text-4xl font-bold">Name</h1>
			</Link>
		</nav>
	);
}
