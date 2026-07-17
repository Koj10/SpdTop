"use client";

import { useState } from "react";
import { useDictionary, useLocale } from "@/components/providers/LocaleProvider";

export function BriefForm() {
  const dict = useDictionary();
  const locale = useLocale();
  const { contact, ui } = dict;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("contact"),
          message: data.get("message"),
          locale,
          website: data.get("website"),
        }),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="glass p-8 text-center">
        <p className="font-display text-2xl text-accent">{ui.thanks}</p>
        <p className="mt-2 font-body text-flame/60">{ui.thanksMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6"
        >
          {contact.briefTitle}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-4 p-6 md:p-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/70">
          {contact.briefTitle}
        </p>
        <p className="mt-2 font-body text-sm text-flame/50">{contact.briefDesc}</p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="font-mono text-xs text-flame/40">
          {contact.form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={120}
          disabled={status === "sending"}
          className="mt-1 w-full border border-flame/10 bg-black/40 px-4 py-3 font-body text-flame outline-none transition-colors focus:border-accent/50 disabled:opacity-50"
          placeholder={contact.form.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="contact" className="font-mono text-xs text-flame/40">
          {contact.form.contactLabel}
        </label>
        <input
          id="contact"
          name="contact"
          required
          maxLength={160}
          disabled={status === "sending"}
          className="mt-1 w-full border border-flame/10 bg-black/40 px-4 py-3 font-body text-flame outline-none transition-colors focus:border-accent/50 disabled:opacity-50"
          placeholder={contact.form.contactPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs text-flame/40">
          {contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          disabled={status === "sending"}
          className="mt-1 w-full resize-none border border-flame/10 bg-black/40 px-4 py-3 font-body text-flame outline-none transition-colors focus:border-accent/50 disabled:opacity-50"
          placeholder={contact.form.messagePlaceholder}
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-red-400/90">{ui.errorMessage}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
        {status === "sending" ? ui.sending : ui.sendRequest}
      </button>
    </form>
  );
}
