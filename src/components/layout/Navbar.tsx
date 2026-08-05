"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, Download } from "lucide-react";
import { NAV_LINKS, SECTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 100);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollTo("#home")}
              className="font-display font-bold text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
              aria-label="Scroll to top"
            >
              Engr. Ojkeh
            </button>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    activeSection === link.href.replace("#", "")
                      ? "text-accent"
                      : "text-muted"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                aria-label="Download resume"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </a>
              <Button size="sm" onClick={() => scrollTo("#contact")}>
                Hire Me
              </Button>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 text-muted hover:text-foreground transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} onNavigate={scrollTo} />
    </>
  );
}
