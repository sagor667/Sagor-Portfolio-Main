export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://sagorahmed.vercel.app/sitemap.xml', // 🔁 Replace with your real domain
  };
}
