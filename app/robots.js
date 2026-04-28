export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://sagor-ahmed.vercel.app/sitemap.xml', // 🔁 Replace with your real domain
  };
}
