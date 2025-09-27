import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = "/" + sectionId;
    }
  };

  const homeLinks = [
    { to: "#about", label: "About" },
    { to: "#services", label: "Services" },
    { to: "#technologies", label: "Technologies" },
    { to: "#contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-md"
      )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                const heroSection = document.getElementById("hero");
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/header-logo.gif" 
                alt="Logo" 
                className="size-16 group-hover:size-20 transition-all duration-300 relative z-10"
                style={{
                  animationPlayState: 'paused',
                  animationIterationCount: '1',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animationPlayState = 'running';
                  e.currentTarget.style.animationIterationCount = '1';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 z-20"></div>
            </div>
            <span className="font-bold text-xl group-hover:text-2xl transition-all duration-300">Winapps</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("#about")}
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("#services")}
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("#technologies")}
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Link
              to="/about"
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/training"
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Training
            </Link>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-4 py-4">
            <div className="font-medium text-lg mb-2">Home</div>
            {homeLinks.map(({ to, label }) => (
              <button
                key={to}
                onClick={() => {
                  scrollToSection(to);
                  setIsMenuOpen(false);
                }}
                className="font-medium text-foreground/80 hover:text-primary transition-colors bg-transparent border-none cursor-pointer w-full text-center py-2"
              >
                {label}
              </button>
            ))}
            <Link
              to="/about"
              className="font-medium text-foreground/80 hover:text-primary transition-colors w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/training"
              className="font-medium text-foreground/80 hover:text-primary transition-colors w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
