'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({ projects: 0, posts: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      // In a real app we would have an aggregated stats endpoint
      // Fetching separately for demo purposes
      Promise.all([
        fetch('/api/projects').then(r => r.json()),
        fetch('/api/blog').then(r => r.json()),
        fetch('/api/contact').then(r => r.json())
      ]).then(([projData, blogData, contactData]) => {
        setStats({
          projects: Array.isArray(projData) ? projData.length : 0,
          posts: Array.isArray(blogData) ? blogData.length : 0,
          contacts: Array.isArray(contactData) ? contactData.length : 0
        });
        setLoading(false);
      }).catch(err => {
        console.error("Error fetching stats:", err);
        setLoading(false);
      });
    }
  }, [status]);

  if (status === 'loading' || loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><div className="loader-ring"></div></div>;
  }

  if (!session) return null;

  return (
    <div>
      <div className="admin-header">
        <div>
          <h1 className="admin-page-title">Welcome back, {session.user?.name}</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Here relates the overview of your website.</p>
        </div>
      </div>

      <div className="grid-3">
        <div className="stat-card">
          <div className="stat-card-value">{stats.projects}</div>
          <div className="stat-card-label">Total Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">{stats.posts}</div>
          <div className="stat-card-label">Published Blog Posts</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">{stats.contacts}</div>
          <div className="stat-card-label">Unread Messages</div>
        </div>
      </div>

      <div className="glass-panel" style={{ marginTop: '40px', padding: '32px' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button onClick={() => router.push('/admin/projects')} className="btn btn-primary">Add New Project</button>
          <button onClick={() => router.push('/admin/blog')} className="btn btn-secondary">Write Blog Post</button>
        </div>
      </div>
    </div>
  );
}
