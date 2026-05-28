import foundersPlaybookEnglishContent from '../../content/posts/founders-playbook-english.md?raw'
import personalDeveloperContent from '../../content/posts/personal-developer-cloud-era.md?raw'
import chinaTechContent from '../../content/posts/china-tech-exploration.md?raw'

export const posts = [
  {
    slug: 'china-tech-exploration',
    title: 'Exploring China Tech: Innovation Frontiers in 2026',
    date: '2026-05-28',
    excerpt: 'From large language models to semiconductor breakthroughs, from solar power to space exploration — China\'s tech innovation is rewriting the global landscape.',
    tags: ['AI', 'Semiconductors', 'New Energy', 'Space'],
    author: 'Yiwei',
    readTime: '10 min',
    content: chinaTechContent
  },
  {
    slug: 'founders-playbook-english',
    title: 'The Founder\'s Playbook: Building an AI-Native Startup',
    date: '2026-05-25',
    excerpt: 'Anthropic\'s official guide: How AI reshapes the startup journey from Idea to Scale. Full English edition.',
    tags: ['AI Startup', 'Founder', 'Anthropic', 'MVP', 'Scale', 'English'],
    author: 'Yiwei',
    readTime: '15 min',
    content: foundersPlaybookEnglishContent
  },
  {
    slug: 'personal-developer-cloud-era',
    title: 'Indie Developers and the Golden Age of Cloud Services: How One-Person Companies Are Reshaping a Trillion-Dollar Market',
    date: '2026-05-24',
    excerpt: 'The booming rise of indie developers is fundamentally reshaping the demand structure, business models, and competitive logic of the cloud services market. While China and the US share this trend, they have taken distinctly different paths.',
    tags: ['Cloud Services', 'AI', 'Indie Developer', 'Business Analysis', 'MaaS'],
    author: 'Yiwei',
    readTime: '25 min',
    content: personalDeveloperContent
  }
]

export function getPost(slug) {
  return posts.find(p => p.slug === slug)
}
