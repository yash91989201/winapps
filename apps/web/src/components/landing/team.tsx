const teamMembers = [
  {
    name: "Olivia Andrium",
    role: "Product Manager",
    image: "/images/team-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jemse Kemorun",
    role: "Product Designer",
    image: "/images/team-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Avi Pestarica",
    role: "Web Designer",
    image: "/images/team-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export function Team() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet With Our Creative Dedicated Team
          </h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
            tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
            maximus.
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
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={member.social.facebook}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.635 4.217 3.803 4.65-.4.108-.82.166-1.25.166-.307 0-.6-.03-.88-.084.63 1.901 2.445 3.288 4.6 3.325-1.712 1.343-3.879 2.148-6.227 2.148-.404 0-.79-.023-1.17-.067 2.22 1.423 4.86 2.25 7.73 2.25 9.284 0 14.376-7.699 14.376-14.376 0-.219 0-.437-.015-.654.986-.712 1.84-1.602 2.52-2.616z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.006 1.806-2.006 1.806 0v8.396h4.98v-10.131c0-4.87-3.364-4.87-4.98-2.49v-3.379z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
