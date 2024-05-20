import { PostsList, PostsListSkeleton } from "./components/posts-list";
import { Suspense } from "react";
export default function HomePage() {
  return (
    <Suspense fallback={<PostsListSkeleton />}>
      <PostsList />
    </Suspense>
  );
}
