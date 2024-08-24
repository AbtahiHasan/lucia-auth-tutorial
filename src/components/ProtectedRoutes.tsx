import { validateRequest } from "@/auth";
import { UserRoles } from "@prisma/client";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const ProtectedRoutes = async ({
  children,
  roles,
}: {
  children: ReactNode;
  roles: UserRoles[];
}) => {
  const session = await validateRequest();
  if (!session?.user) {
    return redirect("/login");
  }

  if (roles.includes(session?.user?.role)) {
    return <>{children}</>;
  }
  return redirect("/");
};

export default ProtectedRoutes;
