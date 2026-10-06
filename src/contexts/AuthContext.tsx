import { createContext, useContext, type ReactNode } from "react";
import { usePortalAuth } from "@/hooks/usePortalAuth";

type Auth = ReturnType<typeof usePortalAuth>;
const Ctx = createContext<Auth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = usePortalAuth();
  return <Ctx.Provider value={auth}>{children}</Ctx.Provider>;
};

export const useAuth = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used inside AuthProvider");
  return v;
};
