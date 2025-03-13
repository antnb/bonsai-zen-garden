import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsent from "./components/cookie/CookieConsent";

// Layout components (Hugo's Baseof and Partial Templates)
import DefaultLayout from "./layouts/DefaultLayout";
import SingleLayout from "./layouts/SingleLayout";
import ListLayout from "./layouts/ListLayout";

// Page components (Hugo's Content Templates)
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SinglePage from "./pages/SinglePage";
import NotFound from "./pages/NotFound";

// Create query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home Page (Hugo-like index.html) */}
          <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
          
          {/* Content Section List Pages (Hugo-like list.html templates) */}
          <Route path="/services" element={<ListLayout section="services"><ListPage section="services" /></ListLayout>} />
          <Route path="/about" element={<SingleLayout section="about"><SinglePage slug="about" /></SingleLayout>} />
          <Route path="/export-process" element={<SingleLayout section="export-process"><SinglePage slug="export-process" /></SingleLayout>} />
          <Route path="/sustainability" element={<SingleLayout section="sustainability"><SinglePage slug="sustainability" /></SingleLayout>} />
          <Route path="/faq" element={<SingleLayout section="faq"><SinglePage slug="faq" /></SingleLayout>} />
          <Route path="/testimonials" element={<SingleLayout section="testimonials"><SinglePage slug="testimonials" /></SingleLayout>} />
          
          {/* Blog Section (Hugo-like list and single templates) */}
          <Route path="/blog" element={<ListLayout section="blog"><ListPage section="blog" /></ListLayout>} />
          <Route path="/blog/:slug" element={<SingleLayout section="blog"><SinglePage /></SingleLayout>} />
          
          {/* Other Sections */}
          <Route path="/partners" element={<SingleLayout section="partners"><SinglePage slug="partners" /></SingleLayout>} />
          <Route path="/press" element={<SingleLayout section="press"><SinglePage slug="press" /></SingleLayout>} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<SingleLayout section="legal"><SinglePage slug="privacy-policy" /></SingleLayout>} />
          <Route path="/terms-of-service" element={<SingleLayout section="legal"><SinglePage slug="terms-of-service" /></SingleLayout>} />
          <Route path="/cookie-policy" element={<SingleLayout section="legal"><SinglePage slug="cookie-policy" /></SingleLayout>} />
          <Route path="/accessibility" element={<SingleLayout section="legal"><SinglePage slug="accessibility" /></SingleLayout>} />
          <Route path="/return-policy" element={<SingleLayout section="legal"><SinglePage slug="return-policy" /></SingleLayout>} />
          
          {/* Sitemap */}
          <Route path="/sitemap" element={<SingleLayout section="sitemap"><SinglePage slug="sitemap" /></SingleLayout>} />
          <Route path="/sitemap.xml" element={<SingleLayout section="sitemap"><SinglePage slug="sitemap-xml" /></SingleLayout>} />
          
          {/* Catch-all 404 (Hugo 404.html) */}
          <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
