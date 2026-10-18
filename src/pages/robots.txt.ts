import type { APIRoute } from "astro";
import { site } from "../data/site";

export const GET: APIRoute = () => {
  const origin = site.url.replace(/\/$/, "");
  const lines = ["User-agent: *", "Allow: /"];
  if (origin) {
    lines.push("", `Sitemap: ${new URL("/sitemap.xml", origin).href}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
