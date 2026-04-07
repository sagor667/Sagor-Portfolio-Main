'use client';
import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
  const [lang, setLang] = useState('en');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);

    // Initial fetch of all projects
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []); // Run once on mount

  const t = {
    en: {
      title: 'My Portfolio',
      subtitle: 'A collection of my recent work in WordPress, Web Design, and full-stack development.',
      filters: ['All', 'E-Commerce', 'Business', 'Portfolio', 'Real Estate', 'Restaurant', 'Blog'],
    },
    bn: {
      title: 'আমার পোর্টফোলিও',
      subtitle: 'ওয়ার্ডপ্রেস, ওয়েব ডিজাইন এবং ফুল-স্ট্যাক ডেভেলপমেন্টে আমার সাম্প্রতিক কাজের সংগ্রহ।',
      filters: ['সব', 'ই-কমার্স', 'বিজনেস', 'পোর্টফোলিও', 'রিয়েল এস্টেট', 'রেস্টুরেন্ট', 'ব্লগ'],
    }
  };
  
  const text = t[lang] || t.en;

  const filteredProjects = filter === 'All' || filter === 'সব' 
    ? projects 
    : projects.filter(p => {
        // Map bangla filter back to english category if needed, or check both
        const index = text.filters.indexOf(filter);
        const englishCategory = t.en.filters[index];
        return p.category === englishCategory || p.category === filter;
      });

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{lang === 'en' ? 'Projects' : 'প্রজেক্টসমূহ'}</span>
          <h1 className="section-title">{text.title}</h1>
          <p className="section-subtitle">{text.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="filter-bar">
          {text.filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="loader-ring" style={{ margin: '0 auto' }}></div>
          </div>
        ) : (
          <div className="grid-3 animate-fade-up">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} lang={lang} />
            ))}
            {filteredProjects.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {lang === 'bn' ? 'কোনো প্রজেক্ট পাওয়া যায়নি।' : 'No projects found in this category.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
