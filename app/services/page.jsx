import './services.css';

export const metadata = {
  title: 'Services - Md Sagor Ahmed | WordPress Developer',
  description: 'Explore the professional web development, WordPress, and e-commerce services offered by Md Sagor Ahmed.',
};

const services = [
  {
    id: 1,
    title: 'Custom WordPress Development',
    description: 'I build fully custom, responsive, and easy-to-manage WordPress websites tailored exactly to your brand needs. From custom themes to complex plugin integrations.',
    glowColor: 'rgba(79, 70, 229, 0.45)',
    iconColor: '#A5B4FC',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'WooCommerce & E-commerce',
    description: 'Transform your business into a digital storefront. I create robust, scalable, and optimized WooCommerce platforms that drive sales and streamline user shopping experiences.',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    iconColor: '#22D3EE',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Full-Stack Web Apps',
    description: 'Leveraging Next.js, React, and Node.js to build powerful, lightning-fast, and dynamic web applications for complex business logistics and dashboards.',
    glowColor: 'rgba(139, 92, 246, 0.45)',
    iconColor: '#C4B5FD',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Landing Pages & UI/UX',
    description: 'High-converting, visually stunning landing pages designed with modern principles like glassmorphism to capture leads and make a perfect first impression.',
    glowColor: 'rgba(234, 179, 8, 0.45)',
    iconColor: '#FCD34D',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Performance Optimization',
    description: 'Is your website slow? I analyze and optimize speeds, core web vitals, and asset delivery to ensure millisecond load times, reducing your bounce rate drastically.',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    iconColor: '#6EE7B7',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'SEO & Security Automation',
    description: 'Implementing on-page SEO best practices and robust security measures to protect your digital assets against vulnerabilities and ensure maximum visibility on Google.',
    glowColor: 'rgba(244, 63, 94, 0.45)',
    iconColor: '#FDA4AF',
    iconPath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="container">

        {/* Header */}
        <div className="section-header services-header">
          <div className="section-tag">What I Do</div>
          <h1 className="section-title">My Expert Services</h1>
          <p className="section-subtitle">
            Providing end-to-end digital solutions from spectacular UI designs to robust backend and scalable e-commerce infrastructure. Let&apos;s build something great.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">

              {/* Glow orb */}
              <div className="service-card-glow" style={{ background: service.glowColor }} />

              {/* Icon */}
              <div className="service-icon-box" style={{ color: service.iconColor, borderColor: `${service.iconColor}33` }}>
                {service.iconPath}
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>

              <a href="/contact" className="service-cta-link">
                Discuss Project
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="services-cta-banner">
          <div className="services-cta-bg" />
          <div className="services-cta-content">
            <h2 className="services-cta-title">Ready to Start Your Project?</h2>
            <p className="services-cta-text">
              Whether you need a simple WordPress blog, a complex e-commerce platform, or a lightning-fast custom web app, I&apos;m ready to bring your vision to reality.
            </p>
            <div className="services-cta-actions">
              <a href="/contact" className="btn btn-primary">Get a Free Quote</a>
              <a href="/projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
