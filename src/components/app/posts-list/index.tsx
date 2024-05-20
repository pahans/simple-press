import { LoadMorePosts } from "./load-more-posts";
import { PostsList as PostListClient } from "./posts-list";
export { PostsListSkeleton } from "./skeleton";

import { fetchAllPosts } from "@/lib/data";

interface PostsListProps {}

async function loadMorePosts(offset: number) {
  "use server";
  const posts = await fetchAllPosts(offset);

  return <PostListClient posts={posts} />;
}

export const PostsList: React.FC<PostsListProps> = async () => {
  const posts = await fetchAllPosts();
  return (
    <LoadMorePosts loadMoreAction={loadMorePosts}>
      <PostListClient posts={posts} />
    </LoadMorePosts>
  );
};
