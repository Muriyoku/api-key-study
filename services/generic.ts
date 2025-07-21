import { checkKeyExists } from "../database/sql.database";

export async function fetchHelloWorld(key: string) {
  try {
    const keyInfo = await checkKeyExists(key) ?? [];
    const isKeyExists = keyInfo[0]?.exists;

    if(!isKeyExists) {
      return "THE KEY NO EXISTS";
    };

    return "Hello World";
  } catch (err: any) {
    console.error(err.cause);
    
    return null;
  };
};