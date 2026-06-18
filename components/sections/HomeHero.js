"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import Icon from "@/components/ui/Icon";

const slides = [
  {
    image: "/cab-booking-hero.png",
    alt: "White airport taxis waiting outside Bengaluru airport",
    kicker: "Bengaluru Airport Taxi - 24/7",
    title: "Reliable Airport",
    accent: "Pickup & Drop.",
    description:
      "Book on-time airport transfers with professional drivers, clean AC cabs and transparent fares.",
    position: "center",
  },
  {
    image: "/travel-hero.png",
    alt: "White SUV cab travelling on a scenic outstation road",
    kicker: "Comfortable Outstation Cabs",
    title: "Travel Farther",
    accent: "With Confidence.",
    description:
      "Choose one-way or round-trip outstation cabs for safe, comfortable journeys across Karnataka.",
    position: "center",
  },
  {
    image: "/local-city-cab-hero.png",
    alt: "White local taxi driving on a Bengaluru city road",
    kicker: "Local Bengaluru Taxi",
    title: "Book Your Cab",
    accent: "At Best Price.",
    description:
      "Hourly rentals and point-to-point city rides with verified drivers and clear fare details.",
    position: "center",
  },
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      className="hero hero-carousel"
      aria-roledescription="carousel"
      aria-label="Cab services"
    >
      <div className="hero-slides">
        {slides.map((item, index) => (
          <div
            className={`hero-slide${index === activeSlide ? " active" : ""}`}
            aria-hidden={index !== activeSlide}
            key={item.image}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: item.position }}
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content" key={slide.image}>
          <span className="hero-kicker">{slide.kicker}</span>
          <h1>{slide.title}<br /><em>{slide.accent}</em></h1>
          <p>
            {slide.description}
          </p>
          <div className="hero-actions">
            <Link href="/cabs" className="btn btn-primary">
              Check Cab Fares <Icon name="arrow" size={18} />
            </Link>
            <a href={`tel:+${siteConfig.phone}`} className="btn btn-ghost">
              <Icon name="phone" size={18} /> Call {siteConfig.phoneDisplay}
            </a>
          </div>
          <div className="hero-trust">
            <span><Icon name="check" size={17} /><b>No surge pricing</b></span>
            <span><Icon name="check" size={17} /><b>Clean AC cabs</b></span>
            <span><Icon name="check" size={17} /><b>Verified drivers</b></span>
          </div>
        </div>
      </div>
      <div className="hero-dots" aria-label={`Banner ${activeSlide + 1} of ${slides.length}`}>
        {slides.map((item, index) => (
          <span
            className={index === activeSlide ? "active" : ""}
            aria-hidden="true"
            key={item.image}
          />
        ))}
      </div>
    </section>
  );
}
