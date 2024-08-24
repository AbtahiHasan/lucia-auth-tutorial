import { validateRequest } from "@/auth";

export const GET = async () => {
  const session = await validateRequest();
  return Response.json(session);
};
