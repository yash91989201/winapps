const teamMembers = [
  {
    name: "Olivia Andrium",
    role: "Product Manager",
    image: "/images/team-01.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jemse Kemorun",
    role: "Product Designer",
    image: "/images/team-02.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Avi Pestarica",
    role: "Web Designer",
    image: "/images/team-03.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export function Team() {
  return (
    <section className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet With Our Creative Dedicated Team
          </h2>
          <p className="text-gray-600 text-lg">
            Our dedicated team of professionals brings together expertise in design, development, and project management to deliver innovative solutions that exceed client expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={member.social.facebook}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <img src="/images/icon-facebook.svg" alt="facebook" className="w-6 h-6" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <img src="/images/icon-twitter.svg" alt="twitter" className="w-6 h-6" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <img src="/images/icon-linkedin.svg" alt="linkedin" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Shapes */}
      <img
        src="/images/shape-17.svg"
        alt="shape"
        className="absolute top-10 left-10 w-12 h-12 opacity-30 z-0 lg:top-20 lg:left-20 lg:w-16 lg:h-16"
      />
      <img
        src="/images/shape-18.svg"
        alt="shape"
        className="absolute bottom-10 right-10 w-10 h-10 opacity-30 z-0 lg:bottom-20 lg:right-20 lg:w-14 lg:h-14"
      />
    </section>
  );
}
