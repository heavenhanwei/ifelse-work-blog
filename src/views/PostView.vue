<template>
  <div class="blog-container">
    <header class="blog-header" role="banner">
      <nav aria-label="主导航">
        <router-link to="/" class="logo" aria-label="ifelse.work 首页">
          <h1>ifelse<span class="dot">.</span>work</h1>
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/archive">归档</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="article-main" role="main" v-if="post">
      <article class="post-article" itemscope itemtype="https://schema.org/BlogPosting">
        <header class="article-header">
          <h1 itemprop="headline">{{ post.title }}</h1>
          <div class="article-meta">
            <time :datetime="post.date" itemprop="datePublished">{{ formatDate(post.date) }}</time>
            <span class="separator">·</span>
            <span>{{ post.readTime }}阅读</span>
            <span class="separator">·</span>
            <span itemprop="author">{{ post.author }}</span>
          </div>
          <div class="article-tags" v-if="post.tags">
            <span class="tag" v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
          </div>
        </header>

        <div class="article-content" itemprop="articleBody" v-html="renderedContent"></div>

        <footer class="article-footer">
          <div class="author-card">
            <div class="author-info">
              <h3>关于作者</h3>
              <p><strong>一暐的笔记本</strong></p>
              <p>专注云服务、AI 技术与商业分析，为独立开发者和创业团队提供有价值的洞察。</p>
            </div>
          </div>
          <div class="back-link">
            <router-link to="/">← 返回首页</router-link>
          </div>
        </footer>
      </article>
    </main>

    <main class="article-main" v-else>
      <div class="not-found">
        <h2>文章未找到</h2>
        <p>抱歉，你访问的文章不存在或已被删除。</p>
        <router-link to="/">返回首页</router-link>
      </div>
    </main>

    <footer class="blog-footer" role="contentinfo">
      <p>© {{ currentYear }} ifelse.work</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { Marked } from 'marked'
import { getPost } from '../data/posts.js'

const route = useRoute()
const slug = route.params.slug
const post = getPost(slug)
const currentYear = computed(() => new Date().getFullYear())

const marked = new Marked({
  gfm: true,
  breaks: false,
  highlight(code, lang) {
    return `<pre class="code-block"><code class="language-${lang || 'text'}">${escapeHtml(code)}</code></pre>`
  }
})

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const renderedContent = computed(() => {
  if (!post) return ''
  // Remove YAML-like frontmatter if present
  let content = post.content
  if (content.startsWith('---')) {
    const endIdx = content.indexOf('---', 3)
    if (endIdx !== -1) {
      content = content.substring(endIdx + 3).trim()
    }
  }
  return marked.parse(content)
})

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00+08:00')
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

onMounted(() => {
  nextTick(() => {
    // Process table of contents links
    const headings = document.querySelectorAll('.article-content h1, .article-content h2, .article-content h3')
    headings.forEach((h, i) => {
      if (!h.id) h.id = 'heading-' + i
    })
  })
})
</script>

<style scoped>
.blog-container { max-width: 800px; margin: 0 auto; padding: 2rem 1.25rem; min-height: 100vh; display: flex; flex-direction: column; }
.blog-header { margin-bottom: 3rem; }
.logo h1 { font-size: 1.6rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0; }
.dot { color: #0066cc; }
.nav-links { display: flex; justify-content: center; gap: 1.5rem; margin-top: 1rem; }
.nav-links a { color: #666; font-size: .95rem; font-weight: 500; padding: .25rem 0; border-bottom: 2px solid transparent; transition: all .2s; }
.nav-links a:hover { color: #0066cc; border-bottom-color: #0066cc; }

.article-main { flex: 1; }
.post-article { max-width: 720px; margin: 0 auto; }

.article-header { margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 2px solid #e0e0e0; }
.article-header h1 { font-size: 2rem; font-weight: 700; line-height: 1.3; color: #1a1a1a; margin-bottom: 1rem; }
.article-meta { display: flex; align-items: center; gap: .5rem; color: #888; font-size: .9rem; flex-wrap: wrap; }
.article-meta time { font-weight: 500; }
.separator { color: #ccc; }
.article-tags { margin-top: 1rem; display: flex; gap: .5rem; flex-wrap: wrap; }
.tag { display: inline-block; background: #f0f0f0; color: #666; padding: .2rem .6rem; border-radius: 4px; font-size: .8rem; }

/* Article content typography */
.article-content { font-size: 1.05rem; line-height: 1.8; color: #333; }
.article-content :deep(h1) { font-size: 1.8rem; font-weight: 700; margin: 2.5rem 0 1rem; color: #1a1a1a; border-bottom: 2px solid #e0e0e0; padding-bottom: .5rem; }
.article-content :deep(h2) { font-size: 1.5rem; font-weight: 600; margin: 2rem 0 .75rem; color: #1a1a1a; }
.article-content :deep(h3) { font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 .5rem; color: #1a1a1a; }
.article-content :deep(p) { margin-bottom: 1.25rem; }
.article-content :deep(a) { color: #0066cc; text-decoration: underline; text-underline-offset: 2px; }
.article-content :deep(a:hover) { color: #0052a3; }
.article-content :deep(strong) { font-weight: 600; color: #1a1a1a; }
.article-content :deep(em) { font-style: italic; }
.article-content :deep(ul), .article-content :deep(ol) { margin-bottom: 1.25rem; padding-left: 1.5rem; }
.article-content :deep(li) { margin-bottom: .5rem; line-height: 1.7; }
.article-content :deep(blockquote) { margin: 1.5rem 0; padding: 1rem 1.25rem; background: #f8f9fa; border-left: 4px solid #0066cc; border-radius: 0 8px 8px 0; color: #555; }
.article-content :deep(hr) { border: none; height: 2px; background: #e0e0e0; margin: 2.5rem 0; border-radius: 1px; }

/* Code blocks */
.article-content :deep(.code-block) {
  background: #1e1e1e; color: #d4d4d4; padding: 1.25rem; border-radius: 8px;
  overflow-x: auto; margin: 1.5rem 0; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  font-size: .9rem; line-height: 1.6;
}
.article-content :deep(code) { background: #f5f5f5; padding: .15rem .4rem; border-radius: 4px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: .9em; color: #e83e8c; }
.article-content :deep(.code-block code) { background: none; padding: 0; color: inherit; font-size: inherit; }

/* Tables */
.article-content :deep(table) { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: .95rem; }
.article-content :deep(th) { background: #f5f5f5; font-weight: 600; text-align: left; padding: .75rem 1rem; border-bottom: 2px solid #e0e0e0; }
.article-content :deep(td) { padding: .75rem 1rem; border-bottom: 1px solid #e8e8e8; }

/* Article footer */
.article-footer { margin-top: 4rem; padding-top: 2rem; border-top: 2px solid #e0e0e0; }
.author-card { background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem; }
.author-info h3 { font-size: 1rem; margin-bottom: .5rem; color: #666; }
.author-info p { margin-bottom: .25rem; font-size: .95rem; color: #555; }
.back-link { text-align: center; }
.back-link a { color: #0066cc; font-weight: 500; }

.not-found { text-align: center; padding: 4rem 0; }
.not-found h2 { margin-bottom: 1rem; }
.not-found a { color: #0066cc; }

.blog-footer { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e0e0e0; color: #888; font-size: .9rem; }

@media (max-width: 640px) {
  .article-header h1 { font-size: 1.5rem; }
  .article-content :deep(h1) { font-size: 1.5rem; }
  .article-content :deep(h2) { font-size: 1.3rem; }
}
</style>
