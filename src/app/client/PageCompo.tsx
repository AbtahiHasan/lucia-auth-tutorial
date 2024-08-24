"use client";

import ProtectedRoutes from "@/components/ProtectedRoutes";
import { useSession } from "@/components/Provider";

const PageCompo = () => {
  const session = useSession();
  return (
    <ProtectedRoutes roles={["user", "admin"]}>
      <div>{JSON.stringify(session)}</div>
    </ProtectedRoutes>
  );
};

export default PageCompo;
