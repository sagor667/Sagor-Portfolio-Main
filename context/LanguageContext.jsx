'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
    updateHtmlAttributes(savedLang);
  }, []);

  const updateHtmlAttributes = (l) => {
    document.documentElement.lang = l;
    document.body.dataset.lang = l;
  };

  const changeLang = (l) => {
    setLang(l);
    localStorage.setItem('lang', l);
    updateHtmlAttributes(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
