import { getPosts } from '@/lib/mdx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <section>
        <h2 className="text-sm font-mono text-primary mb-2 terminal-text">
          blog.log
        </h2>
        <h1 className="text-4xl font-heading font-bold mb-4">Blog & Articles</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Technical insights, tutorials, and research findings from my work in cybersecurity 
          and penetration testing.
        </p>
      </section>

      <section>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col md:flex-row gap-6 bg-card rounded-lg overflow-hidden transition-all duration-300 hover:bg-card/80 border border-border hover:border-primary"
            >
              {post.frontmatter.coverImage && (
                <div className="relative md:w-1/3">
                  <img
                    src={post.frontmatter.coverImage}
                    alt={post.frontmatter.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              
              <div className="p-6 md:w-2/3 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{post.frontmatter.date}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-heading font-bold mb-2">{post.frontmatter.title}</h2>
                <p className="text-muted-foreground mb-4">{post.frontmatter.excerpt}</p>
                
                {post.frontmatter.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.frontmatter.tags.map((tag: string, i: number) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <Link href={`/blog/${post.slug}`} className="mt-auto">
                  <Button variant="link" className="p-0 h-auto text-primary group-hover:text-primary-hover transition-colors font-medium">
                    Read Article
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}