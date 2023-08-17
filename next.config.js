/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        buffer: true,
        serverActions:true, // Enable the buffer experimental feature
      },
}

module.exports = nextConfig
