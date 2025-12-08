import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RaveScene } from "@/components/scene/RaveScene";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Experience from "@/pages/experience";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col font-body">
          <RaveScene />
          <Navbar />
          <main className="flex-grow pt-16">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
