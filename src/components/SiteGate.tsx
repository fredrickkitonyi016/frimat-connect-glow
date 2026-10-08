import { useEffect, type ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import PortalSignIn from "@/components/PortalSignIn";

/** Blurs the whole site and shows Sign In / Register until the visitor is authenticated. */
const SiteGate = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const locked = !user;

  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [locked]);

  return (
    <>
      <div aria-hidden={locked} className={locked ? "pointer-events-none select-none" : undefined}>
        {children}
      </div>
      {locked && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-background/70 backdrop-blur-xl">
          {loading ? (
            <div className="min-h-screen flex items-center justify-center font-mono text-xs text-primary">
              [SYSTEM] ESTABLISHING SECURE SESSION…
            </div>
          ) : <PortalSignIn />}
        </div>
      )}
    </>
  );
};

export default SiteGate;
