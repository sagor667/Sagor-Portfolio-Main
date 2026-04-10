'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', labelEn: 'Home', labelBn: 'হোম' },
  { href: '/about', labelEn: 'About', labelBn: 'পরিচিতি' },
  { href: '/projects', labelEn: 'Projects', labelBn: 'প্রজেক্টস' },
  { href: '/services', labelEn: 'Services', labelBn: 'সেবাসমূহ' },
  { href: '/blog', labelEn: 'Blog', labelBn: 'ব্লগ' },
  { href: '/contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
];

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo">Sagor Ahmed</Link>

            <div className="navbar-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {lang === 'bn' ? link.labelBn : link.labelEn}
                </Link>
              ))}
            </div>

            <div className="navbar-actions">
              <div className="lang-toggle">
                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                <button className={`lang-btn ${lang === 'bn' ? 'active' : ''}`} onClick={() => setLang('bn')}>বাং</button>
              </div>
              <Link href="/contact" className="btn btn-primary btn-sm" style={{ display: 'none' }}>
                {lang === 'bn' ? 'আমাকে ভাড়া করুন' : 'Hire Me'}
              </Link>
              <button
                className="navbar-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '' }} />
                <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '' }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }}
        />
      )}

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div style={{ position: 'absolute', top: 20, right: 20 }}>
          <button onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}>✕</button>
        </div>
        <div className="lang-toggle" style={{ marginBottom: '16px' }}>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          <button className={`lang-btn ${lang === 'bn' ? 'active' : ''}`} onClick={() => setLang('bn')}>বাংলা</button>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`admin-nav-item ${pathname === link.href ? 'active' : ''}`}
            style={{ fontSize: '1rem', padding: '14px 16px' }}
          >
            {lang === 'bn' ? link.labelBn : link.labelEn}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: 'auto' }}>
          {lang === 'bn' ? 'চলুন শুরু করি' : 'Hire Me'}
        </Link>
      </div>
    </>
  );
}
