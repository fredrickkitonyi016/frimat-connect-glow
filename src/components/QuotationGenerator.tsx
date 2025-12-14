import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Download, Mail, Phone } from "lucide-react";

interface QuotationService {
  service: string;
  description: string;
  price: number;
  selected: boolean;
}

const QuotationGenerator = () => {
  const [quotationNumber, setQuotationNumber] = useState(() => {
    const saved = localStorage.getItem('lastQuotationNumber');
    return saved ? parseInt(saved) + 1 : 1;
  });
  
  const [clientName, setClientName] = useState("");
  const [services, setServices] = useState<QuotationService[]>([
    // Cyber Cafe Services
    {
      service: "Printing & Photocopying",
      description: "Black & White: KSH 5/page, Color: KSH 20/page",
      price: 5,
      selected: false
    },
    {
      service: "Scanning Services",
      description: "Document scanning to PDF/JPEG",
      price: 20,
      selected: false
    },
    {
      service: "Lamination",
      description: "A4 size document protection",
      price: 50,
      selected: false
    },
    {
      service: "Typing Services",
      description: "Professional document typing",
      price: 100,
      selected: false
    },
    {
      service: "Internet Access",
      description: "High-speed browsing per hour",
      price: 50,
      selected: false
    },
    {
      service: "Document Binding",
      description: "Spiral/comb binding services",
      price: 100,
      selected: false
    },
    {
      service: "Passport Photos",
      description: "Professional passport photo printing",
      price: 200,
      selected: false
    },
    {
      service: "CD/DVD Burning",
      description: "Data backup and burning",
      price: 150,
      selected: false
    },
    // E-Citizen Services
    {
      service: "NSSF Registration",
      description: "Complete registration process",
      price: 200,
      selected: false
    },
    {
      service: "NHIF Registration",
      description: "Health insurance registration",
      price: 200,
      selected: false
    },
    {
      service: "HELB Application",
      description: "Student loan application assistance",
      price: 300,
      selected: false
    },
    {
      service: "KRA PIN Application",
      description: "Tax registration and PIN generation",
      price: 200,
      selected: false
    },
    {
      service: "Good Conduct Certificate",
      description: "Police clearance certificate",
      price: 300,
      selected: false
    },
    {
      service: "Business Registration",
      description: "Business name registration",
      price: 500,
      selected: false
    },
    // ICT Services
    {
      service: "Website Development",
      description: "Custom website design and development",
      price: 25000,
      selected: false
    },
    {
      service: "Mobile App Development",
      description: "iOS and Android app development",
      price: 50000,
      selected: false
    },
    {
      service: "E-commerce Solutions",
      description: "Online store setup and integration",
      price: 35000,
      selected: false
    },
    {
      service: "Cloud Services Setup",
      description: "Cloud infrastructure and migration",
      price: 15000,
      selected: false
    },
    {
      service: "Cybersecurity Consultation",
      description: "Security audit and implementation",
      price: 20000,
      selected: false
    },
    {
      service: "IT Support & Maintenance",
      description: "Monthly IT support package",
      price: 10000,
      selected: false
    },
    {
      service: "Network Setup",
      description: "LAN/WAN network installation",
      price: 15000,
      selected: false
    },
    {
      service: "Data Recovery",
      description: "Professional data recovery services",
      price: 5000,
      selected: false
    },
    // Tech Accessories
    {
      service: "Computer Repair",
      description: "Hardware and software troubleshooting",
      price: 2000,
      selected: false
    },
    {
      service: "Printer Repair",
      description: "Printer maintenance and repair",
      price: 1500,
      selected: false
    },
    {
      service: "Tech Accessories Sales",
      description: "Cables, chargers, and computer parts",
      price: 500,
      selected: false
    }
  ]);

  const currentDate = new Date().toLocaleDateString('en-GB');
  
  const calculateTotal = () => {
    return services.reduce((sum, service) => 
      service.selected ? sum + service.price : sum, 0
    );
  };

  const toggleService = (index: number) => {
    const newServices = [...services];
    newServices[index].selected = !newServices[index].selected;
    setServices(newServices);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    localStorage.setItem('lastQuotationNumber', quotationNumber.toString());
    setQuotationNumber(quotationNumber + 1);
    window.print();
  };

  const total = calculateTotal();
  const selectedServices = services.filter(s => s.selected);
  
  // Check if category has selected services
  const hasCyberCafe = services.slice(0, 8).some(s => s.selected);
  const hasECitizen = services.slice(8, 14).some(s => s.selected);
  const hasICT = services.slice(14, 22).some(s => s.selected);
  const hasTech = services.slice(22).some(s => s.selected);

  return (
    <section id="quotation" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Quotation Generator
          </h2>
          <p className="text-muted-foreground text-lg">
            Create professional quotations for your clients
          </p>
        </div>

        <Card className="glass-card print:shadow-none print:border-2 print:border-border">
          {/* Header */}
          <div className="text-center mb-8 print:mb-6">
            <h1 className="text-3xl font-bold text-primary mb-2">FRIMAT WEB LOUNGE</h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>frimattechnologies016@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+254112277289</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Quotation Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Quotation #</label>
              <p className="text-lg font-semibold text-primary">QTN-{String(quotationNumber).padStart(3, '0')}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Date</label>
              <p className="text-lg font-semibold">{currentDate}</p>
            </div>
          </div>

          <div className="mb-6 print:mb-4">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Client Name</label>
            <Input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
              className="print:border-0 print:p-0 print:h-auto"
            />
          </div>

          <Separator className="mb-6" />

          {/* Services Table - Screen View */}
          <div className="mb-6 print:hidden">
            <h3 className="text-xl font-semibold mb-4">Services Quoted:</h3>
            
            {/* Service Categories */}
            <div className="space-y-6">
              {/* Cyber Cafe Services */}
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">Cyber Cafe Services</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 w-12">Select</th>
                        <th className="text-left py-2 px-2">Service</th>
                        <th className="text-left py-2 px-2">Description</th>
                        <th className="text-right py-2 px-2">Price (KSH)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.slice(0, 8).map((service, index) => (
                        <tr key={index} className={`border-b border-border/50 ${service.selected ? 'bg-primary/5' : ''}`}>
                          <td className="py-2 px-2">
                            <input
                              type="checkbox"
                              checked={service.selected}
                              onChange={() => toggleService(index)}
                              className="w-4 h-4 accent-primary cursor-pointer"
                            />
                          </td>
                          <td className="py-2 px-2 font-medium text-sm">{service.service}</td>
                          <td className="py-2 px-2 text-muted-foreground text-sm">{service.description}</td>
                          <td className="py-2 px-2 text-right font-semibold text-sm">{service.price.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* E-Citizen Services */}
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">E-Citizen Services</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 w-12">Select</th>
                        <th className="text-left py-2 px-2">Service</th>
                        <th className="text-left py-2 px-2">Description</th>
                        <th className="text-right py-2 px-2">Price (KSH)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.slice(8, 14).map((service, index) => (
                        <tr key={index + 8} className={`border-b border-border/50 ${service.selected ? 'bg-primary/5' : ''}`}>
                          <td className="py-2 px-2">
                            <input
                              type="checkbox"
                              checked={service.selected}
                              onChange={() => toggleService(index + 8)}
                              className="w-4 h-4 accent-primary cursor-pointer"
                            />
                          </td>
                          <td className="py-2 px-2 font-medium text-sm">{service.service}</td>
                          <td className="py-2 px-2 text-muted-foreground text-sm">{service.description}</td>
                          <td className="py-2 px-2 text-right font-semibold text-sm">{service.price.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ICT Services */}
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">ICT Services</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 w-12">Select</th>
                        <th className="text-left py-2 px-2">Service</th>
                        <th className="text-left py-2 px-2">Description</th>
                        <th className="text-right py-2 px-2">Price (KSH)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.slice(14, 22).map((service, index) => (
                        <tr key={index + 14} className={`border-b border-border/50 ${service.selected ? 'bg-primary/5' : ''}`}>
                          <td className="py-2 px-2">
                            <input
                              type="checkbox"
                              checked={service.selected}
                              onChange={() => toggleService(index + 14)}
                              className="w-4 h-4 accent-primary cursor-pointer"
                            />
                          </td>
                          <td className="py-2 px-2 font-medium text-sm">{service.service}</td>
                          <td className="py-2 px-2 text-muted-foreground text-sm">{service.description}</td>
                          <td className="py-2 px-2 text-right font-semibold text-sm">{service.price.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tech Accessories & Repair */}
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">Tech Accessories & Repair</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 w-12">Select</th>
                        <th className="text-left py-2 px-2">Service</th>
                        <th className="text-left py-2 px-2">Description</th>
                        <th className="text-right py-2 px-2">Price (KSH)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.slice(22).map((service, index) => (
                        <tr key={index + 22} className={`border-b border-border/50 ${service.selected ? 'bg-primary/5' : ''}`}>
                          <td className="py-2 px-2">
                            <input
                              type="checkbox"
                              checked={service.selected}
                              onChange={() => toggleService(index + 22)}
                              className="w-4 h-4 accent-primary cursor-pointer"
                            />
                          </td>
                          <td className="py-2 px-2 font-medium text-sm">{service.service}</td>
                          <td className="py-2 px-2 text-muted-foreground text-sm">{service.description}</td>
                          <td className="py-2 px-2 text-right font-semibold text-sm">{service.price.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total */}
              <div className="border-t-2 border-primary pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-2xl text-primary">KSH {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Print View - Only Selected Services */}
          <div className="hidden print:block mb-4">
            <h3 className="text-base font-semibold mb-2">Services Quoted:</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-1 px-1">Service</th>
                  <th className="text-left py-1 px-1">Description</th>
                  <th className="text-right py-1 px-1">Price (KSH)</th>
                </tr>
              </thead>
              <tbody>
                {selectedServices.map((service, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-1 px-1 font-medium">{service.service}</td>
                    <td className="py-1 px-1 text-muted-foreground">{service.description}</td>
                    <td className="py-1 px-1 text-right font-semibold">{service.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t-2 border-primary pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Total:</span>
                <span className="font-bold text-base text-primary">KSH {total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Terms */}
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Payment Terms:</h4>
              <p className="text-muted-foreground">50% deposit before work, balance upon completion.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Validity:</h4>
              <p className="text-muted-foreground">This quote is valid for 14 days.</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8 print:hidden">
            <Button 
              onClick={handlePrint}
              className="flex-1"
              variant="outline"
            >
              <FileText className="w-4 h-4 mr-2" />
              Preview / Print
            </Button>
            <Button 
              onClick={handleDownload}
              className="flex-1"
              disabled={total === 0 || !clientName}
            >
              <Download className="w-4 h-4 mr-2" />
              Generate Quotation
            </Button>
          </div>
        </Card>
      </div>

    </section>
  );
};

export default QuotationGenerator;