import Link from "next/link";
import { tourPackages } from "@/data/packages";
import Icon from "@/components/ui/Icon";
import PackageGrid from "@/components/packages/PackageGrid";

export default function PackagesSection({ limit }) {
  const items = limit ? tourPackages.slice(0, limit) : tourPackages;

  return (
    <section className="packages section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span />Handpicked journeys</span>
            <h2>Popular tour <em>packages</em></h2>
          </div>
          <p>
            Thoughtfully paced getaways with comfortable stays, private travel
            and room to make every journey your own.
          </p>
        </div>
        <PackageGrid items={items} />
        {limit && (
          <div className="section-action">
            <Link className="btn btn-dark btn-auto" href="/tour-packages">
              View all packages <Icon name="arrow" size={17} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
