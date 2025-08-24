import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// 文章目录路径
const postsDirectory = path.join(process.cwd(), 'posts')

// 文章元数据接口
export interface PostMetadata {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
}

// 完整文章数据接口
export interface PostData extends PostMetadata {
  contentHtml: string
}

// 获取所有文章的元数据，按日期降序排列
export function getSortedPostsData(): PostMetadata[] {
  // 确保 posts 目录存在
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  // 获取所有 .md 文件名
  const fileNames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.md'))
  
  const allPostsData = fileNames.map((fileName) => {
    // 移除 .md 后缀获得 slug
    const slug = fileName.replace(/\.md$/, '')

    // 读取 markdown 文件内容
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 使用 gray-matter 解析文章元数据
    const matterResult = matter(fileContents)

    // 返回文章元数据
    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || '',
      tags: matterResult.data.tags || [],
      summary: matterResult.data.summary || '',
    } as PostMetadata
  })

  // 按日期降序排列
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// 获取所有文章的 slug，用于静态生成
export function getAllPostSlugs(): { slug: string }[] {
  // 确保 posts 目录存在
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.md'))
  
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    }
  })
}

// 根据 slug 获取文章的完整数据
export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug "${slug}" not found`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 使用 gray-matter 解析文章元数据和内容
  const matterResult = matter(fileContents)

  // 使用 remark 将 markdown 转换为 HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content)
  
  const contentHtml = processedContent.toString()

  // 返回完整的文章数据
  return {
    slug,
    title: matterResult.data.title || slug,
    date: matterResult.data.date || '',
    tags: matterResult.data.tags || [],
    summary: matterResult.data.summary || '',
    contentHtml,
  } as PostData
}

// 格式化日期显示
export function formatDate(dateString: string): string {
  if (!dateString) return ''
  
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (error) {
    return dateString
  }
}

// 获取相关文章（基于标签匹配）
export function getRelatedPosts(currentSlug: string, currentTags: string[], limit: number = 3): PostMetadata[] {
  const allPosts = getSortedPostsData()
  
  // 过滤掉当前文章
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug)
  
  // 计算每篇文章与当前文章的标签匹配度
  const postsWithScore = otherPosts.map(post => {
    const commonTags = post.tags.filter(tag => currentTags.includes(tag))
    return {
      ...post,
      score: commonTags.length,
    }
  })
  
  // 按匹配度和日期排序，返回指定数量的相关文章
  return postsWithScore
    .sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score // 按匹配度降序
      }
      return a.date < b.date ? 1 : -1 // 按日期降序
    })
    .slice(0, limit)
    .map(({ score, ...post }) => post) // 移除 score 字段
}
