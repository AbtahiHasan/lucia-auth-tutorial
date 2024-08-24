import { validateRequest } from "@/auth";

export default async function Home() {
  const session = await validateRequest();
  return <main>{JSON.stringify(session)}</main>;
}
