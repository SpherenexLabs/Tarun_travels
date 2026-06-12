import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { getPackageBySlug } from "@/data/packages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Tarun Travel Hub for custom tour plans, cabs, hotel bookings and WhatsApp travel enquiries.",
  path: "/contact",
  keywords: ["travel enquiry Bengaluru", "book tour package", "travel agent contact"],
});

export default async function ContactPage({ searchParams }) {
  const { package: packageSlug } = await searchParams;
  const packageItem = getPackageBySlug(packageSlug);

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Your next trip starts"
        accent="right here."
        description="Tell us what you have in mind and receive a clear, personalised travel plan."
      />
      <ContactSection
        defaultDestination={packageItem?.destination}
        defaultPackage={packageItem?.name}
      />
      <MapSection />
    </>
  );
}
