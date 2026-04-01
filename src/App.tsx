import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ConfirmEmail from "./pages/ConfirmEmail";
import About from "./pages/About";
import Network from "./pages/Network";
import Vancouver from "./pages/locations/Vancouver";
import Burnaby from "./pages/locations/Burnaby";
import Surrey from "./pages/locations/Surrey";
import Richmond from "./pages/locations/Richmond";
import NorthVancouver from "./pages/locations/NorthVancouver";
import WestVancouver from "./pages/locations/WestVancouver";
import Coquitlam from "./pages/locations/Coquitlam";
import PortCoquitlam from "./pages/locations/PortCoquitlam";
import PortMoody from "./pages/locations/PortMoody";
import NewWestminster from "./pages/locations/NewWestminster";
import Langley from "./pages/locations/Langley";
import Delta from "./pages/locations/Delta";
import MapleRidge from "./pages/locations/MapleRidge";
import PittMeadows from "./pages/locations/PittMeadows";
import WhiteRock from "./pages/locations/WhiteRock";
import InspectionCostBC from "./pages/blog/InspectionCostBC";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/about" element={<About />} />
          <Route path="/network" element={<Network />} />
          <Route path="/pre-purchase-car-inspection-vancouver" element={<Vancouver />} />
          <Route path="/pre-purchase-car-inspection-burnaby" element={<Burnaby />} />
          <Route path="/pre-purchase-car-inspection-surrey" element={<Surrey />} />
          <Route path="/pre-purchase-car-inspection-richmond" element={<Richmond />} />
          <Route path="/pre-purchase-car-inspection-north-vancouver" element={<NorthVancouver />} />
          <Route path="/pre-purchase-car-inspection-west-vancouver" element={<WestVancouver />} />
          <Route path="/pre-purchase-car-inspection-coquitlam" element={<Coquitlam />} />
          <Route path="/pre-purchase-car-inspection-port-coquitlam" element={<PortCoquitlam />} />
          <Route path="/pre-purchase-car-inspection-port-moody" element={<PortMoody />} />
          <Route path="/pre-purchase-car-inspection-new-westminster" element={<NewWestminster />} />
          <Route path="/pre-purchase-car-inspection-langley" element={<Langley />} />
          <Route path="/pre-purchase-car-inspection-delta" element={<Delta />} />
          <Route path="/pre-purchase-car-inspection-maple-ridge" element={<MapleRidge />} />
          <Route path="/pre-purchase-car-inspection-pitt-meadows" element={<PittMeadows />} />
          <Route path="/pre-purchase-car-inspection-white-rock" element={<WhiteRock />} />
          <Route path="/blog/pre-purchase-inspection-cost-bc" element={<InspectionCostBC />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
