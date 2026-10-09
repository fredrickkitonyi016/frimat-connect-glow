import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2, Download, FileText, HardDrive, MessageSquare, Send, Star, Wrench, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { PortalRole } from "@/hooks/usePortalAuth";

export type HubSection = "devices" | "quotes" | "chat" | "finance" | "reviews";

type Device = { id: string; client_id: string; device_type: string; model: string; serial_no: string; installed_on: string | null; warranty_expires_at: string | null };
type Quote = { id: string; quote_number: string; client_id: string; description: string; amount_ksh: number; status: string; created_at: string };
type Rec = { id: string; tracking_id: string; client_id: string; service_type: string; device: string; status: string; updated_at: string; created_at: string };
type Msg = { id: string; record_id: string; sender_id: string; body: string; created_at: string };
type Inv = { id: string; invoice_number: string; client_id: string; description: string; amount_ksh: number; payment_status: string; transaction_reference: string; created_at: string };
type Review = { id: string; client_id: string; display_name: string; rating: number; comment: string; approved: boolean };
type Profile = { user_id: string; full_name: string; email: string; phone: string };

const box = "rounded-lg border border-border/50 bg-background/60 p-3";
const ksh = (n: number) => `KSh ${Number(n).toLocaleString("en-KE")}`;
const fmt = (d: string | null) => (d ? new Date(d).toLocaleDateString("en-KE") : "—");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
const fail = (m: string) => toast({ title: "Not saved", description: m, variant: "destructive" });

/** Opens a printable page; the browser's "Save as PDF" produces the PDF. */
function printDoc(title: string, body: string) {
  const w = window.open("", "_blank");
  if (!w) return fail("Allow pop-ups to download.");
  w.document.write(`<html><head><title>${esc(title)}</title><style>body{font-family:'Times New Roman';padding:48px;color:#111}h1{letter-spacing:2px}table{width:100%;border-collapse:collapse}td,th{border:1px solid #999;padding:6px;text-align:left}.b{border:6px double #0a0;padding:32px}</style></head><body>${body}<p style="margin-top:32px">FRIMAT Technologies · Nairobi, Kenya · +254112277289 · frimattechnologies016@gmail.com</p><script>window.onload=()=>window.print()</script></body></html>`);
  w.document.close();
}

const PortalHub = ({ section, userId, role, presetService }: { section: HubSection; userId: string; role: PortalRole; presetService?: string }) => {
  const isStaff = role !== "client";
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [records, setRecords] = useState<Rec[]>([]);
  const [invoices, setInvoices] = useState<Inv[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  const load = useCallback(async () => {
    const [p, d, q, r, i, v] = await Promise.all([
      supabase.from("profiles").select("user_id,full_name,email,phone"),
      supabase.from("devices").select("*").order("created_at", { ascending: false }),
      supabase.from("quotes").select("*").order("created_at", { ascending: false }),
      supabase.from("service_records").select("*").order("created_at", { ascending: false }),
      supabase.from("invoices").select("*").order("created_at", { ascending: false }),
      supabase.from("reviews").select("*").order("created_at", { ascending: false }),
    ]);
    setProfiles((p.data ?? []) as Profile[]);
    setDevices((d.data ?? []) as Device[]);
    setQuotes((q.data ?? []) as Quote[]);
    setRecords((r.data ?? []) as Rec[]);
    setInvoices((i.data ?? []) as Inv[]);
    setReviews((v.data ?? []) as Review[]);
  }, []);
  useEffect(() => { void load(); }, [load]);

  const me = profiles.find((p) => p.user_id === userId);
  const nameOf = (id: string) => { const p = profiles.find((x) => x.user_id === id); return p?.full_name || p?.email || "Client"; };
  const ClientSelect = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
      <option value="">Select client…</option>
      {profiles.map((p) => <option key={p.user_id} value={p.user_id}>{p.full_name || p.email}</option>)}
    </select>
  );

  /* ---------------- Devices ---------------- */
  const [dev, setDev] = useState({ client_id: "", device_type: "", model: "", serial_no: "", installed_on: "" });
  const [req, setReq] = useState({ service_type: presetService ?? "", issue: "" });
  useEffect(() => { if (presetService) setReq((x) => ({ ...x, service_type: presetService })); }, [presetService]);

  const addDevice = async () => {
    const client_id = isStaff ? dev.client_id : userId;
    if (!client_id || !dev.device_type.trim() || !dev.model.trim()) return fail("Enter device type and model.");
    const installed = dev.installed_on || null;
    const warranty = installed ? new Date(new Date(installed).getTime() + 90 * 864e5).toISOString().slice(0, 10) : null;
    const { error } = await supabase.from("devices").insert({ client_id, device_type: dev.device_type.trim(), model: dev.model.trim(), serial_no: dev.serial_no.trim(), installed_on: installed, warranty_expires_at: warranty });
    if (error) return fail(error.message);
    toast({ title: "Device registered" });
    setDev({ client_id: "", device_type: "", model: "", serial_no: "", installed_on: "" });
    void load();
  };

  const createRequest = async (d?: Device, issue?: string) => {
    const service_type = d ? `${d.device_type} repair` : req.service_type.trim();
    const text = (issue ?? req.issue).trim();
    if (!service_type) return fail("Enter the service you need.");
    let notes = `SOURCE: PORTAL${d ? ` · DEVICE ${d.serial_no || d.model}` : ""}`;
    if (text.length >= 5) {
      const { data } = await supabase.functions.invoke("triage-repair", { body: { description: text, device: d?.model ?? "" } });
      if (data?.priority) notes = `AI PRIORITY: ${data.priority} (${data.repair_type}) — ${data.reason}\n${notes}`;
    }
    const { data, error } = await supabase.from("service_records")
      .insert({ client_id: d?.client_id ?? userId, service_type: service_type.slice(0, 120), device: d ? `${d.model} ${d.serial_no}`.trim() : "", issue: text.slice(0, 500), notes })
      .select("tracking_id").single();
    if (error) return fail(error.message);
    toast({ title: "Repair requested", description: `Tracking ID ${data.tracking_id}` });
    setReq({ service_type: "", issue: "" });
    void load();
  };

  /* ---------------- Quotes ---------------- */
  const [qt, setQt] = useState({ client_id: "", description: "", amount_ksh: "" });
  const addQuote = async () => {
    const amount = Number(qt.amount_ksh);
    if (!qt.client_id || !qt.description.trim() || !(amount > 0)) return fail("Fill in client, description and amount.");
    const { error } = await supabase.from("quotes").insert({ client_id: qt.client_id, description: qt.description.trim(), amount_ksh: amount });
    if (error) return fail(error.message);
    toast({ title: "Quote sent to client" });
    setQt({ client_id: "", description: "", amount_ksh: "" });
    void load();
  };
  const respond = async (id: string, accept: boolean) => {
    const { error } = await supabase.rpc("respond_quote" as never, { _quote_id: id, _accept: accept } as never);
    if (error) return fail(error.message);
    toast({ title: accept ? "Quote approved — work can start" : "Quote rejected" });
    void load();
  };

  /* ---------------- Chat ---------------- */
  const [active, setActive] = useState<string>("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!active && records[0]) setActive(records[0].id); }, [records, active]);
  useEffect(() => {
    if (section !== "chat" || !active) return;
    const fetchMsgs = async () => {
      const { data } = await supabase.from("ticket_messages").select("*").eq("record_id", active).order("created_at");
      setMsgs((data ?? []) as Msg[]);
    };
    void fetchMsgs();
    const ch = supabase.channel(`ticket-${active}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "ticket_messages", filter: `record_id=eq.${active}` },
        (p) => setMsgs((m) => (m.some((x) => x.id === (p.new as Msg).id) ? m : [...m, p.new as Msg])))
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [section, active]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);
  const send = async () => {
    const body = text.trim();
    if (!body || !active) return;
    const { data, error } = await supabase.from("ticket_messages").insert({ record_id: active, sender_id: userId, body: body.slice(0, 2000) }).select().single();
    if (error) return fail(error.message);
    setText("");
    setMsgs((m) => (m.some((x) => x.id === data.id) ? m : [...m, data as Msg]));
  };
  const notifyWhatsApp = (r: Rec) => {
    const p = profiles.find((x) => x.user_id === r.client_id);
    const phone = (p?.phone ?? "").replace(/\D/g, "").replace(/^0/, "254");
    const msg = `Hello ${p?.full_name || ""}, FRIMAT update for ${r.tracking_id} (${r.service_type}): status is now ${r.status}. Track it in your portal.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  /* ---------------- Finance ---------------- */
  const [payPhone, setPayPhone] = useState("");
  const payMpesa = async (i: Inv) => {
    if (payPhone.replace(/\D/g, "").length < 9) return fail("Enter your M-Pesa phone number.");
    const { data, error } = await supabase.functions.invoke("mpesa-stk-push", { body: { phone: payPhone, amount: Number(i.amount_ksh), orderId: i.invoice_number, accountReference: i.invoice_number } });
    if (error || !data?.success) return fail(data?.error || error?.message || "M-Pesa request failed.");
    toast({ title: "Check your phone", description: "Enter your M-Pesa PIN to pay." });
  };
  const payCard = (i: Inv) => {
    const key = "pk_live_placeholder";
    if (!window.PaystackPop || key.includes("placeholder")) {
      return window.open(`https://wa.me/254112277289?text=${encodeURIComponent(`I want to pay invoice ${i.invoice_number} (${ksh(i.amount_ksh)}) by card or bank transfer.`)}`, "_blank");
    }
  };
  const statement = () => {
    const mine = invoices.filter((i) => isStaff ? true : i.client_id === userId);
    const paid = mine.filter((i) => i.payment_status === "PAID").reduce((t, i) => t + Number(i.amount_ksh), 0);
    const owed = mine.filter((i) => i.payment_status !== "PAID" && i.payment_status !== "CANCELLED").reduce((t, i) => t + Number(i.amount_ksh), 0);
    const rows = mine.map((i) => `<tr><td>${fmt(i.created_at)}</td><td>${esc(i.invoice_number)}</td><td>${esc(i.description)}</td><td>${ksh(i.amount_ksh)}</td><td>${esc(i.payment_status)}</td></tr>`).join("");
    printDoc("Service Statement", `<h1>SERVICE STATEMENT</h1><p><b>Client:</b> ${esc(me?.full_name || me?.email || "")}</p><p><b>Date:</b> ${new Date().toLocaleDateString("en-KE")}</p>
<table><tr><th>Date</th><th>Invoice</th><th>Description</th><th>Amount</th><th>Status</th></tr>${rows}</table>
<h3>Total paid: ${ksh(paid)}</h3><h3>Outstanding balance: ${ksh(owed)}</h3>`);
  };
  const receipt = (i: Inv) => printDoc(i.invoice_number, `<h1>${i.payment_status === "PAID" ? "RECEIPT" : "INVOICE"}</h1><p><b>No:</b> ${esc(i.invoice_number)}</p><p><b>Billed to:</b> ${esc(nameOf(i.client_id))}</p><p><b>Date:</b> ${fmt(i.created_at)}</p><p><b>Description:</b> ${esc(i.description)}</p><p><b>Reference:</b> ${esc(i.transaction_reference || "—")}</p><h2>Total: ${ksh(i.amount_ksh)}</h2><p><b>Status:</b> ${esc(i.payment_status)}</p>`);
  const warranty = (r: Rec) => {
    const start = new Date(r.updated_at);
    const end = new Date(start.getTime() + 90 * 864e5);
    printDoc(`Warranty ${r.tracking_id}`, `<div class="b"><h1>90-DAY WORKMANSHIP WARRANTY</h1><p>This certifies that the work below was completed by FRIMAT Technologies and is covered for 90 days against faults in our workmanship.</p>
<p><b>Client:</b> ${esc(nameOf(r.client_id))}</p><p><b>Tracking ID:</b> ${esc(r.tracking_id)}</p><p><b>Service:</b> ${esc(r.service_type)}</p><p><b>Device:</b> ${esc(r.device || "—")}</p>
<p><b>Valid from:</b> ${start.toLocaleDateString("en-KE")} <b>to</b> ${end.toLocaleDateString("en-KE")}</p><p style="font-size:12px">Does not cover physical damage, liquid damage or tampering by third parties.</p><p>Signed: ______________________ FRIMAT Technologies</p></div>`);
  };

  /* ---------------- Reviews ---------------- */
  const [rv, setRv] = useState({ record_id: "", rating: 5, comment: "" });
  const submitReview = async () => {
    if (rv.comment.trim().length < 5) return fail("Write a short comment.");
    const { error } = await supabase.from("reviews").insert({ client_id: userId, record_id: rv.record_id || null, display_name: (me?.full_name || "Client").slice(0, 80), rating: rv.rating, comment: rv.comment.trim().slice(0, 1000) });
    if (error) return fail(error.message);
    toast({ title: "Thank you!", description: "Your review will appear on the website after approval." });
    setRv({ record_id: "", rating: 5, comment: "" });
    void load();
  };
  const moderate = async (id: string, approved: boolean) => {
    const { error } = approved ? await supabase.from("reviews").update({ approved: true }).eq("id", id) : await supabase.from("reviews").delete().eq("id", id);
    if (error) return fail(error.message);
    void load();
  };

  const completed = records.filter((r) => r.status === "COMPLETED");

  if (section === "devices") return (
    <div className="space-y-6">
      <section className={box}>
        <h3 className="flex items-center gap-2 mb-3 text-sm"><HardDrive size={14} className="text-primary" /> Register a Device</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {isStaff && <ClientSelect value={dev.client_id} onChange={(v) => setDev({ ...dev, client_id: v })} />}
          <select value={dev.device_type} onChange={(e) => setDev({ ...dev, device_type: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
            <option value="">Device type…</option>
            {["Laptop", "Desktop", "Phone", "Server", "CCTV System", "WiFi Access Point", "Router", "Printer", "TV", "Other"].map((t) => <option key={t}>{t}</option>)}
          </select>
          <Input placeholder="Model (e.g. HP EliteBook 840)" maxLength={120} value={dev.model} onChange={(e) => setDev({ ...dev, model: e.target.value })} />
          <Input placeholder="Serial number" maxLength={80} value={dev.serial_no} onChange={(e) => setDev({ ...dev, serial_no: e.target.value })} />
          <div><label className="font-mono text-[11px] uppercase text-muted-foreground">Installed / repaired on</label>
            <Input type="date" value={dev.installed_on} onChange={(e) => setDev({ ...dev, installed_on: e.target.value })} /></div>
        </div>
        <Button onClick={addDevice} className="mt-3 font-mono text-xs uppercase">Save Device</Button>
      </section>
      <section className={box}>
        <h3 className="mb-3 text-sm">My Devices ({devices.length})</h3>
        {devices.length === 0 ? <p className="font-mono text-[11px] text-muted-foreground">No devices yet.</p> : devices.map((d) => {
          const days = d.warranty_expires_at ? Math.ceil((new Date(d.warranty_expires_at).getTime() - Date.now()) / 864e5) : null;
          return (
            <div key={d.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 py-2">
              <div>
                <p className="text-sm">{d.device_type} — {d.model}{isStaff && <span className="text-muted-foreground"> · {nameOf(d.client_id)}</span>}</p>
                <p className="font-mono text-[11px] text-muted-foreground">S/N {d.serial_no || "—"} · Installed {fmt(d.installed_on)} · {days === null ? "No warranty" : days > 0 ? <span className="text-primary">Warranty: {days} days left</span> : <span className="text-destructive">Warranty expired</span>}</p>
              </div>
              <Button size="sm" variant="outline" className="font-mono text-[11px] uppercase" onClick={() => {
                const issue = window.prompt(`What is wrong with your ${d.model}?`);
                if (issue !== null) void createRequest(d, issue);
              }}><Wrench size={12} className="mr-1" />Request Repair</Button>
            </div>
          );
        })}
      </section>
      <section className={box} id="request">
        <h3 className="mb-3 text-sm">Request a Service</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Input placeholder="Service (e.g. CCTV installation)" maxLength={120} value={req.service_type} onChange={(e) => setReq({ ...req, service_type: e.target.value })} />
          <Input placeholder="Describe what you need" maxLength={500} value={req.issue} onChange={(e) => setReq({ ...req, issue: e.target.value })} />
        </div>
        <Button onClick={() => void createRequest()} className="mt-3 font-mono text-xs uppercase">Send Request</Button>
      </section>
    </div>
  );

  if (section === "quotes") return (
    <div className="space-y-6">
      {isStaff && (
        <section className={box}>
          <h3 className="mb-3 text-sm">Send a Quote</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <ClientSelect value={qt.client_id} onChange={(v) => setQt({ ...qt, client_id: v })} />
            <Input placeholder="Work to be done" maxLength={200} value={qt.description} onChange={(e) => setQt({ ...qt, description: e.target.value })} />
            <Input placeholder="Amount (KSh)" type="number" min={1} value={qt.amount_ksh} onChange={(e) => setQt({ ...qt, amount_ksh: e.target.value })} />
          </div>
          <Button onClick={addQuote} className="mt-3 font-mono text-xs uppercase">Send Quote</Button>
        </section>
      )}
      <section className={box}>
        <h3 className="mb-3 text-sm">Quotes & Estimates ({quotes.length})</h3>
        {quotes.length === 0 ? <p className="font-mono text-[11px] text-muted-foreground">No quotes yet.</p> : quotes.map((q) => (
          <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 py-2">
            <div>
              <p className="font-mono text-[11px] text-accent">{q.quote_number}{isStaff && ` · ${nameOf(q.client_id)}`}</p>
              <p className="text-sm">{q.description}</p>
              <p className="font-mono text-sm">{ksh(q.amount_ksh)}</p>
            </div>
            {q.status === "PENDING" && !isStaff ? (
              <div className="flex gap-2">
                <Button size="sm" onClick={() => void respond(q.id, true)} className="font-mono text-[11px] uppercase"><CheckCircle2 size={12} className="mr-1" />Approve</Button>
                <Button size="sm" variant="outline" onClick={() => void respond(q.id, false)} className="font-mono text-[11px] uppercase"><XCircle size={12} className="mr-1" />Reject</Button>
              </div>
            ) : <span className={`font-mono text-[11px] ${q.status === "REJECTED" ? "text-destructive" : "text-primary"}`}>{q.status}</span>}
          </div>
        ))}
      </section>
    </div>
  );

  if (section === "chat") {
    const cur = records.find((r) => r.id === active);
    return (
      <div className="grid md:grid-cols-[240px_1fr] gap-4">
        <div className={`${box} space-y-1 max-h-[460px] overflow-y-auto`}>
          <p className="font-mono text-[11px] uppercase text-muted-foreground mb-2">Tickets</p>
          {records.length === 0 && <p className="text-xs text-muted-foreground">No tickets yet. Request a service first.</p>}
          {records.map((r) => (
            <button key={r.id} onClick={() => setActive(r.id)} className={`w-full text-left rounded p-2 text-xs ${active === r.id ? "bg-primary/15 text-primary" : "hover:bg-muted/40"}`}>
              <span className="font-mono block">{r.tracking_id}</span>{r.service_type}
            </button>
          ))}
        </div>
        <div className={`${box} flex flex-col h-[460px]`}>
          {cur && (
            <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-2">
              <p className="text-sm"><MessageSquare size={14} className="inline mr-1 text-primary" />{cur.service_type} · <span className="font-mono text-[11px] text-accent">{cur.status}</span></p>
              {isStaff && <Button size="sm" variant="outline" className="font-mono text-[10px] uppercase" onClick={() => notifyWhatsApp(cur)}>Notify on WhatsApp</Button>}
            </div>
          )}
          <div className="flex-1 overflow-y-auto space-y-2">
            {msgs.map((m) => (
              <div key={m.id} className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${m.sender_id === userId ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"}`}>
                <p className="font-mono text-[10px] opacity-70">{m.sender_id === userId ? "You" : nameOf(m.sender_id) === "Client" ? "FRIMAT Support" : nameOf(m.sender_id)} · {new Date(m.created_at).toLocaleString("en-KE")}</p>
                {m.body}
              </div>
            ))}
            {active && msgs.length === 0 && <p className="text-xs text-muted-foreground">No messages yet. Say hello.</p>}
            <div ref={endRef} />
          </div>
          <div className="flex gap-2 mt-2">
            <Textarea rows={1} placeholder="Type a message…" value={text} maxLength={2000} onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void send(); } }} />
            <Button onClick={() => void send()} disabled={!active} aria-label="Send"><Send size={14} /></Button>
          </div>
        </div>
      </div>
    );
  }

  if (section === "finance") {
    const visible = isStaff ? invoices : invoices.filter((i) => i.client_id === userId);
    return (
      <div className="space-y-6">
        <section className={box}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm">Orders & Invoices ({visible.length})</h3>
            <Button size="sm" onClick={statement} className="font-mono text-[11px] uppercase"><FileText size={12} className="mr-1" />Download Statement</Button>
          </div>
          {!isStaff && <Input className="mt-3 max-w-xs" placeholder="M-Pesa phone (07XX…)" value={payPhone} maxLength={15} onChange={(e) => setPayPhone(e.target.value)} />}
          <div className="mt-3">
            {visible.length === 0 ? <p className="font-mono text-[11px] text-muted-foreground">No invoices yet.</p> : visible.map((i) => (
              <div key={i.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 py-2">
                <div>
                  <p className="font-mono text-[11px] text-accent">{i.invoice_number}{isStaff && ` · ${nameOf(i.client_id)}`}</p>
                  <p className="text-sm">{i.description}</p>
                  <p className="font-mono text-sm">{ksh(i.amount_ksh)} · <span className="text-primary">{i.payment_status}</span></p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {!isStaff && i.payment_status !== "PAID" && i.payment_status !== "CANCELLED" && (<>
                    <Button size="sm" onClick={() => void payMpesa(i)} className="font-mono text-[11px] uppercase">Pay M-Pesa</Button>
                    <Button size="sm" variant="outline" onClick={() => payCard(i)} className="font-mono text-[11px] uppercase">Card / Bank</Button>
                  </>)}
                  <Button size="sm" variant="ghost" onClick={() => receipt(i)} className="font-mono text-[11px] uppercase"><Download size={12} className="mr-1" />{i.payment_status === "PAID" ? "Receipt" : "Invoice"}</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={box}>
          <h3 className="mb-3 text-sm">Warranty Certificates</h3>
          {completed.length === 0 ? <p className="font-mono text-[11px] text-muted-foreground">Certificates appear here once a repair is marked COMPLETED.</p> : completed.map((r) => (
            <div key={r.id} className="flex items-center justify-between gap-2 border-b border-border/40 py-2">
              <p className="text-sm">{r.service_type} <span className="font-mono text-[11px] text-accent">{r.tracking_id}</span></p>
              <Button size="sm" variant="outline" onClick={() => warranty(r)} className="font-mono text-[11px] uppercase"><Download size={12} className="mr-1" />90-Day Certificate</Button>
            </div>
          ))}
        </section>
      </div>
    );
  }

  // reviews
  return (
    <div className="space-y-6">
      {!isStaff && (
        <section className={box}>
          <h3 className="mb-3 text-sm">Rate a Completed Job</h3>
          <select value={rv.record_id} onChange={(e) => setRv({ ...rv, record_id: e.target.value })} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm mb-3">
            <option value="">General feedback</option>
            {completed.map((r) => <option key={r.id} value={r.id}>{r.tracking_id} — {r.service_type}</option>)}
          </select>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} onClick={() => setRv({ ...rv, rating: n })} aria-label={`${n} stars`}>
                <Star size={22} className={n <= rv.rating ? "fill-primary text-primary" : "text-muted-foreground"} />
              </button>
            ))}
          </div>
          <Textarea placeholder="How was our service?" maxLength={1000} value={rv.comment} onChange={(e) => setRv({ ...rv, comment: e.target.value })} />
          <Button onClick={submitReview} className="mt-3 font-mono text-xs uppercase">Submit Review</Button>
        </section>
      )}
      <section className={box}>
        <h3 className="mb-3 text-sm">{role === "admin" ? "Reviews to approve" : "Reviews"} ({reviews.length})</h3>
        {reviews.map((r) => (
          <div key={r.id} className="flex items-center justify-between gap-2 border-b border-border/40 py-2">
            <div>
              <p className="text-sm">{"★".repeat(r.rating)} <span className="text-muted-foreground">— {r.display_name}</span></p>
              <p className="text-xs text-muted-foreground">{r.comment}</p>
            </div>
            {role === "admin" ? (r.approved ? <span className="font-mono text-[11px] text-primary">PUBLISHED</span> : (
              <div className="flex gap-2">
                <Button size="sm" onClick={() => void moderate(r.id, true)} className="font-mono text-[11px] uppercase">Approve</Button>
                <Button size="sm" variant="outline" onClick={() => void moderate(r.id, false)} className="font-mono text-[11px] uppercase">Delete</Button>
              </div>
            )) : <span className="font-mono text-[11px] text-muted-foreground">{r.approved ? "PUBLISHED" : "AWAITING APPROVAL"}</span>}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PortalHub;
