import { createFileRoute, useLocation } from "@tanstack/react-router";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Team } from "@/components/landing/team";
import { Services } from "@/components/landing/services";
import { Technologies } from "@/components/landing/technologies";
import { Contact } from "@/components/landing/contact";
import { CTA } from "@/components/landing/cta";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Services />
      <Technologies />
      <Contact />
      <CTA />
    </div>
  );
}
