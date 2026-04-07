'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="admin-layout" style={{ position: 'relative', zIndex: 100000, background: 'var(--bg-900)' }}>
      {/* Ensure admin layout sits above the main site navbar if Next.js tries to blend layouts,
          though we should enforce clean layout borders. */}
      <style dangerouslySetInnerHTML={{__html: `
        .navbar, .footer { display: none !important; }
        body { background: var(--bg-900) !important; }
      `}} />
      
      <aside className="admin-sidebar">
        <div className="admin-logo">Sagor Admin</div>
        
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Link href="/admin/dashboard" className={`admin-nav-item ${pathname === '/admin/dashboard' ? 'active' : ''}`}>
            📊 Dashboard
          </Link>
          <Link href="/admin/projects" className={`admin-nav-item ${pathname.includes('/admin/projects') ? 'active' : ''}`}>
            💼 Projects
          </Link>
          <Link href="/admin/blog" className={`admin-nav-item ${pathname.includes('/admin/blog') ? 'active' : ''}`}>
            📝 Blog Posts
          </Link>
          <Link href="/admin/messages" className={`admin-nav-item ${pathname.includes('/admin/messages') ? 'active' : ''}`}>
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
