import { getAllPosts, getPostBySlug } from "@/lib/mdx";
// import { MDXRemote } from "next-mdx-remote/rsc";

// const components = {
//   h1: ({ children }: { children: React.ReactNode }) => (
//     <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
//   ),
// };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="container mx-auto space-y-4 px-4 py-8 prose prose-lg dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-muted-foreground">{post.description}</p>
      <div className="flex gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <time className="text-muted-foreground pt-2">{post.date}</time>

      {post.content}
    </article>
  );
}
