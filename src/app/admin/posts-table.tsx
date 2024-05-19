"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Edit as EditIcon, Trash2Icon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/app/lib/actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DataTable } from "./data-table";
import { BlogPost } from "@/app/lib/definitions";

interface PostsTableProps {
  posts: BlogPost[];
}

export const PostsTable: React.FC<PostsTableProps> = ({ posts }) => {
  const router = useRouter();
  const pathname = usePathname();

  const onDelete = async (id: number) => {
    await deletePost(id);
    router.refresh();
  };

  const onEditPost = (id: number) => {
    const params = new URLSearchParams();
    params.set("overlay", "edit-post");
    params.set("id", id.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  const columns: ColumnDef<BlogPost>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "createdAt",
      header: "Created on",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const blogPost = row.original;
        return (
          <span className="flex flex-row gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onEditPost(blogPost.id)}
            >
              <EditIcon className="h-4 w-4" />
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    this blog post.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => onDelete(blogPost.id)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </span>
        );
      },
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={posts} />
    </div>
  );
};
