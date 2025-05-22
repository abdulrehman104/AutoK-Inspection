import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutUs } from "@/components/about-us";
import { WhyUs } from "@/components/why-us";
import { InspectionReportForm } from "@/components/report-section";
import { FooterSection } from "@/components/footer";
import { Services } from "@/components/services";
import { TestimonialsSection } from "@/components/testimonial";
import { ContactSection } from "@/components/contact-form";
import { Flags } from "@/components/flags";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <InspectionReportForm />
      <Flags />
      <AboutUs />
      <Services />
      <WhyUs />
      <TestimonialsSection />
      {/* <Pricing /> */}
      <ContactSection />
      <FooterSection />
    </main>
  );
}
