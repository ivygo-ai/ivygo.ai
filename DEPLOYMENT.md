# 部署指南

本指南将帮助您将艾维果文档网站部署到 GitHub Pages。

## 前置条件

1. 确保您已经将代码推送到 GitHub 仓库
2. 确保仓库名称为 `demoblog`（或根据实际情况修改配置）
3. 确保您的 GitHub 用户名是 `blackswancoming`（或根据实际情况修改配置）

## 配置 GitHub Pages

### 步骤 1：启用 GitHub Pages

1. 进入您的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**（页面）
4. 在 **Source**（源）部分，选择 **GitHub Actions** 作为部署源
5. 保存设置

### 步骤 2：检查 GitHub Actions 权限

1. 在仓库的 **Settings** 中，找到 **Actions** > **General**
2. 确保 **Workflow permissions** 设置为：
   - ✅ Read and write permissions
   - ✅ Allow GitHub Actions to create and approve pull requests

### 步骤 3：更新配置文件（如需要）

如果您的 GitHub 用户名或仓库名称与配置不同，请修改 `docusaurus.config.ts` 中的以下字段：

```typescript
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/YOUR_REPO_NAME/',
organizationName: 'YOUR_USERNAME',
projectName: 'YOUR_REPO_NAME',
```

## 自动部署

配置完成后，每次您推送代码到 `main` 分支时，GitHub Actions 会自动：

1. 构建网站
2. 部署到 GitHub Pages

### 查看部署状态

1. 进入仓库的 **Actions** 标签页
2. 查看最新的工作流运行状态
3. 如果部署成功，您可以在 **Settings** > **Pages** 中看到网站 URL

## 手动部署

如果需要手动触发部署：

```bash
npm run deploy
```

**注意**：手动部署需要配置 Git 远程仓库和 GitHub token。

## 访问网站

部署成功后，您的网站将在以下地址可用：

```
https://blackswancoming.github.io/demoblog/
```

## 故障排除

### 部署失败

1. 检查 GitHub Actions 日志，查看错误信息
2. 确保所有依赖都已正确安装
3. 确保构建命令能够成功执行（本地运行 `npm run build`）

### 网站无法访问

1. 检查 GitHub Pages 设置是否正确
2. 确认 `baseUrl` 配置与仓库名称匹配
3. 等待几分钟，GitHub Pages 可能需要一些时间才能生效

### 样式或资源加载失败

1. 检查 `baseUrl` 配置是否正确
2. 确保所有静态资源路径使用相对路径
3. 清除浏览器缓存后重试

## 更新内容

要更新网站内容：

1. 修改文档（`docs/`）或博客（`blog/`）中的 Markdown 文件
2. 提交更改并推送到 GitHub
3. GitHub Actions 会自动重新部署

## 自定义域名（可选）

如果您想使用自定义域名：

1. 在 `static/` 目录下创建 `CNAME` 文件，内容为您的域名
2. 在您的域名 DNS 设置中添加 CNAME 记录，指向 `YOUR_USERNAME.github.io`
3. 在 GitHub Pages 设置中添加自定义域名

---

如有问题，请查看 [Docusaurus 部署文档](https://docusaurus.io/docs/deployment) 或提交 Issue。

