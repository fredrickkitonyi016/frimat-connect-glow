import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Fingerprint, Lock, Mail, Radio, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

/**
 * HUD-styled sign-in / sign-up screen guarding the Command Portal.
 * Both clients and admins use the same door; clearance is resolved after login.
 */
const PortalSignIn = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      toast({ title: "Access denied", description: "Enter your email and password." });
      return;
    }
    setBusy(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) {
        toast({
          title: "Authentication failed",
          description:
            error.message.includes("Invalid login credentials")
              ? "Wrong email or password. Please try again."
              : error.message,
          variant: "destructive",
        });
      } else {
        toast({ title: "Access granted", description: "Command Portal unlocked." });
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: `${window.location.origin}/portal` },
      });
      if (error) {
        toast({
          title: "Registration failed",
          description: error.message.includes("already registered")
            ? "This email already has an account. Please sign in."
            : error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Check your email",
          description: "Confirm your email to activate portal access.",
        });
      }
    }
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-primary/30 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Radio size={18} className="text-primary animate-pulse" />
            <span className="font-mono text-xs sm:text-sm text-primary">
              FRIMAT // COMMAND PORTAL
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={12} /> Return to Main Site
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md rounded-xl border border-primary/30 bg-card/40 backdrop-blur-sm p-6 sm:p-8">
          <span className="pointer-events-none absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-primary" />
          <span className="pointer-events-none absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-accent" />
          <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-accent" />
          <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />

          <div className="text-center mb-6">
            <Fingerprint size={30} className="mx-auto text-primary" />
            <p className="font-mono text-[11px] text-accent mt-3">
              [SECURE GATEWAY] IDENTITY VERIFICATION REQUIRED
            </p>
            <h1 className="text-2xl mt-2">
              {mode === "signin" ? "Sign In to the Portal" : "Create Portal Access"}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Client and admin access. Use your email and password.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`rounded-lg border px-3 py-2 font-mono text-[11px] uppercase transition-all ${
                  mode === m
                    ? "border-primary bg-primary/10 text-primary shadow-[0_0_18px_hsl(var(--primary)/0.35)]"
                    : "border-border/60 text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {m === "signin" ? "Sign In" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="portal-email" className="font-mono text-[11px] uppercase">
                Email
              </Label>
              <div className="relative">
                <Mail
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="portal-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="portal-password" className="font-mono text-[11px] uppercase">
                Password
              </Label>
              <div className="relative">
                <Lock
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="portal-password"
                  type="password"
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-9"
                />
              </div>
            </div>

            <Button type="submit" disabled={busy} className="w-full font-mono text-xs uppercase">
              <ShieldCheck size={14} className="mr-2" />
              {busy
                ? "Verifying…"
                : mode === "signin"
                ? "Authenticate Access"
                : "Request Clearance"}
            </Button>
          </form>

          <p className="font-mono text-[10px] text-muted-foreground text-center mt-5">
            [SYSTEM] All sessions are encrypted. Admin clearance is granted by FRIMAT staff.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PortalSignIn;
