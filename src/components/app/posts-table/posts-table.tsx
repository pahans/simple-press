"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BlogPost } from "@/app/lib/definitions";
import { DataTable } from "./data-table";
import { ActionsCell } from "./actions-cell";

interface PostsTableProps {
  posts: BlogPost[];
}

export const PostsTable: React.FC<PostsTableProps> = ({ posts }) => {
  const columns: ColumnDef<BlogPost>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "createdAt",
      header: "Created on",
      cell: ({ row }) => row.original.createdAt.toDateString(),
    },
    {
      id: "actions",
      cell: ({ row }) => <ActionsCell blogPost={row.original} />,
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={posts} />
    </div>
  );
};
