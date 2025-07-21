import { sql } from "bun";

export async function insertKey(key: string) {
  await sql`INSERT INTO keys (key) VALUES (${key})`;
};

export async function checkKeyExists(key: string) {
  return await sql`SELECT EXISTS (
    SELECT key FROM keys WHERE key = ${key}
  )`
};