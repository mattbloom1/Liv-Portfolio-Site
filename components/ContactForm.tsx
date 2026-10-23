"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/projects";

/** Set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) to POST in-page; otherwise opens an email draft. */
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!String(d.get("name")).trim()) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(String(d.get("email")).trim())) e.email = "Please enter a valid email address.";
  if (!String(d.get("message")).trim()) e.message = "Please write a message.";
  return e;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "draft" | "failed">("idle");

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    const first = (["name", "email", "message"] as const).find((k) => found[k]);
    if (first) {
      form.elements.namedItem(first) instanceof HTMLElement && (form.elements.namedItem(first) as HTMLElement).focus();
      return;
    }

    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("draft");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  const field = (id: "name" | "email" | "message", label: string, type = "text") => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {id === "message" ? (
        <textarea id={id} name={id} rows={6} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      ) : (
        <input id={id} name={id} type={type} autoComplete={id} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      )}
      {errors[id] && <p className="error" id={`${id}-err`}>{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="contact-form">
      {field("name", "Name")}
      {field("email", "Email", "email")}
      {field("message", "Message")}
      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <div role="status" aria-live="polite">
        {status === "sent" && <p className="notice">Thank you. Your message has been sent.</p>}
        {status === "draft" && <p className="notice">Your email app should open with a draft ready to send.</p>}
        {status === "failed" && (
          <p className="error">
            Something went wrong. Please email <a href={`mailto:${contact.email}`}>{contact.email}</a> directly.
          </p>
        )}
      </div>
    </form>
  );
}
