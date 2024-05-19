import { fetchAllPosts } from "@/app/lib/data";
import Link from "next/link";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  author?: string;
  date?: string;
}

interface PostsListProps {}

export const PostsList: React.FC<PostsListProps> = async () => {
  const posts = await fetchAllPosts();
  return (
    <section>
      {posts.map(({ title, description }) => (
        <article className="mb-10 ms-4" key={title}>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {author} {date}
            </time> */}
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Read more
          </Link>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </article>
      ))}
    </section>
  );
};
