import { useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, ShieldCheck, UserCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = ({ mobile, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) => {
  const { user, role, signOut } = useAuth();
  const navigate = useNavigate();
  if (!user) return null;
  const go = (p: string) => { onNavigate?.(); navigate(p); };
  const isStaff = role !== "client";

  if (mobile) {
    return (
      <div className="space-y-2">
        <button onClick={() => go("/portal")} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 w-full text-left">
          <LayoutDashboard size={22} /><span className="text-lg font-semibold">My Dashboard</span>
        </button>
        {isStaff && (
          <button onClick={() => go("/admin")} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 w-full text-left">
            <ShieldCheck size={22} /><span className="text-lg font-semibold">Admin Dashboard</span>
          </button>
        )}
        <button onClick={() => { onNavigate?.(); void signOut(); }} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-destructive/10 w-full text-left">
          <LogOut size={22} /><span className="text-lg font-semibold">Sign Out</span>
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
        <UserCircle size={14} /><span className="max-w-[160px] truncate">{user.email}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[200]">
        <DropdownMenuLabel className="font-mono text-[11px] uppercase">Clearance: {role}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => go("/portal")}><LayoutDashboard size={14} className="mr-2" />My Dashboard</DropdownMenuItem>
        {isStaff && <DropdownMenuItem onClick={() => go("/admin")}><ShieldCheck size={14} className="mr-2" />Admin Dashboard</DropdownMenuItem>}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => void signOut()}><LogOut size={14} className="mr-2" />Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
