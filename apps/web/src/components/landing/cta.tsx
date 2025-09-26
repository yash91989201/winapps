import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 relative bg-blue-600 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Join with 5000+ Startups Growing with Base.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis
            rhoncus.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}