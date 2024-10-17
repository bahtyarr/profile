const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/profile' : '';

export { prefix };