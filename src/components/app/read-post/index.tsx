import { fetchPost } from "@/app/lib/data";
import { ReadPost as ReadPostClient } from "./read-post";
import { notFound } from "next/navigation";

interface ReadPostProps {
  id: number;
}

export const ReadPost: React.FC<ReadPostProps> = async ({ id }) => {
  const postId = Number(id);
  if (isNaN(postId)) {
    return notFound();
  }
  const post = await fetchPost(postId);

  if (!post) {
    return notFound();
  }
  return <ReadPostClient post={post} />;
};

export { ReadPostSkeleton } from "./skeleton";
