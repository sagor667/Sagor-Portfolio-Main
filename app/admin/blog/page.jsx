'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function AdminBlog() {
  const { status } = useSession();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '', titleBn: '', slug: '', excerpt: '', excerptBn: '',
    content: '', contentBn: '', image: '', category: 'Technology',
    tags: '', published: false
  });

  useEffect(() => {
    fetch('/api/blog').then(r => r.json()).then(data => {
      setPosts(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, []);

  if (status === 'loading' || loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><div className="loader-ring"></div></div>;

  const handleEdit = (post) => {
    setEditingId(post.id);
    let tagsList = "";
    try { tagsList = JSON.parse(post.tags).join(', '); } catch (e) { tagsList = post.tags || ''; }
    
    setFormData({
      title: post.title, titleBn: post.titleBn || '', slug: post.slug,
      excerpt: post.excerpt, excerptBn: post.excerptBn || '',
      content: post.content || '', contentBn: post.contentBn || '',
      image: post.image || '', category: post.category,
      tags: tagsList, published: post.published || false
    });
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingId(null);
    setFormData({
      title: '', titleBn: '', slug: '', excerpt: '', excerptBn: '',
      content: '', contentBn: '', image: '', category: 'Technology',
      tags: '', published: false
    });
    setIsModalOpen(true);
  };

  // Automatically generate slugs
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/\\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    if (!editingId) {
      setFormData(prev => ({ ...prev, title, slug }));
    } else {
      setFormData(prev => ({ ...prev, title }));
    }
  };

  const handleDelete = async (id) => {
    if (deletingId === id) {
      const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== id));
      } else {
        alert('Failed to delete post.');
      }
      setDeletingId(null);
    } else {
      setDeletingId(id);
      setTimeout(() => {
        setDeletingId(current => (current === id ? null : current));
      }, 3000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags.split(',').map(s => s.trim()).filter(Boolean)
    };

    if (editingId) {
      const res = await fetch(`/api/blog/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const updated = await res.json();
        setPosts(posts.map(p => p.id === updated.id ? updated : p));
      } else {
        alert("Failed to update post.");
      }
    } else {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const created = await res.json();
      setPosts([...posts, created]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="admin-header">
        <div>
          <h1 className="admin-page-title">Manage Blog Posts</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Write and publish technical articles.</p>
        </div>
        <button onClick={handleCreate} className="btn btn-primary">Write New Post</button>
      </div>

      <div className="glass-panel" style={{ overflowX: 'auto', background: 'rgba(10, 15, 30, 0.5)' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td style={{ fontWeight: 600 }}>{post.title}</td>
                <td><span className="badge">{post.category}</span></td>
                <td>{post.published ? '🟢 Published' : '🟡 Draft'}</td>
                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                <td style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => handleEdit(post)} className="btn btn-outline btn-sm">Edit</button>
                  <button onClick={() => handleDelete(post.id)} className="btn btn-sm" style={{ border: '1px solid #ef4444', color: deletingId === post.id ? '#fff' : '#ef4444', backgroundColor: deletingId === post.id ? '#ef4444' : 'transparent' }}>
                    {deletingId === post.id ? 'Confirm?' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editor Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`}>
        <div className="modal" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2>{editingId ? 'Edit Blog Post' : 'Write New Post'}</h2>
            <button onClick={() => setIsModalOpen(false)} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>✕</button>
          </div>

          <form onSubmit={handleSubmit} className="form-group" style={{ gap: '16px' }}>
            <div className="grid-2">
              <div><label className="form-label">Title (EN)</label><input type="text" required className="form-input" value={formData.title} onChange={handleTitleChange} /></div>
              <div><label className="form-label">Title (BN)</label><input type="text" className="form-input" value={formData.titleBn} onChange={e => setFormData({...formData, titleBn: e.target.value})} /></div>
            </div>
            
            <div className="grid-2">
              <div><label className="form-label">URL Slug</label><input type="text" required className="form-input" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} /></div>
              <div>
                <label className="form-label">Category</label>
                <select className="form-select" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                  <option>Technology</option><option>WordPress</option><option>Design</option>
                  <option>Development</option><option>Business</option><option>Tutorial</option>
                </select>
              </div>
            </div>

            <div className="grid-2">
              <div><label className="form-label">Excerpt (EN)</label><textarea required className="form-textarea" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})}></textarea></div>
              <div><label className="form-label">Excerpt (BN)</label><textarea className="form-textarea" value={formData.excerptBn} onChange={e => setFormData({...formData, excerptBn: e.target.value})}></textarea></div>
            </div>

            <div className="grid-2">
              <div><label className="form-label">Content (EN - Markdown)</label><textarea required className="form-textarea" style={{minHeight: '200px', fontFamily: 'monospace'}} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})}></textarea></div>
              <div><label className="form-label">Content (BN - Markdown)</label><textarea className="form-textarea" style={{minHeight: '200px', fontFamily: 'monospace'}} value={formData.contentBn} onChange={e => setFormData({...formData, contentBn: e.target.value})}></textarea></div>
            </div>

            <div className="grid-2">
              <div><label className="form-label">Cover Image URL</label><input type="text" className="form-input" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} /></div>
              <div><label className="form-label">Tags (comma separated)</label><input type="text" className="form-input" placeholder="React, Node.js" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} /></div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" checked={formData.published} onChange={e => setFormData({...formData, published: e.target.checked})} style={{ width: '18px', height: '18px' }} />
                Publish Publicly
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
              <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">{editingId ? 'Save Changes' : 'Publish Post'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
