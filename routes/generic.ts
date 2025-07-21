import type { BunRequest } from "bun";
import { fetchHelloWorld } from "../services/generic";

export async function handleHelloWorldGetRequest(req: BunRequest<"/api/helloworld">) {
  const params = new URLSearchParams(req.url);
  let apiKey = '';

  for(let param of params.values()) apiKey = param; 

  return Response.json({message: await fetchHelloWorld(apiKey)}, {status: 200, statusText: "Ok"});
};
