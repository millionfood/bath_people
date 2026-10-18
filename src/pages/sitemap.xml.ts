import type { APIRoute } from "astro";
import { site } from "../data/site";

const paths = ["/", "/about", "/quote"];

export const GET: APIRoute = () => {
  const origin = site.url.replace(/\/$/, "");
  const urls = origin
    ? paths
        .map(
          (path) => `  <url>
    <loc>${new URL(path, origin).href}</loc>
  </url>`,
        )
        .join("\n")
    : "";

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
