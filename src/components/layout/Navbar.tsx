"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, Download, ArrowRight } from "lucide-react";
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
          isScrolled
            ? "bg-surface/80 backdrop-blur-xl border-b border-border/60 shadow-xs"
            : "bg-transparent",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="group flex items-center gap-2 font-display font-bold text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
              aria-label="Scroll to top"
            >
              <span>Engr. Ojkeh</span>
              <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface/60 border border-border/60 backdrop-blur-md" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-accent/10 text-accent font-bold"
                        : "text-muted hover:text-foreground hover:bg-surface-muted"
                    )}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-muted hover:text-foreground hover:bg-surface-muted border border-transparent hover:border-border transition-all duration-200"
                aria-label="Download resume"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>CV</span>
              </a>
              <Button
                size="sm"
                onClick={() => scrollTo("#contact")}
                className="shadow-md shadow-accent/25 hover:shadow-accent/40"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 text-muted hover:text-foreground rounded-lg border border-border/60 bg-surface/60 transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} onNavigate={scrollTo} />
    </>
  );
}
