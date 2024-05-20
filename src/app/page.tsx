import { PostsList, PostsListSkeleton } from "@/components/app/posts-list";
import { Suspense } from "react";
export default function HomePage() {
  return (
    <Suspense fallback={<PostsListSkeleton />}>
      <PostsList />
    </Suspense>
  );
}
