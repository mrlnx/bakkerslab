"use client";

import { type FormEvent, useState } from "react";
import { saveContact } from "@/lib/firebase";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);

    try {
      const result = await saveContact({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        message: String(form.get("message") ?? "")
      });

      setStatus("success");
      setMessage(
        result.mode === "firebase"
          ? "Bericht ontvangen. We nemen contact met je op."
          : "Firebase is nog niet ingesteld. Je bericht is lokaal bewaard tijdens ontwikkeling."
      );
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Versturen lukte niet. Mail ons via info@bakkerslab.nl.");
    }
  }

  return (
    <form className="contact-form form-stack" onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">Naam</label>
          <input id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="contact-email">E-mail</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-message">Bericht</label>
        <textarea id="contact-message" name="message" required />
      </div>
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Bezig..." : "Verstuur bericht"}
      </button>
      {message ? <p className="status-text dark">{message}</p> : null}
    </form>
  );
}
