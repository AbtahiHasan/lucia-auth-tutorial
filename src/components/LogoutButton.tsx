"use client";

import { logout } from "@/lib/auth";
import { Button } from "./ui/button";

const LogoutButton = () => {
  return <Button onClick={() => logout()}>Logout</Button>;
};

export default LogoutButton;
