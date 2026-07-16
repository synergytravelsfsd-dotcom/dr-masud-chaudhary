import { NextResponse } from "next/server";
import { publications } from "@/content/publications";
import { siteConfig } from "@/lib/site";

export async function GET() {
  const items = publications
    .map(
      (p) => `  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${siteConfig.url}/publications/${p.slug}</link>
    <guid>${siteConfig.url}/publications/${p.slug}</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <description><![CDATA[${p.summary}]]></description>
  </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} — Publications</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
