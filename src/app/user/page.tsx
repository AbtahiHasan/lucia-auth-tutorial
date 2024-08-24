import LogoutButton from "@/components/LogoutButton";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import React from "react";

const Page = () => {
  return (
    <ProtectedRoutes roles={["user"]}>
      <div>protected</div>
      <LogoutButton />
    </ProtectedRoutes>
  );
};

export default Page;
