<template>
  <div class="blog-container">
    <header class="blog-header" role="banner">
      <nav aria-label="Main navigation">
        <a href="/" class="logo" aria-label="ifelse.work Home">
          <h1>ifelse<span class="dot">.</span>work</h1>
        </a>
        <ul class="nav-links">
          <li><router-link to="/" class="active">Home</router-link></li>
          <li><router-link to="/archive">Archive</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
      <p class="tagline">Code · Thoughts · Sharing</p>
    </header>
    
    <main class="blog-main" role="main">
      <article class="post-card" v-for="post in posts" :key="post.slug" itemscope itemtype="https://schema.org/BlogPosting">
        <h2 itemprop="headline">
          <router-link :to="`/posts/${post.slug}`" itemprop="url">{{ post.title }}</router-link>
        </h2>
        <time :datetime="post.date" itemprop="datePublished">{{ formatDate(post.date) }}</time>
        <p itemprop="description">{{ post.excerpt }}</p>
        <router-link :to="`/posts/${post.slug}`" class="read-more" :aria-label="'Read more: ' + post.title">Read More →</router-link>
      </article>
    </main>
    
    <footer class="blog-footer" role="contentinfo">
      <div class="footer-links">
        <a href="/sitemap.xml">Sitemap</a>
        <span class="separator">·</span>
        <a href="https://github.com" rel="noopener noreferrer" target="_blank">GitHub</a>
      </div>
      <p>© {{ currentYear }} ifelse.work</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { posts } from '../data/posts.js'

const currentYear = computed(() => new Date().getFullYear())

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00+08:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Roboto, sans-serif;
  line-height: 1.6; color: #333; background: #f5f5f5;
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
}
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
.blog-container { max-width: 800px; margin: 0 auto; padding: 2rem 1.25rem; min-height: 100vh; display: flex; flex-direction: column; }
.blog-header { text-align: center; margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 2px solid #e0e0e0; }
.logo h1 { font-size: 2.2rem; font-weight: 700; color: #1a1a1a; transition: color .2s; margin-bottom: 0; }
.logo:hover h1 { color: #0066cc; }
.dot { color: #0066cc; }
.nav-links { display: flex; justify-content: center; gap: 1.5rem; margin-top: 1rem; }
.nav-links a { color: #666; font-size: .95rem; font-weight: 500; padding: .25rem 0; border-bottom: 2px solid transparent; transition: all .2s; }
.nav-links a:hover { color: #0066cc; border-bottom-color: #0066cc; }
.tagline { color: #888; font-size: 1rem; margin-top: 1rem; }
.blog-main { flex: 1; }
.post-card {
  background: white; padding: 2rem; margin-bottom: 1.5rem; border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06);
  transition: transform .2s, box-shadow .2s;
}
.post-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,.1), 0 2px 4px rgba(0,0,0,.06); }
.post-card h2 { margin-bottom: .5rem; font-size: 1.4rem; }
.post-card h2 a { color: #1a1a1a; transition: color .2s; }
.post-card h2 a:hover { color: #0066cc; }
.post-card time { color: #999; font-size: .85rem; display: block; margin-bottom: .75rem; }
.post-card p { margin-bottom: 1rem; color: #555; line-height: 1.7; }
.read-more { color: #0066cc; font-weight: 500; font-size: .95rem; display: inline-flex; align-items: center; transition: gap .2s; }
.read-more:hover { text-decoration: underline; }
.blog-footer { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e0e0e0; color: #888; font-size: .9rem; }
.footer-links { margin-bottom: .5rem; }
.footer-links a { color: #888; transition: color .2s; }
.footer-links a:hover { color: #0066cc; }
.separator { margin: 0 .5rem; color: #ccc; }
@media (max-width: 640px) {
  .blog-header h1, .logo h1 { font-size: 1.8rem; }
  .post-card { padding: 1.5rem; }
  .post-card h2 { font-size: 1.2rem; }
}
</style>
