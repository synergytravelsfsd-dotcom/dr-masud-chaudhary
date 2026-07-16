"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      setMessage("Thank you. Your enquiry has been received.");
      e.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Unable to send right now. Please email directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[1.75rem] border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Organisation" name="organisation" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Country" name="country" />
      </div>
      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Enquiry type
        </span>
        <select
          name="type"
          className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none ring-gold/40 focus:ring-2"
          defaultValue="consulting"
        >
          <option value="consulting">Consulting</option>
          <option value="speaking">Speaking</option>
          <option value="partnership">Partnership</option>
          <option value="media">Media</option>
          <option value="investor">Investor</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <Button type="submit" disabled={state === "loading"} className="w-full sm:w-auto">
        {state === "loading" ? "Sending…" : "Send enquiry"}
      </Button>
      {message ? (
        <p className={state === "error" ? "text-sm text-red-700" : "text-sm text-muted"}>{message}</p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none ring-gold/40 focus:ring-2"
      />
    </label>
  );
}
