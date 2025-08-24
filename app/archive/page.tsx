import { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPostsData, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: '文章归档',
  description: '按时间顺序浏览所有文章，探索知识的积累历程。',
}

export default function ArchivePage() {
  const allPostsData = getSortedPostsData()

  // 按年份分组文章
  const postsByYear = allPostsData.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<string, typeof allPostsData>)

  const years = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="container-prose py-12">
      {/* 返回首页链接 */}
      <nav className="mb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200 group"
        >
          <svg 
            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>
      </nav>

      {/* 页面头部 */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          文章归档
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          按时间顺序浏览所有文章，见证知识的积累历程
        </p>
        <div className="mt-6 text-sm text-gray-500">
          共 {allPostsData.length} 篇文章
        </div>
      </header>

      {/* 归档内容 */}
      {allPostsData.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无文章</h3>
          <p className="text-gray-600">文章正在准备中，敬请期待...</p>
        </div>
      ) : (
        <div className="space-y-12">
          {years.map((year) => (
            <section key={year} className="relative">
              {/* 年份标题 */}
              <div className="sticky top-20 z-10 bg-white/80 backdrop-blur-sm py-2 mb-6">
                <h2 className="text-2xl font-serif font-semibold text-gray-900 flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                  {year} 年
                  <span className="ml-3 text-sm font-normal text-gray-500">
                    ({postsByYear[year].length} 篇)
                  </span>
                </h2>
              </div>

              {/* 文章列表 */}
              <div className="space-y-4 ml-6 border-l-2 border-gray-200 pl-6">
                {postsByYear[year].map((post, index) => (
                  <article key={post.slug} className="relative group">
                    {/* 时间线圆点 */}
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-white border-2 border-primary-400 rounded-full group-hover:border-primary-600 transition-colors duration-200"></div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-primary-200 transition-all duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="block group-hover:text-primary-600 transition-colors duration-200"
                        >
                          <h3 className="font-serif font-semibold text-gray-900 line-clamp-1">
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

                      {post.summary && (
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                          {post.summary}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        {/* 标签 */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-gray-400">
                                +{post.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* 阅读链接 */}
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200 flex items-center group/link"
                        >
                          阅读
                          <svg 
                            className="w-3 h-3 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* 统计信息 */}
      {allPostsData.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {allPostsData.length}
              </div>
              <div className="text-sm text-gray-600">总文章数</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {years.length}
              </div>
              <div className="text-sm text-gray-600">写作年份</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {Array.from(new Set(allPostsData.flatMap(post => post.tags))).length}
              </div>
              <div className="text-sm text-gray-600">标签数量</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
