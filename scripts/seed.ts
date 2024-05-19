require("dotenv").config({
  path: [".env.development.local", ".env.local", ".env"],
});

import { db, sql } from "../src/app/lib/kysely";

async function seedPosts() {
  try {
    await db.schema.dropTable("posts").execute();
    await db.schema
      .createTable("posts")
      .addColumn("id", "serial", (cb) => cb.primaryKey())
      .addColumn("title", "varchar(255)", (cb) => cb.notNull())
      .addColumn("description", "text", (cb) => cb.notNull())
      .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
        cb.defaultTo(sql`current_timestamp`)
      )
      .execute();
    console.log(`Created "posts" table`);
    await db
      .insertInto("posts")
      .values([
        {
          title: "Hello",
          description: "Hello world",
        },
      ])
      .execute();
  } catch (error) {
    console.log(error);
  }

  console.log(`Seeded "posts" table`);
}

async function main() {
  console.log("Seeding the database..");
  await seedPosts();
  console.log("Done. Seeding the database");
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
