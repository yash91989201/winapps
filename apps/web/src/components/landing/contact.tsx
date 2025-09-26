import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
                  <Label htmlFor="fullname">Full name</Label>
                  <Input
                    type="text"
                    id="fullname"
                    placeholder="Devid Wonder"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    type="text"
                    id="phone"
                    placeholder="+009 3342 3432"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Type your subject"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
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
