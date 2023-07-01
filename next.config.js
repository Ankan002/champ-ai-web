/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "api.dicebear.com",
				protocol: "https",
			},
		],
	},
};

module.exports = nextConfig;
