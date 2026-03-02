"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type Locale, locales } from "@/lib/i18n/config";

type LocaleSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LocaleSwitcher({ currentLocale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();

  function localizedPath(targetLocale: Locale): string {
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = targetLocale;
    }
    return segments.join("/") || `/${targetLocale}`;
  }

  return (
    <div
      aria-label={label}
      className="flex items-center rounded-lg border border-slate-200 bg-white p-1"
      role="group"
    >
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <Link
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
              active
                ? "bg-primary text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            href={localizedPath(locale)}
            key={locale}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

