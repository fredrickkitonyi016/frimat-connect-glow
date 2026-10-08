import { supabase } from "@/integrations/supabase/client";
// Cross-platform sync: requests made anywhere on the main site are pushed into
// the portal's diagnostic queue with a unique Sci-Fi tracking ID.

export type QueueSource = "booking" | "purchase" | "survey" | "ticket";

export interface QueueEntry {
  id: string;            // TRK-8820-KE
  source: QueueSource;
  title: string;
  detail?: string;
  location?: string;
  amountKsh?: number;
  status: string;
  createdAt: string;
}

const STORAGE_KEY = "frimat_portal_queue";
const EVENT = "frimat-portal-queue";

export const makeTrackingId = () =>
  `TRK-${Math.floor(1000 + Math.random() * 8999)}-KE`;

export const makeTicketId = () =>
  `FR-${Math.floor(1000 + Math.random() * 8999)}`;

export function getQueue(): QueueEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as QueueEntry[]) : [];
  } catch {
    return [];
  }
}

export function pushToQueue(
  entry: Omit<QueueEntry, "id" | "createdAt" | "status"> & { status?: string }
): QueueEntry {
  const record: QueueEntry = {
    id: makeTrackingId(),
    createdAt: new Date().toISOString(),
    status: entry.status ?? "SIGNAL RECEIVED",
    ...entry,
  };
  const next = [record, ...getQueue()].slice(0, 50);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  } catch {
    /* storage unavailable */
  }
  void syncToDatabase(record);
  return record;
}

/** Signed-in users: store the request as a service record with their account details and an AI priority. */
async function syncToDatabase(r: QueueEntry) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data: prof } = await supabase.from("profiles").select("phone").eq("user_id", user.id).maybeSingle();
    const description = [r.title, r.detail].filter(Boolean).join(" — ");
    let ai = "";
    if (r.source !== "purchase" && description.length >= 5) {
      const { data } = await supabase.functions.invoke("triage-repair", { body: { description, device: "" } });
      if (data?.priority) ai = `AI PRIORITY: ${data.priority} (${data.repair_type}) — ${data.reason}`;
    }
    const notes = [ai, `SOURCE: ${r.source.toUpperCase()} · ${r.id}`, `CONTACT: ${user.email ?? ""} ${prof?.phone ?? ""}`.trim(),
      r.amountKsh ? `AMOUNT: KSh ${r.amountKsh.toLocaleString("en-KE")}` : "", r.location ? `LOCATION: ${r.location}` : ""]
      .filter(Boolean).join("\n");
    await supabase.from("service_records").insert({
      client_id: user.id, service_type: r.title.slice(0, 120), device: "", issue: (r.detail ?? "").slice(0, 500),
      status: r.status, notes,
    });
  } catch { /* offline: local queue still holds it */ }
}

export function subscribeQueue(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export const QUEUE_EVENT = EVENT;
