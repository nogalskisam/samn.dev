import { getAllPosts } from "@/lib/mdx";
import PostsHeader from "@/components/posts/posts-header";
import PostsList from "@/components/posts/posts-list";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <PostsHeader />
      <PostsList posts={posts} />
    </div>
  );
}
