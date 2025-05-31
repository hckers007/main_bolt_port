import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug } from '@/lib/mdx';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('blog', params.slug);

  return (
    <div className="max-w-4xl mx-auto prose prose-invert">
      <h1>{post.frontmatter.title}</h1>
      <div className="mt-4 mb-8">
        <time>{post.frontmatter.date}</time>
      </div>
      <MDXRemote {...post.content} />
    </div>
  );
}