import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface STKPushRequest {
  phone: string;
  amount: number;
  orderId: string;
  accountReference?: string;
}

async function getAccessToken(): Promise<string> {
  const consumerKey = Deno.env.get("MPESA_CONSUMER_KEY");
  const consumerSecret = Deno.env.get("MPESA_CONSUMER_SECRET");

  if (!consumerKey || !consumerSecret) {
    throw new Error("M-Pesa API credentials not configured");
  }

  const auth = btoa(`${consumerKey}:${consumerSecret}`);
  const baseUrl = Deno.env.get("MPESA_ENV") === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

  const response = await fetch(
    `${baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: { Authorization: `Basic ${auth}` },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get M-Pesa access token [${response.status}]: ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

function formatPhoneNumber(phone: string): string {
  let cleaned = phone.replace(/\s+/g, "").replace(/[^0-9+]/g, "");

  if (cleaned.startsWith("+254")) {
    cleaned = cleaned.substring(1); // Remove +
  } else if (cleaned.startsWith("0")) {
    cleaned = "254" + cleaned.substring(1);
  } else if (!cleaned.startsWith("254")) {
    cleaned = "254" + cleaned;
  }

  return cleaned;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, amount, orderId, accountReference } =
      (await req.json()) as STKPushRequest;

    if (!phone || !amount) {
      return new Response(
        JSON.stringify({ success: false, error: "Phone and amount are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const shortcode = Deno.env.get("MPESA_SHORTCODE") || "174379";
    const passkey = Deno.env.get("MPESA_PASSKEY");

    if (!passkey) {
      return new Response(
        JSON.stringify({ success: false, error: "M-Pesa passkey not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const baseUrl = Deno.env.get("MPESA_ENV") === "production"
      ? "https://api.safaricom.co.ke"
      : "https://sandbox.safaricom.co.ke";

    const accessToken = await getAccessToken();

    const timestamp = new Date()
      .toISOString()
      .replace(/[-T:.Z]/g, "")
      .substring(0, 14);

    const password = btoa(`${shortcode}${passkey}${timestamp}`);
    const formattedPhone = formatPhoneNumber(phone);

    const callbackUrl = Deno.env.get("MPESA_CALLBACK_URL") ||
      `https://${Deno.env.get("SUPABASE_URL")?.replace("https://", "")}/functions/v1/mpesa-callback`;

    const stkPayload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Math.ceil(amount),
      PartyA: formattedPhone,
      PartyB: shortcode,
      PhoneNumber: formattedPhone,
      CallBackURL: callbackUrl,
      AccountReference: accountReference || "FRIMAT",
      TransactionDesc: `Payment for order ${orderId}`,
    };

    console.log("Initiating STK Push for phone:", formattedPhone, "amount:", amount);

    const stkResponse = await fetch(
      `${baseUrl}/mpesa/stkpush/v1/processrequest`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stkPayload),
      }
    );

    const stkData = await stkResponse.json();

    if (!stkResponse.ok || stkData.ResponseCode !== "0") {
      console.error("STK Push failed:", stkData);
      return new Response(
        JSON.stringify({
          success: false,
          error: stkData.errorMessage || stkData.ResponseDescription || "STK Push failed",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("STK Push initiated successfully:", stkData.CheckoutRequestID);

    return new Response(
      JSON.stringify({
        success: true,
        checkoutRequestId: stkData.CheckoutRequestID,
        merchantRequestId: stkData.MerchantRequestID,
        message: "STK Push sent. Check your phone to complete payment.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("M-Pesa STK Push error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
