import Link from "next/link";
import { cabFleet } from "@/data/cabs";
import CabGrid from "@/components/cabs/CabGrid";
import Icon from "@/components/ui/Icon";

export default function FleetSection({ limit }) {
  const items = limit ? cabFleet.slice(0, limit) : cabFleet;

  return (
    <section className="packages section" id="fleet">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span />Choose your cab</span>
            <h2>Our Cab Fleet & Fares</h2>
          </div>
          <p>
            Select a clean, air-conditioned cab for airport pickup, local rental
            or outstation travel. Displayed fares are indicative.
          </p>
        </div>
        <CabGrid items={items} />
        {limit && (
          <div className="section-action">
            <Link className="btn btn-dark btn-auto" href="/cabs">
              View All Cabs <Icon name="arrow" size={17} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
