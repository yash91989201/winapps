import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { About } from "@/components/landing/about";
import { Team } from "@/components/landing/team";
import { Services } from "@/components/landing/services";
import { Pricing } from "@/components/landing/pricing";
import { Contact } from "@/components/landing/contact";
import { CTA } from "@/components/landing/cta";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Team />
      <Services />
      <Pricing />
      <Contact />
      <CTA />
    </div>
  );
}
