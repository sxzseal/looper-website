# Looper Website

Looper 产品官网，基于 Astro 5。使用黑、白与中性灰主题，Logo 与产品实拍图保留原色，以大字号排版、分层能力展示和可放大的产品实拍图介绍本地 AI 工作空间。

## 开发与构建

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # 静态文件输出到 dist/
npm run preview   # 预览构建结果
```

## 内容维护

- `src/data/product.ts`：功能与真实更新记录，依据同级 `../looper` 的 README、CHANGELOG 和已实现功能维护。开发进展不等同于可下载版本。
- `src/data/downloads.json`：最近核实的稳定通道下载快照。页面在浏览器中分别刷新各平台元数据；刷新失败保留已知链接，没有已知链接的平台显示暂不可用。
- `npm run sync:downloads`：从现有 `updater.sxlw.ltd` 更新快照。各平台独立处理；所有平台失败时不改文件并返回失败。
- `src/data/product-images.ts`：6 张产品实拍图的说明和尺寸；`public/images/product/` 提供 960、1680、2240 像素宽的 WebP。
- `src/components/Showcase.astro`：资料调研、项目协作与流程复用三个可切换的实拍场景。
- `src/components/Hero.astro`：首屏展示对话与文档并排的真实工作空间。
- `src/components/ProductGallery.astro`：工作流库与内置技能实拍。
- `src/components/ProductImage.astro`、`ImageViewer.astro`：统一响应式图片与原生 dialog 预览；窄屏可横向查看，支持 Escape 关闭与焦点返回。JavaScript 不可用时直接打开大图。
- `src/styles/global.css`：响应式布局、品牌样式，遵循系统减少动态效果设置。

下载链接只接受 HTTPS 的 `releases.sxlw.ltd` 地址。页面读取更新服务的发布元数据，不代替桌面更新器的安装包签名验证。不同平台的稳定版本分别展示，不把本地源码版本当作已发布安装包。

页面交互使用原生 JavaScript，FAQ 使用原生 details/summary。首页不加载 React / WebGL 场景，也不接管原生滚动。

## 产品截图来源

2026-11-20 从本地 Looper 0.10.1 当前源码构建的独立实例中实拍。使用独立数据目录和专用演示项目，未复制正式版或日常开发版的会话、文件、模型凭据。对话内容为预置演示数据，工作流仅做编排展示，未实际执行；页面明确标注演示环境与开发版界面。

原始截图保留在本机同级 `../looper/.tmp/website-capture-20261120/screenshots/`。网页素材仅做裁切、缩放与 WebP 编码，没有重绘界面；页面保留 Logo 和实拍图片的真实色彩。裁切区域记录于 `public/images/product/capture-manifest.json`。原图、展示数据和截图专用客户端均不进入官网构建；替换素材时同步维护图片说明与清单。

本轮视觉参考：[MotionSites · Minimal Workflow SaaS](https://motionsites.org/prompts/minimal-workflow-saas) 的轻量界面层次与入场动效，以及 [Anchor AI](https://motionsites.org/prompts/anchor-ai) 的深色构图。实现使用本项目的内容和素材。
