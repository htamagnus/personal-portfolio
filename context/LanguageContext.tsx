"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { translations, Language, TranslationType } from "@/data/translations";
import { useUrlParam } from "@/lib/useUrlParam";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useUrlParam("lang");
  const language: Language = lang === "pt" ? "pt" : "en";

  const value = {
    language,
    setLanguage: setLang,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
