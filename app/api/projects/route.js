import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    const where = {};
    if (category && category !== 'All') where.category = category;
    if (featured === 'true') where.featured = true;

    const projects = await prisma.project.findMany({
      where,
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const project = await prisma.project.create({
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
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
