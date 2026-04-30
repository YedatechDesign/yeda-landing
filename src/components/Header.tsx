"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "פיצ'רים", href: "#features" },
    { label: "דאשבורד", href: "#dashboard" },
    { label: "לקוחות", href: "#clients" },
    { label: "יצירת קשר", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,33,55,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div
              style={{
                width: 38,
                height: 38,
                background: "linear-gradient(135deg, #1A5CFF, #FF6B35)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 18,
                color: "white",
              }}
            >
              Y
            </div>
            <span style={{ color: "white", fontWeight: 800, fontSize: 22 }}>
              Yeda<span style={{ color: "#FF6B35" }}>LMS</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: 14 }}
          >
            קבעו דמו חינם
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "white", background: "none", border: "none", cursor: "pointer", fontSize: 24 }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(13,33,55,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "16px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.85)",
                padding: "12px 0",
                fontSize: 16,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: 16, display: "block", textAlign: "center" }}>
            קבעו דמו חינם
          </a>
        </div>
      )}
    </header>
  );
}
