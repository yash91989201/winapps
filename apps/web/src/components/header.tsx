import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "#features", label: "Features" },
    { to: "#about", label: "About" },
    { to: "#pricing", label: "Pricing" },
    { to: "#support", label: "Support" },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.webp" alt="Logo" className="h-8" />
            <span className="font-bold text-xl">Base</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button>Get Started</Button>
            </div>
            <ModeToggle />
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-4 py-4">
            {links.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button>Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
