import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostData, formatDate, getRelatedPosts } from '@/lib/posts'
import BackToTop from '@/components/BackToTop'
import ReadingProgress from '@/components/ReadingProgress'

// 生成静态参数
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// 生成动态元数据
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  try {
    const postData = await getPostData(params.slug)
    
    return {
      title: postData.title,
      description: postData.summary || `阅读 AI贺贺 的文章：${postData.title}`,
      keywords: postData.tags.join(', '),
      openGraph: {
        title: postData.title,
        description: postData.summary || `阅读 AI贺贺 的文章：${postData.title}`,
        type: 'article',
        publishedTime: postData.date,
        authors: ['AI贺贺'],
        tags: postData.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: postData.title,
        description: postData.summary || `阅读 AI贺贺 的文章：${postData.title}`,
      },
    }
  } catch (error) {
    return {
      title: '文章未找到',
      description: '您访问的文章不存在',
    }
  }
}

// 文章页面组件
export default async function PostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  let postData
  
  try {
    postData = await getPostData(params.slug)
  } catch (error) {
    notFound()
  }

  // 获取相关文章
  const relatedPosts = getRelatedPosts(postData.slug, postData.tags, 3)

  return (
    <>
      <ReadingProgress />
      <div className="container-prose py-8">
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

      {/* 文章头部 */}
      <header className="mb-12">
        <div className="text-center space-y-4">
          {/* 文章标题 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
            {postData.title}
          </h1>
          
          {/* 文章元信息 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime={postData.date}>
                {formatDate(postData.date)}
              </time>
            </div>
            
            <span className="hidden sm:block text-gray-300">|</span>
            
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>AI贺贺</span>
            </div>
          </div>

          {/* 文章标签 */}
          {postData.tags && postData.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {postData.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* 文章内容 */}
      <article className="prose prose-lg lg:prose-xl prose-gray max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-code:text-gray-800 prose-code:bg-gray-100 prose-pre:bg-gray-900 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:text-gray-700">
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>

      {/* 文章底部分割线 */}
      <div className="my-16 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
          <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
          <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
        </div>
      </div>

      {/* 相关文章推荐 */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8 text-center">
            相关文章
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <article key={post.slug} className="article-card group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="font-serif font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  {post.summary && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                      {post.summary}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <time 
                      dateTime={post.date}
                      className="text-xs text-gray-500"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors duration-200">
                      阅读 →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      </div>

      {/* 返回顶部按钮 */}
      <BackToTop />
    </>
  )
}
