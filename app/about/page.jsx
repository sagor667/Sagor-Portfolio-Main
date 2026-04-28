'use client';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const { lang } = useLanguage();

  const t = {
    en: {
      title: 'About Me',
      subtitle: 'Passionate about creating digital experiences that map to business success.',
      storyTitle: 'My Story',
      storyText: [
        'I am Md Sagor Ahmed, a dedicated Full-Stack Web Developer and WordPress Developer based in Bangladesh. With over 3+ years of experience in the web development industry, I specialize in creating high-performance, secure, and visually appealing web applications and WordPress websites.',
        'My journey started with a deep curiosity about how websites operate, which led me to dive deep into modern front-end and back-end frameworks including Next.js, React, Node.js, and PHP. Today, I help businesses worldwide establish a strong online presence through full-stack web solutions, custom WordPress themes, and complex WooCommerce integrations.',
        'I believe in a user-centric approach where design meets robust functionality. Every project I undertake is built with scalability, SEO, speed, and accessibility in mind, ensuring my clients not only get a beautiful application but also a powerful business tool.',
      ],
      skillsTitle: 'Core Skills',
      skills: [
        { name: 'Full-Stack Development', icon: '💻' },
        { name: 'WordPress & WooCommerce', icon: '📝' },
        { name: 'React & Next.js', icon: '⚛️' },
        { name: 'Node.js & Express', icon: '🚂' },
        { name: 'PHP & MySQL', icon: '🐘' },
        { name: 'Tailwind & Modern CSS', icon: '🎨' },
        { name: 'API Development', icon: '🔌' },
        { name: 'Performance & SEO', icon: '⚡' },
      ],
      experienceTitle: 'Experience',
      experience: [
        {
          date: '2024 - Present',
          title: 'Full-Stack & Sr. WordPress Developer',
          company: 'Freelance & Upwork',
          desc: 'Architecting and developing custom full-stack web applications and WordPress solutions for international clients. Managing end-to-end project lifecycles from database design to frontend deployment.'
        },
        {
          date: '2023 - 2024',
          title: 'Full-Stack Web Developer',
          company: 'Local IT Agency',
          desc: 'Built robust business web applications and WooCommerce stores. Handled API integrations, website maintenance, and performance optimization for 50+ clients.'
        },
        {
          date: '2022 - 2023',
          title: 'Front-End Developer',
          company: 'Tech Startup',
          desc: 'Assisted in developing dynamic user interfaces using React, Next.js, and modern CSS. Converted Figma designs into fully functional interactive front-end templates.'
        }
      ],
      educationTitle: 'Education',
      education: [
        {
          date: '',
          title: 'Diploma in Civil Engineering',
          institute: 'Mymensingh Polytechnic Institute'
        },
        {
          date: '',
          title: 'Secondary School Certificate (SSC)',
          institute: 'Tirutha Sattyapir High School'
        }
      ],
      cta: 'Ready to start a project?',
      btn: 'Get in Touch'
    },
    bn: {
      title: 'আমার সম্পর্কে',
      subtitle: 'আপনার ব্যবসায়ের সাফল্য নিশ্চিত করতে আধুনিক ডিজিটাল অভিজ্ঞতা তৈরিতে আমি নিবেদিত।',
      storyTitle: 'আমার গল্প',
      storyText: [
        '"হ্যালো, আমি মো. সাগর আহমেদ। গত ৩+ বছরেরও বেশি সময় ধরে কাজ করছি ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট এবং ওয়ার্ডপ্রেস নিয়ে। কৌতূহল থেকে শুরু হওয়া এই যাত্রায় আজ আমি Next.js, React এবং Node.js-এর মতো আধুনিক টেকনোলজি ব্যবহার করে জটিল সব ডিজিটাল সমস্যার সমাধান করছি।',
        'আমি মনে করি, একটি ওয়েবসাইট বা অ্যাপ্লিকেশন কেবল সুন্দর দেখালেই হয় না, সেটির পারফরম্যান্স হতে হয় নিখুঁত। তাই আমি এমন সব কাস্টম ই-কমার্স এবং ওয়েব সলিউশন তৈরি করি যা শুধু দৃষ্টিনন্দনই নয়, বরং স্কেলেবল এবং এসইও ফ্রেন্ডলি।',
        'দেশি-বিদেশি অসংখ্য ক্লায়েন্টের সাথে কাজ করার অভিজ্ঞতায় আমি বুঝেছি, একটি সঠিক টেকনিক্যাল সলিউশন কীভাবে একটি ব্যবসাকে বদলে দিতে পারে। আপনি যদি আপনার ব্যবসার অনলাইন উপস্থিতিকে পরবর্তী ধাপে নিয়ে যেতে চান, তবে আমি আছি আপনার পাশে।',
      ],
      skillsTitle: 'মূল দক্ষতাসমূহ',
      skills: [
        { name: 'ফুল-স্ট্যাক ডেভেলপমেন্ট', icon: '💻' },
        { name: 'ওয়ার্ডপ্রেস ও উকমার্স', icon: '📝' },
        { name: 'রিঅ্যাক্ট ও নেক্সট.জেএস', icon: '⚛️' },
        { name: 'নোড.জেএস ও এক্সপ্রেস', icon: '🚂' },
        { name: 'পিএইচপি ও মাইএসকিউএল', icon: '🐘' },
        { name: 'টেইলউইন্ড ও মডার্ন সিএসএস', icon: '🎨' },
        { name: 'এপিআই ডেভেলপমেন্ট', icon: '🔌' },
        { name: 'পারফরম্যান্স ও এসইও', icon: '⚡' },
      ],
      experienceTitle: 'কাজের অভিজ্ঞতা',
      experience: [
        {
          date: '২০২৪ - বর্তমান',
          title: 'ফুল-স্ট্যাক এবং সিনিয়র ওয়ার্ডপ্রেস ডেভেলপার',
          company: 'ফ্রিল্যান্স এবং আপওয়ার্ক',
          desc: 'আন্তর্জাতিক ক্লায়েন্টদের জন্য কাস্টম ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন এবং ওয়ার্ডপ্রেস সলিউশন ডিজাইন ও ডেভেলপমেন্ট করা। ডেটাবেস ডিজাইন থেকে শুরু করে সম্পূর্ণ প্রজেক্ট লাইফসাইকেল পরিচালনা।'
        },
        {
          date: '২০২৩ - ২০২৪',
          title: 'ফুল-স্ট্যাক ওয়েব ডেভেলপার',
          company: 'লোকাল আইটি এজেন্সি',
          desc: 'উন্নত মানের বিজনেস ওয়েব অ্যাপ্লিকেশন এবং উকমার্স স্টোর তৈরি করা। এপিআই ইন্টিগ্রেশন, ওয়েবসাইট রক্ষণাবেক্ষণ এবং পারফরম্যান্স অপ্টিমাইজেশন পরিচালনা করা।'
        },
        {
          date: '২০২২ - ২০২৩',
          title: 'ফ্রন্ট-এন্ড ডেভেলপার',
          company: 'টেক স্টার্টআপ',
          desc: 'রিঅ্যাক্ট, নেক্সট.জেএস এবং আধুনিক সিএসএস ব্যবহার করে ডায়নামিক ইউজার ইন্টারফেস তৈরিতে সহায়তা করা। ফিগমা ডিজাইন থেকে কার্যকর ইন্টারঅ্যাকটিভ টেমপ্লেটে রূপান্তর করা।'
        }
      ],
      educationTitle: 'শিক্ষাগত যোগ্যতা',
      education: [
        {
          date: '',
          title: 'ডিপ্লোমা ইন সিভিল ইঞ্জিনিয়ারিং',
          institute: 'ময়মনসিংহ পলিটেকনিক ইনস্টিটিউট'
        },
        {
          date: '',
          title: 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)',
          institute: 'তিরুথা সত্যপীর উচ্চ বিদ্যালয়'
        }
      ],
      cta: 'আপনি কি নতুন কোনো প্রজেক্ট শুরু করতে চাচ্ছেন?',
      btn: 'চলুন যোগাযোগ করি'
    }
  };

  const text = t[lang] || t.en;

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '100px' }}>
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
                 display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem', rotate: '2deg',
                 position: 'relative', overflow: 'hidden'
                }}>
                 <Image src="/images/about-profile.png" alt="Md Sagor Ahmed" fill style={{ objectFit: 'cover' }} priority />
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

            {/* Education */}
            <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', marginTop: '60px' }}>{text.educationTitle}</h2>
            <div className="timeline">
              {text.education.map((edu, i) => (
                <div key={i} className="timeline-item animate-fade-left" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="timeline-dot"></div>
                  {edu.date && <div className="timeline-date">{edu.date}</div>}
                  <h3 className="timeline-title" style={!edu.date ? { marginTop: '0' } : {}}>{edu.title}</h3>
                  <div className="timeline-company">{edu.institute}</div>
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
