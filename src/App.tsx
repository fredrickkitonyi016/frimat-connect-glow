import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

// Service Pages
import ITSupport from "./pages/services/ITSupport";
import Cybersecurity from "./pages/services/Cybersecurity";
import CloudMigration from "./pages/services/CloudMigration";
import CustomDevelopment from "./pages/services/CustomDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import CloudServices from "./pages/services/CloudServices";
import Ecommerce from "./pages/services/Ecommerce";
import CyberCafe from "./pages/services/CyberCafe";
import GovernmentServices from "./pages/services/GovernmentServices";

// Solution Pages
import Healthcare from "./pages/solutions/Healthcare";
import Retail from "./pages/solutions/Retail";
import Finance from "./pages/solutions/Finance";
import Manufacturing from "./pages/solutions/Manufacturing";

// Technology Pages
import CloudPlatforms from "./pages/technologies/CloudPlatforms";
import DevelopmentStack from "./pages/technologies/DevelopmentStack";
import SecurityTools from "./pages/technologies/SecurityTools";
import IoTPlatforms from "./pages/technologies/IoTPlatforms";

// Resource Pages
import Whitepapers from "./pages/resources/Whitepapers";

// Policy Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/product/:handle" element={<ProductDetail />} />
            
            {/* Service Routes */}
            <Route path="/services/it-support" element={<ITSupport />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/cloud-migration" element={<CloudMigration />} />
            <Route path="/services/custom-development" element={<CustomDevelopment />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/cloud-services" element={<CloudServices />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/cyber-cafe" element={<CyberCafe />} />
            <Route path="/services/government-services" element={<GovernmentServices />} />
            
            {/* Solution Routes */}
            <Route path="/solutions/healthcare" element={<Healthcare />} />
            <Route path="/solutions/retail" element={<Retail />} />
            <Route path="/solutions/finance" element={<Finance />} />
            <Route path="/solutions/manufacturing" element={<Manufacturing />} />
            
            {/* Technology Routes */}
            <Route path="/technologies/cloud-platforms" element={<CloudPlatforms />} />
            <Route path="/technologies/development-stack" element={<DevelopmentStack />} />
            <Route path="/technologies/security-tools" element={<SecurityTools />} />
            <Route path="/technologies/iot-platforms" element={<IoTPlatforms />} />
            
            {/* Resource Routes */}
            <Route path="/resources/whitepapers" element={<Whitepapers />} />
            
            {/* Policy Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
