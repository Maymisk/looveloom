import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
	return (
		<nav className="w-full px-8">
			<Link
				href={'/'}
				className="w-full flex justify-center items-center gap-3 mx-auto object-cover"
			>
				<Image
					src={'/logo.png'}
					alt="Name Logo"
					width={120}
					height={120}
					className="h-[6.25rem] object-contain"
				/>

				<h1 className="text-3xl font-bold mr-4">Name</h1>
			</Link>
		</nav>
	);
}
