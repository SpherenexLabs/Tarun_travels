import Icon from "@/components/ui/Icon";

const trustItems = [
  ["shield", "Verified Drivers", "Experienced and professional drivers"],
  ["car", "Clean Vehicles", "Well-maintained AC cabs"],
  ["clock", "24/7 Service", "Booking support day and night"],
  ["check", "Transparent Fare", "Charges explained before travel"],
];

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container trust-grid">
        {trustItems.map(([icon, title, text]) => (
          <div key={title}>
            <span><Icon name={icon} size={28} /></span>
            <div><b>{title}</b><small>{text}</small></div>
          </div>
        ))}
      </div>
    </section>
  );
}
