import HomeHero from "@/components/sections/HomeHero";
import AboutSection from "@/components/sections/AboutSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Bengaluru Travel Agency, Tour Packages & Cabs",
  description:
    "Plan South India tours, private outstation cabs, hotel stays and custom holiday packages with Tarun Travel Hub in Bengaluru.",
  path: "/",
  keywords: [
    "travel agency in Bengaluru",
    "South India tour packages",
    "outstation cabs Bengaluru",
    "custom holiday packages",
  ],
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <PackagesSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <MapSection />
    </>
  );
}
