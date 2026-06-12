import Link from "next/link";

export default function Brand({ className = "" }) {
  return (
    <Link className={`brand ${className}`.trim()} href="/">
      <span className="brand-mark">T</span>
      <span>
        <b>TARUN</b>
        <small>TRAVEL HUB</small>
      </span>
    </Link>
  );
}
