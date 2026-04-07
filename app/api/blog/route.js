import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const where = { published: true };
    if (category && category !== 'All') where.category = category;

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        titleBn: true,
        slug: true,
        excerpt: true,
        excerptBn: true,
        image: true,
        category: true,
        tags: true,
        createdAt: true,
      }
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const post = await prisma.blogPost.create({
      data: {
        title: body.title,
        titleBn: body.titleBn || '',
        slug: body.slug, // Make sure slug is generated on client or handle duplicate here
        excerpt: body.excerpt,
        excerptBn: body.excerptBn || '',
        content: body.content,
        contentBn: body.contentBn || '',
        image: body.image || '',
        category: body.category,
        tags: JSON.stringify(body.tags || []),
        published: body.published || false,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
