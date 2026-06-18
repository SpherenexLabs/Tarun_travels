import PageHero from "@/components/ui/PageHero";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cab Services in Bengaluru",
  description:
    "Airport taxi, local rental, outstation and corporate cab services in Bengaluru with professional drivers.",
  path: "/services",
  keywords: [
    "outstation cabs Bengaluru",
    "airport transfer Bengaluru",
    "local taxi Bengaluru",
    "corporate cab service",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cab services"
        title="A cab for every"
        accent="travel need."
        description="Airport, local, outstation and corporate vehicles available around the clock."
      />
      <ServicesSection />
      <ContactSection />
      <MapSection />
    </>
  );
}
