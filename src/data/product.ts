// Product capabilities and release notes checked against ../looper on 2026-11-17.
// Development version and downloadable stable versions are intentionally separate.
export const releases = [
  {
    version: '0.10.1',
    date: '2026-11-17',
    title: '复杂任务，多一份协作力。',
    label: '开发进展',
    items: [
      '子代理并行处理子任务，进度与结果集中可见。',
      '新增存储清理，查看并清理会话与交付文件占用。',
      '改进浏览器接管、任务恢复与完成检查。',
    ],
  },
  {
    version: '0.10.0',
    date: '2026-11-14',
    title: '从一次对话，到下一次复用。',
    label: '',
    items: [
      '在会话中创建、继续编辑工作流草稿。',
      '个人文档与会话关联，移动会话后保留文件和版本。',
      '切换模型线路，继续保留会话上下文。',
    ],
  },
  {
    version: '0.9.7',
    date: '2026-11-11',
    title: '让长任务，接着跑下去。',
    label: '',
    items: [
      '强化目标执行的持久化与续跑能力。',
      '优化任务队列、工具调用和中断恢复。',
    ],
  },
];

export const features = [
  {
    name: '从一句话开始',
    text: '说清目标，带上文件和项目上下文。让 Agent 拆解任务、选择技能，接着完成执行。',
  },
  {
    name: '在你的电脑上行动',
    text: '读取项目、处理文件、调用终端与浏览器。本地运行时把想法连接到实际工作。',
  },
  {
    name: '好流程，值得再用一次',
    text: '在对话中起草工作流，在画布上编辑节点与依赖。把有效做法保存为可复用的文件。',
  },
  {
    name: '关键一步，你来拍板',
    text: '按任务配置操作权限，查看工具调用与执行记录。需要手动操作时，接管浏览器后再继续。',
  },
  {
    name: '交付物，有处可寻',
    text: '文档、表格、演示稿和项目文件留在工作空间。结合会话与文件预览，查看和继续处理结果。',
  },
  {
    name: '用熟悉的模型与技能',
    text: '配置模型服务商或兼容网关，从 GitHub 导入 Skill。把自己的工作方法带进 Looper。',
  },
];
