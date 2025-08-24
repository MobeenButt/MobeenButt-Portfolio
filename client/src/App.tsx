import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";

function App() {
  console.log("App component rendering...");
  console.log("Current location:", window.location.href);
  
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
