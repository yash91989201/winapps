import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We specialize in UI/UX, Web Development, Digital Marketing.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
              consequat varius nisi quis, posuere magna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Now
              </Button>

              <div className="flex items-center gap-2 text-sm">
                <a
                  href="#"
                  className="font-medium text-white hover:underline"
                >
                  Call us (0123) 456 – 789
                </a>
                <span className="text-gray-400">
                  For any question or concern
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}