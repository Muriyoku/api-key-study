import { createKey } from "../services/keys.service";
import type { BunRequest } from "bun";

export async function handleKeyPostRequest(req: BunRequest<"/api/key">) {
  await createKey();
  return Response.json({}, {status: 200, statusText: "Ok"});
};