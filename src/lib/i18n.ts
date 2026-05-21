import en from "../translations/en.json";
import pl from "../translations/pl.json";
import ru from "../translations/ru.json";

export const SUPPORTED_LANGUAGES = ["en", "pl", "ru"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

const translations = { en, pl, ru } as const;

export const getLangFromPathname = (pathname: string): SupportedLanguage => {
	const segment = pathname.split("/")[1];
	if (SUPPORTED_LANGUAGES.includes(segment as SupportedLanguage)) {
		return segment as SupportedLanguage;
	}
	return DEFAULT_LANGUAGE;
};

export const getTranslations = (lang: SupportedLanguage) => translations[lang];

/** Keep the current route when switching language (e.g. /en/courses → /pl/courses). */
export const switchLanguagePath = (pathname: string, targetLang: SupportedLanguage): string => {
	const parts = pathname.split("/").filter(Boolean);
	if (SUPPORTED_LANGUAGES.includes(parts[0] as SupportedLanguage)) {
		parts[0] = targetLang;
		return `/${parts.join("/")}` || `/${targetLang}/`;
	}
	return `/${targetLang}/`;
};
