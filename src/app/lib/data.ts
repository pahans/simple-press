import { db } from "./kysely";

export async function fetchAllPosts() {
  const blogPosts = await db
    .selectFrom("posts")
    .select(["id", "title", "description", "createdAt"])
    .orderBy("createdAt desc")
    .execute();
  return blogPosts;
}

export async function fetchPost(id: number) {
  const blogPost = await db
    .selectFrom("posts")
    .select(["id", "title", "description", "createdAt"])
    .where("posts.id", "=", id)
    .executeTakeFirst();
  return blogPost;
}
