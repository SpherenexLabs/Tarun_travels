"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { createPackageEnquiryUrl } from "@/lib/whatsapp";
import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{siteConfig.tagline}</span>
          <div>
            <span className="topbar-socials" aria-label="Social media links">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tarun Travel Hub on Instagram"
                title="Instagram"
              >
                <Icon name="instagram" size={15} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tarun Travel Hub on Facebook"
                title="Facebook"
              >
                <Icon name="facebook" size={15} />
              </a>
            </span>
            <a href={`tel:+${siteConfig.phone}`}>
              <Icon name="phone" size={15} />
              {siteConfig.phoneDisplay}
            </a>
            <span>Open 24/7</span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Brand />
          <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                className={pathname === item.href ? "active" : ""}
                href={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="nav-cta"
            href={createPackageEnquiryUrl()}
            target="_blank"
            rel="noreferrer"
          >
            Plan my trip <Icon name="arrow" size={17} />
          </a>
          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>
    </>
  );
}
