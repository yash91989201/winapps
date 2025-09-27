const features = [
  {
    icon: "/images/icon-01.svg",
    title: "24/7 Support",
    description: "Round-the-clock technical support and assistance to ensure your applications run smoothly and efficiently.",
  },
  {
    icon: "/images/icon-02.svg",
    title: "Take Ownership",
    description: "We take full ownership of projects from conception to delivery, ensuring accountability and excellence in every aspect.",
  },
  {
    icon: "/images/icon-03.svg",
    title: "Team Work",
    description: "Collaborative approach bringing together diverse skills and expertise to deliver exceptional results.",
  },
  {
    icon: "/images/icon-04.svg",
    title: "AI Integration",
    description: "Advanced artificial intelligence solutions to automate processes and enhance user experiences.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100 relative">
       <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-lg shadow-lg"
            >
              <img src={feature.icon} alt={feature.title} className="w-10 h-10 md:w-12 md:h-12 mb-4" />
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Shapes */}
      <img
        src="/images/shape-09.svg"
        alt="shape"
        className="absolute top-10 left-10 w-12 h-12 opacity-30 z-0 lg:top-20 lg:left-20 lg:w-16 lg:h-16 animate-spin-slow"
      />
      <img
        src="/images/shape-10.svg"
        alt="shape"
        className="absolute top-10 right-10 w-10 h-10 opacity-30 z-0 lg:top-20 lg:right-20 lg:w-14 lg:h-14"
      />
    </section>
  );
}
