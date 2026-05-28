<template>
  <div class="archive-view container container--narrow">
    <h2 class="archive-title">
      <svg class="archive-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="7" y1="15" x2="7" y2="15"/>
        <line x1="11" y1="15" x2="13" y2="15"/>
      </svg>
      Archive
    </h2>
    <p class="archive-count">{{ totalPosts }} articles in total</p>

    <div v-for="(group, year) in groupedPosts" :key="year" class="year-group">
      <h3 class="year-header">{{ year }} <span class="year-count">{{ group.length }} articles</span></h3>
      <ul class="post-list">
        <li v-for="post in group" :key="post.slug" class="post-item">
          <router-link :to="`/posts/${post.slug}`" class="post-link">
            <span class="post-date">{{ formatShortDate(post.date) }}</span>
            <span class="post-title-text">{{ post.title }}</span>
          </router-link>
          <div class="post-tags">
            <span class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { posts } from '../data/posts.js'

const totalPosts = computed(() => posts.length)

function formatShortDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00+08:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
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

<style scoped>
.archive-view { padding-top: 2.5rem; padding-bottom: 3rem; }

.archive-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-family: var(--font-serif);
}
.archive-icon { width: 1.5rem; height: 1.5rem; color: var(--color-gold); }
.archive-count { color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 2rem; }

.year-group { margin-bottom: 2.5rem; }
.year-header {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.year-count { font-weight: 400; color: var(--color-text-muted); font-size: 0.85rem; margin-left: 0.5rem; }

.post-list { list-style: none; }
.post-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border-light);
  transition: background var(--transition-fast);
}
.post-item:last-child { border-bottom: none; }
.post-item:hover {
  background: var(--color-bg-card-hover);
  margin: 0 -1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: var(--radius-sm);
}

.post-link {
  display: flex;
  gap: 1rem;
  align-items: baseline;
  text-decoration: none;
}
.post-date {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  min-width: 4.5rem;
  font-family: var(--font-mono);
}
.post-title-text {
  color: var(--color-text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color var(--transition-fast);
}
.post-link:hover .post-title-text { color: var(--color-gold); }

.post-tags { margin-top: 0.4rem; display: flex; gap: 0.4rem; flex-wrap: wrap; }
.tag {
  display: inline-block;
  background: rgba(230, 57, 70, 0.1);
  color: var(--color-red);
  padding: 0.12rem 0.5rem;
  border-radius: 3px;
  font-size: 0.7rem;
  font-weight: 500;
}

@media (max-width: 640px) {
  .archive-title { font-size: 1.2rem; }
  .post-link { flex-direction: column; gap: 0.2rem; }
}
</style>
