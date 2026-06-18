import PageHero from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Meet the Bengaluru cab service team behind Tarun Travel Hub and learn about our reliable vehicles and drivers.",
  path: "/about",
  keywords: ["Bengaluru cab service", "trusted taxi operator", "professional cab drivers"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Reliable rides with"
        accent="genuine care."
        description="Clean vehicles, professional drivers and clear communication from booking to drop."
      />
      <AboutSection extended />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
