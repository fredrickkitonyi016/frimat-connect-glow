import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, service, message }: ContactEmailRequest = await req.json();

    // Send confirmation email to user
    const emailResponse = await resend.emails.send({
      from: "FRIMAT Technologies <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting FRIMAT Technologies!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ff6a00, #ff4747); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: #fff; padding: 20px; border-left: 4px solid #ff6a00; margin: 20px 0; border-radius: 5px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .btn { display: inline-block; background: #ff6a00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>FRIMAT Technologies</h1>
            </div>
            <div class="content">
              <h2>Hello ${firstName}! 👋</h2>
              <p>Thank you for reaching out to us. We have received your message and our team is reviewing it.</p>
              
              <div class="highlight">
                <strong>Your Message Summary:</strong><br>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
                <p><strong>Message:</strong> ${message}</p>
              </div>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your inquiry within 24 hours</li>
                <li>A specialist will contact you via email or phone</li>
                <li>We'll discuss your requirements and provide a tailored solution</li>
              </ul>
              
              <p>Need urgent assistance? Contact us directly on WhatsApp:</p>
              <a href="https://wa.me/254112277289" class="btn">Chat on WhatsApp</a>
              
              <div class="footer">
                <p>Best regards,<br><strong>FRIMAT Technologies Team</strong></p>
                <p>📧 frimattechnologies016@gmail.com | 📱 +254 112 277 289</p>
                <p>Nairobi, Kenya</p>
                <p>© ${new Date().getFullYear()} FRIMAT Technologies. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
