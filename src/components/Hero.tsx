"use client";
import { useState } from "react";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { value: "500+", label: "ארגונים משתמשים" },
    { value: "98%", label: "שביעות רצון" },
    { value: "3x", label: "מהירות הטמעה" },
    { value: "40%", label: "חיסכון בזמן הדרכה" },
  ];

  return (
    <section
      className="gradient-hero relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: 80 }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(26,92,255,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: -50,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 60, paddingBottom: 80 }}>
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(26,92,255,0.15)",
              border: "1px solid rgba(26,92,255,0.3)",
              borderRadius: 100,
              padding: "6px 16px",
              color: "#7EB8FF",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <span style={{ width: 8, height: 8, background: "#4ADE80", borderRadius: "50%", display: "inline-block" }} />
            מערכת מס' 1 לניהול ידע ארגוני בישראל
          </div>
        </div>

        {/* Main headline */}
        <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 24px" }}>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 8,
            }}
          >
            הידע הארגוני שלכם
          </h1>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 900,
              lineHeight: 1.15,
              background: "linear-gradient(90deg, #1A5CFF, #FF6B35)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            מנוהל, נגיש ואפקטיבי
          </h1>
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(16px, 2vw, 20px)",
            textAlign: "center",
            maxWidth: 620,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          פלטפורמה All-in-One לבניית הכשרות, ניהול הדרכות וניתוח ביצועי עובדים –
          עם כלי AI מתקדמים שחוסכים 40% מזמן יצירת התוכן.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 17, padding: "15px 36px" }}>
            קבעו דמו חינם →
          </a>
          <button
            className="btn-secondary"
            onClick={() => setVideoOpen(true)}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                background: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              ▶
            </span>
            צפו בסרטון הסקירה
          </button>
        </div>

        {/* Video / Platform preview */}
        <div style={{ maxWidth: 900, margin: "0 auto 64px" }}>
          <div
            className="video-container"
            onClick={() => setVideoOpen(true)}
            style={{ cursor: "pointer", aspectRatio: "16/9", position: "relative" }}
          >
            {/* Mockup preview image */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #0E2040 0%, #1A3A7A 50%, #0D4080 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 400,
              }}
            >
              {/* Dashboard mockup */}
              <div style={{ width: "90%", padding: "20px 0" }}>
                {/* Fake browser chrome */}
                <div
                  style={{
                    background: "#1E3A5F",
                    borderRadius: "12px 12px 0 0",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
                  <div
                    style={{
                      flex: 1,
                      marginRight: 16,
                      background: "#0D2848",
                      borderRadius: 6,
                      padding: "4px 12px",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)",
                      textAlign: "center",
                    }}
                  >
                    app.yedalms.io/dashboard
                  </div>
                </div>
                {/* Fake dashboard content */}
                <div
                  style={{
                    background: "#F8FAFF",
                    borderRadius: "0 0 12px 12px",
                    padding: 16,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: 10,
                  }}
                >
                  {[
                    { label: "עובדים פעילים", value: "247", color: "#1A5CFF" },
                    { label: "הכשרות בתהליך", value: "18", color: "#7C3AED" },
                    { label: "הושלמו החודש", value: "94%", color: "#10B981" },
                    { label: "שעות הדרכה", value: "1,240", color: "#FF6B35" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "white",
                        borderRadius: 8,
                        padding: "12px 10px",
                        textAlign: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      }}
                    >
                      <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
                      <div style={{ fontSize: 10, color: "#64748B", marginTop: 2 }}>{s.label}</div>
                    </div>
                  ))}
                  {/* Fake chart row */}
                  <div
                    style={{
                      gridColumn: "1 / 3",
                      background: "white",
                      borderRadius: 8,
                      padding: "12px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div style={{ fontSize: 10, color: "#64748B", marginBottom: 8, fontWeight: 600 }}>התקדמות הדרכות</div>
                    <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 40 }}>
                      {[65, 80, 45, 90, 70, 85, 75].map((h, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            background: `linear-gradient(180deg, #1A5CFF, #7C3AED)`,
                            borderRadius: "3px 3px 0 0",
                            opacity: 0.7 + i * 0.04,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      gridColumn: "3 / 5",
                      background: "white",
                      borderRadius: 8,
                      padding: "12px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div style={{ fontSize: 10, color: "#64748B", marginBottom: 6, fontWeight: 600 }}>השלמת הכשרות</div>
                    {[
                      { name: "אבטחת מידע", pct: 94 },
                      { name: "תהליכי עבודה", pct: 78 },
                      { name: "עמידה ברגולציה", pct: 88 },
                    ].map((item) => (
                      <div key={item.name} style={{ marginBottom: 6 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#64748B" }}>
                          <span>{item.name}</span>
                          <span>{item.pct}%</span>
                        </div>
                        <div style={{ background: "#E2E8F0", borderRadius: 4, height: 5 }}>
                          <div
                            style={{
                              width: `${item.pct}%`,
                              height: "100%",
                              background: "linear-gradient(90deg, #1A5CFF, #7C3AED)",
                              borderRadius: 4,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Play button overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.25)",
                transition: "background 0.3s",
              }}
            >
              <div
                className="play-btn-ring"
                style={{
                  position: "relative",
                  width: 72,
                  height: 72,
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  border: "2px solid rgba(255,255,255,0.6)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 24,
                }}
              >
                ▶
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                background: "rgba(0,0,0,0.6)",
                color: "white",
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 6,
              }}
            >
              2:45 | סקירת המערכת
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div style={{ color: "white", fontSize: 32, fontWeight: 900 }}>{stat.value}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setVideoOpen(false)}
        >
          <div
            style={{ width: "100%", maxWidth: 900, position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              style={{
                position: "absolute",
                top: -40,
                left: 0,
                color: "white",
                background: "none",
                border: "none",
                fontSize: 28,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <div style={{ aspectRatio: "16/9", background: "#000", borderRadius: 12, overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Yeda LMS סקירת המערכת"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
