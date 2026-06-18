import { cabFleet } from "@/data/cabs";
import FareCard from "@/components/cabs/FareCard";

const sectionCopy = {
  airport: {
    eyebrow: "Bengaluru airport taxi",
    title: "Airport Pickup & Drop Fare",
    description: "Fixed starting fares for Bengaluru airport pickup and drop.",
  },
  outstation: {
    eyebrow: "Round-trip taxi fare",
    title: "Outstation Cab Fare Per Km",
    description: "Choose a vehicle for outstation round trips from Bengaluru.",
  },
  local: {
    eyebrow: "Hourly city rental",
    title: "Local Cab Packages",
    description: "Book flexible city cab packages for meetings, shopping and local travel.",
  },
};

export default function FareSection({ type }) {
  const copy = sectionCopy[type];
  const items = type === "outstation"
    ? cabFleet.filter((cab) => cab.slug !== "hatchback")
    : cabFleet;

  return (
    <section className={`fare-section fare-section-${type}`}>
      <div className="container">
        <div className="fare-section-head">
          <span>{copy.eyebrow}</span>
          <h2>{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="fare-grid">
          {items.map((cab) => <FareCard cab={cab} type={type} key={`${type}-${cab.slug}`} />)}
        </div>
      </div>
    </section>
  );
}
