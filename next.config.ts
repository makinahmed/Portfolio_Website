import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'standalone', // instead of "export"
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_BASE_PATH: '', // optional, remove basePath for now
	},
};

export default nextConfig;