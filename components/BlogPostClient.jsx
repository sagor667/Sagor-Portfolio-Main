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
      <style>{`
        .blog-prose h1, .blog-prose h2, .blog-prose h3 {
          color: var(--text-primary);
          font-weight: 700;
          line-height: 1.3;
          margin: 2rem 0 1rem;
        }
        .blog-prose h1 { font-size: 2rem; }
        .blog-prose h2 { font-size: 1.5rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem; }
        .blog-prose h3 { font-size: 1.2rem; color: var(--text-accent); }
        .blog-prose p {
          color: var(--text-secondary);
          line-height: 1.85;
          margin-bottom: 1.25rem;
        }
        .blog-prose strong { color: var(--text-primary); font-weight: 600; }
        .blog-prose ul, .blog-prose ol {
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 1rem 0 1.25rem 1.5rem;
        }
        .blog-prose li { margin-bottom: 0.4rem; }
        .blog-prose a { color: var(--primary-light); text-decoration: underline; }
        .blog-prose blockquote {
          border-left: 3px solid var(--primary);
          padding: 0.75rem 1.25rem;
          margin: 1.5rem 0;
          background: rgba(79,70,229,0.07);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          color: var(--text-secondary);
          font-style: italic;
        }
        .blog-prose code {
          background: rgba(79,70,229,0.15);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.875rem;
          color: var(--secondary-light);
        }
        .blog-prose pre {
          background: rgba(10,15,30,0.8);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .blog-prose pre code { background: none; padding: 0; color: var(--text-secondary); }
        .blog-prose img { border-radius: var(--radius-lg); max-width: 100%; margin: 1.5rem 0; }
        .blog-prose hr { border: none; border-top: 1px solid var(--glass-border); margin: 2rem 0; }
      `}</style>

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

        <div className="glass-panel blog-prose" style={{ padding: 'clamp(20px, 4vw, 40px)', background: 'rgba(10, 15, 30, 0.4)' }}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
