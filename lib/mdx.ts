import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const postsDirectory = path.join(process.cwd(), "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: React.ReactElement;
};

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // console.log(fileContents);
  const { frontmatter, content } = await compileMDX({
    source: fileContents,
    options: { parseFrontmatter: true },
  });

  return {
    slug: realSlug,
    title: frontmatter.title as string,
    date: frontmatter.date as string,
    description: frontmatter.description as string,
    tags: frontmatter.tags as string[],
    content: content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
