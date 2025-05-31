import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getPostBySlug(type: string, slug: string) {
  const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    },
  });

  return {
    slug,
    frontmatter: data,
    content: mdxSource,
  };
}

export function getAllContent(type: string) {
  const fullPath = path.join(contentDirectory, type);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  const files = fs.readdirSync(fullPath);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullFilePath = path.join(fullPath, fileName);
    const fileContents = fs.readFileSync(fullFilePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return posts.sort((a: any, b: any) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
}