import type { MetadataRoute } from "next";
import { defaultContent } from "@/lib/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultContent.site.legalName,
    short_name: defaultContent.site.name,
    description: defaultContent.site.description,
    start_url: "/",
    display: "browser",
    background_color: "#050814",
    theme_color: "#050814",
    icons: [
      {
        src: "/brand/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
