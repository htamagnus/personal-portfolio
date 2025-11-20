"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 font-mono font-bold text-sm transition-colors ${
          language === "en"
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-neon-yellow"
        }`}
      >
        EN
      </button>
      <div className="w-[2px] bg-black self-stretch"></div>
      <button
        onClick={() => setLanguage("pt")}
        className={`px-3 py-1 font-mono font-bold text-sm transition-colors ${
          language === "pt"
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-neon-yellow"
        }`}
      >
        PT
      </button>
    </div>
  );
}

