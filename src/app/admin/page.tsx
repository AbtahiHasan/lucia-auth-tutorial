import LogoutButton from "@/components/LogoutButton";
import ProtectedRoutes from "@/components/ProtectedRoutes";

const Page = () => {
  return (
    <ProtectedRoutes roles={["admin"]}>
      <div>
        Admin ONly
        <LogoutButton />
      </div>
    </ProtectedRoutes>
  );
};

export default Page;
