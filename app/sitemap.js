import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BASE_URL = 'https://sagorahmed.vercel.app'; // 🔁 Replace with your real domain

export default async function sitemap() {
  // ─── Static Pages ────────────────────────────────────────────────────────────
  const staticPages = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  // ─── Dynamic Blog Posts ───────────────────────────────────────────────────────
  let blogPages = [];
  try {
    const posts = await prisma.blog.findMany({
      select: {
        slug: true,
        updatedAt: true,
      },
      where: {
        published: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    blogPages = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    // If DB fetch fails, sitemap still serves static pages
    console.error('Sitemap: failed to fetch blog posts', error);
  } finally {
    await prisma.$disconnect();
  }

  return [...staticPages, ...blogPages];
}
