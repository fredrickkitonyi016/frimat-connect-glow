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
  return record;
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
