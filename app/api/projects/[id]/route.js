import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: {
        title: body.title,
        titleBn: body.titleBn || '',
        description: body.description,
        descriptionBn: body.descriptionBn || '',
        image: body.image || '',
        liveUrl: body.liveUrl || '',
        repoUrl: body.repoUrl || '',
        technologies: JSON.stringify(body.technologies || []),
        category: body.category,
        featured: body.featured || false,
        order: body.order || 0,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await prisma.project.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
