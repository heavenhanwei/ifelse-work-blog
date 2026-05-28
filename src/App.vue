<template>
  <div class="app-shell">
    <header class="site-header" role="banner">
      <div class="header-inner">
        <router-link to="/" class="brand" aria-label="ifelse.work Home">
          <img src="/favicon.jpg" alt="ifelse.work" class="logo-img">
          <span class="brand-name">ifelse<span class="dot">.</span>work</span>
        </router-link>
        <nav aria-label="Main navigation">
          <ul class="nav-links">
            <li><router-link to="/" :class="{ active: isHome }">Home</router-link></li>
            <li><router-link to="/archive" :class="{ active: isArchive }">Archive</router-link></li>
            <li><router-link to="/about" :class="{ active: isAbout }">About</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="site-main" role="main">
      <router-view />
    </main>
    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">
        <p>© {{ currentYear }} ifelse.work · 探索中国科技</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentYear = computed(() => new Date().getFullYear())
const isHome = computed(() => route.path === '/')
const isArchive = computed(() => route.path === '/archive')
const isAbout = computed(() => route.path === '/about')
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 14, 39, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: opacity var(--transition-fast);
}
.brand:hover { opacity: 0.85; }

.logo-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-border);
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
  font-family: var(--font-sans);
}

.dot { color: var(--color-red); }

.nav-links {
  display: flex;
  gap: 0.25rem;
}

.nav-links a {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0.85rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}
.nav-links a:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-card-hover);
}
.nav-links a.active {
  color: var(--color-gold);
  background: rgba(244, 162, 97, 0.08);
  font-weight: 600;
}

.site-main {
  flex: 1;
}

.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 0;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .header-inner {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
  }
  .brand-name { font-size: 1.1rem; }
  .logo-img { width: 30px; height: 30px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0.01ms !important; }
}
</style>
