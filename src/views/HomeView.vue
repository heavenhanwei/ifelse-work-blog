<template>
  <div class="home-view container container--narrow">
    <section class="hero" role="banner">
      <h1 class="hero-title">Exploring China Tech</h1>
      <p class="hero-subtitle">Code · Thoughts · Insights into AI, Semiconductors, New Energy & Space</p>
    </section>
    
    <section class="posts-list" aria-label="Latest articles">
      <article class="post-card" v-for="post in posts" :key="post.slug" itemscope itemtype="https://schema.org/BlogPosting">
        <div class="post-card-header">
          <h2 itemprop="headline">
            <router-link :to="`/posts/${post.slug}`" itemprop="url">{{ post.title }}</router-link>
          </h2>
          <time :datetime="post.date" itemprop="datePublished">{{ formatDate(post.date) }}</time>
        </div>
        <p itemprop="description">{{ post.excerpt }}</p>
        <div class="post-card-footer">
          <div class="tags" v-if="post.tags">
            <span class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
          </div>
          <router-link :to="`/posts/${post.slug}`" class="read-more" :aria-label="'Read more: ' + post.title">Read More →</router-link>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { posts } from '../data/posts.js'

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00+08:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.home-view { padding-top: 2.5rem; padding-bottom: 3rem; }

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}
.hero-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}
.hero-subtitle {
  color: var(--color-text-muted);
  font-size: 1rem;
  letter-spacing: 0.02em;
}

.post-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 1.75rem;
  margin-bottom: 1.25rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}
.post-card:hover {
  background: var(--color-bg-card-hover);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}

.post-card-header { margin-bottom: 0.75rem; }
.post-card h2 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  line-height: 1.35;
}
.post-card h2 a { color: var(--color-text-primary); transition: color var(--transition-fast); }
.post-card h2 a:hover { color: var(--color-gold); }
.post-card time {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  font-weight: 500;
}
.post-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.post-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.tag {
  display: inline-block;
  background: rgba(230, 57, 70, 0.1);
  color: var(--color-red);
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}
.read-more {
  color: var(--color-gold);
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: color var(--transition-fast);
}
.read-more:hover { text-decoration: underline; }

@media (max-width: 640px) {
  .hero-title { font-size: 1.8rem; }
  .post-card { padding: 1.25rem; }
  .post-card h2 { font-size: 1.15rem; }
  .post-card-footer { flex-direction: column; align-items: flex-start; }
}
</style>
