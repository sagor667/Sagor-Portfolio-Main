'use client';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

const content = {
  en: {
    greeting: '👋 Hello, I\'m',
    name: 'Md Sagor Ahmed',
    title: 'WordPress Developer',
    highlight: '& Web Designer',
    subtitle: 'I craft high-performance, beautiful WordPress websites that convert visitors into clients. Based in Bangladesh, serving clients worldwide.',
    hire: 'Hire Me',
    projects: 'View Projects',
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '100+', label: 'Projects Done' },
      { value: '80+', label: 'Happy Clients' },
    ],
    badge1: '⚡ Available for Freelance',
    badge2: '🏆 Top Rated Developer',
  },
  bn: {
    greeting: '👋 আসসালামু আলাইকুম, আমি',
    name: 'মোঃ সাগর আহমেদ',
    title: 'একজন দক্ষ ওয়ার্ডপ্রেস ডেভেলপার',
    highlight: 'ও ওয়েব ডিজাইনার',
    subtitle: 'আমি উন্নত মানের এবং দৃষ্টিনন্দন ওয়ার্ডপ্রেস ওয়েবসাইট তৈরি করি, যা আপনার ব্যবসার প্রসার ঘটাতে এবং দর্শকদের কাস্টমারে রূপান্তর করতে সহায়তা করে।',
    hire: 'চলুন যোগাযোগ করি',
    projects: 'আমার কাজগুলো দেখুন',
    stats: [
      { value: '৫+', label: 'বছরের অভিজ্ঞতা' },
      { value: '১০০+', label: 'সফল প্রজেক্ট' },
      { value: '৮০+', label: 'সন্তুষ্ট ক্লায়েন্ট' },
    ],
    badge1: '⚡ নতুন প্রজেক্টের জন্য প্রস্তুত',
    badge2: '🏆 টপ রেটেড ডেভেলপার',
  },
};

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-greeting">
              {t.greeting} <strong style={{ color: 'var(--text-primary)' }}>{t.name}</strong>
            </div>

            <h1 className="hero-title">
              {t.title}
              <span className="highlight"> {t.highlight}</span>
            </h1>

            <p className="hero-subtitle">{t.subtitle}</p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <span>💼</span> {t.hire}
              </Link>
              <Link href="/projects" className="btn btn-secondary btn-lg">
                <span>🚀</span> {t.projects}
              </Link>
            </div>

            <div className="hero-stats">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring animate-float">
              <div className="hero-avatar-inner">
                <Image src="/images/blog-1.jpg" alt={t.name} fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
              </div>
            </div>
            <div className="hero-floating-badge hero-floating-badge-1">{t.badge1}</div>
            <div className="hero-floating-badge hero-floating-badge-2">{t.badge2}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--primary), transparent)'
        }} />
      </div>
    </section>
  );
}
