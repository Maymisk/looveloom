/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: 'github.com' },
			{ hostname: 'youtube.com' },
			{ hostname: 'avatar.vercel.sh' },
		],
	},
};

export default nextConfig;
