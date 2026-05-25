import foundersPlaybookContent from '../../content/posts/founders-playbook-ai-native-startup.md?raw'
import personalDeveloperContent from '../../content/posts/personal-developer-cloud-era.md?raw'

export const posts = [
  {
    slug: 'founders-playbook-ai-native-startup',
    title: '创始人手册：AI 原生创业指南（中英双语）',
    date: '2026-05-25',
    excerpt: 'Anthropic 官方发布：从创意到规模化，AI 如何重塑创业全流程。中英双语对照完整翻译，含四大阶段实战解析。',
    tags: ['AI创业', '创始人手册', 'Anthropic', 'AI原生', '独立开发者', 'MVP', '产品市场匹配', '中英双语', 'ClaudeCode', '创业指南'],
    author: '一暐',
    readTime: '25 分钟',
    content: foundersPlaybookContent
  },
  {
    slug: 'personal-developer-cloud-era',
    title: '个人开发者与云服务黄金时代：当一人公司重塑万亿市场',
    date: '2026-05-24',
    excerpt: '个人开发者的蓬勃发展，正在从根本上重塑云服务市场的需求结构、商业模式与竞争逻辑。中美两大市场，虽然共享这一趋势，却走出了截然不同的路径。',
    tags: ['云服务', 'AI', '独立开发者', '商业分析', 'MaaS'],
    author: '一暐',
    readTime: '25分钟',
    content: personalDeveloperContent
  }
]

export function getPost(slug) {
  return posts.find(p => p.slug === slug)
}
