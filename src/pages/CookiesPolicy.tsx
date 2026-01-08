import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie, Shield, Settings, Eye, ToggleLeft, Mail, Info } from "lucide-react";

export default function CookiesPolicy() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Cookie className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cookies Policy
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
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">What Are Cookies?</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies enable websites to remember your preferences, login status, and other settings, enhancing your browsing experience.
              </p>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">How We Use Cookies</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FRIMAT Technologies uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences and settings</li>
                <li>To improve website performance and user experience</li>
                <li>To analyze how visitors use our website</li>
                <li>To provide personalized content and recommendations</li>
                <li>To support our marketing and advertising efforts</li>
              </ul>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Types of Cookies We Use</h2>
                </div>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="mb-2">These cookies are necessary for the website to function properly and cannot be disabled.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Session management</li>
                    <li>Security tokens</li>
                    <li>Shopping cart functionality</li>
                    <li>User authentication</li>
                  </ul>
                  <p className="text-sm mt-2"><strong>Duration:</strong> Session to 1 year</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Performance Cookies</h3>
                  <p className="mb-2">These cookies help us understand how visitors interact with our website.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Page load times</li>
                    <li>Error reporting</li>
                    <li>Traffic analytics</li>
                    <li>Popular content tracking</li>
                  </ul>
                  <p className="text-sm mt-2"><strong>Duration:</strong> 30 days to 2 years</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functionality Cookies</h3>
                  <p className="mb-2">These cookies remember your preferences and choices.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Language preferences</li>
                    <li>Theme settings (light/dark mode)</li>
                    <li>Location preferences</li>
                    <li>Personalized content</li>
                  </ul>
                  <p className="text-sm mt-2"><strong>Duration:</strong> 1 month to 1 year</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p className="mb-2">These cookies are used for advertising and remarketing purposes.</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Ad targeting</li>
                    <li>Campaign tracking</li>
                    <li>Social media integration</li>
                    <li>Conversion tracking</li>
                  </ul>
                  <p className="text-sm mt-2"><strong>Duration:</strong> 30 days to 2 years</p>
                </div>
              </div>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Third-Party Cookies</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold text-foreground">Service</th>
                      <th className="text-left py-2 font-semibold text-foreground">Purpose</th>
                      <th className="text-left py-2 font-semibold text-foreground">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="py-2">Google Analytics</td>
                      <td className="py-2">Website analytics</td>
                      <td className="py-2"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Policy</a></td>
                    </tr>
                    <tr>
                      <td className="py-2">Shopify</td>
                      <td className="py-2">E-commerce functionality</td>
                      <td className="py-2"><a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Policy</a></td>
                    </tr>
                    <tr>
                      <td className="py-2">Facebook Pixel</td>
                      <td className="py-2">Advertising</td>
                      <td className="py-2"><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Policy</a></td>
                    </tr>
                    <tr>
                      <td className="py-2">Supabase</td>
                      <td className="py-2">Authentication & Database</td>
                      <td className="py-2"><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Policy</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="glass-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <ToggleLeft className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mt-0 mb-2">Managing Cookies</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings</h3>
                  <p>Most browsers allow you to refuse or accept cookies through their settings. However, blocking essential cookies may affect website functionality.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Browser-Specific Instructions:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Opt-Out Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
                    <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices</a></li>
                  </ul>
                </div>
              </div>
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
                If you have questions about our use of cookies, please contact us:
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
                We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or our practices. We encourage you to check this page periodically for any updates. Your continued use of our website following the posting of changes constitutes your acceptance of such changes.
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
