"use client";

import { BlogPost } from "@/lib/definitions";

interface ReadPostProps {
  post: BlogPost;
}

export const ReadPost: React.FC<ReadPostProps> = ({ post }) => {
  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        {post.createdAt.toLocaleString()}
      </p>
      <h2 className="text-4xl leading-none capitalize">{post.title}</h2>

      <p className="text-sm text-muted-foreground text-justify">
        {post.description}
      </p>
    </div>
  );
};
