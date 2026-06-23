import Link from "next/link";
import { services as staticServices } from "@/data/content";
import { getServices } from "@/lib/db";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

export default async function ServicesSection() {
  const firebaseServices = await getServices();
  const services = firebaseServices && firebaseServices.length > 0 ? firebaseServices : staticServices;

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
              <div className="service-icon">
                {service.icon && service.icon.length <= 2
                  ? <span style={{ fontSize: 30 }}>{service.icon}</span>
                  : <Icon name={service.icon} size={30} />}
              </div>
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
