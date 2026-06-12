import PageHero from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Meet the Bengaluru travel team behind Tarun Travel Hub and learn how we plan dependable, personal holidays.",
  path: "/about",
  keywords: ["Bengaluru travel agency", "trusted tour operator", "holiday planner"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Travel planned with"
        accent="genuine care."
        description="Local knowledge, honest guidance and one dependable team from enquiry to homecoming."
      />
      <AboutSection extended />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
