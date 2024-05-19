import { Separator } from "@/components/ui/separator";
import { fetchAllPosts } from "@/app/lib/data";

interface PostsListProps {}

export const PostsList: React.FC<PostsListProps> = async () => {
  const posts = await fetchAllPosts();
  return (
    <section>
      {posts.map(({ title, description, createdAt }) => (
        <article key={title}>
          <div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                {createdAt.toDateString()}
              </p>
              <h2 className="text-sm font-medium leading-none">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <Separator className="my-4" />
          </div>
        </article>
      ))}
    </section>
  );
};
