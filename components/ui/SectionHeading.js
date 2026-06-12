export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  centered = false,
  light = false,
}) {
  return (
    <div className={centered ? "center-head" : "section-heading"}>
      <span className={`eyebrow${light ? " light" : ""}`}>
        <span />
        {eyebrow}
        {centered && <span />}
      </span>
      <h2>
        {title} {accent && <em>{accent}</em>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
