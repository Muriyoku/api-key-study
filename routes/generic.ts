import { fetchHelloWorld } from "../services/generic";

import type { BunRequest } from "bun";

export async function handleHelloWorldGetRequest(req: BunRequest<"/api/helloworld">) {
  const params = new URLSearchParams(req.url);
  let apiKey = '';

  for(let param of params.values()) apiKey = param; 

  try { 
    const helloWorld = fetchHelloWorld(apiKey);

    if(!helloWorld) {
      throw new TypeError("helloWorld is null");
    };

    return Response.json(
      { message: helloWorld }, 
      { status: 200, statusText: "Ok" }
    );
  } catch(err) {
    console.error(err);

    return Response.json(
      {}, 
      { status: 500, statusText: "Internal Server Error" }
    );
  };
};
