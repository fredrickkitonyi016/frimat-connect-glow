import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  BookOpen,
  Camera,
  CreditCard,
  Download,
  Headphones,
  LayoutDashboard,
  MessageSquare,
  Radio,
  Send,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  Wifi,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import PortalSignIn from "@/components/PortalSignIn";
import { usePortalAuth } from "@/hooks/usePortalAuth";
import {
  getQueue,
  makeTicketId,
  pushToQueue,
  subscribeQueue,
  type QueueEntry,
} from "@/lib/portalQueue";

const ksh = (n: number) => `KSh ${n.toLocaleString("en-KE")}`;

/* ---------------------------------- HUD bits --------------------------------- */

const Panel = ({
  title,
  tag,
  icon: Icon,
  children,
  className = "",
}: {
  title: string;
  tag?: string;
  icon?: React.ComponentType<{ size?: string | number; className?: string }>;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={`relative rounded-xl border border-primary/30 bg-card/40 backdrop-blur-sm p-4 sm:p-5 ${className}`}
  >
    {/* HUD bracket corners */}
    <span className="pointer-events-none absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-primary" />
    <span className="pointer-events-none absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-accent" />
    <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-accent" />
    <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />
    <header className="mb-4 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 text-sm sm:text-base tracking-wide">
        {Icon && <Icon size={16} className="text-primary" />}
        {title}
      </h2>
      {tag && (
        <span className="font-mono text-[10px] sm:text-xs px-2 py-1 rounded border border-accent/40 text-accent">
          {tag}
        </span>
      )}
    </header>
    {children}
  </section>
);

const Gauge = ({
  label,
  value,
  max,
  unit,
  accent = false,
}: {
  label: string;
  value: number;
  max: number;
  unit?: string;
  accent?: boolean;
}) => {
  const [w, setW] = useState(0);
  const pct = Math.min(100, Math.round((value / max) * 100));
  useEffect(() => {
    const t = setTimeout(() => setW(pct), 120);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <div className="relative rounded-lg border border-border/60 bg-background/50 p-4">
      <p className="font-mono text-[10px] uppercase text-muted-foreground">{label}</p>
      <p
        className={`font-mono text-2xl sm:text-3xl mt-1 ${accent ? "text-accent" : "text-primary"}`}
      >
        {unit === "KSh" ? ksh(value) : value}
      </p>
      <div className="mt-3 h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${accent ? "bg-accent" : "bg-primary"}`}
          style={{ width: `${w}%` }}
        />
      </div>
      <p className="font-mono text-[10px] mt-2 text-muted-foreground">LOAD {pct}%</p>
    </div>
  );
};

/* --------------------------------- Static data -------------------------------- */

const baseFeed = [
  "[SYSTEM] Command portal handshake complete — session encrypted.",
  "[SYSTEM] CCTV Node #04 Operational — 1080p stream stable.",
  "[REPAIR] Ticket #FR-1049 Updated: Diagnostic Completed.",
  "[NETWORK] WiFi Mesh AP-02 Online — 24 clients connected.",
  "[BILLING] Invoice #INV-2291 issued: KSh 45,000 (CCTV 4-Cam Kit).",
  "[SYSTEM] Warranty watchdog active — 3 devices under 90-day cover.",
];

const devices = [
  { name: "CCTV 4-Camera Kit (4K)", node: "NODE-01", type: "cctv", status: "ONLINE", warrantyDaysLeft: 62 },
  { name: "Enterprise WiFi Router", node: "NODE-02", type: "wifi", status: "ONLINE", warrantyDaysLeft: 38 },
  { name: "Outdoor Dome Camera", node: "NODE-03", type: "cctv", status: "ONLINE", warrantyDaysLeft: 81 },
  { name: "Mesh Access Point", node: "NODE-04", type: "wifi", status: "DEGRADED", warrantyDaysLeft: 12 },
];

const repairStages = [
  "SIGNAL RECEIVED",
  "DIAGNOSTIC MODE",
  "HARDWARE REPLACEMENT",
  "READY FOR PICKUP",
];

const repairs = [
  { id: "FR-1049", item: "Samsung A54 — Screen Replacement", stage: 3, cost: 6500 },
  { id: "FR-1052", item: "HP EliteBook — Battery & Fan", stage: 2, cost: 9800 },
  { id: "FR-1057", item: 'Hisense 43" TV — Power Board', stage: 1, cost: 4200 },
];

const invoices = [
  { id: "INV-2291", label: "CCTV 4-Camera Kit + Installation", amount: 45000, status: "DUE" },
  { id: "INV-2284", label: "Enterprise WiFi Router", amount: 12500, status: "PAID" },
  { id: "QTE-1180", label: "Site Survey Quote — Kiambu Branch", amount: 3500, status: "QUOTE" },
];

const regions = ["Nairobi", "Kiambu", "Machakos", "Kajiado"];

const tabs = [
  { id: "dashboard", label: "Command Center", icon: LayoutDashboard },
  { id: "equipment", label: "Equipment Tracker", icon: Camera },
  { id: "repairs", label: "Repair Terminal", icon: Wrench },
  { id: "billing", label: "Billing & Shop", icon: CreditCard },
  { id: "support", label: "Service Desk", icon: Headphones },
] as const;

type TabId = (typeof tabs)[number]["id"];

/* ----------------------------------- Page ----------------------------------- */

const Portal = () => {
  const { session, user, role, loading, signOut } = usePortalAuth();
  const [tab, setTab] = useState<TabId>("dashboard");
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    document.title = "Client & Admin Command Portal | FRIMAT Technologies";
    setQueue(getQueue());
    const unsub = subscribeQueue(() => setQueue(getQueue()));
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => {
      unsub();
      clearInterval(t);
    };
  }, []);

  const feed = useMemo(
    () => [
      ...queue.map(
        (q) =>
          `[QUEUE] ${q.id} — ${q.title.toUpperCase()} :: ${q.status}${
            q.location ? ` @ ${q.location}` : ""
          }`
      ),
      ...baseFeed,
    ],
    [queue]
  );

  const pendingKsh = invoices
    .filter((i) => i.status === "DUE")
    .reduce((s, i) => s + i.amount, 0);

  /* ticket form */
  const [ticket, setTicket] = useState({
    name: "",
    phone: "",
    region: "Nairobi",
    type: "On-site survey",
    details: "",
  });

  const dispatchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticket.name.trim() || !ticket.phone.trim()) {
      toast({ title: "Signal incomplete", description: "Name and phone are required." });
      return;
    }
    const record = pushToQueue({
      source: "ticket",
      title: `${ticket.type} — ${ticket.name.trim()}`,
      detail: ticket.details.trim() || undefined,
      location: ticket.region,
      status: "SIGNAL RECEIVED",
    });
    toast({
      title: `Dispatch confirmed — ${record.id}`,
      description: `Ticket #${makeTicketId()} queued for ${ticket.region}. Our team will call ${ticket.phone}.`,
    });
    setTicket({ ...ticket, details: "" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-mono text-xs text-primary animate-pulse">
          [SYSTEM] ESTABLISHING SECURE SESSION…
        </p>
      </div>
    );
  }

  if (!session) return <PortalSignIn />;

  return (
    <div className="min-h-screen bg-background">
      {/* Global Command Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-primary/30 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 h-14">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <Radio size={18} className="text-primary animate-pulse" />
              <span className="font-mono text-xs sm:text-sm text-primary">FRIMAT // COMMAND PORTAL</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline font-mono text-[11px] text-muted-foreground">
                SYSTEM STATUS: <span className="text-primary">OPERATIONAL</span> ·{" "}
                {clock.toLocaleTimeString("en-KE", { hour12: false })} EAT
              </span>
              <span className="rounded border border-accent/50 px-2 py-1 font-mono text-[10px] uppercase text-accent">
                {role} clearance
              </span>
              <button
                onClick={() => void signOut()}
                className="rounded border border-border/60 px-2 py-1 font-mono text-[10px] uppercase text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {[
              { to: "/", label: "Return to Main Site", icon: ArrowLeft },
              { to: "/shop", label: "Shop Hardware", icon: ShoppingBag },
              { to: "/book-service", label: "Book Site Survey", icon: ShieldCheck },
              { to: "/resources/whitepapers", label: "Knowledge Base", icon: BookOpen },
              { to: "/contact", label: "Contact Tech Support", icon: MessageSquare },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-2 whitespace-nowrap rounded border border-border/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <l.icon size={12} />
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="mb-6">
          <p className="font-mono text-[11px] text-accent">
            [SECURE SESSION] {role.toUpperCase()} ACCESS · {user?.email}
          </p>
          <h1 className="text-2xl sm:text-4xl mt-2">Command Portal</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Track your CCTV systems, WiFi network, repairs, invoices and support tickets in one
            place. Everything you book on the main site shows up here automatically.
          </p>
        </div>

        {/* Module tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-lg border px-3 py-2 font-mono text-[11px] uppercase transition-all ${
                tab === t.id
                  ? "border-primary bg-primary/10 text-primary shadow-[0_0_18px_hsl(var(--primary)/0.35)]"
                  : "border-border/60 text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              <t.icon size={13} />
              {t.label}
            </button>
          ))}
        </div>

        {/* ---------------------------- Dashboard ---------------------------- */}
        {tab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Gauge label="Active Repairs" value={repairs.length} max={10} />
              <Gauge label="Security Systems Online" value={3} max={4} accent />
              <Gauge label="Pending Invoices" value={pendingKsh} max={100000} unit="KSh" />
              <Gauge label="Open Support Tickets" value={queue.length + 2} max={12} accent />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Panel
                title="System Status Feed"
                tag="LIVE"
                icon={Activity}
                className="lg:col-span-2"
              >
                <div className="max-h-80 overflow-y-auto rounded-lg border border-border/50 bg-background/70 p-3 font-mono text-[11px] leading-relaxed space-y-1">
                  {feed.map((line, i) => (
                    <p
                      key={`${line}-${i}`}
                      className={
                        line.startsWith("[QUEUE]")
                          ? "text-accent"
                          : line.startsWith("[REPAIR]")
                            ? "text-primary"
                            : "text-muted-foreground"
                      }
                    >
                      <span className="text-primary/60">
                        {String(i + 1).padStart(2, "0")}&gt;
                      </span>{" "}
                      {line}
                    </p>
                  ))}
                </div>
              </Panel>

              <Panel title="Diagnostic Queue" tag={`${queue.length} SYNCED`} icon={Ticket}>
                {queue.length === 0 ? (
                  <p className="font-mono text-[11px] text-muted-foreground">
                    Queue empty. Bookings, purchases and survey requests from the main site appear
                    here with a tracking ID.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {queue.slice(0, 6).map((q) => (
                      <li key={q.id} className="rounded border border-border/60 p-3">
                        <p className="font-mono text-xs text-primary">{q.id}</p>
                        <p className="text-sm mt-1">{q.title}</p>
                        <p className="font-mono text-[10px] text-muted-foreground mt-1">
                          {q.status}
                          {q.location ? ` · ${q.location}` : ""}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
                <Button className="w-full mt-4" onClick={() => setTab("support")}>
                  Initiate Signal Dispatch
                </Button>
              </Panel>
            </div>
          </div>
        )}

        {/* ---------------------------- Equipment ---------------------------- */}
        {tab === "equipment" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Panel title="Hardware & Installation Hub" tag="CCTV / WIFI" icon={Camera}>
              <ul className="space-y-3">
                {devices.map((d) => (
                  <li
                    key={d.node}
                    className="rounded-lg border border-border/60 p-3 flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="flex items-center gap-2 text-sm">
                        {d.type === "cctv" ? (
                          <Camera size={14} className="text-primary" />
                        ) : (
                          <Wifi size={14} className="text-accent" />
                        )}
                        {d.name}
                      </p>
                      <p className="font-mono text-[10px] text-muted-foreground mt-1">
                        {d.node} · WARRANTY {d.warrantyDaysLeft}/90 DAYS LEFT
                      </p>
                      <div className="mt-2 h-1 w-40 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${(d.warrantyDaysLeft / 90) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span
                      className={`font-mono text-[10px] px-2 py-1 rounded border ${
                        d.status === "ONLINE"
                          ? "border-primary/50 text-primary"
                          : "border-destructive/50 text-destructive"
                      }`}
                    >
                      {d.status}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="Network Topology Status" tag="MESH MAP" icon={Wifi}>
              <div className="rounded-lg border border-border/60 bg-background/60 p-4 font-mono text-[11px] space-y-2">
                <p className="text-primary">[ROUTER] FRIMAT-GW-01 ─── UPLINK 98% STABLE</p>
                <p className="text-muted-foreground pl-4">├── AP-01 · 12 clients · SIGNAL 92%</p>
                <p className="text-muted-foreground pl-4">├── AP-02 · 24 clients · SIGNAL 88%</p>
                <p className="text-destructive pl-4">└── AP-04 · 3 clients · SIGNAL 41% (CHECK)</p>
                <p className="text-accent pt-2">[CCTV BRIDGE] 3 of 4 nodes streaming · NVR 62% disk</p>
              </div>
              <Button asChild variant="outline" className="w-full mt-4">
                <Link to="/book-service">Request Technician Visit</Link>
              </Button>
            </Panel>
          </div>
        )}

        {/* ----------------------------- Repairs ----------------------------- */}
        {tab === "repairs" && (
          <div className="space-y-6">
            {repairs.map((r) => (
              <Panel key={r.id} title={r.item} tag={`TICKET #${r.id}`} icon={Wrench}>
                <div className="grid sm:grid-cols-4 gap-3">
                  {repairStages.map((s, i) => {
                    const done = i + 1 <= r.stage;
                    return (
                      <div
                        key={s}
                        className={`rounded-lg border p-3 font-mono text-[10px] ${
                          done
                            ? "border-primary/60 bg-primary/10 text-primary"
                            : "border-border/60 text-muted-foreground"
                        }`}
                      >
                        <p>[{String(i + 1).padStart(2, "0")}]</p>
                        <p className="mt-1">{s}</p>
                        {done && <p className="mt-1 text-accent">✓ COMPLETE</p>}
                      </div>
                    );
                  })}
                </div>
                <p className="font-mono text-xs text-muted-foreground mt-4">
                  ESTIMATED COST: <span className="text-primary">{ksh(r.cost)}</span> · 90-DAY
                  WORKMANSHIP WARRANTY ON COMPLETION
                </p>
              </Panel>
            ))}
          </div>
        )}

        {/* ----------------------------- Billing ----------------------------- */}
        {tab === "billing" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <Panel
              title="Invoices & Quotes"
              tag={`DUE ${ksh(pendingKsh)}`}
              icon={CreditCard}
              className="lg:col-span-2"
            >
              <ul className="space-y-3">
                {invoices.map((inv) => (
                  <li
                    key={inv.id}
                    className="rounded-lg border border-border/60 p-3 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div>
                      <p className="font-mono text-xs text-accent">{inv.id}</p>
                      <p className="text-sm mt-1">{inv.label}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-primary">{ksh(inv.amount)}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          toast({
                            title: `${inv.id} download queued`,
                            description: "Your PDF copy will be emailed to you shortly.",
                          })
                        }
                      >
                        <Download size={14} className="mr-1" /> PDF
                      </Button>
                      {inv.status !== "PAID" && (
                        <Button
                          size="sm"
                          onClick={() =>
                            toast({
                              title: "M-Pesa STK push (placeholder)",
                              description: `Pay ${ksh(inv.amount)} for ${inv.id}. Payment integration pending activation.`,
                            })
                          }
                        >
                          Pay via M-Pesa
                        </Button>
                      )}
                      {inv.status === "PAID" && (
                        <span className="font-mono text-[10px] text-primary">PAID</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="Quick Re-Supply" tag="SHOP LINK" icon={ShoppingBag}>
              <p className="text-sm text-muted-foreground">
                Re-order CCTV kits, routers, cables and accessories straight from our shop
                inventory.
              </p>
              <div className="mt-4 space-y-3">
                <Button asChild className="w-full">
                  <Link to="/shop">Open Shop Inventory</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    const rec = pushToQueue({
                      source: "purchase",
                      title: "Re-supply request — CCTV & accessories",
                      status: "ORDER LOGGED",
                    });
                    toast({
                      title: `Re-supply logged — ${rec.id}`,
                      description: "Our team will confirm stock and pricing in KSh.",
                    });
                  }}
                >
                  One-Click Re-Supply Request
                </Button>
              </div>
            </Panel>
          </div>
        )}

        {/* ----------------------------- Support ----------------------------- */}
        {tab === "support" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <Panel
              title="Initiate Signal Dispatch"
              tag="NEW TICKET"
              icon={Send}
              className="lg:col-span-2"
            >
              <form onSubmit={dispatchTicket} className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="p-name">Your name</Label>
                  <Input
                    id="p-name"
                    value={ticket.name}
                    onChange={(e) => setTicket({ ...ticket, name: e.target.value })}
                    placeholder="e.g. Grace Wanjiku"
                  />
                </div>
                <div>
                  <Label htmlFor="p-phone">Phone number</Label>
                  <Input
                    id="p-phone"
                    value={ticket.phone}
                    onChange={(e) => setTicket({ ...ticket, phone: e.target.value })}
                    placeholder="07xx xxx xxx"
                  />
                </div>
                <div>
                  <Label htmlFor="p-region">Service area</Label>
                  <select
                    id="p-region"
                    value={ticket.region}
                    onChange={(e) => setTicket({ ...ticket, region: e.target.value })}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono"
                  >
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="p-type">Request type</Label>
                  <select
                    id="p-type"
                    value={ticket.type}
                    onChange={(e) => setTicket({ ...ticket, type: e.target.value })}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono"
                  >
                    <option>On-site survey</option>
                    <option>Immediate technician assistance</option>
                    <option>CCTV fault</option>
                    <option>WiFi / network issue</option>
                    <option>Device repair</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="p-details">What do you need help with?</Label>
                  <Textarea
                    id="p-details"
                    rows={4}
                    value={ticket.details}
                    onChange={(e) => setTicket({ ...ticket, details: e.target.value })}
                    placeholder="Describe the problem or the site you want surveyed."
                  />
                </div>
                <Button type="submit" className="sm:col-span-2">
                  <Send size={16} className="mr-2" /> Initiate Signal Dispatch
                </Button>
              </form>
            </Panel>

            <Panel title="Establish Direct Comm Link" tag="LIVE COMM" icon={Headphones}>
              <p className="text-sm text-muted-foreground">
                Talk to a technician right now. We answer on WhatsApp and by phone during working
                hours.
              </p>
              <div className="mt-4 space-y-3">
                <Button asChild className="w-full">
                  <a
                    href="https://wa.me/254112277289?text=Hello%20FRIMAT%20Technologies!%20I%20need%20help%20from%20the%20Command%20Portal."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare size={16} className="mr-2" /> WhatsApp a Technician
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+254112277289">Call +254 112 277 289</a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Contact Tech Support</Link>
                </Button>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-4">
                COVERAGE: NAIROBI · KIAMBU · MACHAKOS · KAJIADO
              </p>
            </Panel>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Portal;
