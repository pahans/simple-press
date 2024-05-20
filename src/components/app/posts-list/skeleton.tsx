import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const PostsListSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col space-y-3 w-full">
      {Array.from({ length: 10 }, (_, i) => (
        //   using index as key is usually anti-pattern
        //   but this array does not change so it should be okay
        <div className="space-y-2" key={i}>
          <Skeleton className="h-3 w-1/2 rounded-xl" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Separator />
        </div>
      ))}
    </div>
  );
};