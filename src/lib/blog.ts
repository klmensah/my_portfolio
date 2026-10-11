import fs from 'node:fs';
import path from 'node:path';

import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  published: string;
  dateLabel: string;
  repository: string;
  accent: 'amber' | 'violet' | 'blue' | 'green' | 'rose' | 'gold';
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function readPost(slug: string): { data: Record<string, string>; content: string } {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const file = fs.readFileSync(filePath, 'utf8');
  const match = file.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter in ${filePath}`);

  const data = Object.fromEntries(match[1].split(/\r?\n/).map((line) => {
    const separator = line.indexOf(':');
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
    return [key, value];
  }));

  return { data, content: match[2] };
}

function toMeta(slug: string, data: Record<string, unknown>): BlogPostMeta {
  const published = String(data.published);
  return {
    slug,
    title: String(data.title),
    category: String(data.category),
    excerpt: String(data.excerpt),
    published,
    dateLabel: new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(published)),
    repository: String(data.repository),
    accent: data.accent as BlogPostMeta['accent'],
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      return toMeta(slug, readPost(slug).data);
    })
    .sort((a, b) => b.published.localeCompare(a.published));
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const { data, content } = readPost(slug);
  const processed = await remark().use(html).process(content);
  return { ...toMeta(slug, data), contentHtml: processed.toString() };
}
