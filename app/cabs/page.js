import PageHero from "@/components/ui/PageHero";
import FareSection from "@/components/sections/FareSection";
import RoutesSection from "@/components/sections/RoutesSection";
import ContactSection from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cab Booking & Taxi Fares in Bengaluru",
  description:
    "Compare airport taxi, local rental and outstation cab fares in Bengaluru. Book hatchback, sedan, SUV, Innova or Tempo Traveller.",
  path: "/cabs",
  keywords: [
    "cab booking Bengaluru",
    "Bangalore taxi fares",
    "airport cab Bengaluru",
    "outstation cab Bangalore",
    "local cab package",
  ],
});

export default function CabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cabs and fares"
        title="Choose the right cab"
        accent="for your journey."
        description="Airport pickup, local rental and outstation vehicles for individuals, families and groups."
      />
      <FareSection type="airport" />
      <FareSection type="outstation" />
      <FareSection type="local" />
      <RoutesSection />
      <ContactSection />
    </>
  );
}
