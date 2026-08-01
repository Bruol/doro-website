import type { APIRoute } from "astro";

const routes = [
  "/",
  "/en/",
  "/fr/",
  "/leistungen/neubau/",
  "/leistungen/reparatur/",
  "/leistungen/setup/",
  "/leistungen/kurse-workshops/",
  "/leistungen/leihinstrumente/",
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://geigenbau-meisterin.de");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${new URL(route, base).toString()}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
