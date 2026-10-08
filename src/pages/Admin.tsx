import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ShieldCheck, Users, Wrench, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

type Profile = { user_id: string; full_name: string; email: string; phone: string; company: string; location: string; created_at: string };
type RoleRow = { user_id: string; role: "admin" | "staff" | "client" };
type Rec = { id: string; tracking_id: string; client_id: string; service_type: string; device: string; issue: string; status: string; notes: string; assigned_to: string; created_at: string };
type Inv = { id: string; invoice_number: string; client_id: string; description: string; amount_ksh: number; payment_status: string; created_at: string };

const STATUSES = ["SIGNAL RECEIVED", "DIAGNOSTIC MODE", "HARDWARE REPLACEMENT", "READY FOR PICKUP", "COMPLETED", "PAYMENT INITIATED"];
const PRIORITIES = ["URGENT", "HIGH", "MEDIUM", "LOW"];
const card = "rounded-lg border border-primary/30 bg-background/60 p-4";
const sel = "rounded border border-primary/40 bg-background px-2 py-1 font-mono text-[11px] text-primary";
const priorityOf = (n: string) => n?.match(/AI PRIORITY: (\w+)/)?.[1] ?? "";

const Admin = () => {
  const { user, role, loading } = useAuth();
  const isAdmin = role === "admin";
  const [tab, setTab] = useState<"repairs" | "clients" | "invoices" | "staff">("repairs");
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [roles, setRoles] = useState<RoleRow[]>([]);
  const [recs, setRecs] = useState<Rec[]>([]);
  const [invs, setInvs] = useState<Inv[]>([]);
  const [q, setQ] = useState("");
  const [pf, setPf] = useState("");
  const [inv, setInv] = useState({ client_id: "", description: "", amount_ksh: "" });

  const load = useCallback(async () => {
    const [p, r, s, i] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("user_roles").select("user_id, role"),
      supabase.from("service_records").select("*").order("created_at", { ascending: false }),
      supabase.from("invoices").select("*").order("created_at", { ascending: false }),
    ]);
    setProfiles((p.data ?? []) as Profile[]);
    setRoles((r.data ?? []) as RoleRow[]);
    setRecs((s.data ?? []) as Rec[]);
    setInvs((i.data ?? []) as Inv[]);
  }, []);
  useEffect(() => { if (user && role !== "client") void load(); }, [user, role, load]);

  const fail = (m: string) => toast({ title: "Not saved", description: m, variant: "destructive" });
  const name = (id: string) => { const p = profiles.find((x) => x.user_id === id); return p?.full_name || p?.email || "Client"; };
  const rolesOf = (id: string) => roles.filter((r) => r.user_id === id).map((r) => r.role);

  const update = async (table: "service_records" | "invoices", id: string, patch: Record<string, string>) => {
    const { error } = await supabase.from(table).update(patch as never).eq("id", id);
    if (error) return fail(error.message);
    void load();
  };
  const setRole = async (uid: string, r: "admin" | "staff", grant: boolean) => {
    const { error } = await (supabase.rpc as unknown as (f: string, a: object) => Promise<{ error: { message: string } | null }>)("admin_set_role", { _user_id: uid, _role: r, _grant: grant });
    if (error) return fail(error.message);
    toast({ title: grant ? `${r} access granted` : `${r} access removed` });
    void load();
  };
  const addInvoice = async () => {
    const amount = Number(inv.amount_ksh);
    if (!inv.client_id || !inv.description.trim() || !(amount > 0)) return fail("Fill in client, description and amount.");
    const { error } = await supabase.from("invoices").insert({ client_id: inv.client_id, description: inv.description.trim().slice(0, 200), amount_ksh: amount });
    if (error) return fail(error.message);
    toast({ title: "Invoice created" });
    setInv({ client_id: "", description: "", amount_ksh: "" });
    void load();
  };

  const filteredRecs = useMemo(() => recs.filter((r) =>
    (!pf || priorityOf(r.notes) === pf) &&
    (!q || `${r.tracking_id} ${r.service_type} ${r.issue} ${name(r.client_id)}`.toLowerCase().includes(q.toLowerCase()))
  ), [recs, pf, q, profiles]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return null;
  if (role === "client") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 font-mono text-sm">
        <p className="text-destructive">[ACCESS DENIED] Admin or staff clearance required.</p>
        <Link to="/portal" className="text-primary underline">Go to my dashboard</Link>
      </div>
    );
  }

  const paid = invs.filter((i) => i.payment_status === "PAID").reduce((t, i) => t + Number(i.amount_ksh), 0);
  const due = invs.filter((i) => i.payment_status === "DUE").reduce((t, i) => t + Number(i.amount_ksh), 0);
  const tabs = [
    { id: "repairs", label: "Repair Records", icon: Wrench },
    { id: "clients", label: "Clients", icon: Users },
    ...(isAdmin ? [{ id: "invoices", label: "Invoices", icon: FileText }, { id: "staff", label: "Staff & Roles", icon: UserCog }] : []),
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/30 bg-background/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <span className="flex items-center gap-2 font-mono text-xs text-primary"><ShieldCheck size={16} />FRIMAT // ADMIN COMMAND</span>
          <Link to="/" className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-primary"><ArrowLeft size={12} />Website</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["Clients", profiles.length],
            ["Open repairs", recs.filter((r) => r.status !== "COMPLETED").length],
            ["Urgent / High", recs.filter((r) => ["URGENT", "HIGH"].includes(priorityOf(r.notes)) && r.status !== "COMPLETED").length],
            [isAdmin ? "Paid / Due (KSh)" : "Completed", isAdmin ? `${paid.toLocaleString("en-KE")} / ${due.toLocaleString("en-KE")}` : recs.filter((r) => r.status === "COMPLETED").length],
          ].map(([l, v]) => (
            <div key={l as string} className={card}>
              <p className="font-mono text-[10px] uppercase text-muted-foreground">{l}</p>
              <p className="font-mono text-xl text-primary">{v}</p>
            </div>
          ))}
        </div>

        <nav className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <Button key={t.id} variant={tab === t.id ? "default" : "outline"} onClick={() => setTab(t.id as typeof tab)} className="font-mono text-xs uppercase">
              <t.icon size={14} className="mr-2" />{t.label}
            </Button>
          ))}
        </nav>

        {tab === "repairs" && (
          <section className={card}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Input placeholder="Search tracking ID, client, service…" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-sm" />
              <select value={pf} onChange={(e) => setPf(e.target.value)} className={sel}>
                <option value="">All priorities</option>
                {PRIORITIES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            {filteredRecs.length === 0 ? <p className="font-mono text-[11px] text-muted-foreground">No records.</p> : (
              <div className="space-y-3">
                {filteredRecs.map((r) => (
                  <div key={r.id} className="border-b border-border/40 pb-3 grid md:grid-cols-[1fr_auto] gap-2">
                    <div>
                      <p className="font-mono text-[11px] text-accent">{r.tracking_id} · {name(r.client_id)} · {new Date(r.created_at).toLocaleDateString("en-KE")}
                        {priorityOf(r.notes) && <span className="ml-2 text-primary">[{priorityOf(r.notes)}]</span>}</p>
                      <p className="text-sm">{r.service_type}{r.device && ` — ${r.device}`}</p>
                      {r.issue && <p className="text-xs text-muted-foreground">{r.issue}</p>}
                      {r.notes && <p className="font-mono text-[10px] text-muted-foreground whitespace-pre-line">{r.notes}</p>}
                    </div>
                    <div className="flex md:flex-col gap-2 items-end">
                      <select value={r.status} onChange={(e) => void update("service_records", r.id, { status: e.target.value })} className={sel}>
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                      <Input defaultValue={r.assigned_to} placeholder="Assign technician" className="h-8 w-40 text-xs"
                        onBlur={(e) => e.target.value !== r.assigned_to && void update("service_records", r.id, { assigned_to: e.target.value.slice(0, 120) })} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {tab === "clients" && (
          <section className={card}>
            <div className="space-y-2">
              {profiles.map((p) => (
                <div key={p.user_id} className="grid sm:grid-cols-4 gap-1 border-b border-border/40 pb-2 text-sm">
                  <span>{p.full_name || "—"}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{p.email}<br />{p.phone}</span>
                  <span className="text-xs text-muted-foreground">{p.company} {p.location}</span>
                  <span className="font-mono text-[11px] text-accent">
                    {recs.filter((r) => r.client_id === p.user_id).length} records · {invs.filter((i) => i.client_id === p.user_id).length} invoices
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "invoices" && isAdmin && (
          <section className={`${card} space-y-4`}>
            <div className="grid sm:grid-cols-4 gap-2">
              <select value={inv.client_id} onChange={(e) => setInv({ ...inv, client_id: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                <option value="">Select client…</option>
                {profiles.map((p) => <option key={p.user_id} value={p.user_id}>{p.full_name || p.email}</option>)}
              </select>
              <Input placeholder="Description" maxLength={200} value={inv.description} onChange={(e) => setInv({ ...inv, description: e.target.value })} />
              <Input placeholder="Amount (KSh)" type="number" min={1} value={inv.amount_ksh} onChange={(e) => setInv({ ...inv, amount_ksh: e.target.value })} />
              <Button onClick={addInvoice} className="font-mono text-xs uppercase">Create Invoice</Button>
            </div>
            {invs.map((i) => (
              <div key={i.id} className="flex items-center justify-between gap-2 border-b border-border/40 pb-2">
                <div>
                  <p className="font-mono text-[11px] text-accent">{i.invoice_number} · {name(i.client_id)}</p>
                  <p className="text-sm">{i.description}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-mono text-sm">KSh {Number(i.amount_ksh).toLocaleString("en-KE")}</p>
                  <select value={i.payment_status} onChange={(e) => void update("invoices", i.id, { payment_status: e.target.value })} className={sel}>
                    {["DUE", "PAID", "CANCELLED"].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            ))}
          </section>
        )}

        {tab === "staff" && isAdmin && (
          <section className={card}>
            <div className="space-y-2">
              {profiles.map((p) => {
                const rs = rolesOf(p.user_id);
                return (
                  <div key={p.user_id} className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-2">
                    <div>
                      <p className="text-sm">{p.full_name || p.email}</p>
                      <p className="font-mono text-[11px] text-accent">{rs.join(" · ").toUpperCase() || "CLIENT"}</p>
                    </div>
                    <div className="flex gap-2">
                      {(["staff", "admin"] as const).map((r) => (
                        <Button key={r} size="sm" variant={rs.includes(r) ? "default" : "outline"} className="font-mono text-[10px] uppercase"
                          disabled={r === "admin" && p.user_id === user?.id}
                          onClick={() => void setRole(p.user_id, r, !rs.includes(r))}>
                          {rs.includes(r) ? `Remove ${r}` : `Make ${r}`}
                        </Button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Admin;
