import { ContactForm } from "@/app/components/ContactForm";
import { knowledgeArticles } from "@/lib/content";

const products = [
  {
    title: "Broodbloem",
    tag: "Zuurdesem",
    text: "Bloem geselecteerd op smaak, sterkte en structuur voor lange fermentatie en open kruim."
  },
  {
    title: "Pizzabloem",
    tag: "Pizza",
    text: "Bloem voor extensibiliteit, ovenrijs en deeg dat past bij korte of lange fermentatie."
  },
  {
    title: "Starters",
    tag: "Cultuur",
    text: "Een praktische start voor bakkers die consistenter met zuurdesem willen werken."
  },
  {
    title: "Testpakketten",
    tag: "Lab",
    text: "Kleine selecties waarmee je bloemsoorten naast elkaar kunt vergelijken."
  }
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand-mark" href="/">
            <img src="/images/bakkerslab-wordmark.svg" alt="BakkersLab" />
          </a>
          <nav className="nav-links" aria-label="Hoofdnavigatie">
            <a href="/kennis">Kennis</a>
            <a href="/vragenlijst#survey">Vragenlijst</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <video
          className="hero-video"
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/bakkerslab-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-inner">
          <div>
            <p className="eyebrow">Premium bloem voor betere fermentatie</p>
            <h1>BakkersLab</h1>
            <p className="hero-copy">
              Help bepalen welke bloem, starters en kennis als eerste nodig zijn.
            </p>
            <div className="hero-inline-cta" aria-label="Vragenlijst">
              <a className="button hero-button" href="/vragenlijst#survey">
                Vul de vragenlijst in
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Shop in voorbereiding</h2>
            <p className="section-lede">
              We starten met bloem en starters voor zuurdesem en pizza. De selectie draait om smaak,
              sterkte, verwerkbaarheid en fermentatiegedrag.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <div>
                  <span className="tag">{product.tag}</span>
                  <h3>{product.title}</h3>
                </div>
                <p>{product.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section black">
        <div className="section-inner">
          <div className="section-header">
            <h2>Bloem als systeem</h2>
            <p className="section-lede">
              BakkersLab kijkt verder dan de naam op de zak. Specificaties helpen pas echt als je
              ze koppelt aan hydratatie, temperatuur, tijd en techniek.
            </p>
          </div>
          <div className="lab-strip">
            <div className="lab-item">
              <span>01</span>
              <p>Bloemsoort en maling bepalen smaak, vochtopname en deeggevoel.</p>
            </div>
            <div className="lab-item">
              <span>02</span>
              <p>Eiwit, W en P/L geven richting aan sterkte en rekbaarheid.</p>
            </div>
            <div className="lab-item">
              <span>03</span>
              <p>Fermentatie verandert structuur, aroma en planning.</p>
            </div>
            <div className="lab-item">
              <span>04</span>
              <p>Testen maakt kiezen eenvoudiger voor brood en pizza.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section yellow">
        <div className="section-inner">
          <div className="section-header">
            <h2>Help de selectie bepalen</h2>
            <p className="section-lede">
              Vijf korte vragen over wat je bakt, welke bloem je zoekt en welke informatie je mist.
            </p>
          </div>
          <div className="button-row">
            <a className="button" href="/vragenlijst#survey">
              Naar de vragenlijst
            </a>
            <a className="button secondary" href="/kennis">
              Bekijk kennisbank
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Kennisbank</h2>
            <p className="section-lede">
              Geen receptenblog, maar technische uitleg over bloemwaarden, maling en fermentatie.
            </p>
          </div>
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

      <section className="section black" id="contact">
        <div className="section-inner contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">
              <span>Vragen of</span> <span>samenwerken?</span>
            </h2>
            <p className="section-lede">
              Neem contact op over BakkersLab, leveranciers, bloemselectie of de lancering.
            </p>
            <div className="contact-details">
              <a className="contact-link" href="mailto:info@bakkerslab.nl">
                <span>E-mail</span>
                <span>info@bakkerslab.nl</span>
              </a>
              <a className="contact-link" href="https://instagram.com/bakkerslab">
                <span>Instagram</span>
                <span>@bakkerslab</span>
              </a>
              <a className="contact-link" href="tel:0883000000">
                <span>Telefoon</span>
                <span>0883000000</span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="section-inner">
          <span>BakkersLab.nl</span>
          <span>Premium bloem, starters en technische kennis.</span>
        </div>
      </footer>
    </main>
  );
}
