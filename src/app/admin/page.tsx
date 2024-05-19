import { EditPost } from "@/app/components/edit-post";
import { fetchAllPosts, fetchPost } from "@/app/lib/data";
import { PostsTable } from "./posts-table";

interface AdminPageProps {
  searchParams?: {
    overlay?: string;
    id?: string;
  };
}

// TODO: It's stage that "page" does not have nextjs types defined. https://nextjs.org/docs/app/api-reference/file-conventions/page
// Need to check next package if there are types for page components.
export default async function AdminPage({ searchParams }: AdminPageProps) {
  const postId = Number(searchParams?.id);
  const posts = await fetchAllPosts();
  const editingPost = isNaN(postId) ? undefined : await fetchPost(postId);
  return (
    <div className="">
      <EditPost post={editingPost} />

      <PostsTable posts={posts} />
    </div>
  );
}
