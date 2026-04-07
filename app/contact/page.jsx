'use client';
import { useState, useEffect } from 'react';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
  }, []);

  const t = {
    en: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind or want to discuss an opportunity? Drop a message below or connect with me directly.',
      email: 'Email',
      phone: 'WhatsApp / Phone',
      location: 'Location',
      directContact: 'Direct Contact',
    },
    bn: {
      title: 'যোগাযোগ করুন',
      subtitle: 'মনোমর কোনো প্রকল্প আছে বা আলোচনা করতে চান? নিচে মেসেজ দিন অথবা সরাসরি যোগাযোগ করুন।',
      email: 'ইমেইল',
      phone: 'হোয়াটসঅ্যাপ / ফোন',
      location: 'অবস্থান',
      directContact: 'সরাসরি যোগাযোগ',
    }   
  };

  const text = t[lang] || t.en;

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">{lang === 'en' ? 'Contact' : 'যোগাযোগ'}</span>
          <h1 className="section-title">{text.title}</h1>
          <p className="section-subtitle">{text.subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>{text.directContact}</h2>
            
            <a href="mailto:sagorahmed3036@gmail.com" className="contact-info-item">
              <div className="contact-icon">📧</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{text.email}</div>
                <div style={{ fontWeight: '600' }}>sagorahmed3036@gmail.com</div>
              </div>
            </a>
            
            <a href="https://wa.me/8801960795537" target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <div className="contact-icon" style={{ color: '#25D366' }}>💬</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{text.phone}</div>
                <div style={{ fontWeight: '600' }}>+880 1960 795537</div>
              </div>
            </a>

            <div className="contact-info-item" style={{ cursor: 'default' }}>
              <div className="contact-icon">📍</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{text.location}</div>
                <div style={{ fontWeight: '600' }}>Jamalpur, Bangladesh</div>
              </div>
            </div>

            {/* Aesthetic Ornament */}
            <div style={{ marginTop: '40px', padding: '32px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{lang === 'bn' ? 'চলুন একসাথে কাজ করি' : "Let's work together"}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {lang === 'bn' 
                  ? 'আমি সাধারণত কয়েক ঘণ্টার মধ্যে প্রতিক্রয়া জানাই। আমার সাথে আপনার প্রকল্প নিয়ে আলোচনা করতে নির্দ্বিধায় মেসেজ করুন।' 
                  : 'I usually respond within a few hours. Feel free to message me to discuss your project.'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>
              {lang === 'bn' ? 'আমাকে মেসেজ দিন' : 'Send me a message'}
            </h2>
            <ContactForm lang={lang} />
          </div>
        </div>

      </div>
    </div>
  );
}
