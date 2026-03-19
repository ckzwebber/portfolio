import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Earth } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { useAnimationMode, type AnimationMode } from "@/components/animation-mode-provider";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { mode, setMode } = useAnimationMode();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const animationOptions: Array<{ mode: AnimationMode; label: string }> = [
    { mode: "off", label: t("animation-mode-off") },
    { mode: "balanced", label: t("animation-mode-balanced") },
    { mode: "full", label: t("animation-mode-full") },
  ];

  const desktopAnimationOptions: Array<{ mode: AnimationMode; label: string }> = [
    { mode: "off", label: "OFF" },
    { mode: "balanced", label: "BAL" },
    { mode: "full", label: "FULL" },
  ];

  const navItems = [
    { href: "#home", label: t("start") },
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#contact", label: t("contact") },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    let raf = 0;

    const updateActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        updateActiveSection();
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="absolute top-0 inset-x-0 h-px bg-primary/50" />
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 border border-primary bg-primary/15 flex items-center justify-center">
              <span className="text-white font-bold text-sm font-mono">CM</span>
            </div>
            <span className="text-lg md:text-xl font-display tracking-tight uppercase">Carlos Miguel</span>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                data-magnetic="true"
                className={`nav-link text-text-lighter hover:text-foreground ${activeSection === item.href.slice(1) ? "active text-foreground" : ""}`}
                data-testid={`nav-${item.href.slice(1)}`}>
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-1 border border-border/70 bg-secondary/35 px-1.5 py-0.5" data-testid="animation-toggle">
              <div className="flex items-center gap-1">
                {desktopAnimationOptions.map((option) => (
                  <button
                    key={option.mode}
                    type="button"
                    onClick={() => setMode(option.mode)}
                    data-magnetic="true"
                    className={`px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.1em] border leading-none transition-colors ${mode === option.mode ? "border-primary bg-primary/20 text-foreground" : "border-border text-text-light hover:text-foreground hover:border-primary/40"}`}>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => i18n.changeLanguage(i18n.language === "en" ? "pt-BR" : "en")}
              data-magnetic="true"
              className="h-9 w-9 rounded-none glass-light hover:bg-primary/40 font-display"
              data-testid="language-toggle">
              {i18n.language === "en" ? "EN" : "BR"}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-magnetic="true"
              className="h-9 w-9 rounded-none glass-light hover:bg-primary/40 font-display"
              data-testid="theme-toggle">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden rounded-none glass-light" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-testid="mobile-menu-toggle">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-4 pb-4"
              data-testid="mobile-menu">
              <div className="flex flex-col space-y-4 border border-border bg-card p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-text-lighter hover:text-foreground uppercase tracking-wider text-sm font-display"
                    data-testid={`mobile-nav-${item.href.slice(1)}`}>
                    {item.label}
                  </a>
                ))}

                <div className="border border-border p-2" data-testid="mobile-animation-toggle">
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-text-light mb-2">{t("animation-label")}</p>
                  <div className="grid grid-cols-3 gap-1">
                    {animationOptions.map((option) => (
                      <button
                        key={option.mode}
                        type="button"
                        onClick={() => setMode(option.mode)}
                        className={`px-2 py-1 text-[10px] font-mono uppercase tracking-[0.1em] border transition-colors ${mode === option.mode ? "border-primary bg-primary/20 text-foreground" : "border-border text-text-light"}`}>
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-text-light mt-2">{t("animation-hint")}</p>
                </div>

                <Button
                  variant="ghost"
                  onClick={() => i18n.changeLanguage(i18n.language === "en" ? "pt-BR" : "en")}
                  className="justify-start p-0 h-auto font-normal text-text-lighter hover:text-foreground rounded-none font-display"
                  data-testid="mobile-language-toggle">
                  {i18n.language === "en" ? (
                    <>
                      <Earth className="h-4 w-4 mr-2" />
                      EN
                    </>
                  ) : (
                    <>
                      <Earth className="h-4 w-4 mr-2" />
                      BR
                    </>
                  )}
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="justify-start p-0 h-auto font-normal text-text-lighter hover:text-foreground rounded-none font-display"
                  data-testid="mobile-theme-toggle">
                  {theme === "light" ? (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      {t("dark-mode")}
                    </>
                  ) : (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      {t("light-mode")}
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
