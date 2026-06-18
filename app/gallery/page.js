import PageHero from "@/components/ui/PageHero";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cab & Journey Gallery",
  description:
    "View road journeys, cab travel and destinations served by Tarun Travel Hub.",
  path: "/gallery",
  keywords: ["cab gallery Bengaluru", "outstation taxi journeys", "road trips from Bangalore"],
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="On the road"
        title="Reliable rides across"
        accent="every route."
        description="A glimpse of the city, airport and outstation journeys we serve."
      />
      <GallerySection />
      <ReviewsSection />
    </>
  );
}
