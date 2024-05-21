import { EditPost } from "@/components/app/edit-post";
import { fetchPost } from "@/lib/data";
import { PostsTable } from "@/components/app/posts-table";
import { Suspense } from "react";
import { PostsTableSkeleton } from "@/components/app/posts-table/skeleton";

interface AdminPageProps {
  searchParams?: {
    overlay?: string;
    id?: string;
    page?: string;
  };
}

// TODO: It's strange that "page" does not have Next.js types defined.
// https://nextjs.org/docs/app/api-reference/file-conventions/page
// Need to check the next package if there are types for page components.
const AdminPage: React.FC<AdminPageProps> = async ({ searchParams }) => {
  const postId = Number(searchParams?.id);
  const editingPost = isNaN(postId) ? undefined : await fetchPost(postId);
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="mb-10">
      {/* post = undefined handles new post */}
      <EditPost post={editingPost} />
      <Suspense fallback={<PostsTableSkeleton />}>
        <PostsTable currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default AdminPage;
