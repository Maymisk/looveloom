/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: 'github.com' },
			{ hostname: 'youtube.com' },
		],
	},
};

export default nextConfig;
