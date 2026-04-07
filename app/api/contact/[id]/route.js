import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// PATCH /api/contact/[id] — mark read/unread
export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updated = await prisma.contact.update({
      where: { id: parseInt(id) },
      data: { read: body.read },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH contact error:', error);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

// DELETE /api/contact/[id] — delete a message
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await prisma.contact.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE contact error:', error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
