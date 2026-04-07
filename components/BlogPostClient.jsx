'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogPostClient({ post }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
  }, []);

  const title = (lang === 'bn' && post.titleBn) ? post.titleBn : post.title;
  const content = (lang === 'bn' && post.contentBn) ? post.contentBn : post.content;
  const tags = JSON.parse(post.tags || "[]");

  return (
    <article className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-light)', marginBottom: '32px', fontWeight: '500' }}>
          ← {lang === 'bn' ? 'ব্লগে ফিরে যান' : 'Back to Blog'}
        </Link>

        {post.image && (
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: '40px', aspectRatio: '16/9' }}>
            <img src={post.image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div className="blog-meta" style={{ marginBottom: '16px' }}>
          <span className="badge">{post.category}</span>
          <span>{new Date(post.createdAt).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US')}</span>
          <span>•</span>
          <span>{post.views} {lang === 'bn' ? 'বার পড়া হয়েছে' : 'views'}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '40px', color: 'var(--text-primary)' }}>
          {title}
        </h1>

        <div className="glass-panel" style={{ padding: 'clamp(20px, 4vw, 40px)', background: 'rgba(10, 15, 30, 0.4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            {content.split('\\n\\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.5rem' }}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('# ')) {
                return null;
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--text-muted)', marginRight: '8px', alignSelf: 'center' }}>{lang === 'bn' ? 'ট্যাগস:' : 'Tags:'}</span>
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

      </div>
    </article>
  );
}
