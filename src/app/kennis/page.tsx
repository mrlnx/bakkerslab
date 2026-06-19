import { knowledgeArticles } from "@/lib/content";

export default function KnowledgePage() {
  return (
    <main className="site-shell">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand-mark" href="/">
            <img src="/images/bakkerslab-wordmark.svg" alt="BakkersLab" />
          </a>
          <nav className="nav-links" aria-label="Hoofdnavigatie">
            <a className="is-active" href="/kennis" aria-current="page">
              Kennis
            </a>
            <a href="/vragenlijst#survey">Vragenlijst</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Kennisbank</p>
          <h1 className="page-title">Bloem, waarden en fermentatie</h1>
          <p className="section-lede">
            Technische uitleg voor bakkers die bloem willen kiezen op gedrag, niet alleen op naam.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="article-grid">
            {knowledgeArticles.map((article) => (
              <a className="article-card" href={`/kennis/${article.slug}`} key={article.slug}>
                <div>
                  <div className="article-meta">
                    <span>{article.eyebrow}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                </div>
                <span className="tag">Lees meer</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
