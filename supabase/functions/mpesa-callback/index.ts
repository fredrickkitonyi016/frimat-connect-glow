import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const callbackData = await req.json();
    console.log("M-Pesa Callback received:", JSON.stringify(callbackData));

    const { Body } = callbackData;

    if (Body?.stkCallback) {
      const { ResultCode, ResultDesc, CheckoutRequestID, CallbackMetadata } =
        Body.stkCallback;

      if (ResultCode === 0) {
        // Payment successful
        const metadata = CallbackMetadata?.Item || [];
        const getMetaValue = (name: string) =>
          metadata.find((m: { Name: string; Value: unknown }) => m.Name === name)?.Value;

        const paymentInfo = {
          checkoutRequestId: CheckoutRequestID,
          amount: getMetaValue("Amount"),
          mpesaReceiptNumber: getMetaValue("MpesaReceiptNumber"),
          transactionDate: getMetaValue("TransactionDate"),
          phoneNumber: getMetaValue("PhoneNumber"),
        };

        console.log("Payment successful:", paymentInfo);
        // TODO: Update order status in database
      } else {
        console.log(`Payment failed: ${ResultDesc} (Code: ${ResultCode})`);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("M-Pesa callback error:", error);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
