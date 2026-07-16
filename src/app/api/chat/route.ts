import { NextResponse } from "next/server";
import { z } from "zod";
import { publications } from "@/content/publications";

const schema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ),
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());
    const lastUser = [...body.messages].reverse().find((m) => m.role === "user");
    const query = lastUser?.content.toLowerCase() ?? "";

    const match =
      publications.find((p) =>
        [p.title, p.summary, ...p.tags].join(" ").toLowerCase().includes(query.split(" ")[0] ?? "")
      ) ?? publications[0];

    // Production: OpenAI + embeddings over publication corpus in Supabase/pgvector.
    const reply = `Based on the knowledge base, a relevant reference is “${match.title}” (${match.type}, ${new Date(match.date).getFullYear()}). ${match.summary} Enable OPENAI_API_KEY and the embeddings pipeline for full semantic retrieval.`;

    return NextResponse.json({ reply, sources: [match.slug] });
  } catch (error) {
    return NextResponse.json(
      { reply: "Unable to process that request.", error: String(error) },
      { status: 400 }
    );
  }
}
