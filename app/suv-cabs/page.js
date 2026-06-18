import PageHero from "@/components/ui/PageHero";
import FareCard from "@/components/cabs/FareCard";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";
import { cabFleet } from "@/data/cabs";
import { createPageMetadata } from "@/lib/seo";

const suvSlugs = ["ertiga", "innova", "innova-crysta"];
const suvFleet = cabFleet.filter((cab) => suvSlugs.includes(cab.slug));

export const metadata = createPageMetadata({
  title: "SUV Cabs in Bengaluru | Ertiga, Innova & Crysta",
  description:
    "Book spacious SUV cabs in Bengaluru including Ertiga, Toyota Innova and Innova Crysta for airport, local and outstation travel.",
  path: "/suv-cabs",
  keywords: [
    "SUV cabs Bengaluru",
    "Ertiga cab Bangalore",
    "Innova taxi Bengaluru",
    "Innova Crysta cab booking",
    "7 seater cab Bangalore",
  ],
  image: "/cab-fare-card.png",
});

export default function SuvCabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Spacious SUV cabs"
        title="More room for families"
        accent="and groups."
        description="Compare Ertiga, Innova and Innova Crysta fares for airport transfers, local rental and outstation journeys."
      />

      <section className="fare-section fare-section-airport suv-fare-section">
        <div className="container">
          <div className="fare-section-head">
            <span>SUV cab options</span>
            <h2>Choose Your SUV Cab</h2>
            <p>Compare airport, local and outstation fares for spacious AC vehicles.</p>
          </div>
          <div className="fare-grid">
            {suvFleet.map((cab) => (
              <FareCard
                cab={cab}
                type="airport"
                showAllFares
                key={cab.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <ContactSection />
    </>
  );
}
