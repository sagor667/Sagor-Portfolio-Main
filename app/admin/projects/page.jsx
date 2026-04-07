'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function AdminProjects() {
  const { status } = useSession();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '', titleBn: '', description: '', descriptionBn: '', category: 'WordPress',
    image: '', liveUrl: '', repoUrl: '', technologies: '', featured: false, order: 0
  });

  useEffect(() => {
    fetch('/api/projects').then(r => r.json()).then(data => {
      setProjects(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, []);

  if (status === 'loading' || loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><div className="loader-ring"></div></div>;

  const handleEdit = (proj) => {
    setEditingId(proj.id);
    let techs = "[]";
    try { techs = JSON.parse(proj.technologies).join(', '); } catch (e) { techs = proj.technologies; }
    
    setFormData({
      title: proj.title, titleBn: proj.titleBn || '',
      description: proj.description, descriptionBn: proj.descriptionBn || '',
      category: proj.category, image: proj.image || '',
      liveUrl: proj.liveUrl || '', repoUrl: proj.repoUrl || '',
      technologies: techs, featured: proj.featured || false, order: proj.order || 0
    });
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingId(null);
    setFormData({
      title: '', titleBn: '', description: '', descriptionBn: '', category: 'WordPress',
      image: '', liveUrl: '', repoUrl: '', technologies: '', featured: false, order: 0
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (deletingId === id) {
      // Confirm deletion
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter(p => p.id !== id));
      } else {
        alert('Failed to delete project.');
      }
      setDeletingId(null);
    } else {
      // Prompt for confirmation
      setDeletingId(id);
      // Auto-reset confirmation after 3 seconds
      setTimeout(() => {
        setDeletingId(current => (current === id ? null : current));
      }, 3000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      technologies: formData.technologies.split(',').map(s => s.trim()).filter(Boolean)
    };

    if (editingId) {
      const res = await fetch(`/api/projects/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const updated = await res.json();
      setProjects(projects.map(p => p.id === updated.id ? updated : p));
    } else {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const created = await res.json();
      setProjects([...projects, created]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="admin-header">
        <div>
          <h1 className="admin-page-title">Manage Projects</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Add, edit or delete your portfolio items.</p>
        </div>
        <button onClick={handleCreate} className="btn btn-primary">Add New Project</button>
      </div>

      <div className="glass-panel" style={{ overflowX: 'auto', background: 'rgba(10, 15, 30, 0.5)' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Featured</th>
              <th>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(proj => (
              <tr key={proj.id}>
                <td style={{ fontWeight: 600 }}>{proj.title}</td>
                <td><span className="badge">{proj.category}</span></td>
                <td>{proj.featured ? '⭐ Yes' : 'No'}</td>
                <td>{proj.order}</td>
                <td style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => handleEdit(proj)} className="btn btn-outline btn-sm">Edit</button>
                  <button onClick={() => handleDelete(proj.id)} className="btn btn-sm" style={{ border: '1px solid #ef4444', color: deletingId === proj.id ? '#fff' : '#ef4444', backgroundColor: deletingId === proj.id ? '#ef4444' : 'transparent' }}>
                    {deletingId === proj.id ? 'Confirm?' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editor Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`}>
        <div className="modal">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2>{editingId ? 'Edit Project' : 'Add New Project'}</h2>
            <button onClick={() => setIsModalOpen(false)} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>✕</button>
          </div>

          <form onSubmit={handleSubmit} className="form-group" style={{ gap: '16px' }}>
            <div className="grid-2">
              <div><label className="form-label">Title (EN)</label><input type="text" required className="form-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} /></div>
              <div><label className="form-label">Title (BN)</label><input type="text" className="form-input" value={formData.titleBn} onChange={e => setFormData({...formData, titleBn: e.target.value})} /></div>
            </div>
            
            <div className="grid-2">
              <div><label className="form-label">Description (EN)</label><textarea required className="form-textarea" style={{minHeight: '100px'}} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea></div>
              <div><label className="form-label">Description (BN)</label><textarea className="form-textarea" style={{minHeight: '100px'}} value={formData.descriptionBn} onChange={e => setFormData({...formData, descriptionBn: e.target.value})}></textarea></div>
            </div>

            <div className="grid-2">
              <div>
                <label className="form-label">Category</label>
                <select className="form-select" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                  <option>WordPress</option><option>E-Commerce</option><option>Business</option>
                  <option>Portfolio</option><option>Real Estate</option><option>Restaurant</option><option>Blog</option>
                </select>
              </div>
              <div><label className="form-label">Image URL</label><input type="text" className="form-input" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} /></div>
            </div>

            <div className="grid-2">
              <div><label className="form-label">Live URL</label><input type="text" className="form-input" value={formData.liveUrl} onChange={e => setFormData({...formData, liveUrl: e.target.value})} /></div>
              <div><label className="form-label">GitHub Repo</label><input type="text" className="form-input" value={formData.repoUrl} onChange={e => setFormData({...formData, repoUrl: e.target.value})} /></div>
            </div>

            <div>
              <label className="form-label">Technologies (comma separated)</label>
              <input type="text" className="form-input" placeholder="React, Node.js, Next.js" value={formData.technologies} onChange={e => setFormData({...formData, technologies: e.target.value})} />
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} style={{ width: '18px', height: '18px' }} />
                Feature on Homepage
              </label>
              <div>
                <label className="form-label" style={{ display: 'inline-block', marginRight: '8px' }}>Order</label>
                <input type="number" className="form-input" style={{ width: '80px', padding: '8px' }} value={formData.order} onChange={e => setFormData({...formData, order: parseInt(e.target.value)})} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
              <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">{editingId ? 'Save Changes' : 'Create Project'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
