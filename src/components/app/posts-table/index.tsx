import { fetchAllPosts } from "@/app/lib/data";
import { PostsTable as PostsTableClient } from "./posts-table";

export const PostsTable: React.FC = async () => {
  const posts = await fetchAllPosts();
  return <PostsTableClient posts={posts} />;
};
