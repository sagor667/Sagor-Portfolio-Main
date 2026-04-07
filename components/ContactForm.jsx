'use client';
import { useState } from 'react';

export default function ContactForm({ lang }) {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const t = {
    en: {
      name: 'Your Name',
      email: 'Email Address',
      message: 'Your Message',
      btn: 'Send Message',
      btnSending: 'Sending...',
      success: 'Message sent successfully! I will get back to you soon.',
      error: 'Something went wrong. Please try again.',
    },
    bn: {
      name: 'আপনার নাম',
      email: 'ইমেইল ঠিকানা',
      message: 'আপনার বার্তা',
      btn: 'বার্তা পাঠান',
      btnSending: 'পাঠানো হচ্ছে...',
      success: 'বার্তা সফলভাবে পাঠানো হয়েছে! আমি শীঘ্রই আপনার সাথে যোগাযোগ করব।',
      error: 'কিছু ভুল হয়েছে। আবার চেষ্টা করুন।',
    }
  };

  const text = t[lang] || t.en;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
    
    setTimeout(() => { if (status !== 'success') setStatus('idle'); }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group" style={{ gap: '20px' }}>
      {status === 'success' && (
        <div style={{ padding: '16px', background: 'rgba(37, 211, 102, 0.1)', color: '#25D366', border: '1px solid rgba(37, 211, 102, 0.3)', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
          {text.success}
        </div>
      )}
      {status === 'error' && (
        <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
          {text.error}
        </div>
      )}

      <div>
        <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>{text.name}</label>
        <input 
          type="text" required className="form-input" placeholder="John Doe"
          value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>{text.email}</label>
        <input 
          type="email" required className="form-input" placeholder="john@example.com"
          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>{text.message}</label>
        <textarea 
          required className="form-textarea" placeholder={lang === 'bn' ? 'এখানে আপনার বার্তা লিখুন...' : 'Write your project details here...'}
          value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'} style={{ width: '100%' }}>
        {status === 'sending' ? text.btnSending : text.btn}
      </button>
    </form>
  );
}
