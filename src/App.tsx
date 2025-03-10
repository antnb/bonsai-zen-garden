
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ServicesCatalogPage from "./pages/ServicesCatalogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import ExportProcessPage from "./pages/ExportProcessPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import FAQPage from "./pages/FAQPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import PartnersPage from "./pages/PartnersPage";
import PressPage from "./pages/PressPage";
import SitemapPage from "./pages/SitemapPage";
import XmlSitemapPage from "./pages/XmlSitemapPage";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/cookie/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services-catalog" element={<ServicesCatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          
          {/* Main pages */}
          <Route path="/export-process" element={<ExportProcessPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/sitemap.xml" element={<XmlSitemapPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
