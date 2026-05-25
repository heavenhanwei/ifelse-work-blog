import foundersPlaybookContent from '../../content/posts/founders-playbook-bilingual.md?raw'
import foundersPlaybookEnglishContent from '../../content/posts/founders-playbook-english.md?raw'
import personalDeveloperContent from '../../content/posts/personal-developer-cloud-era.md?raw'

export const posts = [
  {
    slug: 'founders-playbook-english',
    title: 'The Founder\'s Playbook: Building an AI-Native Startup',
    date: '2026-05-25',
    excerpt: 'Anthropic\'s official guide: How AI reshapes the startup journey from Idea to Scale. Full English edition.',
    tags: ['AI Startup', 'Founder', 'Anthropic', 'MVP', 'Scale', 'English'],
    author: '一暐',
    readTime: '15 min',
    content: foundersPlaybookEnglishContent
  },
  {
    slug: 'founders-playbook-bilingual',
    title: '创始人手册：构建 AI 原生创业公司（中英双语）',
    date: '2026-05-25',
    excerpt: 'Anthropic 官方出品：从创意到规模，AI 如何重塑创业的四个核心阶段。中英双语对照，完整译文。',
    tags: ['AI创业', '创始人', 'Anthropic', 'MVP', '规模化', '双语'],
    author: '一暐',
    readTime: '30分钟',
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
