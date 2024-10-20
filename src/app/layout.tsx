import { Navbar } from '@/shared/components/navbar';

import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700'],
	style: ['italic', 'normal'],
	variable: '--poppins',
});

export const metadata: Metadata = {
	title: 'Love you',
	description: 'Love you',
	icons: ['/favicon.webp'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn('bg-gray-500 text-white', poppins.variable)}>
				<header className="h-32 flex items-center bg-gray500 shadow-md shadow-gray-800">
					<Navbar />
				</header>

				{children}
			</body>
		</html>
	);
}
