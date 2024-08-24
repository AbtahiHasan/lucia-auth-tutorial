import ProtectedRoutes from "@/components/ProtectedRoutes";

import PageCompo from "./PageCompo";

const Page = () => {
  return (
    <ProtectedRoutes roles={["user", "admin"]}>
      <PageCompo />
    </ProtectedRoutes>
  );
};

export default Page;
