import { getAllPosts } from "@/lib/mdx";
import PostsHeader from "@/components/posts/posts-header";
import PostsList from "@/components/posts/posts-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Software Engineering & AI Coding Insights",
  description: "Read about software engineering, AI coding tools like Lovable and v0, deployment strategies, and technical insights from Sam Nogalski.",
  keywords: [
    "software engineering blog",
    "AI coding tools blog",
    "Lovable tutorials",
    "v0 tips",
    "base44 guides",
    "deployment strategies",
    "technical blog",
    "programming insights",
  ],
  openGraph: {
    title: "Blog | Software Engineering & AI Coding Insights",
    description: "Read about software engineering, AI coding tools like Lovable and v0, deployment strategies, and technical insights.",
    url: "https://samn.dev/posts",
  },
  alternates: {
    canonical: "/posts",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <PostsHeader />
      <PostsList posts={posts} />
    </div>
  );
}
