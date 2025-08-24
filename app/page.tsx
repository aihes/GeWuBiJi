import Link from 'next/link'
import { getSortedPostsData, formatDate } from '@/lib/posts'

export default function HomePage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="container-prose py-12">
      {/* 页面头部介绍 */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          <span className="gradient-text">格物笔记</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          探究事物原理，获得真知。<br />
          这里是我记录思考与学习的数字花园。
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            持续更新中
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            用心记录
          </span>
        </div>
      </section>

      {/* 文章列表 */}
      <section>
        {allPostsData.length === 0 ? (
          // 空状态
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无文章</h3>
            <p className="text-gray-600">
              文章正在准备中，敬请期待...
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 最新文章标题 */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif font-semibold text-gray-900">
                最新文章
              </h2>
              <span className="text-sm text-gray-500">
                共 {allPostsData.length} 篇文章
              </span>
            </div>

            {/* 文章卡片列表 */}
            <div className="grid gap-8">
              {allPostsData.map((post, index) => (
                <article key={post.slug} className="article-card group">
                  <div className="flex flex-col space-y-4">
                    {/* 文章标题和日期 */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block"
                      >
                        <h3 className="text-xl font-serif font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <time 
                        dateTime={post.date}
                        className="text-sm text-gray-500 whitespace-nowrap"
                      >
                        {formatDate(post.date)}
                      </time>
                    </div>

                    {/* 文章摘要 */}
                    {post.summary && (
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    )}

                    {/* 标签和阅读链接 */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* 标签 */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* 阅读更多链接 */}
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200 group/link"
                      >
                        阅读全文
                        <svg 
                          className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* 文章序号（可选的视觉元素） */}
                  <div className="absolute -left-4 top-6 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 底部引用 */}
      <section className="mt-20 pt-12 border-t border-gray-200">
        <blockquote className="text-center">
          <p className="text-lg italic text-gray-600 font-serif">
            "            &ldquo;知之愈明，则行之愈笃；行之愈笃，则知之益明。&rdquo;"
          </p>
          <footer className="mt-4 text-sm text-gray-500">
            —— 朱熹《朱子语类》
          </footer>
        </blockquote>
      </section>
    </div>
  )
}
