const isProd = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: isDevelopment ? '' : '/profile', // uncomment this if local mode
    basePath: '/profile',
    output: 'export',
    assetPrefix: isProd ? '/profile/' : '',
    images: {
        unoptimized: true
    }
};

export default nextConfig;