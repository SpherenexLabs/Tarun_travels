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
          eyebrow="Everything under one roof"
          title="We take care of the"
          accent="journey"
          description="From the first mile to the last memory, our team handles the details."
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-icon"><Icon name={service.icon} size={30} /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/contact">Enquire now <Icon name="arrow" size={15} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
