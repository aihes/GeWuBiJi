/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router 在 Next.js 13.4+ 中已经稳定，不需要 experimental 配置
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // 启用严格模式
  reactStrictMode: true,
  // 启用 SWC 压缩
  swcMinify: true,
  // 在构建时忽略 ESLint 错误
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
