import { Separator } from "@/components/ui/separator";
import { fetchAllPosts } from "@/lib/data";
import Link from "next/link";

interface PostsListProps {}

export const PostsList: React.FC<PostsListProps> = async () => {
  const posts = await fetchAllPosts();
  return (
    <section>
      {posts.map(({ title, description, createdAt, id }) => (
        <article key={title}>
          <div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                {createdAt.toDateString()}
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
    </section>
  );
};
