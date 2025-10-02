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
    {
      service: "ICT Consultancy",
      description: "Tech setup, troubleshooting",
      price: 5000,
      selected: false
    },
    {
      service: "E-Citizen Services",
      description: "NSSF, NHIF, HELB, KRA, etc.",
      price: 2500,
      selected: false
    },
    {
      service: "Cyber Café Services",
      description: "Printing, scanning, internet use",
      price: 1500,
      selected: false
    },
    {
      service: "Tech Accessories",
      description: "Cables, devices, parts",
      price: 3000,
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
                <span>0112277289</span>
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

          {/* Services Table */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Services Quoted:</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 print:hidden">Select</th>
                    <th className="text-left py-3 px-2">Service</th>
                    <th className="text-left py-3 px-2">Description</th>
                    <th className="text-right py-3 px-2">Price (KSH)</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-border/50 ${service.selected ? 'bg-primary/5' : ''} ${!service.selected ? 'print:hidden' : ''}`}
                    >
                      <td className="py-3 px-2 print:hidden">
                        <input
                          type="checkbox"
                          checked={service.selected}
                          onChange={() => toggleService(index)}
                          className="w-4 h-4 accent-primary cursor-pointer"
                        />
                      </td>
                      <td className="py-3 px-2 font-medium">{service.service}</td>
                      <td className="py-3 px-2 text-muted-foreground">{service.description}</td>
                      <td className="py-3 px-2 text-right font-semibold">{service.price.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-primary">
                    <td colSpan={3} className="py-4 px-2 text-right font-bold text-lg print:col-span-2">
                      Total:
                    </td>
                    <td className="py-4 px-2 text-right font-bold text-2xl text-primary">
                      KSH {total.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
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

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #quotation, #quotation * {
            visibility: visible;
          }
          #quotation {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .glass-card {
            background: white !important;
            color: black !important;
          }
          * {
            color: black !important;
          }
          h1, h2, h3, .text-primary {
            color: #3b82f6 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default QuotationGenerator;