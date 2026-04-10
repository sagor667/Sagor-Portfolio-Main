'use client';
import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const { lang, setLang } = useLanguage();

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}
