import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { defaultLocale, type Locale } from "@/lib/i18n/config";

export type Messages = typeof en;

const dictionaries: Record<Locale, Messages> = {
  en,
  es,
};

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

