# Looper Website

Looper 产品官网，基于 Astro 5。沿用应用默认的石墨灰与暖白主题，使用产品项目中的正式 Logo，以简洁排版和产品画布展示本地 AI 工作空间。

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
- `src/components/Showcase.astro`：可切换的使用场景。交互演示明确标注为示意，画布图是既有产品界面示例。
- `src/styles/global.css`：响应式布局、品牌样式，遵循系统减少动态效果设置。

下载链接只接受 HTTPS 的 `releases.sxlw.ltd` 地址。页面读取更新服务的发布元数据，不代替桌面更新器的安装包签名验证。不同平台的稳定版本分别展示，不把本地源码版本当作已发布安装包。

页面交互使用原生 JavaScript，FAQ 使用原生 details/summary。首页不加载 React / WebGL 场景，也不接管原生滚动。
