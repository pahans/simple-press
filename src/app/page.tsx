import { fetchAllPosts } from "@/app/lib/data";
import { PostsList } from "./components/PostsList";
export default async function HomePage() {
  const blogPosts = await fetchAllPosts();
  return (
    <main className="">
      <PostsList posts={blogPosts}></PostsList>
    </main>
  );
}
