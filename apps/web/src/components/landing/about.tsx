import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="/images/about-1.jpg"
              alt="About"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/images/about-2.jpg"
              alt="About"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h4 className="text-primary font-semibold text-lg">Why Choose Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              We Make Our customers happy by giving Best services.
            </h2>
            <p className="text-gray-600 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>

            <a
              href="https://www.youtube.com/watch?v=xcJtL7QggTI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold group"
            >
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
