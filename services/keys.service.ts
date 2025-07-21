import { insertKey } from "../database/sql.database";

export function generateKey() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsLength = chars.length;
  let key = '';

  for(let i = 1; i <= 30; i++) {
    key += chars.at(Math.floor(Math.random() * charsLength));
  };

  return key;
};

export async function createKey() {
  await insertKey(generateKey());
};