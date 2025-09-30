import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Images */}
          <div className="relative">
            <img
              src="/images/about-01.png"
              alt="About"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/images/about-02.png"
              alt="About"
              className="rounded-lg shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 lg:w-1/2 md:w-2/3 hidden md:block"
            />
            <img
              src="/images/about-03.png"
              alt="About"
              className="rounded-lg shadow-lg absolute bottom-0 right-0 w-1/3 lg:w-1/3 md:w-1/2 hidden lg:block"
            />
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h4 className="text-primary font-semibold text-lg">Why Choose Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              We Make Our customers happy by giving Best services.
            </h2>

            <p className="text-lg leading-relaxed">
              Winapps is a professional services Company that specializes in two business areas – Technology and Product Development. We are a global provider of innovative, professional quality and cost-effective web development and internet marketing services. We have been re-inventing, re-vitalizing and re-engineering businesses around the world with high-quality technology-enabled resources and visions.
              Our expertise spans a wide range of industries and we are powered by a team of over 20+ professionally experienced people who believe in Quality, Value, Growth, Teamwork and Customer Delight. With strategic initiatives and transformational ideas, we are committed to uphold our clients businesses in this constantly changing market place. We thrive in an environment where perfection is the buzzword and change is regular; therefore we are furnished with the latest in technological skills to provide the best possible solutions on-time and within budget.
            </p>


            <Dialog>
              <DialogTrigger asChild>
                <div className="inline-flex items-center gap-2 text-primary font-semibold group cursor-pointer">
                  <svg
                    className="w-12 h-12 group-hover:scale-110 transition-transform"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="24" fill="currentColor" />
                    <path
                      d="M32.5 24.5L19 16V33L32.5 24.5Z"
                      fill="white"
                    />
                  </svg>
                  <span className="group-hover:underline">SEE HOW WE WORK</span>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] sm:max-w-3xl lg:max-w-4xl">
                <DialogHeader>
                  <DialogTitle>How We Work</DialogTitle>
                </DialogHeader>

                <video
                  src="/hero-video.mp4"
                  controls
                  autoPlay
                  className="w-full aspect-video rounded-lg"
                  ref={(video) => {
                    if (video) {
                      setTimeout(() => video.play(), 100);
                    }
                  }}
                />

              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      {/* Shapes */}
      <img
        src="/images/shape-05.svg"
        alt="shape"
        className="absolute top-10 left-10 w-12 h-12 opacity-30 z-0 lg:top-20 lg:left-20 lg:w-16 lg:h-16"
      />
      <img
        src="/images/shape-06.svg"
        alt="shape"
        className="absolute top-10 right-10 w-10 h-10 opacity-30 z-0 lg:top-20 lg:right-20 lg:w-14 lg:h-14"
      />
      <img
        src="/images/shape-07.svg"
        alt="shape"
        className="absolute bottom-10 left-10 w-14 h-14 opacity-30 z-0 lg:bottom-20 lg:left-20 lg:w-18 lg:h-18 animate-spin-slow"
      />
      <img
        src="/images/shape-08.svg"
        alt="shape"
        className="absolute bottom-10 right-10 w-12 h-12 opacity-30 z-0 lg:bottom-20 lg:right-20 lg:w-16 lg:h-16"
      />
    </section>
  );
}
