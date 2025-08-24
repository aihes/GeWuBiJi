# 格物笔记 (GeWuBiJi)

> 格物致知，知行合一 —— 记录学习心得与技术分享的个人博客

一个基于 Next.js 14 构建的现代化个人博客系统，专注于技术分享和学习心得记录。

## ✨ 特性

- 🚀 **高性能**：基于 Next.js 14 App Router，支持静态生成和服务端渲染
- 📝 **Markdown 支持**：使用 Markdown 编写文章，专注内容创作
- 🎨 **现代设计**：采用 Tailwind CSS，响应式设计，支持深色模式
- 🔍 **SEO 友好**：自动生成元数据，搜索引擎优化
- 📱 **移动优先**：完全响应式设计，在所有设备上都有良好体验
- ⚡ **快速加载**：优化的图片和代码分割，极速加载体验

## 🛠️ 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS + @tailwindcss/typography
- **Markdown 处理**：gray-matter + remark + remark-html
- **部署**：Vercel

## 🚀 快速开始

### 前置要求

- **Node.js**: 版本 >= 18.17.0
- **npm**: 版本 >= 9.0.0 (或 yarn/pnpm)

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd gewubiji
```

### 2. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 4. 构建生产版本

```bash
npm run build
npm run start
```

### 4. 添加文章

在 `posts` 目录下创建 `.md` 文件，格式如下：

```markdown
---
title: '文章标题'
date: '2025-08-24'
tags: ['标签1', '标签2']
summary: '文章摘要'
---

# 文章内容

这里是文章的正文内容...
```

## 📁 项目结构

```
gewubiji/
├── app/                    # Next.js App Router
│   ├── blog/[slug]/       # 动态文章页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── lib/                   # 工具库
│   └── posts.ts          # Markdown 处理逻辑
├── posts/                 # Markdown 文章目录
│   ├── hello-world.md
│   └── ...
├── public/               # 静态资源
├── tailwind.config.ts    # Tailwind 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目配置
```

## 📝 写作指南

### Frontmatter 字段

- `title`: 文章标题（必需）
- `date`: 发布日期，格式：YYYY-MM-DD（必需）
- `tags`: 标签数组（可选）
- `summary`: 文章摘要（可选，用于 SEO 和文章列表）

### Markdown 语法支持

- 标题（H1-H6）
- 段落和换行
- **粗体** 和 *斜体*
- 列表（有序和无序）
- 链接和图片
- 代码块和行内代码
- 引用块
- 表格

## 🎨 自定义样式

项目使用 Tailwind CSS 和 @tailwindcss/typography 插件，提供了丰富的样式类：

- `.prose-enhanced`: 增强的文章样式
- `.article-card`: 文章卡片样式
- `.tag`: 标签样式
- `.gradient-text`: 渐变文本

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 自动部署完成

### 其他平台

项目支持部署到任何支持 Node.js 的平台：

- Netlify
- Railway
- Render
- 自托管服务器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👨‍💻 作者

**AI贺贺**

- 博客：[格物笔记](https://github.com/aihes/GeWuBiJi)
- GitHub: [@aihes](https://github.com/aihes)
- X (Twitter): [@eric2000ai](https://x.com/eric2000ai)

---

> "知之愈明，则行之愈笃；行之愈笃，则知之益明。" —— 朱熹
