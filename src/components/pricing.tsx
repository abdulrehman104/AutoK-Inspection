import { Button } from "./ui/button";
import { pricing } from "@/lib/constants";
import Link from "next/link";

export const Pricing = () => {
  return (
    <div className="min-h-screen py-16 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h3 className="text-sm font-semibold uppercase text-gray-600">
            Pricing
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Flexible Pricing Options
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our competitively priced plans, designed to fit your
            budget and meet your automotive needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-custom_red rounded-t-2xl" />
              <div className="relative">
                <h3 className="text-custom_red text-xl font-semibold mb-1">
                  {plan.plan}
                </h3>
                {/* Price */}
                <div className="mb-8">
                  <p className="text-gray-600 text-sm">PRICE</p>
                  <p className="text-4xl font-bold text-custom_red">
                    {plan.price}
                  </p>
                </div>
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-custom_red mr-2">✔️</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-neutral-900 mb-4">
                  <Link href={"#get-report"}>Get Started</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
