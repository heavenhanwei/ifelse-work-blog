<template>
  <div class="about-view container container--narrow">
    <div class="about-card">
      <div class="about-hero">
        <div class="avatar-placeholder">
          <img src="/favicon.jpg" alt="ifelse.work" class="avatar-img">
        </div>
        <h2>Yiwei's Notebook</h2>
        <p class="about-subtitle">Focusing on Cloud Services, AI Technology & Business Analysis</p>
        <p class="about-desc">Delivering valuable insights for indie developers and startup teams.</p>
      </div>

      <div class="about-content">
        <h3>About This Blog</h3>
        <p>ifelse.work is a tech blog documenting coding experience, technical thoughts, and business observations — now with a special focus on exploring China's tech innovation.</p>
        <p>The name comes from the most fundamental control flow structure in programming — <code>if / else</code>. Every technical decision, every business choice, is essentially an <code>if / else</code>. This is where we record the thinking process behind those choices.</p>
      </div>

      <div class="about-content">
        <h3>Areas of Focus</h3>
        <div class="topics-grid">
          <div class="topic-card">
            <span class="topic-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </span>
            <h4>Cloud Services</h4>
            <p>In-depth usage experience and business analysis of AWS, Alibaba Cloud, Cloudflare, and more</p>
          </div>
          <div class="topic-card">
            <span class="topic-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22"/><path d="M8 6c0-2.21 1.79-4 4-4"/><path d="M6 8c0-1.66 1.34-3 3-3"/><path d="M18 8c1.66 0 3 1.34 3 3"/><path d="M3 12c0 4.97 4.03 9 9 9s9-4.03 9-9"/></svg>
            </span>
            <h4>AI Technology</h4>
            <p>Hands-on experience with LLM applications, Agent development, and AI toolchains</p>
          </div>
          <div class="topic-card">
            <span class="topic-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
            </span>
            <h4>China Tech</h4>
            <p>Tracking innovation in AI, semiconductors, new energy, and space — China's tech frontier</p>
          </div>
          <div class="topic-card">
            <span class="topic-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
            </span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-view { padding-top: 2.5rem; padding-bottom: 3rem; }

.about-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
}

.about-hero { text-align: center; padding-bottom: 2rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-border); }
.avatar-placeholder { width: 100px; height: 100px; margin: 0 auto 1.25rem; }
.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border);
}
.about-hero h2 { font-size: 1.6rem; color: var(--color-text-primary); margin-bottom: 0.5rem; font-family: var(--font-serif); }
.about-subtitle { color: var(--color-gold); font-size: 0.95rem; font-weight: 500; margin-bottom: 0.5rem; }
.about-desc { color: var(--color-text-muted); font-size: 0.9rem; }

.about-content { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--color-border); }
.about-content:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.about-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.85rem;
}
.about-content p { color: var(--color-text-secondary); line-height: 1.8; margin-bottom: 0.75rem; }
.about-content p:last-child { margin-bottom: 0; }
.about-content code {
  background: var(--color-bg-card-hover);
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--color-gold);
}

.topics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.topic-card {
  background: var(--color-bg-card-hover);
  border: 1px solid var(--color-border-light);
  padding: 1.25rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}
.topic-card:hover {
  border-color: rgba(244, 162, 97, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.topic-icon { display: block; margin-bottom: 0.5rem; width: 2rem; height: 2rem; color: var(--color-gold); }
.topic-icon svg { width: 100%; height: 100%; }
.topic-card h4 { font-size: 0.95rem; color: var(--color-text-primary); margin-bottom: 0.4rem; font-weight: 600; }
.topic-card p { font-size: 0.85rem; color: var(--color-text-secondary); margin: 0; line-height: 1.5; }

.contact-links { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--color-bg-card-hover);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  text-decoration: none;
}
.contact-link:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  transform: translateY(-1px);
}
.contact-link svg { width: 1rem; height: 1rem; }

@media (max-width: 640px) {
  .topics-grid { grid-template-columns: 1fr; }
  .about-hero h2 { font-size: 1.3rem; }
  .about-card { padding: 1.5rem; }
  .contact-links { flex-direction: column; }
}
</style>
