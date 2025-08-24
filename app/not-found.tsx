'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-prose py-16">
      <div className="text-center">
        {/* 404 图标 */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              className="w-12 h-12 text-primary-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        </div>

        {/* 错误信息 */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-semibold text-gray-900">
            页面未找到
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            抱歉，您访问的页面不存在。可能是链接错误，或者页面已被移动。
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="btn-primary inline-flex items-center"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            返回首页
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200 inline-flex items-center"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回上页
          </button>
        </div>

        {/* 建议链接 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            您可能感兴趣的内容
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors">
              最新文章
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/about" className="text-primary-600 hover:text-primary-700 transition-colors">
              关于我
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/archive" className="text-primary-600 hover:text-primary-700 transition-colors">
              文章归档
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
