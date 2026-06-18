import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { getCabBySlug } from "@/data/cabs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Tarun Travel Hub to book airport taxi, local rental, outstation and corporate cabs in Bengaluru.",
  path: "/contact",
  keywords: ["cab booking contact Bengaluru", "book taxi Bangalore", "cab enquiry"],
});

export default async function ContactPage({ searchParams }) {
  const { cab: cabSlug, drop, service } = await searchParams;
  const cab = getCabBySlug(cabSlug);

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Book your cab"
        accent="right now."
        description="Send your pickup and drop details for quick vehicle and fare confirmation."
      />
      <ContactSection
        defaultDrop={drop}
        defaultCab={cab?.name}
        defaultBookingType={service}
      />
      <MapSection />
    </>
  );
}
