'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (isLoginPage) return <>{children}</>;

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="admin-layout" style={{ position: 'relative', zIndex: 100000, background: 'var(--bg-900)' }}>
      {/* Ensure admin layout sits above the main site navbar if Next.js tries to blend layouts,
          though we should enforce clean layout borders. */}
      <style dangerouslySetInnerHTML={{__html: `
        .navbar, .footer { display: none !important; }
        body { background: var(--bg-900) !important; }
      `}} />

      {/* Mobile Header */ }
      <div className="admin-mobile-header">
        <div className="admin-logo" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none' }}>Sagor Admin</div>
        <button onClick={() => setIsSidebarOpen(true)} style={{ padding: '8px', color: 'var(--text-primary)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      { /* Mobile Sidebar Overlay */ }
      {isSidebarOpen && (
        <div 
          className="admin-sidebar-overlay" 
          onClick={closeSidebar}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100001
          }} 
        />
      )}
      
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div className="admin-logo">Sagor Admin</div>
            <button className="admin-sidebar-close" onClick={closeSidebar} style={{ display: 'none', color: 'var(--text-primary)', padding: '4px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
        </div>
        
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Link href="/admin/dashboard" onClick={closeSidebar} className={`admin-nav-item ${pathname === '/admin/dashboard' ? 'active' : ''}`}>
            📊 Dashboard
          </Link>
          <Link href="/admin/projects" onClick={closeSidebar} className={`admin-nav-item ${pathname.includes('/admin/projects') ? 'active' : ''}`}>
            💼 Projects
          </Link>
          <Link href="/admin/blog" onClick={closeSidebar} className={`admin-nav-item ${pathname.includes('/admin/blog') ? 'active' : ''}`}>
            📝 Blog Posts
          </Link>
          <Link href="/admin/messages" onClick={closeSidebar} className={`admin-nav-item ${pathname.includes('/admin/messages') ? 'active' : ''}`}>
            📧 Messages
          </Link>
        </nav>
        
        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a href="/" target="_blank" rel="noopener noreferrer" className="admin-nav-item">
            🌐 View Public Site
          </a>
          <button onClick={() => signOut({ callbackUrl: '/admin/login' })} className="admin-nav-item" style={{ width: '100%', color: '#ef4444' }}>
            🚪 Logout
          </button>
        </div>
      </aside>
      
      <main className="admin-content">
        {children}
      </main>
    </div>
  );
}
