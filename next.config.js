/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: [
    //         'www.logodesignscenter.com',
    //         'http://localhost:3000/',
    //     ],
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.logodesignscenter.com',
                pathname: '**',
            },
        ],
    },
}
module.exports = nextConfig