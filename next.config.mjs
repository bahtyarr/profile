// const isProd = process.env.NODE_ENV === 'production';
// module.exports = {
//     output: 'export',
//     assetPrefix: isProd ? '/profile/' : '',
//   };

const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? '/profile/' : '',
    images: {
        unoptimized: true
    }
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
//     images: {
//         unoptimized: true,
//     },
// };

// module.exports = nextConfig;