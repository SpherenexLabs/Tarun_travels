import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow"><span />404</span>
        <h1>This road does not lead anywhere.</h1>
        <p>The page may have moved, but your next journey is still waiting.</p>
        <Link className="btn btn-dark btn-auto" href="/">Return home</Link>
      </div>
    </section>
  );
}
