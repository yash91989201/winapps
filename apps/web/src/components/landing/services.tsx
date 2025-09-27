const services = [
  {
    icon: "/images/icon-04.svg",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and .NET to deliver scalable and performant solutions.",
  },
  {
    icon: "/images/icon-05.svg",
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces designed with user experience in mind, ensuring engagement and conversion.",
  },
  {
    icon: "/images/icon-06.svg",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter frameworks.",
  },
  {
    icon: "/images/icon-07.svg",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including SEO, social media marketing, and content creation to grow your business.",
  },
  {
    icon: "/images/icon-05.svg",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud for optimal performance.",
  },
  {
    icon: "/images/icon-07.svg",
    title: "AI Solutions",
    description:
      "Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision to automate processes and drive innovation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Offer The Best Quality Service for You
          </h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive digital solutions tailored to your business needs. From web development to digital marketing, our team of experts delivers high-quality services that drive growth and innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-lg bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img src={service.icon} alt="Icon" className="w-10 h-10 md:w-12 md:h-12 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Shapes */}
      <img
        src="/images/shape-11.svg"
        alt="shape"
        className="absolute top-10 left-10 w-12 h-12 opacity-30 z-0 lg:top-20 lg:left-20 lg:w-16 lg:h-16"
      />
      <img
        src="/images/shape-12.svg"
        alt="shape"
        className="absolute bottom-10 right-10 w-10 h-10 opacity-30 z-0 lg:bottom-20 lg:right-20 lg:w-14 lg:h-14"
      />
    </section>
  );
}
