import db from "@/lib/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { FooterSection } from "@/components/footer";
import CheckoutButton from "@/components/checkout-button";

export default async function PricingPage() {
  const user = await auth();

  const userData = await db.user.findUnique({
    where: {
      clerkId: user.userId as string,
    },
  });

  if (!userData) {
    redirect( "/sign-up") 
  }

  const pricing = [
    {
      id: "10201",
      plan: "Basic Plan",
      price: "$37",
      features: [
        "1 Report",
        "Vehicle Report",
        "DMV Title History",
        "Safety Recall Status",
        "Vehicle Specification",
        "Accident Information",
        "Online Listing History",
        "Never Expires",
      ],
    },
  ];

  return (
    <main className="max-w-[1920px] mx-auto relative overflow-hidden">
      <Navbar />
      <div className="mt-10 max-w-6xl mx-auto px-4 py-10">
        {/* Main Pricing Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Get Your Vehicle Report
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get detailed information about your vehicle with our
                comprehensive report.
              </p>
            </div>

            <div className="grid max-w-xl mx-auto">
              {pricing.map((plan) => (
                <div
                  key={plan.id}
                  className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-custom_red rounded-t-2xl" />
                  <div className="relative">
                    <h3 className="text-custom_red text-xl font-semibold mb-1">
                      {plan.plan}
                    </h3>
                    <div className="mb-8">
                      <p className="text-gray-600 text-sm">PRICE</p>
                      <p className="text-4xl font-bold text-custom_red">
                        {plan.price}
                      </p>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-custom_red mr-2">✔️</span>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <CheckoutButton />
                      {/* <Button>Check Demo Report</Button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
