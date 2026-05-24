<template>
  <div class="blog-container">
    <header class="blog-header" role="banner">
      <nav aria-label="主导航">
        <router-link to="/" class="logo" aria-label="ifelse.work 首页">
          <h1>ifelse<span class="dot">.</span>work</h1>
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/archive" class="active">归档</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </nav>
      <p class="tagline">代码 · 思考 · 分享</p>
    </header>

    <main class="archive-main" role="main">
      <h2 class="archive-title">
        <svg class="archive-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <line x1="7" y1="15" x2="7" y2="15"/>
          <line x1="11" y1="15" x2="13" y2="15"/>
        </svg>
        文章归档
      </h2>
      <p class="archive-count">共 {{ totalPosts }} 篇文章</p>

      <div v-for="(group, year) in groupedPosts" :key="year" class="year-group">
        <h3 class="year-header">{{ year }} 年 <span class="year-count">{{ group.length }} 篇</span></h3>
        <ul class="post-list">
          <li v-for="post in group" :key="post.slug" class="post-item">
            <router-link :to="`/posts/${post.slug}`" class="post-link">
              <span class="post-date">{{ formatShortDate(post.date) }}</span>
              <span class="post-title">{{ post.title }}</span>
            </router-link>
            <div class="post-tags">
              <span class="tag" v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
            </div>
          </li>
        </ul>
      </div>
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
import { computed } from 'vue'
import { posts } from '../data/posts.js'

const currentYear = computed(() => new Date().getFullYear())
const totalPosts = computed(() => posts.length)

function formatShortDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00+08:00')
  return d.toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })
}

const groupedPosts = computed(() => {
  const groups = {}
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))
  sorted.forEach(post => {
    const year = post.date.substring(0, 4)
    if (!groups[year]) groups[year] = []
    groups[year].push(post)
  })
  return groups
})
</script>

<style>
.blog-container { max-width: 800px; margin: 0 auto; padding: 2rem 1.25rem; min-height: 100vh; display: flex; flex-direction: column; }
.blog-header { text-align: center; margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 2px solid #e0e0e0; }
.logo h1 { font-size: 2.2rem; font-weight: 700; color: #1a1a1a; transition: color .2s; margin-bottom: 0; }
.logo:hover h1 { color: #0066cc; }
.dot { color: #0066cc; }
.nav-links { display: flex; justify-content: center; gap: 1.5rem; margin-top: 1rem; }
.nav-links a { color: #666; font-size: .95rem; font-weight: 500; padding: .25rem 0; border-bottom: 2px solid transparent; transition: all .2s; }
.nav-links a:hover, .nav-links a.active { color: #0066cc; border-bottom-color: #0066cc; }
.tagline { color: #888; font-size: 1rem; margin-top: 1rem; }

.archive-main { flex: 1; }
.archive-title { display: flex; align-items: center; gap: .75rem; font-size: 1.6rem; color: #1a1a1a; margin-bottom: .5rem; }
.archive-icon { width: 1.5rem; height: 1.5rem; }
.archive-count { color: #888; font-size: .95rem; margin-bottom: 2rem; }

.year-group { margin-bottom: 2.5rem; }
.year-header { font-size: 1.1rem; font-weight: 600; color: #1a1a1a; padding-bottom: .75rem; margin-bottom: 1rem; border-bottom: 2px solid #e0e0e0; }
.year-count { font-weight: 400; color: #888; font-size: .9rem; }

.post-list { list-style: none; }
.post-item { padding: .75rem 0; border-bottom: 1px solid #f0f0f0; transition: background .2s; }
.post-item:last-child { border-bottom: none; }
.post-item:hover { background: #fafafa; margin: 0 -1rem; padding-left: 1rem; padding-right: 1rem; border-radius: 6px; }

.post-link { display: flex; gap: 1rem; align-items: baseline; text-decoration: none; }
.post-date { color: #999; font-size: .85rem; min-width: 4rem; font-family: 'JetBrains Mono', monospace; }
.post-title { color: #1a1a1a; font-weight: 500; font-size: 1rem; transition: color .2s; }
.post-link:hover .post-title { color: #0066cc; }

.post-tags { margin-top: .4rem; display: flex; gap: .4rem; flex-wrap: wrap; }
.tag { display: inline-block; background: #f5f5f5; color: #666; padding: .15rem .5rem; border-radius: 4px; font-size: .75rem; transition: all .2s; }
.tag:hover { background: #e8f4fd; color: #0066cc; }

.blog-footer { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e0e0e0; color: #888; font-size: .9rem; }
.footer-links { margin-bottom: .5rem; }
.footer-links a { color: #888; transition: color .2s; }
.footer-links a:hover { color: #0066cc; }
.separator { margin: 0 .5rem; color: #ccc; }

@media (max-width: 640px) {
  .blog-header h1, .logo h1 { font-size: 1.8rem; }
  .archive-title { font-size: 1.3rem; }
  .post-link { flex-direction: column; gap: .25rem; }
}
</style>
