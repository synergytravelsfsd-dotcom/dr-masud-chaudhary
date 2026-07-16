"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const email = new FormData(e.currentTarget).get("email");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("done");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        compact
          ? "flex flex-col gap-3 sm:flex-row"
          : "flex flex-col gap-3 rounded-[1.75rem] border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8"
      }
    >
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none ring-gold/40 focus:ring-2"
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining…" : status === "done" ? "Subscribed" : "Subscribe"}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-red-700 sm:basis-full">Unable to subscribe right now.</p>
      ) : null}
    </form>
  );
}
