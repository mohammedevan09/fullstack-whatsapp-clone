/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
      'localhost',
      '',
    ],
  },
  exportPathMap: null,
}

module.exports = nextConfig
