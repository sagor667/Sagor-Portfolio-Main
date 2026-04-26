'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const { lang } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch featured projects
    fetch('/api/projects?featured=true')
      .then(res => res.json())
      .then(data => setProjects(Array.isArray(data) ? data : []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const t = {
    en: {
      servicesTitle: 'My Expertise',
      servicesSubtitle: 'Full-stack web development and WordPress solutions tailored to elevate your brand and grow your business.',
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Some of my recent work that showcases my skills and experience.',
      viewAll: 'View All Projects'
    },
    bn: {
      servicesTitle: 'আমার দক্ষতাসমূহ',
      servicesSubtitle: 'আপনার ব্র্যান্ডকে এগিয়ে নিতে ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট এবং আধুনিক ওয়ার্ডপ্রেস সমাধান।',
      projectsTitle: 'আমার বাছাইকৃত প্রজেক্টস',
      projectsSubtitle: 'আমার সাম্প্রতিক কিছু কাজ যা আমার দক্ষতা এবং অভিজ্ঞতার পরিচয় দেয়।',
      viewAll: 'সব প্রজেক্ট দেখুন'
    }
  };
  
  const text = t[lang] || t.en;

  const services = [
    {
      icon: '🚀',
      titleEn: 'Full-Stack Web Development',
      titleBn: 'ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট',
      descEn: 'End-to-end web applications built with React, Next.js, Node.js, and modern databases — scalable, fast, and production-ready.',
      descBn: 'React, Next.js, Node.js এবং আধুনিক ডেটাবেজ ব্যবহার করে সম্পূর্ণ প্রোডাকশন-রেডি ফুলস্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি করি।'
    },
    {
      icon: '🎨',
      titleEn: 'WordPress & WooCommerce',
      titleBn: 'ওয়ার্ডপ্রেস ও WooCommerce',
      descEn: 'Custom WordPress themes, plugins, and fully functional WooCommerce stores with secure payment gateways and inventory management.',
      descBn: 'কাস্টম ওয়ার্ডপ্রেস থিম, প্লাগইন এবং উন্নত পেমেন্ট ব্যবস্থাসহ সম্পূর্ণ সুরক্ষিত WooCommerce অনলাইন স্টোর তৈরি করি।'
    },
    {
      icon: '⚡',
      titleEn: 'Performance & SEO Optimization',
      titleBn: 'পারফরম্যান্স ও এসইও অপ্টিমাইজেশন',
      descEn: 'Speed up your website to load under 2 seconds and rank higher on Google with technical SEO, Core Web Vitals, and best practices.',
      descBn: 'আপনার ওয়েবসাইটের গতি ২ সেকেন্ডের নিচে নামিয়ে আনা এবং টেকনিক্যাল এসইও ও Core Web Vitals অপ্টিমাইজেশনের মাধ্যমে গুগলে উচ্চ র‍্যাঙ্কিং নিশ্চিত করা।'
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <section className="section" id="services" style={{ background: 'var(--bg-900)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{lang === 'en' ? 'Services' : 'সেবা'}</span>
            <h2 className="section-title">{text.servicesTitle}</h2>
            <p className="section-subtitle">{text.servicesSubtitle}</p>
          </div>
          
          <div className="grid-3">
            {services.map((s, i) => (
              <div key={i} className="glass-card service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{lang === 'bn' ? s.titleBn : s.titleEn}</h3>
                <p className="service-desc">{lang === 'bn' ? s.descBn : s.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{lang === 'en' ? 'Portfolio' : 'পোর্টফোলিও'}</span>
            <h2 className="section-title">{text.projectsTitle}</h2>
            <p className="section-subtitle">{text.projectsSubtitle}</p>
          </div>
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div className="loader-ring"></div>
            </div>
          ) : (
            <div className="grid-3 animate-fade-up">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
          
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link href="/projects" className="btn btn-outline btn-lg">
              {text.viewAll} ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
