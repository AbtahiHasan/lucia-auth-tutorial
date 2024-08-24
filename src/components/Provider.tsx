"use client";

import { Session, User } from "lucia";
import { createContext, useContext } from "react";

type SessionContext =
  | {
      session: Session;
      user: User;
    }
  | { user: null; session: null };

const SessionContext = createContext<SessionContext | null>(null);

const SessionProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: SessionContext;
}) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionProvider;

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useSession must be used within a SessionProvider");
  return context;
};
