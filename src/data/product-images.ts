export interface ProductScreenshot {
  name: string;
  title: string;
  alt: string;
  width: number;
  height: number;
}

export const screenshots = {
  workspace: {
    name: 'workspace',
    title: '对话与文档工作空间',
    alt: 'Looper 真实界面：左侧整理资料与方案对比，右侧并排预览 Markdown 文档，内容为演示数据',
    width: 1680,
    height: 1027,
  },
  research: {
    name: 'research',
    title: '资料整理与方案对比',
    alt: 'Looper 真实对话界面：项目会话列表、资料比较表与下一步建议，内容为演示数据',
    width: 1680,
    height: 1027,
  },
  project: {
    name: 'project',
    title: '项目对话与代码预览',
    alt: 'Looper 真实项目协作界面：左侧讨论登录校验边界，右侧查看示例项目的 TypeScript 代码',
    width: 1680,
    height: 1027,
  },
  workflow: {
    name: 'workflow',
    title: '并行代码审查工作流',
    alt: 'Looper 真实工作流编辑器：四个并行审查节点汇总结果，右侧编辑节点属性，工作流为未执行的演示配置',
    width: 1680,
    height: 1027,
  },
  library: {
    name: 'library',
    title: '自己的工作流库',
    alt: 'Looper 工作流库实拍：每周工作整理、并行代码审查、资料调研与方案比对三个演示工作流',
    width: 1680,
    height: 336,
  },
  skills: {
    name: 'skills',
    title: '把熟悉的能力带进来',
    alt: 'Looper 干净实例中的真实内置技能列表，包括网页与 PDF、Word、演示文稿及工作空间技能',
    width: 1680,
    height: 536,
  },
} satisfies Record<string, ProductScreenshot>;
