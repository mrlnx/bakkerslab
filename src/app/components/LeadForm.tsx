"use client";

import { type FormEvent, useState } from "react";
import { saveLead } from "@/lib/firebase";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const bakeFocus = String(form.get("bakeFocus") ?? "");

    try {
      const result = await saveLead({ email, bakeFocus, source: "landing" });
      setStatus("success");
      setMessage(
        result.mode === "firebase"
          ? "Je staat op de lijst. Bedankt."
          : "Firebase is nog niet ingesteld. Je inschrijving is lokaal bewaard tijdens ontwikkeling."
      );
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Opslaan lukte niet. Probeer het later nog een keer.");
    }
  }

  return (
    <form className="form-stack" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="email">E-mailadres</label>
        <input id="email" name="email" type="email" placeholder="jij@example.nl" required />
      </div>
      <div className="field">
        <label htmlFor="bakeFocus">Ik bak vooral</label>
        <select id="bakeFocus" name="bakeFocus" defaultValue="">
          <option value="" disabled>
            Maak een keuze
          </option>
          <option value="zuurdesem">Zuurdesem</option>
          <option value="pizza">Pizza</option>
          <option value="beide">Zuurdesem en pizza</option>
          <option value="beginnen">Ik wil beginnen</option>
        </select>
      </div>
      <div className="button-row">
        <button className="button" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Bezig..." : "Krijg early access"}
        </button>
        <a className="button secondary" href="/vragenlijst#survey">
          Vul de vragenlijst in
        </a>
      </div>
      <p className="fine-print">
        We gebruiken je e-mailadres alleen voor BakkersLab updates, early access en de lancering.
      </p>
      {message ? <p className="status-text">{message}</p> : null}
    </form>
  );
}
