import PageHero from "@/components/ui/PageHero";
import PackagesSection from "@/components/sections/PackagesSection";
import ContactSection from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Tour Packages",
  description:
    "Browse South India and Goa holiday packages with private cabs, selected stays and flexible itineraries.",
  path: "/tour-packages",
  keywords: [
    "South India tour packages",
    "Goa holiday package",
    "Coorg tour package",
    "Ooty tour package",
    "Mysore tour package",
  ],
});

export default function TourPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore our packages"
        title="Journeys made for"
        accent="your pace."
        description="Choose a favourite or ask us to tailor any itinerary around your dates, group and budget."
      />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
