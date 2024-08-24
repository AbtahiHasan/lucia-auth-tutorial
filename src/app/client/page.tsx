"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [session, setSession] = useState();
  useEffect(() => {
    const getSessionData = async () => {
      try {
        const res = await fetch("/api/session");
        const data = await res.json();
        setSession(data);
      } catch (error) {}
    };
    getSessionData();
  }, []);
  return <div>{JSON.stringify(session)}</div>;
};

export default Page;
