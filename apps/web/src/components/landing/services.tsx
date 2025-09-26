const services = [
  {
    icon: "/icons/startup.svg",
    title: "Crafted for Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    icon: "/icons/design.svg",
    title: "High-quality Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    icon: "/icons/sections.svg",
    title: "All Essential Sections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    icon: "/icons/speed.svg",
    title: "Speed Optimized",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    icon: "/icons/customize.svg",
    title: "Fully Customizable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    icon: "/icons/updates.svg",
    title: "Regular Updates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Offer The Best Quality Service for You
          </h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img src={service.icon} alt="Icon" className="w-12 h-12 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
