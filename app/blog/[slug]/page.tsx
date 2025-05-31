import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import * as mdx from '@/lib/mdx';

export async function generateStaticParams() {
  const posts = mdx.getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = mdx.getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto prose prose-invert">
      <h1>{post.frontmatter.title}</h1>
      <div className="mt-4 mb-8">
        <time>{post.frontmatter.date}</time>
      </div>
      <MDXRemote source={post.content} />
    </div>
  );
}