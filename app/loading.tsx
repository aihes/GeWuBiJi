export default function Loading() {
  return (
    <div className="container-prose py-16">
      <div className="animate-pulse">
        {/* 页面头部骨架屏 */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg w-64 mx-auto mb-6"></div>
          <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-80 mx-auto"></div>
        </div>

        {/* 文章列表骨架屏 */}
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-8">
            <div className="h-8 bg-gray-200 rounded w-32"></div>
            <div className="h-5 bg-gray-200 rounded w-20"></div>
          </div>

          {/* 文章卡片骨架屏 */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="article-card">
              <div className="space-y-4">
                {/* 标题和日期 */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="h-7 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                </div>

                {/* 摘要 */}
                <div className="space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-full"></div>
                  <div className="h-5 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-5 bg-gray-200 rounded w-4/6"></div>
                </div>

                {/* 标签和链接 */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 加载指示器 */}
      <div className="fixed bottom-8 right-8">
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
