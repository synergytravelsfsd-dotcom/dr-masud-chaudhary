"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Message = { role: "user" | "assistant"; content: string };

export function KnowledgeAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Ask about Dr. Chaudhary’s published themes — poultry systems, veterinary pharmaceuticals, One Health, or AI agriculture. Responses are grounded in the local knowledge base (OpenAI-backed retrieval can be enabled in production).",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const next = [...messages, { role: "user" as const, content: input.trim() }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "No response." }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "The assistant is temporarily unavailable." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface">
      <div className="border-b border-border px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          Knowledge assistant
        </p>
        <p className="mt-1 text-sm text-muted">Semantic exploration of publications and briefs</p>
      </div>
      <div className="max-h-[28rem] space-y-4 overflow-y-auto px-5 py-5">
        {messages.map((m, i) => (
          <div
            key={`${m.role}-${i}`}
            className={
              m.role === "user"
                ? "ml-8 rounded-2xl bg-navy px-4 py-3 text-sm text-ivory dark:bg-ivory dark:text-navy"
                : "mr-8 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted"
            }
          >
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex gap-2 border-t border-border p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question…"
          className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none ring-gold/40 focus:ring-2"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "…" : "Ask"}
        </Button>
      </form>
    </div>
  );
}
