import { createFileRoute } from "@tanstack/react-router";
import { AboutHero } from "@/components/about/about-hero";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="min-h-screen">
      <AboutHero />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 items-center mb-16">
              <div>
                <h1 className="text-4xl font-bold mb-6">About Us</h1>

                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Winapps is a professional services Company that specializes in two business areas – Technology and Product Development. We are a global provider of innovative, professional quality and cost-effective web development and internet marketing services. We have been re-inventing, re-vitalizing and re-engineering businesses around the world with high-quality technology-enabled resources and visions.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Our expertise spans a wide range of industries and we are powered by a team of over 20+ professionally experienced people who believe in Quality, Value, Growth, Teamwork and Customer Delight. With strategic initiatives and transformational ideas, we are committed to uphold our clients businesses in this constantly changing market place. We thrive in an environment where perfection is the buzzword and change is regular; therefore we are furnished with the latest in technological skills to provide the best possible solutions on-time and within budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Mobile Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Digital Marketing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Creative & Unique Design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>E-Business Solution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Additional Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Cloud Computing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Game Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Software Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Database Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
