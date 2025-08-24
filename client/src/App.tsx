import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Determine base path for GitHub Pages
const getBasePath = () => {
  const { pathname } = window.location;
  if (pathname.includes('/MobeenButt-Portfolio.github.io')) {
    return '/MobeenButt-Portfolio.github.io';
  }
  return '';
};

function Router() {
  const basePath = getBasePath();
  console.log('Base path:', basePath);
  console.log('Current location:', window.location.href);
  
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  console.log("App component rendering...");
  
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
