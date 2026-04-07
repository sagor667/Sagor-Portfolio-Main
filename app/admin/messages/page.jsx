'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminMessages() {
  const { status } = useSession();
  const router = useRouter();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // all | unread | read
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') fetchMessages();
  }, [status]);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('Failed to fetch messages:', e);
    } finally {
      setLoading(false);
    }
  };

  const markRead = async (id, read) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read }),
      });
      setMessages(prev => prev.map(m => m.id === id ? { ...m, read } : m));
      if (selected?.id === id) setSelected(prev => ({ ...prev, read }));
    } catch (e) {
      console.error('Failed to mark read:', e);
    }
  };

  const deleteMessage = async (id) => {
    setDeletingId(id);
    try {
      await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      setMessages(prev => prev.filter(m => m.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch (e) {
      console.error('Failed to delete:', e);
    } finally {
      setDeletingId(null);
    }
  };

  const openMessage = (msg) => {
    setSelected(msg);
    if (!msg.read) markRead(msg.id, true);
  };

  const filtered = messages.filter(m => {
    const matchesFilter =
      filter === 'all' ? true :
      filter === 'unread' ? !m.read :
      m.read;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.message.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const unreadCount = messages.filter(m => !m.read).length;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now - d;
    const diffHrs = diffMs / (1000 * 60 * 60);
    if (diffHrs < 1) return `${Math.floor(diffMs / 60000)}m ago`;
    if (diffHrs < 24) return `${Math.floor(diffHrs)}h ago`;
    if (diffHrs < 48) return 'Yesterday';
    return d.toLocaleDateString('en-BD', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  if (status === 'loading' || loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px' }}>
        <div className="loader-ring"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-page-title">📧 Messages</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            {messages.length} total · <span style={{ color: unreadCount > 0 ? '#818cf8' : 'var(--text-muted)' }}>{unreadCount} unread</span>
          </p>
        </div>
        <button onClick={fetchMessages} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          🔄 Refresh
        </button>
      </div>

      {/* Stats Bar */}
      <div className="grid-3" style={{ marginBottom: '24px' }}>
        <div className="stat-card" style={{ cursor: 'pointer', border: filter === 'all' ? '1px solid #818cf8' : '1px solid var(--glass-border)' }} onClick={() => setFilter('all')}>
          <div className="stat-card-value">{messages.length}</div>
          <div className="stat-card-label">All Messages</div>
        </div>
        <div className="stat-card" style={{ cursor: 'pointer', border: filter === 'unread' ? '1px solid #818cf8' : '1px solid var(--glass-border)' }} onClick={() => setFilter('unread')}>
          <div className="stat-card-value" style={{ color: '#818cf8' }}>{unreadCount}</div>
          <div className="stat-card-label">Unread</div>
        </div>
        <div className="stat-card" style={{ cursor: 'pointer', border: filter === 'read' ? '1px solid #818cf8' : '1px solid var(--glass-border)' }} onClick={() => setFilter('read')}>
          <div className="stat-card-value">{messages.length - unreadCount}</div>
          <div className="stat-card-label">Read</div>
        </div>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          className="form-input"
          placeholder="🔍  Search by name, email or message..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ maxWidth: '420px' }}
        />
      </div>

      {/* Layout: List + Detail */}
      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1.2fr' : '1fr', gap: '20px', alignItems: 'start' }}>

        {/* Message List */}
        <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📭</div>
              <p>{searchQuery ? 'No messages match your search.' : 'No messages yet.'}</p>
            </div>
          ) : (
            filtered.map((msg, i) => (
              <div
                key={msg.id}
                onClick={() => openMessage(msg)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '18px 20px',
                  borderBottom: i < filtered.length - 1 ? '1px solid var(--glass-border)' : 'none',
                  cursor: 'pointer',
                  background: selected?.id === msg.id
                    ? 'rgba(129, 140, 248, 0.08)'
                    : !msg.read
                    ? 'rgba(129, 140, 248, 0.04)'
                    : 'transparent',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { if (selected?.id !== msg.id) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={e => { if (selected?.id !== msg.id) e.currentTarget.style.background = !msg.read ? 'rgba(129,140,248,0.04)' : 'transparent'; }}
              >
                {/* Avatar */}
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%', flexShrink: 0,
                  background: `hsl(${(msg.name.charCodeAt(0) * 37) % 360}, 60%, 35%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase',
                }}>
                  {msg.name.charAt(0)}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                    <span style={{ fontWeight: msg.read ? '500' : '700', fontSize: '0.95rem', color: msg.read ? 'var(--text-primary)' : '#e2e8f0' }}>
                      {msg.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{msg.email}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {msg.message}
                  </div>
                </div>

                {/* Unread dot */}
                {!msg.read && (
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#818cf8', flexShrink: 0, marginTop: '6px' }} />
                )}
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        {selected && (
          <div className="glass-panel" style={{ padding: '28px', position: 'sticky', top: '20px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
                  background: `hsl(${(selected.name.charCodeAt(0) * 37) % 360}, 60%, 35%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase',
                }}>
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.05rem', marginBottom: '3px' }}>{selected.name}</div>
                  <a href={`mailto:${selected.email}`} style={{ fontSize: '0.85rem', color: '#818cf8', textDecoration: 'none' }}>
                    {selected.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.25rem', cursor: 'pointer', padding: '4px' }}
              >✕</button>
            </div>

            {/* Meta */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                📅 {new Date(selected.createdAt).toLocaleString('en-BD', { timeZone: 'Asia/Dhaka', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </span>
              <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', background: selected.read ? 'rgba(34,197,94,0.1)' : 'rgba(129,140,248,0.1)', border: `1px solid ${selected.read ? 'rgba(34,197,94,0.3)' : 'rgba(129,140,248,0.3)'}`, color: selected.read ? '#22c55e' : '#818cf8' }}>
                {selected.read ? '✓ Read' : '● Unread'}
              </span>
            </div>

            {/* Message Body */}
            <div style={{
              background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)',
              borderRadius: '10px', padding: '20px', lineHeight: '1.8',
              fontSize: '0.95rem', color: 'var(--text-primary)', whiteSpace: 'pre-wrap',
              marginBottom: '24px', minHeight: '120px',
            }}>
              {selected.message}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href={`mailto:${selected.email}?subject=Re: Your message on Sagor's Portfolio`}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', flex: 1, justifyContent: 'center' }}
              >
                ↩️ Reply via Email
              </a>

              <button
                onClick={() => markRead(selected.id, !selected.read)}
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                {selected.read ? '📩 Mark Unread' : '✓ Mark Read'}
              </button>

              <button
                onClick={() => {
                  if (confirm(`Delete message from ${selected.name}? This cannot be undone.`)) {
                    deleteMessage(selected.id);
                  }
                }}
                disabled={deletingId === selected.id}
                className="btn btn-sm"
                style={{ border: '1px solid #ef4444', color: '#ef4444', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px' }}
              >
                {deletingId === selected.id ? '...' : '🗑 Delete'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
