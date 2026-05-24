<template>
  <div class="blog-container">
    <header class="blog-header" role="banner">
      <nav aria-label="主导航">
        <a href="/" class="logo" aria-label="ifelse.work 首页">
          <h1>ifelse<span class="dot">.</span>work</h1>
        </a>
        <ul class="nav-links">
          <li><a href="/">首页</a></li>
          <li><a href="/archive">归档</a></li>
          <li><a href="/about">关于</a></li>
        </ul>
      </nav>
      <p class="tagline">代码 · 思考 · 分享</p>
    </header>
    
    <main class="blog-main" role="main">
      <article class="post-card" v-for="post in posts" :key="post.id" itemscope itemtype="https://schema.org/BlogPosting">
        <h2 itemprop="headline">
          <a :href="post.link" itemprop="url">{{ post.title }}</a>
        </h2>
        <time :datetime="post.date" itemprop="datePublished">{{ formatDate(post.date) }}</time>
        <p itemprop="description">{{ post.excerpt }}</p>
        <a :href="post.link" class="read-more" :aria-label="'阅读更多：' + post.title">阅读更多 →</a>
      </article>
    </main>
    
    <footer class="blog-footer" role="contentinfo">
      <div class="footer-links">
        <a href="/sitemap.xml">站点地图</a>
        <span class="separator">·</span>
        <a href="https://github.com" rel="noopener noreferrer" target="_blank">GitHub</a>
      </div>
      <p>© {{ currentYear }} ifelse.work</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const posts = ref([
  {
    id: 1,
    title: '欢迎来到 ifelse.work',
    date: '2026-05-23',
    excerpt: '这是一个新的开始，记录技术与思考的地方。',
    link: '/posts/welcome'
  }
])

const currentYear = computed(() => new Date().getFullYear())

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00+08:00')
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style>
/* ========== Reset & Base ========== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

/* ========== Layout ========== */
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.25rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ========== Header ========== */
.blog-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
}

.logo h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
  transition: color 0.2s;
  margin-bottom: 0;
}

.logo:hover h1 {
  color: #0066cc;
}

.dot {
  color: #0066cc;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.nav-links a {
  color: #666;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.nav-links a:hover {
  color: #0066cc;
  border-bottom-color: #0066cc;
}

.tagline {
  color: #888;
  font-size: 1rem;
  margin-top: 1rem;
}

/* ========== Post Cards ========== */
.blog-main {
  flex: 1;
}

.post-card {
  background: white;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
}

.post-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.post-card h2 a {
  color: #1a1a1a;
  transition: color 0.2s;
}

.post-card h2 a:hover {
  color: #0066cc;
}

.post-card time {
  color: #999;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 0.75rem;
}

.post-card p {
  margin-bottom: 1rem;
  color: #555;
  line-height: 1.7;
}

.read-more {
  color: #0066cc;
  font-weight: 500;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  transition: gap 0.2s;
}

.read-more:hover {
  text-decoration: underline;
}

/* ========== Footer ========== */
.blog-footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  color: #888;
  font-size: 0.9rem;
}

.footer-links {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #888;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #0066cc;
}

.separator {
  margin: 0 0.5rem;
  color: #ccc;
}

/* ========== Responsive ========== */
@media (max-width: 640px) {
  .blog-header h1,
  .logo h1 {
    font-size: 1.8rem;
  }

  .post-card {
    padding: 1.5rem;
  }

  .post-card h2 {
    font-size: 1.2rem;
  }
}
</style>
