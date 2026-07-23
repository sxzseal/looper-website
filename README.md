# Looper Website

Looper 的产品官网 / 下载页 —— 深色炫酷主题,滚动特效丰富。

> Looper 是 AI 驱动的工作流编排桌面应用 —— 一句自然语言,让 loop agent 通过本地 Claude Code 跑完整条多步流水线。

## 技术栈

- **Astro 5** — 静态站点构建
- **Tailwind CSS 3** — 原子化样式
- **Lenis** — 惯性平滑滚动
- **IntersectionObserver** — 滚动进入动画

## 特效

- Raycast 风深色 + 彩色渐变光晕 + 玻璃拟态
- Apple 官网风惯性平滑滚动
- 滚动进入 reveal / reveal-scale / stagger 动画
- 鼠标跟随光斑
- Hero 截图卡视差随滚动位移
- 大光晕 float 循环 + DAG 节点脉冲
- 网格背景径向遮罩

## 开发

```bash
npm install
npm run dev       # http://localhost:4321
```

## 构建

```bash
npm run build     # 输出到 dist/
npm run preview   # 本地预览构建产物
```

## 目录

```
src/
├── layouts/BaseLayout.astro   # 全局 layout + Lenis + Observer + 鼠标光斑
├── components/                # 各区块组件
│   ├── Nav.astro
│   ├── Hero.astro             # 大标题 + DAG 画布占位
│   ├── Features.astro         # Bento 4 卡
│   ├── Showcase.astro         # 场景 3 段
│   ├── Download.astro         # 双平台 CTA
│   ├── Changelog.astro        # 版本时间线
│   ├── FAQ.astro              # 手风琴问答
│   └── Footer.astro
├── pages/index.astro
└── styles/global.css          # 主题变量 + 组件类 + 动画
```

## 定制

- **截图**:替换 `Hero.astro` 里的 DAG SVG,改成真实产品截图
- **下载链接**:`Download.astro` 里的 `href="#"` 换成真实安装包 URL
- **配色**:`tailwind.config.mjs` 里的 `aurora.*` 色板
- **文案**:各组件顶部 frontmatter 里的数据数组

## License

MIT
