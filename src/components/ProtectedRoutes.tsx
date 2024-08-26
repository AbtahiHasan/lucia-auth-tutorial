import { validateRequest } from "@/auth";
import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

const ProtectedRoutes = async ({
  children,
  roles,
}: {
  children: ReactNode;
  roles?: UserRole[];
}) => {
  const session = await validateRequest();
  if (!session?.user) {
    return redirect("/");
  }

  if (roles?.includes(session?.user?.role || "")) {
    return <>{children}</>;
  }

  return redirect("/");
};

export default ProtectedRoutes;
