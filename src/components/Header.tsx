"use client";
import { useState, useEffect } from "react";
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
    { label: "פיצ'רים", href: "/#features" },
    { label: "דאשבורד", href: "/#dashboard" },
    { label: "אודות", href: "/about" },
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
        background: "#000F61",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.12)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.25)" : "none",
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
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <YedaLogo color="white" height={30} />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-nav">
          <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
            קבעו דמו חינם
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            color: "white",
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
          style={{
            background: "#000F61",
            borderTop: "1px solid rgba(255,255,255,0.1)",
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
                color: "rgba(255,255,255,0.8)",
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
            className="btn-primary"
            style={{ marginTop: 16, display: "block", textAlign: "center" }}
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
