import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative bg-white text-gray-900 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              About Winapps Software Solutions
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              A professional services company specializing in Technology and Product Development, delivering innovative web development and internet marketing solutions globally since 2013.
            </p>
          </div>
          <div className="lg:w-1/2 relative hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20"></div>
              <img
                src="/images/about-us.jpg"
                alt="About Winapps"
                className="relative z-10 max-w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <img
        src="/images/shape-01.svg"
        alt="shape"
        className="absolute top-20 left-20 w-16 h-16 opacity-30 z-0"
      />
      <img
        src="/images/shape-02.svg"
        alt="shape"
        className="absolute top-20 right-20 w-14 h-14 opacity-30 z-0"
      />
      <img
        src="/images/shape-03.svg"
        alt="shape"
        className="absolute bottom-20 left-20 w-18 h-18 opacity-30 z-0"
      />
      <img
        src="/images/shape-04.svg"
        alt="shape"
        className="absolute bottom-20 right-20 w-16 h-16 opacity-30 z-0"
      />
    </section>
  );
}