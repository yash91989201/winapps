const trainingCourses = [
  {
    name: ".NET Development",
    description: "Comprehensive .NET framework training for building enterprise applications",
    logo: "/images/dotnet.png",
    pdf: "dot-net-training.pdf"
  },
  {
    name: "MEAN Stack Development",
    description: "Full-stack development using MongoDB, Express, Angular, and Node.js",
    logo: "/images/mean-stack.png",
    pdf: "mean-stack.pdf"
  },
  {
    name: "MERN Stack Development",
    description: "Modern full-stack development with MongoDB, Express, React, and Node.js",
    logo: "/images/mern-stack.png",
    pdf: "mern-stack.pdf"
  },
  {
    name: "UI/UX Design",
    description: "Master user interface and user experience design principles and tools",
    logo: "/images/ui-ux.jpg",
    pdf: "ui-ux-training.pdf"
  },
  {
    name: "QA Testing",
    description: "Learn quality assurance methodologies, testing techniques, and automation tools",
    logo: "/images/qa-testing.png",
    pdf: "qa-testing.pdf"
  },
  {
    name: "CMS Development",
    description: "Build and manage content management systems with WordPress, Drupal, and custom solutions",
    logo: "/images/cms.png",
    pdf: "cms-training.pdf"
  },
  {
    name: "Next.js Development",
    description: "Modern React framework for server-side rendering and static site generation",
    logo: "/images/nextjs.png",
    pdf: "nextjs-training.pdf"
  },
  {
    name: "Node.js Development",
    description: "Server-side JavaScript development with Node.js, Express, and modern backend technologies",
    logo: "/images/nodejs.png",
    pdf: "nodejs-training.pdf"
  },
  {
    name: "PHP Development",
    description: "Server-side web development with PHP, Laravel, and modern PHP frameworks",
    logo: "/images/php.png",
    pdf: "php-training.pdf"
  },
  {
    name: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, SEM, social media, and content marketing",
    logo: "/images/digital-marketing.png",
    pdf: "digital-marketing-training.pdf"
  },
  {
    name: "AI Development",
    description: "Artificial intelligence and machine learning development with Python, TensorFlow, and modern AI frameworks",
    logo: "/images/ai.jpg",
    pdf: "ai-training.pdf"
  },
  {
    name: "Unity Development",
    description: "Game development and interactive experiences using Unity engine and C# programming",
    logo: "/images/unity.png",
    pdf: "unity-training.pdf"
  },
  {
    name: ".NET MAUI Development",
    description: "Cross-platform mobile app development using .NET MAUI framework for Android, iOS, and Windows",
    logo: "/images/dotnet.png",
    pdf: "maui-training.pdf"
  },
  {
    name: "iOS Development",
    description: "Native iOS application development using Swift, SwiftUI, and Apple's development tools",
    logo: "/images/ios.png",
    pdf: "ios-training.pdf"
  },
  {
    name: "Flutter Development",
    description: "Cross-platform mobile app development using Flutter framework and Dart programming language",
    logo: "/images/flutter.png",
    pdf: "flutter-training.pdf"
  },
  {
    name: "Data Science",
    description: "Comprehensive data science training including Python, R, statistical analysis, and machine learning",
    logo: "/images/data-science.jpg",
    pdf: "data-science-training.pdf"
  },
];

export function TrainingCourses() {
  const handleDownload = (pdfName: string, courseName: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = `/assets/training/${pdfName}`; // PDFs are stored in /public/assets/training/
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="training-courses" className="py-20 bg-gray-50 relative">
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
            Training Courses
          </h2>
          <p className="text-gray-600 text-lg">
            Download comprehensive training materials to enhance your skills and advance your career in technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingCourses.map((course, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleDownload(course.pdf, course.name)}
            >
              <div className="flex items-center mb-4">
                <img src={course.logo} alt={course.name} className="w-10 h-10 md:w-12 md:h-12 mr-4 object-contain" />
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {course.name}
                </h4>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center text-primary font-medium group-hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Syllabus
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
