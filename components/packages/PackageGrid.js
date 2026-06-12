import { tourPackages } from "@/data/packages";
import PackageCard from "@/components/packages/PackageCard";

export default function PackageGrid({ items = tourPackages }) {
  return (
    <div className="package-grid">
      {items.map((packageItem) => (
        <PackageCard packageItem={packageItem} key={packageItem.slug} />
      ))}
    </div>
  );
}
