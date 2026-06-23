import HomeHero from "@/components/sections/HomeHero";
import FareSection from "@/components/sections/FareSection";
import RoutesSection from "@/components/sections/RoutesSection";
import TrustSection from "@/components/sections/TrustSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import { createPageMetadata } from "@/lib/seo";
import { getHeroSlides, getSiteSettings } from "@/lib/db";
import { siteConfig } from "@/data/site";

export const metadata = createPageMetadata({
  title: "Cab Booking in Bengaluru | Airport, Local & Outstation",
  description:
    "Book reliable airport taxi, local rental and outstation cabs in Bengaluru with transparent fares and 24/7 support.",
  path: "/",
  keywords: [
    "cab booking Bengaluru",
    "airport taxi Bangalore",
    "outstation cabs Bengaluru",
    "local cab rental Bangalore",
  ],
});

export default async function HomePage() {
  const [heroSlides, siteSettings] = await Promise.all([
    getHeroSlides(),
    getSiteSettings(),
  ]);

  const phone =
    siteSettings?.phoneRaw && siteSettings.phoneRaw !== "919876543210"
      ? siteSettings.phoneRaw
      : siteConfig.phone;
  const phoneDisplay =
    siteSettings?.phone && siteSettings.phone !== "+91 98765 43210"
      ? siteSettings.phone
      : siteConfig.phoneDisplay;

  return (
    <>
      <HomeHero slides={heroSlides} phone={phone} phoneDisplay={phoneDisplay} />
      <FareSection type="airport" />
      <FareSection type="outstation" />
      <FareSection type="local" />
      <RoutesSection />
      <TrustSection />
      <ReviewsSection />
      <ContactSection />
      <MapSection />
    </>
  );
}
