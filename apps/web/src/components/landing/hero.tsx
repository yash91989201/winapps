import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Hero() {
  return (
    <section id="hero" className="relative bg-white text-gray-900 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              We specialize in UI/UX, Web Development, Digital Marketing.
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Our moto is to "Materialize Concepts". Ideas are put into reality with a team of not only efficient dedicated persons but also of positive attitude professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Read More</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[60vw] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>More about winapps</DialogTitle>

                    <div className="space-y-4">
                      <p>
                        Winapps Software Solutions Pvt Ltd in Karnal is known to satisfactorily cater to the demands of its customer base. The business came into existence in 2013 and has, since then, been a known name in its field.
                      </p>
                      <p>
                        Karnal is a prominent landmark in the area and this establishment is in close proximity to the same. It has on earned 100 reviews and aspires to develop a loyal customer base. The business strives to make for a positive experience through its offerings. The accepted modes of payment such as Cheque / DD (demand draft), Cash make every business transaction easy and seamless, contributing to making the entire process even more effective.
                      </p>
                      <p>
                        Winapps is a leading software development company based in Karnal. They specialize in building high-quality, end-to-end products for their clients, with a strong focus on software quality. Their skilled and trained team is dedicated to providing bug-free services and ensuring on-time delivery within budget.
                      </p>
                      <p>
                        Winapps excels in both technology and product development, offering innovative and cost-effective web development and internet marketing services globally. They have a strong commitment to their clients, striving to deliver accurate and flawless solutions that help businesses flourish.
                      </p>
                      <p>
                        With structured partnerships and rigorous product engineering methods, Winapps guarantees quality, cost savings, and visibility throughout the product development life cycle. As an outsourcing partner, they bring significant improvements to existing business processes by leveraging their domain expertise.
                      </p>
                      <p>
                        Winapps also offers customized website design solutions, comprehensive web development services, and top-notch digital marketing services in Haryana. They validate and verify software applications to ensure a smooth user experience and avoid costly rework.
                      </p>
                      <p>
                        Additionally, Winapps provides game development services for various platforms and expertise in PHP, .NET, e-commerce, and cloud computing.
                      </p>
                    </div>

                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="lg:w-1/2 relative hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20"></div>
              <img
                src="/images/hero.png"
                alt="Hero illustration"
                className="relative z-10 max-w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <img
        src="/images/shape-01.svg"
        alt="shape"
        className="absolute top-20 left-20 w-16 h-16 opacity-30 z-0"
      />
      <img
        src="/images/shape-02.svg"
        alt="shape"
        className="absolute top-20 right-20 w-14 h-14 opacity-30 z-0"
      />
      <img
        src="/images/shape-03.svg"
        alt="shape"
        className="absolute bottom-20 left-20 w-18 h-18 opacity-30 z-0"
      />
      <img
        src="/images/shape-04.svg"
        alt="shape"
        className="absolute bottom-20 right-20 w-16 h-16 opacity-30 z-0"
      />
    </section>
  );
}
