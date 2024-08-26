import LogoutButton from "@/components/LogoutButton";
import ProtectedRoutes from "@/components/ProtectedRoutes";

const Page = () => {
  return (
    <ProtectedRoutes roles={["user", "admin"]}>
      <h1>Protected</h1>
      <LogoutButton />
    </ProtectedRoutes>
  );
};

export default Page;
