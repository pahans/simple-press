"use server";

import { db } from "@/app/lib/kysely";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const schema = z.object({
  title: z.string(),
  description: z.string(),
});

export async function createPost(formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await db
    .insertInto("posts")
    .values({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    })
    .executeTakeFirst();
  revalidatePath("/");
}

export async function deletePost(id: number) {
  //  Note: In a production environment may be we should not delete this.
  //  We could flag it as deleted instead.
  await db.deleteFrom("posts").where("posts.id", "=", id).executeTakeFirst();
}
