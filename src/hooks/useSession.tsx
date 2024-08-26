"use client";
import { useEffect, useState } from "react";

const useSession = () => {
  const [session, setSession] = useState({});
  useEffect(() => {
    try {
      const getSession = async () => {
        const res = await fetch("/api/session");
        const data = await res.json();
        setSession(data);
      };
      getSession();
    } catch (error) {}
  }, []);
  return session;
};

export default useSession;
