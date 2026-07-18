import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BlueVisa | Assessoria para Visto Americano",
    short_name: "BlueVisa",
    description:
      "Assessoria 100% online para todos os tipos de visto americano.",
    start_url: "/",
    display: "browser",
    background_color: "#061529",
    theme_color: "#061529",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
