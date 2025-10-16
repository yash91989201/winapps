import { Linkedin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const teamMembers = [
  {
    name: "Balvinder Singh",
    role: "CTO",
    image: "/images/team-01.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/balvinder-singh-443b7846/",
    },
  },
  {
    name: "Tripti Sangal",
    role: "Human Resource",
    image: "/images/team-02.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/tripti-sangal-729443118?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9MSi2O7yStGkMUimjXsmXw%3D%3D",
    },
  },
  {
    name: "Milind Gujwar",
    role: "Business Development Executive",
    image: "/images/team-03.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/milind-gujwar-439b3127a",
    },
  },
  {
    name: "Shreya Vishwakarma",
    role: "Business Development Executive",
    image: "/images/team-04.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/shreya-vishwakarma-80ab3b327/",
    },
  },
];

export function Team() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

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

        <div className="max-w-5xl mx-auto">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            setApi={setApi}
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="group bg-white rounded-lg shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 md:h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-[#0077B5] hover:bg-[#005885] transition-colors rounded-full p-3"
                          >
                            <Linkedin className="w-6 h-6" />
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
