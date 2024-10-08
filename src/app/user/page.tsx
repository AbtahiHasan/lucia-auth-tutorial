import LogoutButton from "@/components/LogoutButton";
import ProtectedRoutes from "@/components/ProtectedRoutes";

const Page = () => {
  return (
    <ProtectedRoutes roles={["user"]}>
      <div>
        User ONly
        <LogoutButton />
      </div>
    </ProtectedRoutes>
  );
};

export default Page;
