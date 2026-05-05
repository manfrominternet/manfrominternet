import { ui, languages } from "./ui";

const defaultLang = "en";

export function getLangFromUrl(url: URL) {
  // Rozbijamy ścieżkę i bierzemy pierwszy segment po slashu
  const [, lang] = url.pathname.split("/");

  // Sprawdzamy, czy ten segment (np. 'de', 'pl') istnieje w naszym słowniku
  if (lang in ui) return lang as keyof typeof ui;

  // Jeśli nie (np. jesteśmy na głównej stronie /), zwracamy domyślny 'en'
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
