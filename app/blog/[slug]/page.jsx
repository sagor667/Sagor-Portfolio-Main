import { prisma } from '../../../lib/prisma';
import Link from 'next/link';
import BlogPostClient from '../../../components/BlogPostClient';

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  const post = await prisma.blogPost.findUnique({
    where: { slug }
  });

  if (!post || !post.published) {
    return (
      <div className="error-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="error-code" style={{ fontSize: '6rem', color: 'var(--primary)', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '32px' }}>Post Not Found</p>
        <Link href="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <BlogPostClient post={post} />
  );
}
