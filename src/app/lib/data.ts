import { db } from "./kysely";

export async function fetchAllPosts() {
  const blogPosts = await db
    .selectFrom("posts")
    .select(["id", "title", "description"])
    .execute();
  return blogPosts;
}
