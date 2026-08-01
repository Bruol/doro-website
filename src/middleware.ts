import { defineMiddleware } from "astro:middleware";

const canonicalHost = "geigenbau-meisterin.de";

const legacyRedirects = new Map<string, string>([
  ["/de", "/"],
  ["/de/", "/"],
  ["/Leistungen", "/#leistungen"],
  ["/Leistungen/", "/#leistungen"],
  ["/Leistungen/neubau", "/leistungen/neubau/"],
  ["/Leistungen/reparatur", "/leistungen/reparatur/"],
  ["/Leistungen/setup", "/leistungen/setup/"],
  ["/Leistungen/Kurse und Workshops", "/leistungen/kurse-workshops/"],
  ["/Leistungen/leihinstrumente", "/leistungen/leihinstrumente/"],
]);

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const isProductionHost =
    url.hostname === canonicalHost || url.hostname === `www.${canonicalHost}`;

  const legacyDestination = legacyRedirects.get(
    decodeURIComponent(url.pathname),
  );
  if (legacyDestination) {
    const destination = new URL(
      legacyDestination,
      `https://${canonicalHost}`,
    );
    destination.search = url.search;
    return Response.redirect(destination.toString(), 301);
  }

  if (
    isProductionHost &&
    (url.protocol !== "https:" || url.hostname !== canonicalHost)
  ) {
    url.protocol = "https:";
    url.hostname = canonicalHost;
    return Response.redirect(url.toString(), 301);
  }

  return next();
});
