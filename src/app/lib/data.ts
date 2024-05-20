import { db, sql } from "./kysely";

export async function fetchAllPosts() {
  const blogPosts = await db
    .selectFrom("posts")
    .select([
      "id",
      "title",
      sql`substring(description from 1 for 300)`.as("description"),
      "createdAt",
    ])
    .orderBy("createdAt desc")
    .execute();

  return blogPosts.map((post) => ({
    ...post,
    description: post.description as string,
  }));
}

export async function fetchPost(id: number) {
  const blogPost = await db
    .selectFrom("posts")
    .select(["id", "title", "description", "createdAt"])
    .where("posts.id", "=", id)
    .executeTakeFirst();
  return blogPost;
}
