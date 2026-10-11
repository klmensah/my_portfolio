import { PortfolioShell } from '@/components/portfolio-shell';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  return <PortfolioShell posts={getAllPosts()} />;
}
