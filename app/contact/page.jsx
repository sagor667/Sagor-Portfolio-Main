'use client';
import { useLanguage } from '../../context/LanguageContext';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  const { lang } = useLanguage();

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
      subtitle: 'আপনার মনে কী কোনো প্রজেক্ট আছে বা কোনো বিষয়ে আলোচনা করতে চান? নিচে মেসেজ দিন অথবা আমার সাথে সরাসরি যোগাযোগ করুন।',
      email: 'ইমেইল',
      phone: 'হোয়াটসঅ্যাপ / ফোন',
      location: 'বর্তমান অবস্থান',
      directContact: 'সরাসরি যোগাযোগ',
    }   
  };

  const text = t[lang] || t.en;

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: 'clamp(100px, 14vw, 140px)' }}>
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
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{text.email}</div>
                <div style={{ fontWeight: '600' }}>sagorahmed3036@gmail.com</div>
              </div>
            </a>
            
            <a href="https://wa.me/8801960795537" target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <div className="contact-icon" style={{ color: '#25D366' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{text.phone}</div>
                <div style={{ fontWeight: '600' }}>+880 1960 795537</div>
              </div>
            </a>

            <div className="contact-info-item" style={{ cursor: 'default' }}>
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
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
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
