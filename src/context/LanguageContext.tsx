import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isSpanish: boolean;
  t: (en: string, es: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "es" || urlLang === "en") {
        return urlLang;
      }
      const stored = localStorage.getItem("upgraded_lang");
      if (stored === "es" || stored === "en") {
        return stored;
      }
      // Check navigator language
      if (navigator.language && navigator.language.toLowerCase().startsWith("es")) {
        return "es";
      }
    }
    return "en";
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("upgraded_lang", newLang);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLang);
      window.history.replaceState({}, "", url.toString());
    }
  };

  useEffect(() => {
    // Listen to popstate or url changes
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "es" || urlLang === "en") {
        setLanguageState(urlLang);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const t = (en: string, es: string) => (language === "es" ? es : en);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isSpanish: language === "es",
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
