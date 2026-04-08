'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const [lang, setLang] = useState('en');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);

    fetch('/api/blog')
      .then(res => res.json())
      .then(data => setPosts(Array.isArray(data) ? data : []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const t = {
    en: {
      title: 'Blog & Articles',
      subtitle: 'Insights, tutorials, and updates from my journey in web development.',
      readMore: 'Read More',
    },
    bn: {
      title: 'ব্লগ ও প্রবন্ধ',
      subtitle: 'ওয়েব ডেভেলপমেন্ট সম্পর্কে আমার অভিজ্ঞতা, টিউটোরিয়াল এবং আপডেট।',
      readMore: 'আরও পড়ুন',
    }
  };

  const text = t[lang] || t.en;

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{lang === 'en' ? 'Insights' : 'অন্তর্দৃষ্টি'}</span>
          <h1 className="section-title">{text.title}</h1>
          <p className="section-subtitle">{text.subtitle}</p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="loader-ring" style={{ margin: '0 auto' }}></div>
          </div>
        ) : (
          <div className="grid-3 animate-fade-up">
            {posts.map(post => {
              const title = (lang === 'bn' && post.titleBn) ? post.titleBn : post.title;
              const excerpt = (lang === 'bn' && post.excerptBn) ? post.excerptBn : post.excerpt;
              
              return (
                <div key={post.id} className="glass-card blog-card">
                  <div className="blog-card-image">
                    {post.image ? (
                      <img src={post.image} alt={title} />
                    ) : (
                      <div className="project-img-placeholder">📝</div>
                    )}
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span className="badge">{post.category}</span>
                      <span>{new Date(post.createdAt).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US')}</span>
                    </div>
                    <h3 className="blog-title">{title}</h3>
                    <p className="blog-excerpt">{excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                      {text.readMore} →
                    </Link>
                  </div>
                </div>
              );
            })}
            
            {posts.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {lang === 'bn' ? 'কোনো পোস্ট পাওয়া যায়নি।' : 'No posts found.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
