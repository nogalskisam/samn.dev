import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
  ),
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="container mx-auto space-y-4 px-4 py-8 prose prose-lg">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.description}</p>
      <div className="flex gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <time className="text-gray-500">{post.date}</time>
      <MDXRemote components={{ components }} source={post.content} />
    </article>
  );
}
