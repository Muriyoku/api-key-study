import { checkKeyExists } from "../database/sql.database";

export async function fetchHelloWorld(key: string) {
  if(!(await checkKeyExists(key) as [{ exists: boolean}])[0].exists) {
    return "THE KEY NO EXISTS";
  }
  console.log(await checkKeyExists(key));
  return "Hello World";
};