import PageHero from "@/components/ui/PageHero";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Travel Services",
  description:
    "Private outstation cabs, custom itineraries, hotel bookings and airport transfers from Tarun Travel Hub.",
  path: "/services",
  keywords: [
    "outstation cabs Bengaluru",
    "hotel booking service",
    "airport transfer Bengaluru",
    "custom tour planning",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel services"
        title="Every detail,"
        accent="handled."
        description="Dependable transport, comfortable stays and thoughtful planning in one place."
      />
      <ServicesSection />
      <ContactSection />
      <MapSection />
    </>
  );
}
