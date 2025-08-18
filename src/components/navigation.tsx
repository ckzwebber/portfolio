import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Earth } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

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
    const updateActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection();

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <span className="text-xl font-bold">Carlos Miguel</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`nav-link text-text-lighter hover:text-white transition-colors ${activeSection === item.href.slice(1) ? "active" : ""}`}
                data-testid={`nav-${item.href.slice(1)}`}>
                {item.label}
              </a>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => i18n.changeLanguage(i18n.language === "en" ? "pt-BR" : "en")}
              className="glass-light hover:bg-primary transition-colors duration-300"
              data-testid="language-toggle">
              {i18n.language === "en" ? "EN" : "BR"}
            </Button>

            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="glass-light hover:bg-primary transition-colors duration-300" data-testid="theme-toggle">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden glass-light" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-testid="mobile-menu-toggle">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)} className="text-text-lighter hover:text-white transition-colors" data-testid={`mobile-nav-${item.href.slice(1)}`}>
                  {item.label}
                </a>
              ))}

              <Button
                variant="ghost"
                onClick={() => i18n.changeLanguage(i18n.language === "en" ? "pt-BR" : "en")}
                className="justify-start p-0 h-auto font-normal text-text-lighter hover:text-white"
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

              <Button variant="ghost" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="justify-start p-0 h-auto font-normal text-text-lighter hover:text-white" data-testid="mobile-theme-toggle">
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
          </div>
        )}
      </div>
    </nav>
  );
}
