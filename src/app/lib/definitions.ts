import { type ColumnType, type Generated } from "kysely";

export interface PostsTable {
  id: Generated<number>;
  title: string;
  description: string;
  createdAt: ColumnType<Date, string | undefined, never>;
}

export interface Database {
  posts: PostsTable;
}
