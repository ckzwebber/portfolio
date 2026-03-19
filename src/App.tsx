import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimationModeProvider, useAnimationMode } from "@/components/animation-mode-provider";
import { MotionConfig } from "framer-motion";
import emailjs from "@emailjs/browser";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  emailjs.init(emailPublicKey);

  function AppContent() {
    const { mode } = useAnimationMode();

    return (
      <MotionConfig reducedMotion={mode === "off" ? "always" : "never"}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </MotionConfig>
    );
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <AnimationModeProvider>
          <AppContent />
        </AnimationModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
