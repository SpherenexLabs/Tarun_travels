import PageHero from "@/components/ui/PageHero";
import FareSection from "@/components/sections/FareSection";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Local Cabs in Bengaluru | Hourly Taxi Packages",
  description:
    "Book local cabs in Bengaluru for meetings, shopping, sightseeing and daily travel with flexible 4-hour and 8-hour taxi packages.",
  path: "/local-cabs",
  keywords: [
    "local cabs Bengaluru",
    "Bangalore local taxi",
    "hourly cab rental Bengaluru",
    "8 hour 80 km cab Bangalore",
  ],
  image: "/cab-local-hero-ai.png",
});

export default function LocalCabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Local Bengaluru cabs"
        title="Flexible city travel"
        accent="by the hour."
        description="Choose a local cab package for meetings, shopping, sightseeing, appointments and everyday city travel."
        image="/cab-local-hero-ai.png"
      />
      <FareSection type="local" />
      <TrustSection />
      <ContactSection defaultBookingType="Local Rental - 8 Hours / 80 km" />
      <MapSection />
    </>
  );
}
