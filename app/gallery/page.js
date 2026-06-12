import PageHero from "@/components/ui/PageHero";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Travel Gallery",
  description:
    "Explore destination and road-trip moments from the journeys planned by Tarun Travel Hub.",
  path: "/gallery",
  keywords: ["South India travel gallery", "holiday destinations", "road trips India"],
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel diary"
        title="A glimpse of the"
        accent="road ahead."
        description="Landscapes, heritage and the small moments that turn a trip into a lasting memory."
      />
      <GallerySection />
      <ReviewsSection />
    </>
  );
}
