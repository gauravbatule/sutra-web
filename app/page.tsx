import styles from './page.module.css';

const FEATURES = [
  {
    title: 'Chat-first Manager mode',
    body: 'A calm conversation home with a full IDE one click away. Astra plans, builds, and verifies while you watch every file change live.',
  },
  {
    title: 'Astra, your autonomous agent',
    body: 'Strict or Full Access modes. Astra asks focused questions with clickable options, spawns subagents for parallel work, and verifies its own results.',
  },
  {
    title: '45+ built-in tools',
    body: 'Read, write, edit, grep, run commands, manage git, generate images, audio, and video — with approvals exactly where you want them.',
  },
  {
    title: 'Multi-model routing',
    body: 'One dropdown, every provider: GPT-5, Claude 5, Gemini, GLM, Grok, DeepSeek, Qwen, NVIDIA NIM, Ollama — with automatic failover and live model discovery.',
  },
  {
    title: 'Keys or just cookies',
    body: 'API keys for 70+ providers, or paste a browser session cookie for ChatGPT, Claude, Gemini Web and more. Split tokens are reassembled automatically.',
  },
  {
    title: 'Task manager & artifacts',
    body: 'Schedule prompts hourly, daily, or weekly. Track work as artifacts — plans, implementations, verification reports — all viewable inline.',
  },
];

export default function Home() {
  return (
    <>
      <header className={styles.nav}>
        <div className={`container ${styles.navInner}`}>
          <span className={styles.wordmark}>SUTRA</span>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a href="#open-source">Roadmap</a>
            <a
              href="https://buymeacoffee.com/gauravbatule"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.coffee}
            >
              Buy me a coffee
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className={`container ${styles.hero}`} id="download">
          <span className={styles.badge}>Free forever · Open source coming soon</span>
          <h1 className={styles.heroTitle}>The AI-native IDE that builds with you</h1>
          <p className={styles.heroSub}>
            A chat-first IDE where Astra, your built-in agent, plans and ships real work alongside
            you. Multi-model routing across GPT-5, Claude 5, Gemini 3, GLM, Grok, DeepSeek, NVIDIA
            NIM and Ollama — bring API keys or just session cookies.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href="https://github.com/gauravbatule/sutra-web/releases/latest/download/SUTRA-IDE-Setup-1.0.0.exe">
              Download for Windows
            </a>
            <a className={styles.secondaryBtn} href="#open-source">
              View on GitHub
            </a>
          </div>
          <p className={styles.note}>
            Windows 10/11 · No account required · Your keys stay local
          </p>
        </section>

        <section className={`container ${styles.features}`} id="features">
          <h2 className={styles.sectionTitle}>Everything a builder needs</h2>
          <div className={styles.grid}>
            {FEATURES.map((f) => (
              <article key={f.title} className={styles.card}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`container ${styles.oss}`} id="open-source">
          <h2 className={styles.sectionTitle}>Open source — soon</h2>
          <p className={styles.ossBody}>
            SUTRA goes open source in a few weeks under the MIT license. The full codebase —
            the Astra agent, the multi-model router, the tool system, and the scheduler — will
            be published here. Watch this space.
          </p>
          <p className={styles.ossNote}>
            The Windows installer below already contains everything and works today.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p>MIT licensed · SUTRA contributors</p>
          <a
            href="https://buymeacoffee.com/gauravbatule"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerCoffee}
          >
            Support the project — Buy me a coffee
          </a>
        </div>
      </footer>
    </>
  );
}
