"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/lib/definitions";

interface PostsListProps {
  posts: BlogPost[];
}

export const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <>
      {posts.map(({ title, description, createdAt, id }) => (
        <article key={title}>
          <div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                {createdAt.toLocaleString()}
              </p>

              <h2 className="text-4xl leading-none capitalize">
                <Link href={`/${id}`} className="hover:text-foreground/80">
                  {title}
                </Link>
              </h2>

              <p className="text-sm text-muted-foreground text-justify">
                {description}
                <span className="ml-1">...</span>
              </p>
            </div>
            <Separator className="my-4" />
          </div>
        </article>
      ))}
    </>
  );
};
