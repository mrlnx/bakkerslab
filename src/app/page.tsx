import { ContactForm } from "@/app/components/ContactForm";
import { Header } from "@/app/components/Header";
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
      <Header />

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

      <section className="section black contact-section" id="contact">
        <div className="contact-layout">
          <div className="contact-block contact-info-block has-image">
            <div className="contact-block-content">
              <p className="eyebrow">Voor vragen of samenwerking</p>
              <h2 className="contact-title">Contact</h2>
              <p className="section-lede">
                Neem contact op over BakkersLab, leveranciers, bloemselectie of de lancering.
              </p>
              <div className="contact-grid contact-details">
                <a className="contact-card contact-card-instagram" href="https://instagram.com/bakkerslab">
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <rect x="4" y="4" width="16" height="16" rx="4" />
                      <circle cx="12" cy="12" r="3.5" />
                      <circle cx="16.8" cy="7.2" r="0.8" />
                    </svg>
                  </span>
                  <span>
                    <strong>Instagram</strong>
                    <small>@bakkerslab</small>
                  </span>
                </a>
                <a className="contact-card contact-card-email" href="mailto:info@bakkerslab.nl">
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <span>
                    <strong>E-mailadres</strong>
                    <small>info@bakkerslab.nl</small>
                  </span>
                </a>
                <div className="contact-card contact-card-address">
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.4" />
                    </svg>
                  </span>
                  <span>
                    <strong>Bezoekersadres</strong>
                    <small>Op afspraak / adres volgt</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-block contact-form-block has-image">
            <div className="contact-block-content">
              <div className="contact-grid contact-message-row">
                <div className="form-heading">
                  <h3>Stuur ons een bericht</h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
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
