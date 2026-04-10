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
      servicesSubtitle: 'Comprehensive WordPress solutions tailored to elevate your brand.',
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Some of my recent work that showcases my skills and experience.',
      viewAll: 'View All Projects'
    },
    bn: {
      servicesTitle: 'আমার দক্ষতাসমূহ',
      servicesSubtitle: 'আপনার ব্র্যান্ডকে অনন্য উচ্চতায় নিয়ে যেতে আধুনিক ওয়ার্ডপ্রেস সমাধান।',
      projectsTitle: 'আমার বাছাইকৃত প্রজেক্টস',
      projectsSubtitle: 'আমার সাম্প্রতিক কিছু কাজ যা আমার দক্ষতা এবং অভিজ্ঞতার পরিচয় দেয়।',
      viewAll: 'সব প্রজেক্ট দেখুন'
    }
  };
  
  const text = t[lang] || t.en;

  const services = [
    {
      icon: '🎨',
      titleEn: 'Custom WordPress Design',
      titleBn: 'কাস্টম ওয়ার্ডপ্রেস ডিজাইন',
      descEn: 'Bespoke themes built from scratch using modern frameworks and best practices to match your unique brand identity.',
      descBn: 'আপনার ব্র্যান্ডের অনন্য পরিচয়ের জন্য আধুনিক ফ্রেমওয়ার্ক ব্যবহার করে সম্পূর্ণ নতুনভাবে তৈরি প্রিমিয়াম থিম।'
    },
    {
      icon: '🛒',
      titleEn: 'WooCommerce Development',
      titleBn: 'ই-কমার্স সমাধান (WooCommerce)',
      descEn: 'Fully functional, secure, and scalable online stores with advanced payment gateways and inventory management.',
      descBn: 'উন্নত পেমেন্ট ব্যবস্থা এবং ইনভেন্টরি ম্যানেজমেন্ট সহ সম্পূর্ণ সুরক্ষিত এবং পরিমাপযোগ্য অনলাইন স্টোর।'
    },
    {
      icon: '⚡',
      titleEn: 'Performance Optimization',
      titleBn: 'সাইট স্পিড অপ্টিমাইজেশন',
      descEn: 'Speed up your website to load under 2 seconds, improving user experience and Google SEO rankings.',
      descBn: 'আপনার ওয়েবসাইটের গতি বাড়িয়ে ২ সেকেন্ডের নিচে নামিয়ে আনা, যা ব্যবহারকারীর অভিজ্ঞতা এবং গুগল এসইও র‍্যাঙ্কিং উন্নত করবে।'
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
