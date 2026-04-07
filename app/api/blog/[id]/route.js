import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const post = await prisma.blogPost.update({
      where: { id: parseInt(id) },
      data: {
        title: body.title,
        titleBn: body.titleBn || '',
        slug: body.slug,
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
    return NextResponse.json(post);
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await prisma.blogPost.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
