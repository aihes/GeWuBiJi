import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '关于我',
  description: '了解 AI贺贺 和格物笔记的故事，以及我的学习理念和技术栈。',
}

export default function AboutPage() {
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
        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">贺</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          关于我
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          你好，我是 AI贺贺，一个热爱学习和分享的技术爱好者。
        </p>
      </header>

      {/* 主要内容 */}
      <div className="prose-enhanced">
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            我的故事
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              欢迎来到我的数字花园！我是 AI贺贺，一个对技术充满热情的学习者和实践者。
              "格物笔记"这个名字来源于古代哲学思想"格物致知"，代表着通过深入了解事物来获得真知的学习态度。
            </p>
            <p>
              在这个快速变化的时代，我相信持续学习和分享是成长的最佳方式。
              通过这个博客，我希望记录自己的学习历程，分享技术心得，也希望能够帮助到其他同样在学习路上的朋友们。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            技术栈
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                前端开发
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Vue.js</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                后端开发
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js</li>
                <li>• Python</li>
                <li>• 数据库设计</li>
                <li>• API 开发</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                工具与平台
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Git / GitHub</li>
                <li>• Vercel / Netlify</li>
                <li>• Docker</li>
                <li>• VS Code</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                学习领域
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 人工智能</li>
                <li>• 系统设计</li>
                <li>• 产品思维</li>
                <li>• 用户体验</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            学习理念
          </h2>
          <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500 mb-6">
            <blockquote className="text-gray-800 italic text-lg leading-relaxed font-medium">
              "格物致知，知行合一。通过深入了解事物的本质来获得真知，
              再将所学知识应用到实践中，形成完整的学习闭环。"
            </blockquote>
          </div>
          <div className="space-y-4">
            <p className="text-gray-800 font-medium">我的学习方法论包括：</p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">主动探索</strong>
                  <span className="text-gray-700">：带着问题去学习，而不是被动接受</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">深度思考</strong>
                  <span className="text-gray-700">：不满足于表面知识，追求本质理解</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">实践验证</strong>
                  <span className="text-gray-700">：通过项目和实践来验证所学</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">分享交流</strong>
                  <span className="text-gray-700">：通过教授他人来加深自己的理解</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            联系方式
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              如果你对我的文章有任何想法，或者想要交流学习心得，欢迎通过以下方式联系我：
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:aihehe123@gmail.com" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                邮箱联系
              </a>
              <a
                href="https://github.com/aihes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://x.com/eric2000ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X (Twitter)
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 底部引用 */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <blockquote className="text-lg italic text-gray-600 font-serif">
          "学而时习之，不亦说乎？有朋自远方来，不亦乐乎？"
        </blockquote>
        <footer className="mt-4 text-sm text-gray-500">
          —— 《论语》
        </footer>
      </div>
    </div>
  )
}
