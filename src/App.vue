<template>
  <div class="blog-container">
    <header class="blog-header">
      <h1>ifelse.work</h1>
      <p class="tagline">代码 · 思考 · 分享</p>
    </header>
    
    <main class="blog-main">
      <article class="post-card" v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <time>{{ post.date }}</time>
        <p>{{ post.excerpt }}</p>
        <a :href="post.link" class="read-more">阅读更多 →</a>
      </article>
    </main>
    
    <footer class="blog-footer">
      <p>© 2026 ifelse.work</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: '欢迎来到 ifelse.work',
    date: '2026-05-23',
    excerpt: '这是一个新的开始，记录技术与思考的地方。',
    link: '/posts/welcome'
  }
])
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f5f5f5;
}

.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.blog-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
}

.blog-header h1 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.tagline {
  color: #666;
  font-size: 1.1rem;
}

.post-card {
  background: white;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post-card h2 {
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.post-card time {
  color: #888;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 1rem;
}

.post-card p {
  margin-bottom: 1rem;
  color: #555;
}

.read-more {
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}

.blog-footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  color: #888;
}
</style>
