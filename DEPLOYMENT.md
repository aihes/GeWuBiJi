# 部署指南 - 格物笔记

本文档详细说明如何部署"格物笔记"博客系统到各种平台。

## 🚀 Vercel 部署（推荐）

Vercel 是 Next.js 的官方推荐部署平台，提供最佳的性能和开发体验。

### 快速部署步骤

1. **访问 Vercel**
   - 打开 [https://vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择 `aihes/GeWuBiJi` 仓库
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Next.js (自动检测)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

4. **设置环境变量**
   ```
   NEXT_PUBLIC_GA_ID = G-2H9RXMXW8T
   ```

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 获得部署 URL: `https://gewubiji.vercel.app`

### 步骤 3: 自定义域名（可选）

1. 在 Vercel 项目设置中，找到 "Domains" 选项
2. 添加您的自定义域名
3. 按照提示配置 DNS 记录

## 🌐 Netlify 部署

### 步骤 1: 创建 netlify.toml 配置文件

在项目根目录创建 `netlify.toml` 文件：

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 步骤 2: 部署到 Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 点击 "New site from Git"
3. 选择您的 Git 提供商（GitHub/GitLab/Bitbucket）
4. 选择 `gewubiji` 仓库
5. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. 点击 "Deploy site"

## 🚂 Railway 部署

### 步骤 1: 创建 railway.json 配置文件

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 步骤 2: 部署到 Railway

1. 访问 [railway.app](https://railway.app)
2. 点击 "Start a New Project"
3. 选择 "Deploy from GitHub repo"
4. 选择您的 `gewubiji` 仓库
5. Railway 会自动检测 Next.js 项目并部署

## 🐳 Docker 部署

### 步骤 1: 创建 Dockerfile

```dockerfile
# 使用官方 Node.js 18 镜像
FROM node:18-alpine AS base

# 安装依赖阶段
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 复制 package 文件
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# 构建阶段
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 构建应用
RUN npm run build

# 运行阶段
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制构建产物
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 步骤 2: 创建 .dockerignore

```
node_modules
.next
.git
*.md
.env*.local
```

### 步骤 3: 构建和运行

```bash
# 构建镜像
docker build -t gewubiji .

# 运行容器
docker run -p 3000:3000 gewubiji
```

## 🔧 环境变量配置

如果您需要配置环境变量，可以创建 `.env.local` 文件：

```env
# 网站基本信息
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=格物笔记
NEXT_PUBLIC_AUTHOR_NAME=AI贺贺

# 分析工具（可选）
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 性能优化建议

### 1. 图片优化

- 使用 Next.js Image 组件
- 配置图片域名白名单
- 启用图片格式优化（WebP/AVIF）

### 2. 缓存策略

```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/posts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

### 3. 静态生成优化

确保所有页面都能正确进行静态生成：

```bash
# 检查构建输出
npm run build

# 查看生成的页面类型
# ● (Static)  - 静态生成
# ○ (SSG)     - 静态生成 + getStaticProps
# λ (Server)  - 服务端渲染
```

## 🔍 故障排除

### 常见问题

1. **Node.js 版本错误**
   ```
   Error: Node.js version >= 18.17.0 is required
   ```
   解决方案：升级 Node.js 到 18.17.0 或更高版本

2. **依赖安装失败**
   ```bash
   # 清除缓存重新安装
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **构建失败**
   ```bash
   # 检查 TypeScript 错误
   npm run build
   
   # 修复 ESLint 错误
   npm run lint -- --fix
   ```

4. **Markdown 文件解析错误**
   - 检查 frontmatter 格式是否正确
   - 确保日期格式为 YYYY-MM-DD
   - 验证 YAML 语法

### 调试技巧

1. **本地调试**
   ```bash
   # 启用详细日志
   DEBUG=* npm run dev
   
   # 检查构建产物
   npm run build
   npm run start
   ```

2. **生产环境调试**
   ```bash
   # 启用 Next.js 调试模式
   NODE_ENV=production DEBUG=next:* npm start
   ```

## 📈 监控和分析

### 1. Vercel Analytics

在 Vercel 项目设置中启用 Analytics 功能。

### 2. Google Analytics

```javascript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🎯 下一步

部署完成后，您可以：

1. 配置自定义域名
2. 设置 SSL 证书（通常自动配置）
3. 配置 CDN 加速
4. 设置监控和日志
5. 配置自动部署流水线

祝您部署顺利！🎉
