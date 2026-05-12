"use client";
import { useState, useEffect } from "react";

const statTargets = [
  { end: 83, suffix: "%", label: "מהארגונים מדווחים על אובדן ידע בעזיבת עובדים" },
  { end: 4, prefix: "×", label: "פחות זמן לבניית הכשרה עם AI" },
  { end: 97, suffix: "%", label: "שביעות רצון מנהלים לאחר 90 יום" },
];

export default function HeroNew() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(statTargets.map(s => Math.round(s.end * eased)));
      if (progress < 1) requestAnimationFrame(frame);
    };
    const delay = setTimeout(() => requestAnimationFrame(frame), 500);
    return () => clearTimeout(delay);
  }, [isVisible]);

  return (
    <section className="no-pad-bottom" style={{ background: "#000F61", paddingTop: 72, paddingBottom: 0, overflow: "hidden", position: "relative" }}>

      {/* Animated background glows */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "8%", right: "12%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,122,255,0.16) 0%, transparent 70%)", animation: "heroGlow1 7s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "0%", left: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(10,89,235,0.1) 0%, transparent 70%)", animation: "heroGlow2 9s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "40%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,122,255,0.08) 0%, transparent 70%)", animation: "heroGlow3 5s ease-in-out infinite" }} />
      </div>

      <div
        className="hero-inner"
        style={{
          maxWidth: 1160, margin: "0 auto", padding: "72px 24px 56px",
          textAlign: "center", position: "relative", zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Badge with pulse glow */}
        <div style={{ marginBottom: 24 }}>
          <span style={{
            background: "#0A59EB", color: "white", fontSize: 11, fontWeight: 800,
            padding: "5px 14px", borderRadius: 4, letterSpacing: "0.1em",
            textTransform: "uppercase", display: "inline-block",
            animation: "badgePulse 3.5s ease-in-out infinite",
          }}>
            פלטפורמת ניהול ידע ארגוני
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(30px, 5vw, 60px)", fontWeight: 900, color: "white",
            lineHeight: 1.15, marginBottom: 22, maxWidth: 820, marginInline: "auto",
          }}
        >
          הפסיקו לאבד ידע ארגוני.
          <br />
          <span style={{ color: "#76A4F9" }}>התחילו לנהל אותו.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.75)",
            maxWidth: 620, marginInline: "auto", lineHeight: 1.7, marginBottom: 36,
          }}
        >
          מערכת אחת לבניית הכשרות, ניהול עובדים, יצירת תוכן AI ומדידת
          ביצועים — מותאמת לצרכי הארגון שלכם.
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
            קבעו דמו חינם ←
          </a>
          <a href="#features" className="btn-outline-white" style={{ fontSize: 16, padding: "14px 36px" }}>
            ראו את הפיצ׳רים
          </a>
        </div>

        {/* Stats strip with count-up */}
        <div
          style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1, background: "rgba(255,255,255,0.08)", borderRadius: 14,
            overflow: "hidden", maxWidth: 860, marginInline: "auto",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {statTargets.map((s, i) => (
            <div key={i} className="hero-stats-cell" style={{ background: "rgba(10,89,235,0.18)", padding: "28px 24px", textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 900, color: "white",
                lineHeight: 1, marginBottom: 10, transition: "all 0.1s",
                textShadow: "0 0 32px rgba(255,255,255,0.3)",
              }}>
                {s.prefix || ""}{counts[i]}{s.suffix || ""}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.5, fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroGlow1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(-40px, 25px) scale(1.18); opacity: 1; }
        }
        @keyframes heroGlow2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(30px, -30px) scale(1.12); opacity: 0.9; }
        }
        @keyframes heroGlow3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(15px, 20px) scale(1.2); opacity: 0.8; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,122,255,0); }
          50% { box-shadow: 0 0 0 10px rgba(0,122,255,0.18); }
        }
        @media (max-width: 768px) {
          .hero-inner { padding: 40px 20px 32px !important; }
          .hero-ctas  { margin-bottom: 28px !important; }
          .hero-stats-cell { padding: 18px 14px !important; }
        }
      `}</style>
    </section>
  );
}
