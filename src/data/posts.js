import personalDeveloperContent from '../../content/posts/personal-developer-cloud-era.md?raw'

export const posts = [
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
