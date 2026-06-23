export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image = "/cab-airport-hero-ai.png",
}) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <span className="eyebrow light"><span />{eyebrow}</span>
        <h1>{title} {accent && <em>{accent}</em>}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
