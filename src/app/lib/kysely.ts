import { ColumnType, Generated } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

export interface PostsTable {
  id: Generated<number>;
  title: string;
  description: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

interface Database {
  posts: PostsTable;
}

export const db = createKysely<Database>();

export { sql } from "kysely";
