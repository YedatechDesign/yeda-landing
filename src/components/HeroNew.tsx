const statTargets = [
  { end: 83, suffix: "%", label: "מהארגונים מדווחים על אובדן ידע בעזיבת עובדים" },
  { end: 4, prefix: "×", label: "פחות זמן לבניית הכשרה עם AI" },
  { end: 97, suffix: "%", label: "שביעות רצון מנהלים לאחר 90 יום" },
];

export default function HeroNew() {
  return (
    <section className="no-pad-bottom" style={{ background: "#000F61", paddingTop: 72, paddingBottom: 0, overflow: "hidden", position: "relative" }}>

      <div
        className="hero-inner no-reveal"
        style={{
          maxWidth: 1160, margin: "0 auto", padding: "72px 24px 56px",
          textAlign: "center", position: "relative", zIndex: 1,
        }}
      >
        {/* Badge with pulse glow */}
        <div style={{ marginBottom: 24 }}>
          <span style={{
            background: "white", color: "#9A3F00", fontSize: 11, fontWeight: 800,
            padding: "5px 14px", borderRadius: 4, letterSpacing: "0.1em",
            textTransform: "uppercase", display: "inline-block",
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
          מערכת LMS לניהול למידה בארגונים וחברות:
          <br />
          <span style={{ color: "#FFC170" }}>מפסיקים לאבד ידע ארגוני</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.75)",
            maxWidth: 620, marginInline: "auto", lineHeight: 1.7, marginBottom: 36,
          }}
        >
          מערכת LMS - מערכת ניהול למידה בארגון.
          <br />
          פיתוח לומדות וניהול ידע ארגוני עם סוכני AI
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
            קבעו דמו חינם ←
          </a>
          <a href="#features" className="btn-outline-white" style={{ fontSize: 16, padding: "14px 36px" }}>
            ראו את היכולות
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
            <div key={i} className="hero-stats-cell" style={{ background: "rgba(255,255,255,0.16)", padding: "28px 24px", textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 900, color: "white",
                lineHeight: 1, marginBottom: 10,
              }}>
                {s.prefix || ""}{s.end}{s.suffix || ""}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.5, fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner { padding: 40px 20px 32px !important; }
          .hero-ctas  { margin-bottom: 28px !important; }
          .hero-stats-cell { padding: 18px 14px !important; }
        }
      `}</style>
    </section>
  );
}
