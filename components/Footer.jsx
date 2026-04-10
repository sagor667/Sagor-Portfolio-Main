'use client';
import Link from 'next/link';

export default function Footer({ lang }) {
  const t = {
    en: {
      desc: 'WordPress Developer & Web Designer crafting high-performance, beautiful websites that help your business grow online.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      built: 'Built with ❤️ in Bangladesh',
      links: ['Home', 'About', 'Projects', 'Blog'],
      hrefs: ['/', '/about', '/projects', '/blog'],
      serviceList: ['WordPress Development', 'Custom Design', 'WooCommerce', 'Website Optimization', 'SEO Services'],
    },
    bn: {
      desc: 'একজন দক্ষ ওয়ার্ডপ্রেস ডেভেলপার ও ওয়েব ডিজাইনার হিসেবে আমি আপনার ব্যবসার অনলাইন প্রবৃদ্ধি ত্বরান্বিত করতে উচ্চমানের ওয়েবসাইট তৈরিতে নিবেদিত।',
      quickLinks: 'দ্রুত লিঙ্ক',
      services: 'সেবাসমূহ',
      contact: 'যোগাযোগ',
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
      built: '❤️ সহকারে বাংলাদেশে তৈরি',
      links: ['হোম', 'পরিচিতি', 'প্রজেক্টস', 'ব্লগ'],
      hrefs: ['/', '/about', '/projects', '/blog'],
      serviceList: ['ওয়ার্ডপ্রেস ডেভেলপমেন্ট', 'কাস্টম ডিজাইন', 'ই-কমার্স সমাধান', 'সাইট অপ্টিমাইজেশন', 'এসইও ফেভারিট'],
    },
  };
  const copy = t[lang] || t.en;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Sagor Ahmed</div>
            <p className="footer-desc">{copy.desc}</p>
            <div className="footer-social">
              {[
                { icon: '𝕏', href: 'https://x.com/sagorahmed11223', label: 'Twitter' },
                { icon: 'in', href: '#', label: 'LinkedIn' },
                { icon: '⌬', href: 'https://github.com/sagor667', label: 'GitHub' },
                { icon: '▶', href: 'https://www.youtube.com/@studytothepoint1', label: 'YouTube' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="social-btn" aria-label={s.label} title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-title">{copy.quickLinks}</h3>
            {copy.links.map((l, i) => (
              <Link key={l} href={copy.hrefs[i]} className="footer-link">{l}</Link>
            ))}
          </div>

          <div>
            <h3 className="footer-title">{copy.services}</h3>
            {copy.serviceList.map((s) => (
              <span key={s} className="footer-link" style={{ cursor: 'default' }}>{s}</span>
            ))}
          </div>

          <div>
            <h3 className="footer-title">{copy.contact}</h3>
            <a href="mailto:sagor@example.com" className="footer-link">📧 sagorahmed3036@gmail.com</a>
            <a href="https://wa.me/8801XXXXXXXXX" className="footer-link">💬 WhatsApp: +8801960795537</a>
            <span className="footer-link" style={{ cursor: 'default' }}>📍 Jamalpur, Bangladesh</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sagor Ahmed. {copy.rights}</p>
          <p>{copy.built}</p>
        </div>
      </div>
    </footer>
  );
}
