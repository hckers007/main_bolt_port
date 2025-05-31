import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import * as mdx from '@/lib/mdx';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, TagIcon } from 'lucide-react';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="my-4 leading-7" {...props} />,
  ul: (props: any) => <ul className="my-4 list-disc list-inside pl-4" {...props} />,
  ol: (props: any) => <ol className="my-4 list-decimal list-inside pl-4" {...props} />,
  li: (props: any) => <li className="my-2" {...props} />,
  a: (props: any) => (
    <a className="text-primary hover:text-primary-hover underline" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 my-4 italic" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-secondary px-1.5 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-secondary p-4 rounded-lg my-4 overflow-x-auto" {...props} />
  ),
};

export async function generateStaticParams() {
  const posts = mdx.getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await mdx.getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article className="prose prose-invert prose-primary max-w-none">
        <header className="mb-8 not-prose">
          <h1 className="text-4xl font-heading font-bold mb-4">
            {post.frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <time>{post.frontmatter.date}</time>
            </div>
            
            {post.frontmatter.readingTime && (
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{post.frontmatter.readingTime} min read</span>
              </div>
            )}
          </div>
          
          {post.frontmatter.tags && (
            <div className="flex items-center gap-2 flex-wrap">
              <TagIcon size={16} className="text-muted-foreground" />
              {post.frontmatter.tags.map((tag: string, i: number) => (
                <Badge key={i} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <MDXRemote source={post.content} components={components} />
      </article>
    </div>
  );
}