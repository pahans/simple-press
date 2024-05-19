"use client";
import { createPost } from "@/app/lib/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { type BlogPost } from "../PostsList/PostsList";

interface EditPostProps {
  post?: BlogPost;
}

export const EditPost: React.FC<EditPostProps> = ({ post }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const overlay = searchParams.get("overlay")?.toString();
  const canShowModal = overlay === "new-post" || overlay === "edit-post";

  return (
    <Dialog
      open={canShowModal}
      onOpenChange={(open) => {
        const params = new URLSearchParams();
        if (open) {
          params.set("overlay", "new-post");
        } else {
          params.delete("overlay");
        }
        replace(`${pathname}?${params.toString()}`);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {Boolean(post) ? "Edit Blog Post" : "Add New Blog Post"}
          </DialogTitle>
          <DialogDescription asChild>
            <form className="mx-auto w-full" action={createPost}>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="title"
                  name="title"
                  defaultValue={post?.title}
                  autoFocus
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={post?.description}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
