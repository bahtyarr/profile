const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    output: 'export',
    assetPrefix: isProd ? '/profile/' : '',
  };

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
//     images: {
//         unoptimized: true,
//     },
// };

// module.exports = nextConfig;