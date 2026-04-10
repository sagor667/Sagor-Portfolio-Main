'use client';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const { lang } = useLanguage();
  const isBn = lang === 'bn';
  const title = isBn && project.titleBn ? project.titleBn : project.title;
  const description = isBn && project.descriptionBn ? project.descriptionBn : project.description;
  const technologies = Array.isArray(project.technologies) 
    ? project.technologies 
    : (typeof project.technologies === 'string' ? JSON.parse(project.technologies) : []);

  return (
    <div className="glass-card project-card">
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={title} />
        ) : (
          <div className="project-img-placeholder">
            <span>💻</span>
          </div>
        )}
        <div className="project-img-overlay" />
      </div>

      <div className="project-card-body">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        <div className="project-tech-list">
          {technologies.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              {isBn ? 'লাইভ দেখুন' : 'View Live'} 🌐
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              {isBn ? 'গিটহাব' : 'GitHub'} 👨‍💻
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
