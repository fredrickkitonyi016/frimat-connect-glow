import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Mail, Lock, User as UserIcon, ArrowLeft } from "lucide-react";
import type { User, Session } from "@supabase/supabase-js";

export default function Auth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Redirect authenticated users to home
        if (session?.user) {
          setTimeout(() => {
            navigate("/");
          }, 0);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignUp = async (email: string, password: string) => {
    setLoading(true);
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });

    if (error) {
      if (error.message.includes("already registered")) {
        toast({
          title: "Account exists",
          description: "This email is already registered. Please sign in instead.",
          variant: "destructive",
        });
        setIsLogin(true);
      } else {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Check your email",
        description: "We've sent you a confirmation link to complete your registration.",
      });
    }
    setLoading(false);
  };

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        toast({
          title: "Invalid credentials",
          description: "Please check your email and password and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
      }
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (isLogin) {
      await handleSignIn(email, password);
    } else {
      await handleSignUp(email, password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Tech Particles Background */}
      <div className="tech-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <Button
        variant="ghost"
        className="absolute top-6 left-6 text-foreground hover:text-primary"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2" size={16} />
        Back to Home
      </Button>

      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Sparkles className="text-accent" size={16} />
            <span className="text-sm font-medium text-foreground">FRIMAT TECHNOLOGIES</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to the Future
          </h1>
          <p className="text-muted-foreground">
            Join our innovative community today
          </p>
        </div>

        {/* Auth Form */}
        <Card className="glass-card border-glass-border">
          <CardHeader className="text-center">
            <CardTitle className="text-foreground">
              {isLogin ? "Sign In" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {isLogin 
                ? "Welcome back! Please sign in to continue." 
                : "Start your journey with cutting-edge technology."
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 glass bg-input/50 border-border text-foreground"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 glass bg-input/50 border-border text-foreground"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                variant="hero"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <UserIcon size={16} />
                    {isLogin ? "Sign In" : "Create Account"}
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  variant="link"
                  className="p-0 ml-1 text-primary hover:text-accent"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { icon: "🔒", label: "Secure" },
            { icon: "⚡", label: "Fast" },
            { icon: "🚀", label: "Innovation" }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-4 hover-scale">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <div className="text-xs text-muted-foreground">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}