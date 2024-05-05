# Contentlayer 网站

[![Gitpod已准备好编码](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/contentlayerdev/website)

## 本地设置

```bash
npm install
npm run dev
```

打开[https://localhost:3000](https://localhost:3000)使用浏览器查看结果。（请注意，Web 服务器使用自签名 SSL 证书，因为嵌入式 Stacklitz 编辑器需要 HTTPS 才能正常工作。）

## 实时预览

[当前 Vercel 部署](https://website-git-new-landing-page-schick.vercel.app)

## 生成全局单据标识

每个文档（文档索引页除外）都有一个唯一的八个字符的`global_id`属性。这唯一地标识了这段文档，并提供了一种无缝的方式来重新组织文档，而无需担心丢失重定向的 404 错误。

这些可以通过运行以下命令自动生成：

    node scripts/generate-page-ids.mjs

使用此命令验证所有`global_id`值是否唯一：

    node scripts/validate-duplicate-ids.mjs
