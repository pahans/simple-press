"use server";

import { db } from "@/app/lib/kysely";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  postId: z.number().optional(),
});

export async function createOrUpdatePost(formData: FormData) {
  const { title, description, postId } = Object.fromEntries(formData);

  const validatedFields = schema.safeParse({
    title,
    description,
    id: postId,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const post = {
    title: title?.toString() || "",
    description: description?.toString() || "",
  };

  if (postId) {
    await db
      .updateTable("posts")
      .set(post)
      .where("posts.id", "=", Number(postId))
      .executeTakeFirst();
    revalidatePath("/");
    redirect("/admin");
  } else {
    await db.insertInto("posts").values(post).executeTakeFirst();
    revalidatePath("/");
    redirect("/admin");
  }
}

export async function deletePost(id: number) {
  //  Note: In a production environment may be we should not delete this.
  //  We could flag it as deleted instead.
  revalidatePath("/");
  await db.deleteFrom("posts").where("posts.id", "=", id).executeTakeFirst();
}
