import { Navbar } from '@/shared/components/navbar';

import { cn } from '@/lib/utils';
import { Toaster } from '@/shared/components/sonner';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import dbConnect from './api/mongo';
import './globals.css';
import { Footer } from '@/shared/components/footer';
import Script from 'next/script';

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
			<head>
				<Script
					id="fb-pixel"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
					!function(f,b,e,v,n,t,s)
					{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};
					if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
					n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t,s)}(window, document,'script',
					'https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '1367157014282158');
					fbq('track', 'PageView');
				`,
					}}
				/>

				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: 'none' }}
						src="https://www.facebook.com/tr?id=1367157014282158&ev=PageView&noscript=1"
					/>
				</noscript>
			</head>
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
