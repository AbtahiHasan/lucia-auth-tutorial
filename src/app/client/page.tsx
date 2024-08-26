"use client";

import useSession from "@/hooks/useSession";

const Page = () => {
  const session = useSession();
  return <div>{JSON.stringify(session)}</div>;
};

export default Page;
