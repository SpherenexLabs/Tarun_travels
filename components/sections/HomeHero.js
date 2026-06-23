"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import Icon from "@/components/ui/Icon";
import { db } from "@/lib/firebaseClient";
import { ref, onValue } from "firebase/database";

const STATIC_SLIDES = [
  {
    image: "/cab-airport-hero-ai.png",
    alt: "Cab driver helping a traveler with luggage at a pickup point",
    kicker: "Bengaluru Airport Taxi - 24/7",
    title: "Reliable Airport",
    accent: "Pickup & Drop.",
    description:
      "Book on-time airport transfers with professional drivers, clean AC cabs and transparent fares.",
    position: "center",
  },
  {
    image: "/cab-outstation-hero-ai.png",
    alt: "Outstation cab driver helping travelers with luggage on a scenic route",
    kicker: "Comfortable Outstation Cabs",
    title: "Travel Farther",
    accent: "With Confidence.",
    description:
      "Choose one-way or round-trip outstation cabs for safe, comfortable journeys across Karnataka.",
    position: "center",
  },
  {
    image: "/cab-local-hero-ai.png",
    alt: "Local cab driver opening the door for a passenger in the city",
    kicker: "Local Bengaluru Taxi",
    title: "Book Your Cab",
    accent: "At Best Price.",
    description:
      "Hourly rentals and point-to-point city rides with verified drivers and clear fare details.",
    position: "center",
  },
];

export default function HomeHero({ slides: propSlides, phone, phoneDisplay }) {
  const [slides, setSlides] = useState(
    propSlides && propSlides.length > 0 ? propSlides : STATIC_SLIDES
  );

  const displayPhone = phoneDisplay || siteConfig.phoneDisplay;
  const callPhone = phone || siteConfig.phone;

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slidesRef = ref(db, "heroSlides");
    const unsubscribe = onValue(slidesRef, (snap) => {
      if (snap.exists()) {
        const data = Object.entries(snap.val())
          .map(([id, item]) => ({ id, ...item }))
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        setSlides(data.length > 0 ? data : STATIC_SLIDES);
      } else {
        setSlides(STATIC_SLIDES);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

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
            key={`${item.image}-${index}`}
          >
            <Image
              src={item.imageUrl || item.image}
              alt={item.alt || item.title || "Hero slide"}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: item.position || "center" }}
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content" key={activeSlide}>
          <span className="hero-kicker">{slide.kicker}</span>
          <h1>
            {slide.title}
            <br />
            <em>{slide.accent}</em>
          </h1>
          <p>{slide.description}</p>
          <div className="hero-actions">
            <Link href="/cabs" className="btn btn-primary">
              Check Cab Fares <Icon name="arrow" size={18} />
            </Link>
            <a href={`tel:+${callPhone}`} className="btn btn-ghost">
              <Icon name="phone" size={18} /> Call {displayPhone}
            </a>
          </div>
          <div className="hero-trust">
            <span><Icon name="check" size={17} /><b>No surge pricing</b></span>
            <span><Icon name="check" size={17} /><b>Clean AC cabs</b></span>
            <span><Icon name="check" size={17} /><b>Verified drivers</b></span>
          </div>
        </div>
      </div>
      <div
        className="hero-dots"
        aria-label={`Banner ${activeSlide + 1} of ${slides.length}`}
      >
        {slides.map((item, index) => (
          <span
            className={index === activeSlide ? "active" : ""}
            aria-hidden="true"
            key={`dot-${index}`}
            onClick={() => setActiveSlide(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </section>
  );
}
