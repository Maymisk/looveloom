import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
	return (
		<nav className="w-full px-8">
			<Link
				href={'/'}
				className="w-1/2 flex justify-center items-center gap-10 mx-auto object-cover"
			>
				<Image
					src={'/logo.png'}
					alt="Name Logo"
					width={120}
					height={120}
					className="h-[6.25rem] object-contain max-xl:hidden"
				/>

				<h1 className="text-5xl font-bold">
					<span className="text-red-300">Loove</span>loom
				</h1>
			</Link>
		</nav>
	);
}
