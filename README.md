# 艾维果 (IvyGo) 产品文档和博客

这是艾维果产品的官方文档和博客网站，使用 Docusaurus 构建，部署在 GitHub Pages 上。

## 技术栈

- **Docusaurus**: 静态网站生成器
- **GitHub Pages**: 静态网站托管
- **GitHub Actions**: 自动化部署

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

这将启动一个本地开发服务器，通常运行在 `http://localhost:3000`。

### 构建

```bash
npm run build
```

这将生成静态文件到 `build` 目录。

### 预览构建结果

```bash
npm run serve
```

## 项目结构

```
demoblog/
├── blog/              # 博客文章
├── docs/              # 文档
├── src/
│   ├── components/    # React 组件
│   ├── css/          # 全局样式
│   └── pages/        # 自定义页面
├── static/           # 静态资源（图片、字体等）
├── docusaurus.config.ts  # Docusaurus 配置文件
└── sidebars.ts       # 侧边栏配置
```

## 部署

项目配置了 GitHub Actions 自动部署。当您推送代码到 `main` 分支时，会自动触发构建和部署流程。

### 手动部署

如果需要手动部署：

```bash
npm run deploy
```

## 添加内容

### 添加文档

在 `docs/` 目录下创建 Markdown 文件即可。侧边栏会自动根据文件结构生成。

### 添加博客

在 `blog/` 目录下创建 Markdown 文件，文件名格式为 `YYYY-MM-DD-文章标题.md`。

### 修改配置

主要配置文件：
- `docusaurus.config.ts`: 网站基本配置
- `sidebars.ts`: 文档侧边栏配置
- `src/css/custom.css`: 自定义样式

## 许可证

本项目采用 ISC 许可证。

