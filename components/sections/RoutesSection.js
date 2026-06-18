import { popularRoutes } from "@/data/cabs";
import { createCabEnquiryUrl } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";

export default function RoutesSection() {
  return (
    <section className="routes section">
      <div className="container">
        <div className="center-head">
          <span className="eyebrow"><span />Popular one-way routes<span /></span>
          <h2>Book Cabs From Bengaluru</h2>
          <p>Quick booking for frequently travelled outstation routes.</p>
        </div>
        <div className="route-grid">
          {popularRoutes.map((route) => (
            <article key={route.to}>
              <Icon name="map" size={25} />
              <div>
                <h3>{route.from} to {route.to}</h3>
                <small>{route.distance} approximately</small>
              </div>
              <span>Starts from <b>{route.fare}</b></span>
              <a
                href={createCabEnquiryUrl(`${route.from} to ${route.to}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now <Icon name="arrow" size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
