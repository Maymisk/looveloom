import { Navbar } from '@/shared/components/navbar';

import { cn } from '@/lib/utils';
import { Toaster } from '@/shared/components/sonner';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import dbConnect from './api/mongo';
import './globals.css';
import { Footer } from '@/shared/components/footer';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700'],
	style: ['italic', 'normal'],
	variable: '--poppins',
});

export const metadata: Metadata = {
	title: 'Loveloom',
	description:
		'Weave your love story into a custom page and share it with the world',
	icons: ['/logo.png'],
	openGraph: {
		type: 'website',
		title: 'Loveloom - your love story sharing platform',
		description:
			'Get your own custom page to share your love story with the world',
		url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
		images: [{ url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/logo.png` }],
	},
	twitter: {
		title: 'Loveloom - your love story sharing platform',
		description:
			'Get your own custom page to share your love story with the world',
		card: 'summary_large_image',
		images: [{ url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/logo.png` }],
	},
	keywords: [
		'love',
		'loveloom',
		'loom',
		'looveloom',
		'love story sharing platform',
		'love story',
		'love page',
		'love sharing',
		'couples',
		'couple story',
		'couple',
		'couple platform',
	],
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

				<Footer />

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
