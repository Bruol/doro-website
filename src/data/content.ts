import { deSiteData } from "./de";
import { enSiteData } from "./en";
import { frSiteData } from "./fr";

export const localizedSiteData = {
  de: deSiteData,
  en: enSiteData,
  fr: frSiteData,
};

export type Language = keyof typeof localizedSiteData;
export type SiteData = (typeof localizedSiteData)[Language];

export const defaultLanguage: Language = "de";
export const siteData = deSiteData;
export const languages = Object.keys(localizedSiteData) as Language[];

export function getLanguageFromRequest(request: Request): Language {
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const requestedLanguages = acceptLanguage.split(",").map((language) => language.trim().split(";")[0]);

  for (const language of requestedLanguages) {
    if (language.startsWith("fr")) return "fr";
    if (language.startsWith("en")) return "en";
    if (language.startsWith("de")) return "de";
  }

  return defaultLanguage;
}

export function getLocalizedSiteData(language: Language): SiteData {
  return localizedSiteData[language];
}
