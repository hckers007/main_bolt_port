import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPosts, getPost } from '@/lib/mdx';

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  
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