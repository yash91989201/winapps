import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We specialize in UI/UX, Web Development, Digital Marketing.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
              consequat varius nisi quis, posuere magna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Now
              </Button>

              <div className="flex items-center gap-2 text-sm">
                <a
                  href="#"
                  className="font-medium text-white hover:underline"
                >
                  Call us (0123) 456 – 789
                </a>
                <span className="text-gray-400">
                  For any question or concern
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 299,
    features: [
      "400 GB Storage",
      "Unlimited Photos & Videos",
      "Exclusive Support",
    ],
    popular: false,
  },
  {
    name: "Growth Plan",
    monthlyPrice: 59,
    yearlyPrice: 599,
    features: [
      "400 GB Storage",
      "Unlimited Photos & Videos",
      "Exclusive Support",
    ],
    popular: true,
  },
  {
    name: "Business",
    monthlyPrice: 139,
    yearlyPrice: 1399,
    features: [
      "400 GB Storage",
      "Unlimited Photos & Videos",
      "Exclusive Support",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="py-20 bg-gray-100">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Offer Great Affordable Premium Prices.
          </h2>
          <p className="text-gray-600 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className="font-medium">Bill Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
        <span className="font-medium">Bill Annually</span>
      </div>

      {/* Pricing Table */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border bg-white shadow-md ${plan.popular ? "border-primary" : "border-gray-200"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <h4
                className={`text-2xl font-bold mb-6 ${plan.popular ? "text-primary" : "text-gray-800"}`}>
                {plan.name}
              </h4>

              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  ${" "}
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </h2>
                <span className="text-gray-600">
                  {billingCycle === "monthly" ? "/per month" : "/per year"}
                </span>
              </div>

              <p className="text-gray-600 text-center mb-8">
                No credit card required
              </p>

              <Button
                className={`w-full mb-8 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}>
                Try for free
              </Button>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-center text-sm font-medium text-gray-600">
                7-day free trial
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="support" className="py-20 bg-white">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Let’s Stay Connected
          </h2>
          <p className="text-gray-600 text-lg">
            It is a long established fact that a reader will be distracted by
            readable content of a page when looking at its layout. The point of
            using.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 p-8 rounded-lg bg-gray-50 shadow-md">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Email Address
                </h4>
                <p>
                  <a
                    href="mailto:support@startup.com"
                    className="text-primary hover:underline"
                  >
                    support@startup.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Office Location
                </h4>
                <p className="text-gray-600">
                  76/A, Green valle, Califonia USA.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Phone Number
                </h4>
                <p>
                  <a href="tel:+00987543433223" className="text-primary hover:underline">
                    +009 8754 3433 223
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Skype Email
                </h4>
                <p>
                  <a
                    href="mailto:example@yourmail.com"
                    className="text-primary hover:underline"
                  >
                    example@yourmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Social Media
              </h4>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.635 4.217 3.803 4.65-.4.108-.82.166-1.25.166-.307 0-.6-.03-.88-.084.63 1.901 2.445 3.288 4.6 3.325-1.712 1.343-3.879 2.148-6.227 2.148-.404 0-.79-.023-1.17-.067 2.22 1.423 4.86 2.25 7.73 2.25 9.284 0 14.376-7.699 14.376-14.376 0-.219 0-.437-.015-.654.986-.712 1.84-1.602 2.52-2.616z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.006 1.806-2.006 1.806 0v8.396h4.98v-10.131c0-4.87-3.364-4.87-4.98-2.49v-3.379z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-lg bg-gray-50 shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullname">Full name</label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Devid Wonder"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="+009 3342 3432"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                  />
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Type your subject"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Message"
                  rows={4}
                  id="message"
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-20 relative bg-blue-600 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Join with 5000+ Startups Growing with Base.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis
            rhoncus.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
