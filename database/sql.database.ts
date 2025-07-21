import { sql } from "bun";

export async function insertKey(key: string) {
  await sql`INSERT INTO keys (key) VALUES (${key})`;
};

export async function checkKeyExists(key: string) {
  try {
    return await sql`SELECT EXISTS (SELECT key FROM keys WHERE key = ${key})`;
  } catch(err) {
    throw new Error("An error occurred on database layer", {
      cause: err,
    });
  }
};