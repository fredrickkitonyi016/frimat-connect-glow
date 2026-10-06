import { useCallback, useEffect, useState } from "react";
import { Database, Plus, Save, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { PortalRole } from "@/hooks/usePortalAuth";

type Profile = { user_id: string; full_name: string; email: string; phone: string; company: string; location: string };
type Record_ = { id: string; notes?: string | null; tracking_id: string; client_id: string; service_type: string; device: string; issue: string; status: string; created_at: string };
type Invoice = { id: string; invoice_number: string; client_id: string; description: string; amount_ksh: number; payment_status: string };

const STATUSES = ["SIGNAL RECEIVED", "DIAGNOSTIC MODE", "HARDWARE REPLACEMENT", "READY FOR PICKUP", "COMPLETED"];
const box = "rounded-lg border border-border/50 bg-background/60 p-3";

const ClientRecords = ({ userId, role }: { userId: string; role: PortalRole }) => {
  const isStaff = role !== "client";
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [records, setRecords] = useState<Record_[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [me, setMe] = useState({ full_name: "", phone: "", company: "", location: "" });
  const [rec, setRec] = useState({ client_id: "", service_type: "", device: "", issue: "" });
  const [triage, setTriage] = useState<{ repair_type: string; priority: string; reason: string } | null>(null);
  const [triaging, setTriaging] = useState(false);
  const [inv, setInv] = useState({ client_id: "", description: "", amount_ksh: "" });

  const load = useCallback(async () => {
    const [p, r, i] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("service_records").select("*").order("created_at", { ascending: false }),
      supabase.from("invoices").select("*").order("created_at", { ascending: false }),
    ]);
    const ps = (p.data ?? []) as Profile[];
    setProfiles(ps);
    setRecords((r.data ?? []) as Record_[]);
    setInvoices((i.data ?? []) as Invoice[]);
    const mine = ps.find((x) => x.user_id === userId);
    if (mine) setMe({ full_name: mine.full_name, phone: mine.phone, company: mine.company, location: mine.location });
  }, [userId]);

  useEffect(() => { void load(); }, [load]);

  const fail = (m: string) => toast({ title: "Not saved", description: m, variant: "destructive" });
  const nameOf = (id: string) => profiles.find((p) => p.user_id === id)?.full_name || profiles.find((p) => p.user_id === id)?.email || "Client";

  const saveMe = async () => {
    const { error } = await supabase.rpc("bootstrap_current_user", {
      _full_name: me.full_name, _phone: me.phone, _company: me.company, _location: me.location,
    });
    if (error) return fail(error.message);
    toast({ title: "Profile saved", description: "Your details are stored securely." });
    void load();
  };

  const runTriage = async () => {
    if (rec.issue.trim().length < 5) return fail("Describe the problem first.");
    setTriaging(true);
    const { data, error } = await supabase.functions.invoke("triage-repair", { body: { description: rec.issue, device: rec.device } });
    setTriaging(false);
    if (error || data?.error) return fail(data?.error || error?.message || "AI failed.");
    setTriage(data);
    if (!rec.service_type.trim()) setRec((x) => ({ ...x, service_type: data.repair_type }));
  };

  const addRecord = async () => {
    const client_id = isStaff ? rec.client_id : userId;
    if (!client_id || !rec.service_type.trim()) return fail("Choose a client and enter the service.");
    const notes = triage ? `AI PRIORITY: ${triage.priority} (${triage.repair_type}) — ${triage.reason}` : null;
    setTriage(null);
    const { data, error } = await supabase.from("service_records")
      .insert({ client_id, service_type: rec.service_type.trim(), device: rec.device.trim(), issue: rec.issue.trim(), notes })
      .select("tracking_id").single();
    if (error) return fail(error.message);
    toast({ title: "Record created", description: `Tracking ID ${data.tracking_id}` });
    setRec({ client_id: "", service_type: "", device: "", issue: "" });
    void load();
  };

  const addInvoice = async () => {
    const amount = Number(inv.amount_ksh);
    if (!inv.client_id || !inv.description.trim() || !(amount > 0)) return fail("Fill in client, description and amount.");
    const { error } = await supabase.from("invoices").insert({ client_id: inv.client_id, description: inv.description.trim(), amount_ksh: amount });
    if (error) return fail(error.message);
    toast({ title: "Invoice created" });
    setInv({ client_id: "", description: "", amount_ksh: "" });
    void load();
  };

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("service_records").update({ status }).eq("id", id);
    if (error) return fail(error.message);
    void load();
  };

  const setPaid = async (id: string, payment_status: string) => {
    const { error } = await supabase.from("invoices").update({ payment_status }).eq("id", id);
    if (error) return fail(error.message);
    void load();
  };

  const ClientSelect = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
    <select value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
      <option value="">Select client…</option>
      {profiles.map((p) => <option key={p.user_id} value={p.user_id}>{p.full_name || p.email}</option>)}
    </select>
  );

  return (
    <div className="space-y-6">
      <section className={box}>
        <h3 className="flex items-center gap-2 mb-3 text-sm"><Database size={14} className="text-primary" /> My Details</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {(["full_name", "phone", "company", "location"] as const).map((k) => (
            <div key={k} className="space-y-1">
              <Label className="font-mono text-[11px] uppercase">{k.replace("_", " ")}</Label>
              <Input value={me[k]} maxLength={160} onChange={(e) => setMe({ ...me, [k]: e.target.value })} />
            </div>
          ))}
        </div>
        <Button onClick={saveMe} className="mt-3 font-mono text-xs uppercase"><Save size={14} className="mr-2" />Save Details</Button>
      </section>

      <section className={box}>
        <h3 className="flex items-center gap-2 mb-3 text-sm"><Plus size={14} className="text-primary" /> New Service Record</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {isStaff && <ClientSelect value={rec.client_id} onChange={(v) => setRec({ ...rec, client_id: v })} />}
          <Input placeholder="Service (e.g. CCTV install)" value={rec.service_type} maxLength={120} onChange={(e) => setRec({ ...rec, service_type: e.target.value })} />
          <Input placeholder="Device" value={rec.device} maxLength={120} onChange={(e) => setRec({ ...rec, device: e.target.value })} />
          <Input placeholder="Describe the problem" value={rec.issue} maxLength={500} onChange={(e) => setRec({ ...rec, issue: e.target.value })} />
        </div>
        {triage && (
          <p className="mt-3 font-mono text-[11px] text-accent">
            AI: {triage.repair_type} · PRIORITY {triage.priority} — <span className="text-muted-foreground">{triage.reason}</span>
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="outline" onClick={runTriage} disabled={triaging} className="font-mono text-xs uppercase">
            <Sparkles size={14} className="mr-2" />{triaging ? "Analysing…" : "AI Diagnose"}
          </Button>
          <Button onClick={addRecord} className="font-mono text-xs uppercase">Save Record</Button>
        </div>
      </section>

      {role === "admin" && (
        <section className={box}>
          <h3 className="mb-3 text-sm">New Invoice</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <ClientSelect value={inv.client_id} onChange={(v) => setInv({ ...inv, client_id: v })} />
            <Input placeholder="Description" value={inv.description} maxLength={200} onChange={(e) => setInv({ ...inv, description: e.target.value })} />
            <Input placeholder="Amount (KSh)" type="number" min={1} value={inv.amount_ksh} onChange={(e) => setInv({ ...inv, amount_ksh: e.target.value })} />
          </div>
          <Button onClick={addInvoice} className="mt-3 font-mono text-xs uppercase">Create Invoice</Button>
        </section>
      )}

      <section className={box}>
        <h3 className="mb-3 text-sm">Service Records ({records.length})</h3>
        {records.length === 0 ? <p className="font-mono text-[11px] text-muted-foreground">No records yet.</p> : (
          <div className="space-y-2">
            {records.map((r) => (
              <div key={r.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-2">
                <div>
                  <p className="font-mono text-[11px] text-accent">{r.tracking_id}{isStaff && ` · ${nameOf(r.client_id)}`}</p>
                  <p className="text-sm">{r.service_type}{r.device && ` — ${r.device}`}</p>
                  {r.issue && <p className="text-xs text-muted-foreground">{r.issue}</p>}
                  {isStaff && r.notes?.startsWith("AI PRIORITY") && <p className="font-mono text-[11px] text-primary">{r.notes}</p>}
                </div>
                {isStaff ? (
                  <select value={r.status} onChange={(e) => void setStatus(r.id, e.target.value)}
                    className="rounded border border-primary/40 bg-background px-2 py-1 font-mono text-[11px] text-primary">
                    {STATUSES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                ) : <span className="font-mono text-[11px] text-primary">{r.status}</span>}
              </div>
            ))}
          </div>
        )}
      </section>

      {role !== "staff" && (
        <section className={box}>
          <h3 className="mb-3 text-sm">Invoices ({invoices.length})</h3>
          {invoices.length === 0 ? <p className="font-mono text-[11px] text-muted-foreground">No invoices yet.</p> : (
            <div className="space-y-2">
              {invoices.map((i) => (
                <div key={i.id} className="flex items-center justify-between gap-2 border-b border-border/40 pb-2">
                  <div>
                    <p className="font-mono text-[11px] text-accent">{i.invoice_number}{role === "admin" && ` · ${nameOf(i.client_id)}`}</p>
                    <p className="text-sm">{i.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm">KSh {Number(i.amount_ksh).toLocaleString("en-KE")}</p>
                    {role === "admin" ? (
                      <select value={i.payment_status} onChange={(e) => void setPaid(i.id, e.target.value)}
                        className="rounded border border-primary/40 bg-background px-2 py-1 font-mono text-[11px] text-primary">
                        {["DUE", "PAID", "CANCELLED"].map((s) => <option key={s}>{s}</option>)}
                      </select>
                    ) : <span className="font-mono text-[11px] text-primary">{i.payment_status}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {isStaff && (
        <section className={box}>
          <h3 className="mb-3 text-sm">Registered Clients ({profiles.length})</h3>
          {profiles.map((p) => (
            <p key={p.user_id} className="text-sm border-b border-border/40 py-1">
              {p.full_name || "—"} <span className="text-muted-foreground font-mono text-[11px]">{p.email} {p.phone}</span>
            </p>
          ))}
        </section>
      )}
    </div>
  );
};

export default ClientRecords;
