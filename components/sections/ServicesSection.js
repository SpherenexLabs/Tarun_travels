import Link from "next/link";
import { services } from "@/data/content";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesSection() {
  return (
    <section className="services section">
      <div className="container">
        <SectionHeading
          centered
          eyebrow="Our travel services"
          title="Complete Cab Services"
          description="One dependable team for airport, local, outstation and corporate cab requirements."
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-icon"><Icon name={service.icon} size={30} /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/contact">Book Now <Icon name="arrow" size={15} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
