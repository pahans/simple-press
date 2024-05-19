"use client";
import { createOrUpdatePost } from "@/app/lib/actions";
import { BlogPost } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircleIcon } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface EditPostProps {
  post?: BlogPost;
}

export const EditPost: React.FC<EditPostProps> = ({ post }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const overlay = searchParams.get("overlay")?.toString();
  const canShowModal = overlay === "new-post" || overlay === "edit-post";

  let [isPending, startTransition] = useTransition();

  const onSubmit = async (formData: FormData) => {
    startTransition(() => void createOrUpdatePost(formData));
  };

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
            <form className="mx-auto w-full" action={onSubmit}>
              <div className="mb-5">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="title"
                  name="title"
                  defaultValue={post?.title}
                  disabled={isPending}
                  autoFocus
                  required
                  className="mt-2"
                />
              </div>
              <div className="mb-5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  className="mt-2"
                  disabled={isPending}
                  defaultValue={post?.description}
                  required
                />
              </div>
              {post && <input type="hidden" name="postId" value={post.id} />}
              <Button type="submit">
                {isPending && (
                  <LoaderCircleIcon className="mr-2 animate-spin" />
                )}
                Submit
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
