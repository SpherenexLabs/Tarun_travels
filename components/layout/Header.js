"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header nav-header">
      <div className="container nav header-nav">
        <Brand className="header-brand" />

        <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              className={
                !item.href.includes("?") &&
                !item.href.includes("#") &&
                pathname === item.href
                  ? "active"
                  : ""
              }
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
              aria-current={
                !item.href.includes("?") &&
                !item.href.includes("#") &&
                pathname === item.href
                  ? "page"
                  : undefined
              }
            >
              <Icon name={item.icon} size={17} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="nav-phone" href={`tel:+${siteConfig.phone}`}>
            <span className="nav-phone-icon">
              <Icon name="phone" size={19} />
            </span>
            <span>
              <small>24/7 cab booking</small>
              <strong>{siteConfig.phoneDisplay}</strong>
            </span>
          </a>
          <Link className="header-book-btn" href="/contact#booking">
            Book a Cab
          </Link>
        </div>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}
