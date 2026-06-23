import PageHero from "@/components/ui/PageHero";
import FareSection from "@/components/sections/FareSection";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Airport Cabs in Bengaluru | Pickup & Drop Taxi",
  description:
    "Book 24/7 airport cabs in Bengaluru for reliable pickup and drop with fixed starting fares, clean AC vehicles and professional drivers.",
  path: "/airport-cabs",
  keywords: [
    "airport cabs Bengaluru",
    "Bangalore airport taxi",
    "Kempegowda airport pickup",
    "Bengaluru airport drop cab",
  ],
  image: "/cab-airport-hero-ai.png",
});

export default function AirportCabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bengaluru airport cabs"
        title="On-time airport pickup"
        accent="and drop."
        description="Choose a clean AC cab for dependable 24/7 transfers to and from Kempegowda International Airport."
        image="/cab-airport-hero-ai.png"
      />
      <FareSection type="airport" />
      <TrustSection />
      <ContactSection defaultBookingType="Airport Pickup" />
      <MapSection />
    </>
  );
}
