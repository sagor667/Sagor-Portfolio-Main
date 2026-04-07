'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
  }, []);

  const t = {
    en: {
      title: 'About Me',
      subtitle: 'Passionate about creating digital experiences that map to business success.',
      storyTitle: 'My Story',
      storyText: [
        'I am Md Sagor Ahmed, a dedicated WordPress Developer and Web Designer based in Bangladesh. With over 5 years of experience in the web development industry, I specialize in creating high-performance, secure, and visually appealing WordPress websites.',
        'My journey started with a deep curiosity about how websites operate, which led me to dive deep into PHP, JavaScript, and modern front-end frameworks. Today, I help businesses worldwide establish a strong online presence through custom WordPress themes and complex WooCommerce integrations.',
        'I believe in a user-centric approach where design meets functionality. Every project I undertake is built with SEO, speed, and accessibility in mind, ensuring my clients not only get a beautiful website but also a powerful marketing tool.',
      ],
      skillsTitle: 'Core Skills',
      skills: [
        { name: 'Wordpress', icon: '📝' },
        { name: 'WooCommerce', icon: '🛒' },
        { name: 'PHP & MySQL', icon: '🐘' },
        { name: 'JavaScript / React', icon: '⚛️' },
        { name: 'HTML & CSS', icon: '🎨' },
        { name: 'SEO Optimization', icon: '📈' },
        { name: 'Web Performance', icon: '⚡' },
        { name: 'Tailwind & Next.js', icon: '🚀' },
      ],
      experienceTitle: 'Experience',
      experience: [
        {
          date: '2021 - Present',
          title: 'Senior WordPress Developer',
          company: 'Freelance & Upwork',
          desc: 'Architecting and developing custom WordPress solutions for international clients. Managing end-to-end project lifecycles from design to deployment.'
        },
        {
          date: '2019 - 2021',
          title: 'Web Developer',
          company: 'Local IT Agency',
          desc: 'Built responsive business websites and e-commerce stores. Handled website maintenance, security audits, and performance optimization for 50+ clients.'
        },
        {
          date: '2018 - 2019',
          title: 'Junior Front-End Developer',
          company: 'Tech Startup',
          desc: 'Assisted in developing user interfaces using modern CSS and JavaScript. Converted PSD/Figma designs to fully functional HTML templates.'
        }
      ],
      cta: 'Ready to start a project?',
      btn: 'Get in Touch'
    },
    bn: {
      title: 'আমার সম্পর্কে',
      subtitle: 'ডিজিটাল অভিজ্ঞতা তৈরি করতে উৎসাহী যা ব্যবসায়ের সফলতার সাথে মানানসই।',
      storyTitle: 'আমার গল্প',
      storyText: [
        'আমি মো. সাগর আহমেদ, বাংলাদেশের একজন নিবেদিত ওয়ার্ডপ্রেস ডেভেলপার এবং ওয়েব ডিজাইনার। ওয়েব ডেভেলপমেন্ট ইন্ডাস্ট্রিতে ৫ বছরেরও বেশি অভিজ্ঞতার সাথে, আমি উচ্চ-পারফরম্যান্স, সুরক্ষিত এবং দৃষ্টিনন্দন ওয়ার্ডপ্রেস ওয়েবসাইট তৈরিতে বিশেষজ্ঞ।',
        'আমার যাত্রা শুরু হয়েছিল ওয়েবসাইটগুলি কীভাবে কাজ করে সে সম্পর্কে গভীর কৌতূহল থেকে, যা আমাকে পিএইচপি, জাভাস্ক্রিপ্ট এবং আধুনিক ফ্রন্ট-এন্ড ফ্রেমওয়ার্কের গভীরে যেতে পরিচালিত করেছিল। আজ, আমি বিশ্বব্যাপী ব্যবসাগুলিকে কাস্টম ওয়ার্ডপ্রেস থিম এবং জটিল উকমার্স ইন্টিগ্রেশনের মাধ্যমে একটি শক্তিশালী অনলাইন উপস্থিতি প্রতিষ্ঠায় সহায়তা করি।',
        'আমি একটি ব্যবহারকারী-কেন্দ্রিক পদ্ধতিতে বিশ্বাস করি যেখানে ডিজাইন কার্যকারিতার সাথে মিলিত হয়। আমি যে প্রতিটি প্রকল্প গ্রহণ করি তা এসইও, গতি এবং অ্যাক্সেসযোগ্যতার কথা মাথায় রেখে তৈরি করা হয়, তা নিশ্চিত করে যে আমার ক্লায়েন্টরা কেবল একটি সুন্দর ওয়েবসাইটই নয়, একটি শক্তিশালী বিপণন সরঞ্জামও পাবে।',
      ],
      skillsTitle: 'মূল দক্ষতা সমূহ',
      skills: [
        { name: 'ওয়ার্ডপ্রেস', icon: '📝' },
        { name: 'উকমার্স', icon: '🛒' },
        { name: 'পিএইচপি ও মাইএসকিউএল', icon: '🐘' },
        { name: 'জাভাস্ক্রিপ্ট / রিঅ্যাক্ট', icon: '⚛️' },
        { name: 'এইচটিএমএল ও সিএসএস', icon: '🎨' },
        { name: 'এসইও অপ্টিমাইজেশন', icon: '📈' },
        { name: 'ওয়েব পারফরম্যান্স', icon: '⚡' },
        { name: 'টেইলউইন্ড ও নেক্সট.জেএস', icon: '🚀' },
      ],
      experienceTitle: 'অভিজ্ঞতা',
      experience: [
        {
          date: '২০২১ - বর্তমান',
          title: 'সিনিয়র ওয়ার্ডপ্রেস ডেভেলপার',
          company: 'ফ্রিল্যান্স এবং আপওয়ার্ক',
          desc: 'আর্কিটেকচারিং এবং আন্তর্জাতিক ক্লায়েন্টদের জন্য কাস্টম ওয়ার্ডপ্রেস সমাধান ডেভেলপ করা। ডিজাইন থেকে ডিপ্লয়মেন্ট পর্যন্ত শেষ থেকে শেষ প্রকল্প জীবনচক্র পরিচালনা করা।'
        },
        {
          date: '২০১৯ - ২০২১',
          title: 'ওয়েব ডেভেলপার',
          company: 'লোকাল আইটি এজেন্সি',
          desc: 'রেসপন্সিভ ব্যবসায়িক ওয়েবসাইট এবং ই-কমার্স স্টোর তৈরি করা। ৫০+ ক্লায়েন্টের জন্য ওয়েবসাইট রক্ষণাবেক্ষণ, সিকিউরিটি অডিট এবং পারফরম্যান্স অপ্টিমাইজেশন পরিচালনা করা।'
        },
        {
          date: '২০১৮ - ২০১৯',
          title: 'জুনিয়র ফ্রন্ট-এন্ড ডেভেলপার',
          company: 'টেক স্টার্টআপ',
          desc: 'আধুনিক সিএসএস এবং জাভাস্ক্রিপ্ট ব্যবহার করে ইউজার ইন্টারফেস ডেভেলপমেন্টে সহায়তা করা। পিএসডি/ফিগমা ডিজাইনকে সম্পূর্ণ কার্যকরী এইচটিএমএল টেমপ্লেটে রূপান্তর করা।'
        }
      ],
      cta: 'একটি প্রকল্প শুরু করতে প্রস্তুত?',
      btn: 'যোগাযোগ করুন'
    }
  };

  const text = t[lang] || t.en;

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">{lang === 'en' ? 'About' : 'সম্পর্কে'}</span>
          <h1 className="section-title">{text.title}</h1>
          <p className="section-subtitle">{text.subtitle}</p>
        </div>

        {/* Story Section */}
        <div className="glass-panel" style={{ padding: 'clamp(24px, 5vw, 48px)', marginBottom: '60px' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--primary-light)' }}>
                {text.storyTitle}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {text.storyText.map((paragraph, i) => (
                  <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
               <div style={{ 
                 width: '100%', maxWidth: '400px', aspectRatio: '4/5', 
                 background: 'linear-gradient(135deg, var(--bg-800), var(--bg-900))',
                 borderRadius: 'var(--radius-xl)', border: '1px solid var(--glass-border)',
                 display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem', rotate: '2deg'
                }}>
                 💼
               </div>
               
               {/* Decorative dots */}
               <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', zIndex: -1 }}>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                   {Array(25).fill(0).map((_, i) => (
                     <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.3 }}></div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ gap: '60px', alignItems: 'start' }}>
          
          {/* Skills */}
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '32px' }}>{text.skillsTitle}</h2>
            <div className="skills-grid">
              {text.skills.map((skill, i) => (
                <div key={i} className="skill-item animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '32px' }}>{text.experienceTitle}</h2>
            <div className="timeline">
              {text.experience.map((exp, i) => (
                <div key={i} className="timeline-item animate-fade-left" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{exp.date}</div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-desc">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '100px', padding: '60px', background: 'var(--glass-bg)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>{text.cta}</h2>
          <Link href="/contact" className="btn btn-primary btn-lg">
            {text.btn}
          </Link>
        </div>

      </div>
    </div>
  );
}
