import { useState } from "react";
import { Button } from "@/components/ui/button";

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
    <section id="pricing" className="py-20 bg-gray-100 relative">
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
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg border bg-white shadow-md ${plan.popular ? "border-primary" : "border-gray-200"}`}>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
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
                className={`w-full mb-8 ${plan.popular
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
      {/* Shapes */}
      <img
        src="/images/shape-13.svg"
        alt="shape"
        className="absolute top-10 left-10 w-12 h-12 opacity-30 z-0 lg:top-20 lg:left-20 lg:w-16 lg:h-16"
      />
      <img
        src="/images/shape-14.svg"
        alt="shape"
        className="absolute top-10 right-10 w-10 h-10 opacity-30 z-0 lg:top-20 lg:right-20 lg:w-14 lg:h-14"
      />
       <img
        src="/images/shape-15.svg"
        alt="shape"
        className="absolute bottom-10 left-10 w-14 h-14 opacity-30 z-0 lg:bottom-20 lg:left-20 lg:w-18 lg:h-18"
      />
      <img
        src="/images/shape-16.svg"
        alt="shape"
        className="absolute bottom-10 right-10 w-12 h-12 opacity-30 z-0 lg:bottom-20 lg:right-20 lg:w-16 lg:h-16"
      />
    </section>
  );
}
