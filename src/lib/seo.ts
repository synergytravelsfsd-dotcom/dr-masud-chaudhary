import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  type = "website",
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.title;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "International Veterinarian & Animal Health Executive",
    description: siteConfig.description,
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.portrait),
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [...siteConfig.keywords],
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "Synergy Pharma",
      },
      {
        "@type": "Organization",
        name: "Elenco Louvavel LDA",
      },
      {
        "@type": "Organization",
        name: "Pakistan Veterinary Pharmaceuticals Association",
      },
    ],
  };
}
