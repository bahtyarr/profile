const isProd = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
/** @type {import('next').NextConfig} */
const nextConfig = {    
    output: 'export',
    images: {
        unoptimized: true
    }
};

export default nextConfig;