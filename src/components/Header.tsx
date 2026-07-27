"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import YedaLogo from "./YedaLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "יכולות", href: "/#features" },
    { label: "לומדות עם AI", href: "/labs" },
    { label: "דאשבורד", href: "/#dashboard" },
    { label: "אבטחת מידע", href: "/security" },
    { label: "יצירת קשר", href: "/#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 50,
        background: "#F08700",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.25)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(163,92,0,0.25)" : "none",
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Yeda - דף הבית" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <YedaLogo height={44} priority />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#000F61",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0A1575")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000F61")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
          <a
            href="#contact"
            style={{
              background: "white", color: "#9A3F00", fontWeight: 700,
              padding: "10px 22px", fontSize: 14, borderRadius: 999,
              textDecoration: "none", display: "inline-block",
              transition: "transform 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            קבעו דמו חינם
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "סגירת תפריט הניווט" : "פתיחת תפריט הניווט"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          style={{
            display: "none",
            color: "#000F61",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 22,
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          style={{
            background: "#F08700",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                color: "#000F61",
                padding: "13px 0",
                fontSize: 16,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              marginTop: 16, display: "block", textAlign: "center",
              background: "white", color: "#9A3F00", fontWeight: 700,
              padding: "13px", fontSize: 15, borderRadius: 999, textDecoration: "none",
            }}
          >
            קבעו דמו חינם
          </a>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
