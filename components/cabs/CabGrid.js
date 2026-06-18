import { cabFleet } from "@/data/cabs";
import CabCard from "@/components/cabs/CabCard";

export default function CabGrid({ items = cabFleet }) {
  return (
    <div className="package-grid">
      {items.map((cab) => <CabCard cab={cab} key={cab.slug} />)}
    </div>
  );
}
