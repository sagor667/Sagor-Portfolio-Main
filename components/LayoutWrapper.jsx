'use client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) {
      setLang(saved);
      document.documentElement.lang = saved === 'bn' ? 'bn' : 'en';
    }
  }, []);

  const handleLangChange = (l) => {
    setLang(l);
    localStorage.setItem('lang', l);
    document.documentElement.lang = l === 'bn' ? 'bn' : 'en';
  };

  return (
    <>
      <Navbar lang={lang} setLang={handleLangChange} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}
