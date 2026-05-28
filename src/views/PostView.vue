<template>
  <div class="post-view container container--narrow" v-if="post">
    <article class="post-article" itemscope itemtype="https://schema.org/BlogPosting">
      <header class="article-header">
        <h1 itemprop="headline">{{ post.title }}</h1>
        <div class="article-meta">
          <time :datetime="post.date" itemprop="datePublished">{{ formatDate(post.date) }}</time>
          <span class="meta-sep">·</span>
          <span>{{ post.readTime }} read</span>
          <span class="meta-sep">·</span>
          <span itemprop="author">{{ post.author }}</span>
        </div>
        <div class="article-tags" v-if="post.tags">
          <span class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
      </header>
      <div class="article-content" itemprop="articleBody" v-html="renderedContent"></div>
      <footer class="article-footer">
        <div class="author-card">
          <div class="author-info">
            <h3>About the Author</h3>
            <p><strong>Yiwei's Notebook</strong></p>
            <p>Focusing on cloud services, AI technology, and business analysis — delivering valuable insights for indie developers and startup teams.</p>
          </div>
        </div>
        <div class="back-link">
          <router-link to="/">← Back to Home</router-link>
        </div>
      </footer>
    </article>
  </div>
  <div class="post-view container container--narrow" v-else>
    <div class="not-found">
      <h2>Article Not Found</h2>
      <p>Sorry, the article you're looking for doesn't exist or has been removed.</p>
      <router-link to="/">Back to Home</router-link>
    </div>
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
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

onMounted(() => {
  nextTick(() => {
    const headings = document.querySelectorAll('.article-content h1, .article-content h2, .article-content h3')
    headings.forEach((h, i) => {
      if (!h.id) h.id = 'heading-' + i
    })
  })
})
</script>

<style scoped>
.post-view { padding-top: 2rem; padding-bottom: 3rem; }
.post-article { max-width: 720px; margin: 0 auto; }

.article-header { margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid var(--color-border); }
.article-header h1 {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}
.article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  flex-wrap: wrap;
}
.meta-sep { color: var(--color-border); }
.article-tags { margin-top: 1rem; display: flex; gap: 0.4rem; flex-wrap: wrap; }
.tag {
  display: inline-block;
  background: rgba(230, 57, 70, 0.1);
  color: var(--color-red);
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Article content typography */
.article-content { font-size: 1.05rem; line-height: 1.8; color: var(--color-text-primary); }
.article-content :deep(h1) {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 700;
  margin: 2.5rem 0 1rem;
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
}
.article-content :deep(h2) {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 600;
  margin: 2rem 0 0.75rem;
  color: var(--color-text-primary);
}
.article-content :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem;
  color: var(--color-text-primary);
}
.article-content :deep(p) { margin-bottom: 1.25rem; }
.article-content :deep(a) { color: var(--color-gold); text-decoration: underline; text-underline-offset: 2px; }
.article-content :deep(a:hover) { color: var(--color-gold-light); }
.article-content :deep(strong) { font-weight: 600; color: var(--color-text-primary); }
.article-content :deep(em) { font-style: italic; }
.article-content :deep(ul), .article-content :deep(ol) { margin-bottom: 1.25rem; padding-left: 1.5rem; }
.article-content :deep(li) { margin-bottom: 0.5rem; line-height: 1.7; }
.article-content :deep(blockquote) {
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  background: var(--color-bg-card);
  border-left: 3px solid var(--color-red);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  color: var(--color-text-secondary);
}
.article-content :deep(hr) {
  border: none;
  height: 1px;
  background: var(--color-border);
  margin: 2.5rem 0;
}

/* Code blocks */
.article-content :deep(.code-block) {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1.25rem;
  border-radius: var(--radius-sm);
  overflow-x: auto;
  margin: 1.5rem 0;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
}
.article-content :deep(code) {
  background: var(--color-bg-card-hover);
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--color-gold);
}
.article-content :deep(.code-block code) { background: none; padding: 0; color: inherit; font-size: inherit; }

/* Tables */
.article-content :deep(table) { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem; }
.article-content :deep(th) {
  background: var(--color-bg-card);
  font-weight: 600;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-border);
}
.article-content :deep(td) { padding: 0.75rem 1rem; border-bottom: 1px solid var(--color-border-light); }

/* Article footer */
.article-footer { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-border); }
.author-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
}
.author-info h3 { font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
.author-info p { margin-bottom: 0.25rem; font-size: 0.95rem; color: var(--color-text-secondary); }
.back-link { text-align: center; }
.back-link a { color: var(--color-gold); font-weight: 500; }
.back-link a:hover { text-decoration: underline; }

.not-found { text-align: center; padding: 4rem 0; }
.not-found h2 { margin-bottom: 1rem; color: var(--color-text-primary); }
.not-found a { color: var(--color-gold); }
.not-found a:hover { text-decoration: underline; }

@media (max-width: 640px) {
  .article-header h1 { font-size: 1.5rem; }
  .article-content :deep(h1) { font-size: 1.4rem; }
  .article-content :deep(h2) { font-size: 1.2rem; }
}
</style>
