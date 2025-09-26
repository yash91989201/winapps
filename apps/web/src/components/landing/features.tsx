const features = [
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet conse adipiscing elit.",
  },
  {
    icon: "/icons/ownership.svg",
    title: "Take Ownership",
    description: "Lorem ipsum dolor sit amet conse adipiscing elit.",
  },
  {
    icon: "/icons/teamwork.svg",
    title: "Team Work",
    description: "Lorem ipsum dolor sit amet conse adipiscing elit.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <img src={feature.icon} alt="Icon" className="w-16 h-16 mb-6" />
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
    </section>
  );
}
