import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Masud Sadiq Chaudhary",
    short_name: "Dr. Masud HQ",
    description:
      "Digital headquarters for animal health leadership, poultry innovation, and veterinary pharmaceuticals.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f8fc",
    theme_color: "#0b5cab",
    lang: "en",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
