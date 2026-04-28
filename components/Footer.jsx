'use client';
import Link from 'next/link';

export default function Footer({ lang }) {
  const t = {
    en: {
      desc: 'FullStack & WordPress Developer crafting high-performance web applications and beautiful websites that help your business grow online.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
      built: '',
      links: ['Home', 'About', 'Projects', 'Blog'],
      hrefs: ['/', '/about', '/projects', '/blog'],
      serviceList: ['WordPress Development', 'Custom Design', 'WooCommerce', 'Website Optimization', 'SEO Services'],
    },
    bn: {
      desc: 'একজন দক্ষ ফুলস্ট্যাক এবং ওয়ার্ডপ্রেস ডেভেলপার হিসেবে আমি আপনার ব্যবসার অনলাইন প্রবৃদ্ধি ত্বরান্বিত করতে উচ্চমানের ওয়েব অ্যাপ্লিকেশন এবং ওয়েবসাইট তৈরিতে নিবেদিত।',
      quickLinks: 'দ্রুত লিঙ্ক',
      services: 'সেবাসমূহ',
      contact: 'যোগাযোগ',
      rights: 'সর্বস্বত্ব সংরক্ষিত।',
      built: '',
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
            <a href="mailto:sagorahmed3036@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.8 }}>
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              sagorahmed3036@gmail.com
            </a>
            <a href="https://wa.me/8801960795537" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, opacity: 0.8 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              +8801960795537
            </a>
            <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'default' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.8 }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Jamalpur, Bangladesh
            </span>
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
