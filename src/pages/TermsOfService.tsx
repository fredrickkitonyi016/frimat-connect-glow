import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertTriangle, CreditCard, Shield, Ban, RefreshCw, Mail } from "lucide-react";

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Scale className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: January {currentYear}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Agreement to Terms</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of the website and services provided by FRIMAT Technologies ("Company," "we," "our," or "us"), located in Nairobi, Kenya. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
              </p>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Services Description</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FRIMAT Technologies provides technology solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Web Development and Design</li>
                <li>Mobile Application Development</li>
                <li>Cloud Services and Infrastructure</li>
                <li>Cybersecurity Solutions</li>
                <li>IT Support and Maintenance</li>
                <li>E-commerce Solutions</li>
                <li>Cyber Cafe and Digital Services</li>
                <li>Custom Software Development</li>
              </ul>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Payment Terms</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Payment terms vary by service type. General payment conditions include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Project-Based Services:</strong> 50% deposit required before project commencement, with the balance due upon completion</li>
                  <li><strong className="text-foreground">Recurring Services:</strong> Billed monthly or annually in advance</li>
                  <li><strong className="text-foreground">Cyber Cafe Services:</strong> Pay-as-you-go or prepaid packages</li>
                  <li><strong className="text-foreground">Payment Methods:</strong> M-Pesa, bank transfer, credit/debit cards</li>
                  <li><strong className="text-foreground">Currency:</strong> All prices are in Kenyan Shillings (KSh) unless otherwise stated</li>
                  <li><strong className="text-foreground">Late Payments:</strong> Interest of 2% per month may apply to overdue invoices</li>
                </ul>
              </div>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Refund Policy</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Project Deposits:</strong> Non-refundable once work has commenced</li>
                  <li><strong className="text-foreground">Subscription Services:</strong> Pro-rated refunds available within 14 days of billing</li>
                  <li><strong className="text-foreground">Physical Products:</strong> 7-day return policy for unopened items in original condition</li>
                  <li><strong className="text-foreground">Digital Products:</strong> Non-refundable once delivered or accessed</li>
                  <li><strong className="text-foreground">Service Disputes:</strong> Must be raised within 7 days of service delivery</li>
                </ul>
              </div>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Ban className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Prohibited Uses</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use our services for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Any unlawful purpose or in violation of Kenyan law</li>
                <li>Harassment, abuse, or harm to another person</li>
                <li>Impersonation or misrepresentation</li>
                <li>Unauthorized access to our systems or networks</li>
                <li>Distribution of malware, viruses, or harmful code</li>
                <li>Spamming or unsolicited communications</li>
                <li>Copyright infringement or intellectual property theft</li>
                <li>Any activity that could damage our reputation or services</li>
              </ul>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Limitation of Liability</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  To the maximum extent permitted by Kenyan law:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Our total liability shall not exceed the amount paid by you for the specific service in question</li>
                  <li>We do not guarantee uninterrupted, secure, or error-free service</li>
                  <li>We are not responsible for third-party content or services</li>
                </ul>
              </div>
            </section>

            <section className="glass-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All intellectual property created as part of our services transfers to the client upon full payment</li>
                  <li>We retain rights to use project work in our portfolio (unless confidentiality is agreed)</li>
                  <li>Open-source components used in projects remain under their original licenses</li>
                  <li>Our proprietary tools, frameworks, and methodologies remain our property</li>
                </ul>
              </div>
            </section>

            <section className="glass-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Kenya. We encourage resolution through negotiation or mediation before pursuing legal action.
              </p>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Contact Information</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> frimattechnologies016@gmail.com</p>
                <p><strong className="text-foreground">Phone:</strong> +254 112 277 289</p>
                <p><strong className="text-foreground">Address:</strong> Nairobi, Kenya</p>
              </div>
            </section>

            <section className="glass-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                © {currentYear} FRIMAT Technologies. All rights reserved.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
