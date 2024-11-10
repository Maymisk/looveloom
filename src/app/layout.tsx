import { Navbar } from '@/shared/components/navbar';

import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/shared/components/sonner';
import dbConnect from './api/mongo';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700'],
	style: ['italic', 'normal'],
	variable: '--poppins',
});

export const metadata: Metadata = {
	title: 'Loveloom',
	description: 'Loveloom',
	icons: ['/logo.png'],
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	await dbConnect();

	return (
		<html lang="en">
			<body className={cn('bg-gray-500 text-white', poppins.variable)}>
				<header className="h-32 flex items-center bg-gray500 shadow-md shadow-gray-800">
					<Navbar />
				</header>

				{children}

				<Toaster
					toastOptions={{
						classNames: {
							toast: 'text-white font-bold',
							error: 'bg-red-200',
							success: 'bg-green-500',
						},
					}}
				/>
			</body>
		</html>
	);
}
