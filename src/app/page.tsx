import { fetchAllPosts } from "@/app/lib/data";
import { PostsList } from "./components/PostsList";
import { Suspense } from "react";
export default async function HomePage() {
  const blogPosts = await fetchAllPosts();
  return (
    <main className="">
      <Suspense fallback={<p>Loading...</p>}>
        <PostsList posts={blogPosts}></PostsList>
      </Suspense>
    </main>
  );
}
