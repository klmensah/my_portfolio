import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';

import { getAllPosts, getPostBySlug } from '@/lib/blog';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: `${post.title} | K.L.M.`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main className="article-shell">
      <nav className="article-nav" aria-label="Blog navigation">
        <Link href="/#blog"><ArrowLeft aria-hidden="true" /> Back to blog</Link>
        <span>KLM<span>.</span></span>
      </nav>
      <article className="article-card">
        <header>
          <div className="article-meta"><span>{post.category}</span><time dateTime={post.published}>{post.dateLabel}</time></div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </header>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <footer>
          <p>See the project behind this note.</p>
          <a href={post.repository} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> View repository <ArrowUpRight aria-hidden="true" /></a>
        </footer>
      </article>
    </main>
  );
}
