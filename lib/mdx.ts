import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const postsDirectory = join(process.cwd(), 'content/blog');

export function getPosts() {
  const files = readdirSync(postsDirectory);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
    };
  });

  return posts.sort((a, b) => {
    if (a.frontmatter.date && b.frontmatter.date) {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    }
    return 0;
  });
}

export async function getPost(slug: string) {
  try {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'append' }],
          rehypeHighlight,
        ],
      },
      parseFrontmatter: true,
    });

    return {
      frontmatter: data,
      content: mdxSource,
    };
  } catch (e) {
    return null;
  }
}