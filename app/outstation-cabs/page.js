import PageHero from "@/components/ui/PageHero";
import FareSection from "@/components/sections/FareSection";
import RoutesSection from "@/components/sections/RoutesSection";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Outstation Cabs from Bengaluru | Taxi Fare Per Km",
  description:
    "Book outstation cabs from Bengaluru for one-way and round trips. Compare sedan, SUV, Innova and Tempo Traveller fares per kilometre.",
  path: "/outstation-cabs",
  keywords: [
    "outstation cabs Bengaluru",
    "Bangalore outstation taxi",
    "round trip cab Bengaluru",
    "one way taxi from Bangalore",
  ],
  image: "/travel-hero.png",
});

export default function OutstationCabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Outstation cabs from Bengaluru"
        title="Comfortable road trips"
        accent="beyond the city."
        description="Book one-way or round-trip cabs with transparent per-kilometre fares and experienced drivers."
      />
      <FareSection type="outstation" />
      <RoutesSection />
      <TrustSection />
      <ContactSection defaultBookingType="Outstation Round Trip" />
    </>
  );
}
