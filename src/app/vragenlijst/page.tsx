import { SurveyForm } from "@/app/components/SurveyForm";

export default function SurveyPage() {
  return (
    <main className="site-shell">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand-mark" href="/">
            <img src="/images/bakkerslab-wordmark.svg" alt="BakkersLab" />
          </a>
          <nav className="nav-links" aria-label="Hoofdnavigatie">
            <a href="/kennis">Kennis</a>
            <a className="is-active" href="#survey" aria-current="page">
              Vragenlijst
            </a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Vragenlijst</p>
          <h1 className="page-title">Wat zoek jij in bloem?</h1>
          <p className="section-lede">
            Help BakkersLab bepalen welke bloem, starters en technische informatie als eerste nodig zijn.
          </p>
        </div>
      </section>

      <section className="section survey-section" id="survey">
        <div className="section-inner survey-wrap">
          <div>
            <h2>7 korte stappen</h2>
            <p className="section-lede">
              Eerst een paar inhoudelijke vragen over wat je bakt en zoekt. Pas aan het einde
              vragen we je e-mailadres voor de lancering en vroege toegang.
            </p>
          </div>
          <SurveyForm />
        </div>
      </section>
    </main>
  );
}
