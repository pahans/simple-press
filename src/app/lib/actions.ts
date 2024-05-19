"use server";

import { db } from "@/app/lib/kysely";
import { z } from "zod";

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

  db.insertInto("posts")
    .values({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    })
    .executeTakeFirst();
}
