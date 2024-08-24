import LogoutButton from "@/components/LogoutButton";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import React from "react";

const Page = () => {
  return (
    <ProtectedRoutes roles={["admin"]}>
      <div>admin</div>
      <LogoutButton />
    </ProtectedRoutes>
  );
};

export default Page;
