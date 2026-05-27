<template>
  <div class="blog-container">
    <header class="blog-header" role="banner">
      <nav aria-label="Main navigation">
        <router-link to="/" class="logo" aria-label="ifelse.work Home">
          <h1>ifelse<span class="dot">.</span>work</h1>
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/archive">Archive</router-link></li>
          <li><router-link to="/about" class="active">About</router-link></li>
        </ul>
      </nav>
      <p class="tagline">Code · Thoughts · Sharing</p>
    </header>

    <main class="about-main" role="main">
      <div class="about-card">
        <div class="about-hero">
          <div class="avatar-placeholder">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="55" fill="#f0f0f0" stroke="#e0e0e0" stroke-width="2"/>
              <text x="60" y="55" text-anchor="middle" font-size="28" fill="#666">if</text>
              <text x="60" y="80" text-anchor="middle" font-size="28" fill="#0066cc" font-weight="bold">else</text>
            </svg>
          </div>
          <h2>Yiwei's Notebook</h2>
          <p class="about-subtitle">Focusing on Cloud Services, AI Technology & Business Analysis</p>
          <p class="about-desc">Delivering valuable insights for indie developers and startup teams.</p>
        </div>

        <div class="about-content">
          <h3>About This Blog</h3>
          <p>ifelse.work is a tech blog documenting coding experience, technical thoughts, and business observations.</p>
          <p>The name comes from the most fundamental control flow structure in programming — <code>if / else</code>. Every technical decision, every business choice, is essentially an <code>if / else</code>. This is where we record the thinking process behind those choices.</p>
        </div>

        <div class="about-content">
          <h3>Areas of Focus</h3>
          <div class="topics-grid">
            <div class="topic-card">
              <span class="topic-emoji">☁️</span>
              <h4>Cloud Services</h4>
              <p>In-depth usage experience and business analysis of AWS, Alibaba Cloud, Cloudflare, and more</p>
            </div>
            <div class="topic-card">
              <span class="topic-emoji">🤖</span>
              <h4>AI Technology</h4>
              <p>Hands-on experience with LLM applications, Agent development, and AI toolchains</p>
            </div>
            <div class="topic-card">
              <span class="topic-emoji">💼</span>
              <h4>Business Analysis</h4>
              <p>Tech-driven business trends, indie developer economy, and one-person company practices</p>
            </div>
            <div class="topic-card">
              <span class="topic-emoji">💻</span>
              <h4>Full-Stack Development</h4>
              <p>Best practices and lessons learned from frontend, backend, and DevOps</p>
            </div>
          </div>
        </div>

        <div class="about-content">
          <h3>Contact</h3>
          <div class="contact-links">
            <a href="https://github.com/heavenhanwei" target="_blank" rel="noopener noreferrer" class="contact-link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.947-1.104.882.247 1.832.367 2.768.367 2.936 0 4.896-1.969 5.532-3.714 1.033 3.128 1.502 3.416 1.502 3.416.879 1.503 3.629 1.087 4.524.823.141-.962.547-1.622.995-1.996-3.485-.396-7.163-1.742-7.163-5.532 0-1.223.437-2.222 1.153-2.999-.115-.283-.499-1.424.11-2.966 0 0 2.079-.662 6.807 1.479 1.962-.546 4.056-.822 6.152-.852 2.12.012 4.206.282 6.25.84z"/></svg>
              GitHub
            </a>
            <a href="https://xiaohongshu.com" target="_blank" rel="noopener noreferrer" class="contact-link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
              Xiaohongshu
            </a>
            <a href="https://weixin.qq.com" target="_blank" rel="noopener noreferrer" class="contact-link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.504c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.49c-.012.046-.02.092-.02.138 0 .375.292.684.675.684a.735.735 0 00.39-.118l1.564-1.008a.734.734 0 01.39-.118c.087 0 .173.014.255.04A9.14 9.14 0 008.691 17.3c.17 0 .339-.005.506-.015.214-.013.41-.134.524-.313a.614.614 0 00.046-.622.588.588 0 01-.046-.262c0-.33.25-.6.575-.632.177-.018.356-.027.536-.027 2.09 0 3.997-.833 5.356-2.184 1.426-1.415 2.308-3.354 2.308-5.495 0-4.028-3.891-7.316-8.705-7.316z"/></svg>
              WeChat
            </a>
          </div>
        </div>
      </div>
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
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
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

.about-main { flex: 1; }
.about-card { background: white; padding: 2.5rem; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06); }

.about-hero { text-align: center; padding-bottom: 2rem; margin-bottom: 2rem; border-bottom: 1px solid #e0e0e0; }
.avatar-placeholder { width: 100px; height: 100px; margin: 0 auto 1.25rem; }
.avatar-placeholder svg { width: 100%; height: 100%; }
.about-hero h2 { font-size: 1.8rem; color: #1a1a1a; margin-bottom: .5rem; }
.about-subtitle { color: #0066cc; font-size: 1rem; font-weight: 500; margin-bottom: .5rem; }
.about-desc { color: #888; font-size: .95rem; }

.about-content { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #e8e8e8; }
.about-content:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.about-content h3 { font-size: 1.2rem; font-weight: 600; color: #1a1a1a; margin-bottom: 1rem; }
.about-content p { color: #555; line-height: 1.8; margin-bottom: .75rem; }
.about-content p:last-child { margin-bottom: 0; }
.about-content code { background: #f5f5f5; padding: .15rem .4rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: .9em; color: #e83e8c; }

.topics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.topic-card { background: #f8f9fa; padding: 1.25rem; border-radius: 8px; transition: all .2s; }
.topic-card:hover { background: #f0f4ff; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,102,204,.08); }
.topic-emoji { font-size: 1.8rem; display: block; margin-bottom: .5rem; }
.topic-card h4 { font-size: .95rem; color: #1a1a1a; margin-bottom: .4rem; font-weight: 600; }
.topic-card p { font-size: .85rem; color: #666; margin: 0; line-height: 1.5; }

.contact-links { display: flex; gap: .75rem; flex-wrap: wrap; }
.contact-link { display: inline-flex; align-items: center; gap: .5rem; padding: .6rem 1rem; background: #f5f5f5; border-radius: 8px; color: #555; font-size: .9rem; font-weight: 500; transition: all .2s; text-decoration: none; }
.contact-link:hover { background: #0066cc; color: white; transform: translateY(-1px); }
.contact-link svg { width: 1rem; height: 1rem; }

.blog-footer { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e0e0e0; color: #888; font-size: .9rem; }
.footer-links { margin-bottom: .5rem; }
.footer-links a { color: #888; transition: color .2s; }
.footer-links a:hover { color: #0066cc; }
.separator { margin: 0 .5rem; color: #ccc; }

@media (max-width: 640px) {
  .blog-header h1, .logo h1 { font-size: 1.8rem; }
  .topics-grid { grid-template-columns: 1fr; }
  .about-hero h2 { font-size: 1.5rem; }
  .about-card { padding: 1.5rem; }
  .contact-links { flex-direction: column; }
}
</style>
