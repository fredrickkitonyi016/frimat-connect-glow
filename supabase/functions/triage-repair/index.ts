const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...cors, "Content-Type": "application/json" } });

const schema = {
  type: "object",
  additionalProperties: false,
  required: ["repair_type", "priority", "reason"],
  properties: {
    repair_type: { type: "string", enum: ["Phone Repair", "Laptop/Computer Repair", "CCTV & Security", "WiFi & Networking", "Electronics Repair", "Software & Data", "Other"] },
    priority: { type: "string", enum: ["LOW", "MEDIUM", "HIGH", "URGENT"] },
    reason: { type: "string" },
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const { description, device } = await req.json();
    const text = String(description ?? "").slice(0, 1500).trim();
    if (text.length < 5) return json({ error: "Please describe the problem." }, 400);
    const key = Deno.env.get("LOVABLE_API_KEY");
    if (!key) return json({ error: "AI is not configured." }, 500);

    const r = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      signal: req.signal,
      headers: { "Content-Type": "application/json", "Lovable-API-Key": key, Authorization: `Bearer ${key}`, "X-Lovable-AIG-SDK": "fetch" },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low" },
        instructions: "You triage repair requests for a Kenyan tech repair company. Classify the repair type and set priority: URGENT = security systems down, business outage, or safety risk; HIGH = device unusable; MEDIUM = partly working; LOW = cosmetic or minor. Give a one-sentence reason in simple English.",
        input: `Device: ${String(device ?? "").slice(0, 120)}\nProblem: ${text}`,
        text: { format: { type: "json_schema", name: "triage", strict: true, schema } },
      }),
    });
    if (!r.ok || !r.body) {
      const msg = r.status === 429 ? "Too many requests, try again shortly." : r.status === 402 ? "AI credits have run out." : `AI request failed (${r.status}).`;
      return json({ error: msg }, r.status);
    }
    const reader = r.body.pipeThrough(new TextDecoderStream()).getReader();
    let buf = "", out = "";
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += value;
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const l of lines) {
        if (!l.startsWith("data:")) continue;
        try {
          const ev = JSON.parse(l.slice(5).trim());
          if (ev.type === "response.output_text.delta") out += ev.delta;
        } catch { /* ignore */ }
      }
    }
    if (!out) return json({ error: "The AI could not classify this request." }, 502);
    return json(JSON.parse(out));
  } catch (e) {
    if ((e as Error).name === "AbortError") return new Response(null, { status: 499 });
    return json({ error: (e as Error).message }, 500);
  }
});
