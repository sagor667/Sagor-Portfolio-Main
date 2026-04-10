'use client';
import { useLanguage } from '../../context/LanguageContext';
import './services.css';

const services = [
  {
    id: 1,
    titleEn: 'Custom WordPress Development',
    titleBn: 'কাস্টম ওয়ার্ডপ্রেস ডেভেলপমেন্ট',
    descEn: 'I build fully custom, responsive, and easy-to-manage WordPress websites tailored exactly to your brand needs. From custom themes to complex plugin integrations.',
    descBn: 'আপনার ব্র্যান্ডের প্রয়োজন অনুযায়ী আমি সম্পূর্ণ কাস্টম, রেসপন্সিভ এবং সহজে পরিচালনাযোগ্য ওয়ার্ডপ্রেস ওয়েবসাইট তৈরি করি। কাস্টম থিম থেকে শুরু করে জটিল প্লাগইন ইন্টিগ্রেশন—সবই এখানে পাবেন।',
    glowColor: 'rgba(79, 70, 229, 0.45)',
    iconColor: '#A5B4FC',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 2,
    titleEn: 'WooCommerce & E-commerce',
    titleBn: 'ই-কমার্স সমাধান (WooCommerce)',
    descEn: 'Transform your business into a digital storefront. I create robust, scalable, and optimized WooCommerce platforms that drive sales and streamline user shopping experiences.',
    descBn: 'আপনার ব্যবসাকে একটি শক্তিশালী ডিজিটাল স্টোরে রূপান্তর করুন। আমি এমন উন্নত ই-কমার্স প্ল্যাটফর্ম তৈরি করি যা আপনার বিক্রি বাড়াতে এবং গ্রাহকদের কেনাকাটার অভিজ্ঞতা সহজ করতে সাহায্য করবে।',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    iconColor: '#22D3EE',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    id: 3,
    titleEn: 'Full-Stack Web Apps',
    titleBn: 'ফুল-স্ট্যাক ওয়েব অ্যাপস',
    descEn: 'Leveraging Next.js, React, and Node.js to build powerful, lightning-fast, and dynamic web applications for complex business logistics and dashboards.',
    descBn: 'Next.js, React এবং Node.js ব্যবহার করে আমি দ্রুতগতির এবং ডায়নামিক ওয়েব অ্যাপ্লিকেশন তৈরি করি, যা আপনার ব্যবসার জটিল লজিক এবং ড্যাশবোর্ড পরিচালনার জন্য উপযুক্ত।',
    glowColor: 'rgba(139, 92, 246, 0.45)',
    iconColor: '#C4B5FD',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 4,
    titleEn: 'Landing Pages & UI/UX',
    titleBn: 'ল্যান্ডিং পেজ এবং ইউআই/ইউএক্স',
    descEn: 'High-converting, visually stunning landing pages designed with modern principles like glassmorphism to capture leads and make a perfect first impression.',
    descBn: 'আধুনিক ডিজাইন এবং নিখুঁত ইউজার এক্সপেরিয়েন্সের মাধ্যমে আমি এমন ল্যান্ডিং পেজ তৈরি করি যা দর্শকদের আকৃষ্ট করবে এবং আপনার ব্যবসার প্রবৃদ্ধি নিশ্চিত করবে।',
    glowColor: 'rgba(234, 179, 8, 0.45)',
    iconColor: '#FCD34D',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
  {
    id: 5,
    titleEn: 'Performance Optimization',
    titleBn: 'সার্ভার ও সাইট অপ্টিমাইজেশন',
    descEn: 'Is your website slow? I analyze and optimize speeds, core web vitals, and asset delivery to ensure millisecond load times, reducing your bounce rate drastically.',
    descBn: 'আপনার ওয়েবসাইট কি ধীরগতির? আমি লোডিং স্পিড এবং পারফরম্যান্স অপ্টিমাইজ করার মাধ্যমে আপনার সাইটকে সুপারফাস্ট করে তুলি, যা ভিজিটরদের রিটেনশন বাড়াতে সাহায্য করে।',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    iconColor: '#6EE7B7',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 6,
    titleEn: 'SEO & Security Automation',
    titleBn: 'এসইও এবং সিকিউরিটি অটোমেশন',
    descEn: 'Implementing on-page SEO best practices and robust security measures to protect your digital assets against vulnerabilities and ensure maximum visibility on Google.',
    descBn: 'আমি অন-পেজ এসইও এবং মজবুত সিকিউরিটি নিশ্চিত করি যাতে আপনার ওয়েবসাইট গুগল র‍্যাঙ্কিংয়ে এগিয়ে থাকে এবং সব ধরনের সাইবার ঝুঁকি থেকে নিরাপদ থাকে।',
    glowColor: 'rgba(244, 63, 94, 0.45)',
    iconColor: '#FDA4AF',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const t = {
  en: {
    tag: 'What I Do',
    title: 'My Expert Services',
    subtitle: "Providing end-to-end digital solutions from spectacular UI designs to robust backend and scalable e-commerce infrastructure. Let's build something great.",
    ctaTitle: 'Ready to Start Your Project?',
    ctaText: "Whether you need a simple WordPress blog, a complex e-commerce platform, or a lightning-fast custom web app, I'm ready to bring your vision to reality.",
    quote: 'Get a Free Quote',
    work: 'View My Work',
    discuss: 'Discuss Project'
  },
  bn: {
    tag: 'আমি যা করি',
    title: 'আমার বিশেষ সেবাসমূহ',
    subtitle: 'ইউআই ডিজাইন থেকে শুরু করে ব্যাকএন্ড এবং স্কেলেবল ই-কমার্স অবকাঠামো—আমি দিচ্ছি আপনার ব্যবসার জন্য পূর্ণাঙ্গ ডিজিটাল সমাধান। চলুন একসাথে দারুণ কিছু তৈরি করি।',
    ctaTitle: 'আপনার প্রজেক্ট শুরু করতে প্রস্তুত?',
    ctaText: 'একটি সাধারণ ওয়ার্ডপ্রেস ব্লগ থেকে শুরু করে জটিল ই-কমার্স প্ল্যাটফর্ম বা সুপারফাস্ট ওয়েব অ্যাপ—আপনার যেকোনো স্বপ্নকে বাস্তবে রূপ দিতে আমি প্রস্তুত।',
    quote: 'ফ্রি কোট নিন',
    work: 'আমার কাজগুলো দেখুন',
    discuss: 'প্রজেক্ট নিয়ে আলাপ করি'
  }
};

export default function ServicesPage() {
  const { lang } = useLanguage();

  const text = t[lang] || t.en;

  return (
    <div className="services-page">
      <div className="container">

        {/* Header */}
        <div className="section-header services-header">
          <div className="section-tag">{text.tag}</div>
          <h1 className="section-title">{text.title}</h1>
          <p className="section-subtitle">{text.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">

              {/* Glow orb */}
              <div className="service-card-glow" style={{ background: service.glowColor }} />

              {/* Icon */}
              <div className="service-icon-box" style={{ color: service.iconColor, borderColor: `${service.iconColor}33` }}>
                {service.iconPath}
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">
                  {lang === 'bn' ? service.titleBn : service.titleEn}
                </h3>
                <p className="service-card-desc">
                  {lang === 'bn' ? service.descBn : service.descEn}
                </p>
              </div>

              <a href="/contact" className="service-cta-link">
                {text.discuss}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="services-cta-banner">
          <div className="services-cta-bg" />
          <div className="services-cta-content">
            <h2 className="services-cta-title">{text.ctaTitle}</h2>
            <p className="services-cta-text">{text.ctaText}</p>
            <div className="services-cta-actions">
              <a href="/contact" className="btn btn-primary">{text.quote}</a>
              <a href="/projects" className="btn btn-secondary">{text.work}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
