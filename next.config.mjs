/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: config => {
		config.module.rules.push({
			test: /\.hbs$/,
			loader: 'handlebars-loader',
		});
		return config;
	},
	images: {
		remotePatterns: [
			{ hostname: 'github.com' },
			{ hostname: 'youtube.com' },
			{ hostname: 'avatar.vercel.sh' },
			{ hostname: '*.s3.*.amazonaws.com' },
			{ hostname: 'www.instagram.com' },
		],
	},
};

export default nextConfig;
