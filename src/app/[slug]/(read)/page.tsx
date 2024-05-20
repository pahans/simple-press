import { fetchPost } from "@/app/lib/data";
import { ReadPost, ReadPostSkeleton } from "@/components/app/read-post";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface AdminPageProps {
  params?: {
    slug?: string;
  };
}

export default async function BlogPostPage({ params }: AdminPageProps) {
  const postId = Number(params?.slug);
  if (isNaN(postId)) {
    return notFound();
  }
  const post = await fetchPost(postId);

  if (!post) {
    return notFound();
  }
  return (
    <Suspense fallback={<ReadPostSkeleton />}>
      <ReadPost id={postId} />
    </Suspense>
  );
}
