import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Features,
  About,
  Team,
  Services,
  Pricing,
  Contact,
  CTA,
} from "@/components/landing";

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
