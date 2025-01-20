import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
<<<<<<< HEAD
import ServicesPage from "./pages/ServicesPage";
=======
>>>>>>> eb3d1c3e61654f8c79da889f6b667ff4c9f85fa0

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
          <Route path="/services" element={<ServicesPage />} />
=======
>>>>>>> eb3d1c3e61654f8c79da889f6b667ff4c9f85fa0
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> eb3d1c3e61654f8c79da889f6b667ff4c9f85fa0
