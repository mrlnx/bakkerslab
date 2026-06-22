import { Header } from "@/app/components/Header";
import { SurveyForm } from "@/app/components/SurveyForm";

export default function SurveyPage() {
  return (
    <main className="site-shell">
      <Header />

      <section className="page-hero survey-page-hero">
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
          <SurveyForm />
        </div>
      </section>
    </main>
  );
}
