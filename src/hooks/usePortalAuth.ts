import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

export type PortalRole = "admin" | "staff" | "client";

/**
 * Auth state for the Command Portal. Registers the auth listener first, then
 * hydrates the existing session, then resolves the user's clearance level.
 */
export const usePortalAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<PortalRole>("client");
  const [loading, setLoading] = useState(true);

  const resolveRole = useCallback(async (uid: string) => {
    try {
      // has_role is a security-definer function; falls back to client access.
      const { data: isAdmin } = await (supabase.rpc as unknown as (
        fn: string,
        args: Record<string, unknown>
      ) => Promise<{ data: boolean | null }>)("has_role", {
        _user_id: uid,
        _role: "admin",
      });
      if (isAdmin) {
        setRole("admin");
        return;
      }
      const { data: isStaff } = await (supabase.rpc as unknown as (
        fn: string,
        args: Record<string, unknown>
      ) => Promise<{ data: boolean | null }>)("has_role", {
        _user_id: uid,
        _role: "staff",
      });
      setRole(isStaff ? "staff" : "client");
    } catch {
      setRole("client");
    }
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setLoading(false);
      if (nextSession?.user) {
        setTimeout(() => void resolveRole(nextSession.user.id), 0);
      } else {
        setRole("client");
      }
    });

    supabase.auth.getSession().then(({ data: { session: existing } }) => {
      setSession(existing);
      setUser(existing?.user ?? null);
      setLoading(false);
      if (existing?.user) void resolveRole(existing.user.id);
    });

    return () => subscription.unsubscribe();
  }, [resolveRole]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setRole("client");
  }, []);

  return { session, user, role, loading, signOut };
};
