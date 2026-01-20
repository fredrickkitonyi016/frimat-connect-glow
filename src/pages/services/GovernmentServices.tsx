import { ArrowLeft, ExternalLink, FileText, GraduationCap, Heart, Building2, Shield, Users, Car, Fingerprint, Plane, Briefcase, Scale, Home, Baby, Landmark, Globe, BookOpen, Wifi, CreditCard, Building, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Government service portals
const governmentServices = [
  {
    name: "KRA iTax",
    fullName: "Kenya Revenue Authority - iTax Portal",
    icon: FileText,
    description: "File tax returns, apply for KRA PIN, get tax compliance certificates",
    services: ["PIN Application", "Nil Returns Filing", "Income Tax Filing", "Tax Compliance Certificate", "VAT Registration"],
    portalUrl: "https://itax.kra.go.ke",
    assistancePrice: "KSh 500",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "HELB",
    fullName: "Higher Education Loans Board",
    icon: GraduationCap,
    description: "Student loan applications, status checks, and clearance certificates",
    services: ["Loan Application", "Loan Status Check", "Clearance Certificate", "Repayment Schedule", "Employer Deduction"],
    portalUrl: "https://www.helb.co.ke",
    assistancePrice: "KSh 200",
    color: "from-green-500 to-green-700"
  },
  {
    name: "SHA",
    fullName: "Social Health Authority (formerly NHIF)",
    icon: Heart,
    description: "Health insurance registration, card replacement, and dependent management",
    services: ["New Member Registration", "Card Replacement", "Add Dependents", "Check Contributions", "Hospital Accreditation"],
    portalUrl: "https://sha.go.ke",
    assistancePrice: "KSh 300",
    color: "from-red-500 to-red-700"
  },
  {
    name: "NSSF",
    fullName: "National Social Security Fund",
    icon: Shield,
    description: "Social security registration, contribution statements, and benefits claims",
    services: ["Member Registration", "Statement Request", "Benefits Claims", "Contribution Check", "Employer Registration"],
    portalUrl: "https://www.nssf.or.ke",
    assistancePrice: "KSh 300",
    color: "from-purple-500 to-purple-700"
  },
  {
    name: "e-Citizen",
    fullName: "Kenya e-Citizen Portal",
    icon: Building2,
    description: "Access various government services including passport, ID, and business registration",
    services: ["Passport Application", "ID Application", "Business Registration", "Good Conduct", "Birth Certificate"],
    portalUrl: "https://www.ecitizen.go.ke",
    assistancePrice: "KSh 500",
    color: "from-orange-500 to-orange-700"
  },
  {
    name: "SHIF",
    fullName: "Social Health Insurance Fund",
    icon: Users,
    description: "Universal health coverage registration and management",
    services: ["SHIF Registration", "Contribution Payment", "Benefits Check", "Facility Selection", "Claims Status"],
    portalUrl: "https://shif.sha.go.ke",
    assistancePrice: "KSh 300",
    color: "from-teal-500 to-teal-700"
  },
  {
    name: "NTSA",
    fullName: "National Transport and Safety Authority",
    icon: Car,
    description: "Driving license applications, vehicle registration, and PSV permits",
    services: ["Driving License Application", "Interim License", "License Renewal", "Vehicle Registration", "PSV Permits", "Logbook Transfer"],
    portalUrl: "https://tims.ntsa.go.ke",
    assistancePrice: "KSh 500",
    color: "from-amber-500 to-amber-700"
  },
  {
    name: "DCI",
    fullName: "Directorate of Criminal Investigations",
    icon: Fingerprint,
    description: "Certificate of Good Conduct applications and criminal background checks",
    services: ["Good Conduct Certificate", "Background Check", "Police Clearance", "Status Check", "Appointment Booking"],
    portalUrl: "https://ecitizen.go.ke/good-conduct",
    assistancePrice: "KSh 500",
    color: "from-slate-500 to-slate-700"
  },
  {
    name: "Immigration",
    fullName: "Department of Immigration Services",
    icon: Plane,
    description: "Passport applications, visa services, and foreign national permits",
    services: ["Passport Application", "Passport Renewal", "Visa Application", "Work Permit", "Special Pass", "Alien Card"],
    portalUrl: "https://fns.immigration.go.ke",
    assistancePrice: "KSh 500",
    color: "from-sky-500 to-sky-700"
  },
  {
    name: "BRS",
    fullName: "Business Registration Service",
    icon: Briefcase,
    description: "Company registration, business name search, and compliance certificates",
    services: ["Company Registration", "Business Name Registration", "Name Search", "CR12 Certificate", "Annual Returns", "Director Changes"],
    portalUrl: "https://brs.go.ke",
    assistancePrice: "KSh 500",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    name: "Judiciary",
    fullName: "Kenya Judiciary e-Filing",
    icon: Scale,
    description: "Court case filing, case tracking, and legal document submissions",
    services: ["Case Filing", "Case Search", "Document Filing", "Court Fees Payment", "Hearing Dates", "Judgment Search"],
    portalUrl: "https://efiling.judiciary.go.ke",
    assistancePrice: "KSh 500",
    color: "from-rose-500 to-rose-700"
  },
  {
    name: "Lands Ministry",
    fullName: "Ministry of Lands - Ardhisasa",
    icon: Home,
    description: "Land registration, title deed search, and property transactions",
    services: ["Title Search", "Land Registration", "Title Deed Application", "Land Rates", "Survey Maps", "Consent to Transfer"],
    portalUrl: "https://ardhisasa.lands.go.ke",
    assistancePrice: "KSh 500",
    color: "from-emerald-500 to-emerald-700"
  },
  {
    name: "Civil Registration",
    fullName: "Department of Civil Registration",
    icon: Baby,
    description: "Birth certificates, death certificates, and vital statistics",
    services: ["Birth Certificate", "Death Certificate", "Late Registration", "Adoption Certificate", "Name Change", "Correction of Particulars"],
    portalUrl: "https://crs.ecitizen.go.ke",
    assistancePrice: "KSh 300",
    color: "from-pink-500 to-pink-700"
  },
  {
    name: "CBK",
    fullName: "Central Bank of Kenya",
    icon: Landmark,
    description: "Foreign exchange rates, banking licenses, and monetary services",
    services: ["Exchange Rates", "Bank Licensing", "Money Remittance", "Credit Reference", "Currency Information"],
    portalUrl: "https://www.centralbank.go.ke",
    assistancePrice: "KSh 300",
    color: "from-yellow-500 to-yellow-700"
  },
  {
    name: "KEPHIS",
    fullName: "Kenya Plant Health Inspectorate Service",
    icon: TreePine,
    description: "Plant health certification, seed inspection, and phytosanitary services",
    services: ["Phytosanitary Certificate", "Seed Certification", "Plant Import Permit", "Pesticide Registration", "Produce Inspection"],
    portalUrl: "https://kephisportal.kephis.org",
    assistancePrice: "KSh 500",
    color: "from-lime-500 to-lime-700"
  },
  {
    name: "KIPI",
    fullName: "Kenya Industrial Property Institute",
    icon: BookOpen,
    description: "Trademark registration, patent applications, and intellectual property",
    services: ["Trademark Registration", "Patent Application", "Industrial Design", "Copyright", "IP Search", "Brand Protection"],
    portalUrl: "https://kipi.go.ke",
    assistancePrice: "KSh 500",
    color: "from-violet-500 to-violet-700"
  },
  {
    name: "CA",
    fullName: "Communications Authority of Kenya",
    icon: Wifi,
    description: "Frequency allocation, broadcasting licenses, and telecom regulation",
    services: ["Frequency License", "Broadcasting License", "Type Approval", "Domain Registration", "Equipment Authorization"],
    portalUrl: "https://ca.go.ke",
    assistancePrice: "KSh 500",
    color: "from-cyan-500 to-cyan-700"
  },
  {
    name: "NHIF Legacy",
    fullName: "National Hospital Insurance Fund (Legacy)",
    icon: CreditCard,
    description: "Access legacy NHIF services and contribution history",
    services: ["Contribution History", "Legacy Claims", "Member Statement", "Card Status", "Employer Remittance"],
    portalUrl: "https://www.nhif.or.ke",
    assistancePrice: "KSh 200",
    color: "from-red-400 to-red-600"
  },
  {
    name: "NEMA",
    fullName: "National Environment Management Authority",
    icon: Globe,
    description: "Environmental impact assessments and compliance certificates",
    services: ["EIA License", "Environmental Audit", "Effluent Discharge", "Noise Permit", "NEMA Compliance"],
    portalUrl: "https://portal.nema.go.ke",
    assistancePrice: "KSh 500",
    color: "from-green-600 to-green-800"
  },
  {
    name: "County Services",
    fullName: "Nairobi County e-Services",
    icon: Building,
    description: "County permits, licenses, and local government services",
    services: ["Single Business Permit", "Building Plans Approval", "Land Rates", "Parking Permits", "Advertisement License"],
    portalUrl: "https://eservices.nairobi.go.ke",
    assistancePrice: "KSh 500",
    color: "from-blue-600 to-blue-800"
  }
];

export default function GovernmentServices() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Building2 size={18} />
              <span className="font-medium">Government Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Kenya </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Government Portals
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access essential government services with our professional assistance. 
              We help you navigate KRA iTax, HELB, SHA, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="glass-card group hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 -m-6 mb-6`}>
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="text-white" size={28} />
                      </div>
                      <span className="text-white/80 text-sm font-medium">
                        Assistance: {service.assistancePrice}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-4">{service.name}</h3>
                    <p className="text-white/80 text-sm">{service.fullName}</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 pt-2">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    {/* Services List */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Available Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.services.map((item, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <a
                        href={service.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="glass" className="w-full group/btn">
                          Visit Portal
                          <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <Button 
                        variant="hero"
                        onClick={() => navigate('/#contact')}
                      >
                        Get Help
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Assistance with Government Services?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit our Cyber Cafe or contact us for professional help with any government portal. 
              We ensure accurate submissions and quick processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/services/cyber-cafe')}
              >
                Visit Cyber Cafe
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}