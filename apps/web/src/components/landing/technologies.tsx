const technologies = [
  {
    name: ".NET",
    description: "Enterprise-grade framework for robust web applications and services",
    logo: "/images/dotnet.png",
  },
  {
    name: "Next.js",
    description: "React framework for production with server-side rendering and static site generation",
    logo: "/images/nextjs.png"
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for building fast and scalable server-side applications",
    logo: "/images/nodejs.png",
  },
  {
    name: "React",
    description: "Popular JavaScript library for building interactive user interfaces",
    logo: "/images/react",
  },
  {
    name: "Angular",
    description: "Comprehensive framework for building dynamic web applications",
    logo: "/images/angular-logo.png",
  },
  {
    name: "TanStack",
    description: "Modern data fetching and state management solutions for React applications",
    logo: "/images/tanstack.png",
  },
  {
    name: "PHP",
    description: "Server-side scripting language for web development and content management",
    logo: "/images/php.png",
  },
  {
    name: "MySQL",
    description: "World's most popular open-source relational database management system",
    logo: "/images/mysql.png",
  },
  {
    name: "PostgreSQL",
    description: "Advanced open-source relational database with strong focus on standards compliance",
    logo: "/images/postgresql.png",
  },
  {
    name: "Flutter",
    description: "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop",
    logo: "/images/flutter.png",
  },
  {
    name: "Android",
    description: "Native mobile development platform for building powerful Android applications",
    logo: "/images/android.png",
  },
  {
    name: "iOS",
    description: "Apple's mobile operating system for building native iPhone and iPad applications",
    logo: "/images/ios.png",
  },
  {
    name: "React Native",
    description: "Cross-platform framework for building native mobile apps using React",
    logo: "/images/react-native.svg",
  },
  {
    name: "Unity",
    description: "Powerful game development engine for creating 2D, 3D, VR, and AR experiences",
    logo: "/images/unity.png",
  },
  {
    name: "AI Implementation",
    description: "Artificial intelligence solutions for automation, data analysis, and intelligent decision-making",
    logo: "/images/ai.jpg"
  },
];

export function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-gray-50 relative">
      {/* Shapes */}
      <img
        src="/images/shape-09.svg"
        alt="shape"
        className="absolute top-10 left-10 w-12 h-12 opacity-30 z-0 lg:top-20 lg:left-20 lg:w-16 lg:h-16 animate-spin-slow"
      />
      <img
        src="/images/shape-10.svg"
        alt="shape"
        className="absolute animate-sping top-10 right-10 w-10 h-10 opacity-30 z-0 lg:top-20 lg:right-20 lg:w-14 lg:h-14"
      />
      <img
        src="/images/shape-11.svg"
        alt="shape"
        className="animate-sping absolute bottom-10 left-10 w-14 h-14 opacity-30 z-0 lg:bottom-20 lg:left-20 lg:w-18 lg:h-18"
      />
      <img
        src="/images/shape-12.svg"
        alt="shape"
        className="absolute bottom-10 right-10 w-12 h-12 opacity-30 z-0 lg:bottom-20 lg:right-20 lg:w-16 lg:h-16 animate-spin"
      />
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technologies We Use
          </h2>
          <p className="text-gray-600 text-lg">
            We leverage cutting-edge technologies to deliver powerful and scalable solutions for your business needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img src={tech.logo} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 mr-4 object-contain" />
                <h4 className="text-xl font-semibold text-gray-800">
                  {tech.name}
                </h4>
              </div>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
