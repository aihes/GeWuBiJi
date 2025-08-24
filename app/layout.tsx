import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: {
    default: 'AI贺贺 格物笔记',
    template: '%s | AI贺贺 格物笔记',
  },
  description: '探究事物原理，获得真知。AI贺贺的个人博客，记录思考与学习的数字花园。',
  keywords: ['博客', '技术', '思考', '学习', '格物致知', 'AI贺贺'],
  authors: [{ name: 'AI贺贺' }],
  creator: 'AI贺贺',
  publisher: 'AI贺贺',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://gewubiji.vercel.app',
    title: 'AI贺贺 格物笔记',
    description: '探究事物原理，获得真知。AI贺贺的个人博客，记录思考与学习的数字花园。',
    siteName: 'AI贺贺 格物笔记',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI贺贺 格物笔记',
    description: '探究事物原理，获得真知。AI贺贺的个人博客，记录思考与学习的数字花园。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* 页面头部导航 */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <nav className="container-prose py-4">
            <div className="flex items-center justify-between">
              {/* Logo 和站点标题 */}
              <div className="flex items-center space-x-3">
                <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">格</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-serif font-bold text-gray-900 leading-none">
                      格物笔记
                    </h1>
                    <p className="text-xs text-gray-500 leading-none mt-0.5">
                      AI贺贺的数字花园
                    </p>
                  </div>
                </a>
              </div>

              {/* 导航菜单 */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="nav-link">
                  首页
                </a>
                <a href="/about" className="nav-link">
                  关于
                </a>
                <a href="/archive" className="nav-link">
                  归档
                </a>
              </div>

              {/* 移动端菜单按钮 */}
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        {/* 主要内容区域 */}
        <main className="flex-1">
          {children}
        </main>

        {/* 页面底部 */}
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="container-prose py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 站点信息 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">格</span>
                  </div>
                  <h3 className="font-serif font-semibold text-gray-900">格物笔记</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  探究事物原理，获得真知。<br />
                  记录思考与学习的数字花园。
                </p>
              </div>

              {/* 快速链接 */}
              <div className="space-y-4">
                <h3 className="font-serif font-semibold text-gray-900">快速导航</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">最新文章</a></li>
                  <li><a href="/archive" className="text-gray-600 hover:text-primary-600 transition-colors">文章归档</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">关于我</a></li>
                </ul>
              </div>

              {/* 联系方式 */}
              <div className="space-y-4">
                <h3 className="font-serif font-semibold text-gray-900">联系方式</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/aihes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/eric2000ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <span className="sr-only">X (Twitter)</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 版权信息 */}
            <div className="border-t border-gray-200 mt-8 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © 2025 AI贺贺. 保留所有权利. 
                <span className="mx-2">|</span>
                <span className="italic">格物致知，知行合一</span>
              </p>
            </div>
          </div>
        </footer>
        {/* Google Analytics */}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
