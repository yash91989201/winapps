import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CTA() {
  return (
    <section className="py-10 relative bg-primary text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Join with 5000+ Startups Growing with Winapps.
          </h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary">Read More</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
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
    </section>
  );
}
