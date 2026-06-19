"use client";

import { useMemo, useState } from "react";
import { saveLead, saveSurvey } from "@/lib/firebase";

const products = ["Broodbloem", "Pizzabloem", "Bloem voor lange fermentatie", "Zuurdesem starter", "Testpakket"];
const flourSignals = ["Eiwitpercentage", "W-waarde", "P/L", "Fermentatietijd", "Vergelijking tussen bloemsoorten"];
const fermentation = ["Direct deeg", "Biga", "Poolish", "Zuurdesem", "Lange koude fermentatie"];
const challenges = [
  "De juiste bloem kiezen",
  "Consistente fermentatie",
  "Meer smaak ontwikkelen",
  "Betere ovenrijs",
  "Planning en timing",
  "Ik weet nog niet waar te beginnen"
];

type SurveyAnswers = {
  email: string;
  bakingFocus: string;
  experience: string;
  products: string[];
  flourSignals: string[];
  fermentation: string[];
  biggestQuestion: string;
  extraNotes: string;
};

const initialAnswers: SurveyAnswers = {
  email: "",
  bakingFocus: "",
  experience: "",
  products: [],
  flourSignals: [],
  fermentation: [],
  biggestQuestion: "",
  extraNotes: ""
};

const steps = [
  "Focus",
  "Ervaring",
  "Producten",
  "Bloeminfo",
  "Fermentatie",
  "Uitdaging",
  "E-mail"
];

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function SurveyForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>(initialAnswers);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const progress = useMemo(() => Math.round(((step + 1) / steps.length) * 100), [step]);

  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(answers.bakingFocus);
    if (step === 1) return Boolean(answers.experience);
    if (step === 2) return answers.products.length > 0;
    if (step === 3) return answers.flourSignals.length > 0;
    if (step === 4) return answers.fermentation.length > 0;
    if (step === 5) return Boolean(answers.biggestQuestion);
    return Boolean(answers.email);
  }, [answers, step]);

  function updateAnswer<Key extends keyof SurveyAnswers>(key: Key, value: SurveyAnswers[Key]) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setStatus("idle");
    setMessage("");
  }

  function nextStep() {
    if (!canContinue) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 0));
  }

  async function onSubmit() {
    if (!canContinue || status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const survey = {
        email: answers.email,
        bakingFocus: answers.bakingFocus,
        experience: answers.experience,
        products: answers.products,
        flourSignals: answers.flourSignals,
        fermentation: answers.fermentation,
        biggestQuestion: answers.biggestQuestion,
        extraNotes: answers.extraNotes
      };

      const result = await saveSurvey(survey);

      await saveLead({ email: answers.email, bakeFocus: survey.bakingFocus, source: "survey" });

      setStatus("success");
      setMessage(
        result.mode === "firebase"
          ? "Dank je. Je antwoorden zijn opgeslagen."
          : "Firebase is nog niet ingesteld. Je antwoorden zijn lokaal bewaard tijdens ontwikkeling."
      );
      setAnswers(initialAnswers);
      setStep(0);
    } catch {
      setStatus("error");
      setMessage("Opslaan lukte niet. Probeer het later nog een keer.");
    }
  }

  return (
    <form
      className="survey-form survey-card-flow"
      onSubmit={(event) => {
        event.preventDefault();
        void onSubmit();
      }}
    >
      <div className="survey-progress" aria-label={`Stap ${step + 1} van ${steps.length}`}>
        <div className="survey-progress-top">
          <span>Stap {step + 1} van {steps.length}</span>
          <span>{steps[step]}</span>
        </div>
        <div className="survey-progress-track">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="survey-card">
        {step === 0 ? (
          <fieldset className="fieldset">
            <legend>Waar bak je vooral mee?</legend>
            <div className="choice-grid">
              {["Zuurdesem", "Pizza", "Beide", "Ik wil beginnen"].map((value) => (
                <label className="choice choice-card" key={value}>
                  <input
                    checked={answers.bakingFocus === value}
                    name="bakingFocus"
                    onChange={() => updateAnswer("bakingFocus", value)}
                    type="radio"
                    value={value}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset className="fieldset">
            <legend>Hoe ervaren ben je?</legend>
            <div className="choice-grid">
              {["Beginner", "Regelmatige thuisbakker", "Gevorderd", "Professioneel"].map((value) => (
                <label className="choice choice-card" key={value}>
                  <input
                    checked={answers.experience === value}
                    name="experience"
                    onChange={() => updateAnswer("experience", value)}
                    type="radio"
                    value={value}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset className="fieldset">
            <legend>Welke producten wil je als eerste zien?</legend>
            <div className="choice-grid">
              {products.map((value) => (
                <label className="choice choice-card" key={value}>
                  <input
                    checked={answers.products.includes(value)}
                    name="products"
                    onChange={() => updateAnswer("products", toggleValue(answers.products, value))}
                    type="checkbox"
                    value={value}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 3 ? (
          <fieldset className="fieldset">
            <legend>Welke informatie helpt jou kiezen?</legend>
            <div className="choice-grid">
              {flourSignals.map((value) => (
                <label className="choice choice-card" key={value}>
                  <input
                    checked={answers.flourSignals.includes(value)}
                    name="flourSignals"
                    onChange={() => updateAnswer("flourSignals", toggleValue(answers.flourSignals, value))}
                    type="checkbox"
                    value={value}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 4 ? (
          <fieldset className="fieldset">
            <legend>Welke fermentatie gebruik je of wil je leren?</legend>
            <div className="choice-grid">
              {fermentation.map((value) => (
                <label className="choice choice-card" key={value}>
                  <input
                    checked={answers.fermentation.includes(value)}
                    name="fermentation"
                    onChange={() => updateAnswer("fermentation", toggleValue(answers.fermentation, value))}
                    type="checkbox"
                    value={value}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 5 ? (
          <fieldset className="fieldset">
            <legend>Waar loop je nu het meest tegenaan?</legend>
            <div className="choice-grid">
              {challenges.map((value) => (
                <label className="choice choice-card" key={value}>
                  <input
                    checked={answers.biggestQuestion === value}
                    name="biggestQuestion"
                    onChange={() => updateAnswer("biggestQuestion", value)}
                    type="radio"
                    value={value}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 6 ? (
          <div className="field survey-email-step">
            <label htmlFor="survey-email">Laat je e-mailadres achter</label>
            <p>Dan kunnen we je informeren over de lancering, testpakketten en vroege toegang.</p>
            <input
              id="survey-email"
              name="email"
              onChange={(event) => updateAnswer("email", event.target.value)}
              placeholder="jij@example.nl"
              required
              type="email"
              value={answers.email}
            />
            <div className="optional-note">
              <span>Optioneel</span>
              <label htmlFor="survey-extra">Wil je nog iets toevoegen?</label>
              <textarea
                id="survey-extra"
                name="extraNotes"
                onChange={(event) => updateAnswer("extraNotes", event.target.value)}
                placeholder="Bijvoorbeeld over bloem, fermentatie of wat je zoekt."
                value={answers.extraNotes}
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="survey-actions">
        <button className="button secondary" disabled={step === 0 || status === "loading"} onClick={previousStep} type="button">
          Terug
        </button>
        {step < steps.length - 1 ? (
          <button className="button" disabled={!canContinue} onClick={nextStep} type="button">
            Volgende
          </button>
        ) : (
          <button className="button" disabled={!canContinue || status === "loading"} type="submit">
            {status === "loading" ? "Bezig..." : "Verstuur antwoorden"}
          </button>
        )}
      </div>

      {message ? <p className="status-text dark">{message}</p> : null}
    </form>
  );
}
