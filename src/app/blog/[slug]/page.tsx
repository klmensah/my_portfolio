import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, HandHeart } from 'lucide-react';

import { portfolio } from '@/data/portfolio';
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
        <aside className="article-support" aria-label="Support my work">
          <div><p>Found this useful?</p><h2>Help me publish more practical notes.</h2></div>
          <a href={portfolio.supportUrl} target="_blank" rel="noreferrer"><HandHeart aria-hidden="true" /> Support my work <ArrowUpRight aria-hidden="true" /></a>
        </aside>
        <footer>
          <p>See the project behind this note.</p>
          <a href={post.repository} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> View repository <ArrowUpRight aria-hidden="true" /></a>
        </footer>
      </article>
    </main>
  );
}
