import { PostsList } from "./components/posts-list";
import { Suspense } from "react";
export default function HomePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PostsList />
    </Suspense>
  );
}
