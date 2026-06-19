import { notFound } from "next/navigation";
import { getKnowledgeArticle, knowledgeArticles } from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) {
    return {
      title: "Artikel niet gevonden | BakkersLab"
    };
  }

  return {
    title: `${article.title} | BakkersLab`,
    description: article.summary
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) notFound();

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
          <p className="eyebrow">{article.eyebrow}</p>
          <h1 className="page-title">{article.title}</h1>
          <p className="section-lede">{article.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner article-body">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="button-row">
            <a className="button" href="/kennis">
              Terug naar kennisbank
            </a>
            <a className="button secondary" href="/vragenlijst#survey">
              Deel je voorkeur
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
