import Link from "next/link";

export default function Brand({ className = "" }) {
  return (
    <Link className={`brand ${className}`.trim()} href="/">
      <span className="brand-mark">
        <b>T</b>
        <small>TH</small>
      </span>
      <span>
        <b>Tarun Travel Hub</b>
        <small>Airport, Local & Outstation</small>
      </span>
    </Link>
  );
}
