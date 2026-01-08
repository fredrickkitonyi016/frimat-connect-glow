import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, UserCheck, Mail, FileText, Globe } from "lucide-react";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacy Policy
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
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Introduction</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                FRIMAT Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are based in Nairobi, Kenya, and comply with the Kenya Data Protection Act 2019 and other applicable data protection regulations.
              </p>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Information We Collect</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company name and job title</li>
                    <li>Payment and billing information</li>
                    <li>Account credentials</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and device identifiers</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                    <li>Geographic location (country/city level)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">How We Use Your Information</h2>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To send promotional communications (with your consent)</li>
                <li>To respond to your comments, questions, and requests</li>
                <li>To monitor and analyze trends, usage, and activities</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Data Security</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Encrypted storage for sensitive data</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Data Sharing and Transfers</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers who assist in our operations</li>
                <li>Business partners with your consent</li>
                <li>Legal authorities when required by law</li>
                <li>Successors in the event of a merger or acquisition</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For international data transfers, we ensure appropriate safeguards are in place in compliance with the Kenya Data Protection Act 2019.
              </p>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Your Rights</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the Kenya Data Protection Act 2019, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Data Commissioner</li>
              </ul>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Contact Us</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> frimattechnologies016@gmail.com</p>
                <p><strong className="text-foreground">Phone:</strong> +254 112 277 289</p>
                <p><strong className="text-foreground">Address:</strong> Nairobi, Kenya</p>
              </div>
            </section>

            <section className="glass-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
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
