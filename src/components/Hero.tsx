"use client";
import { useState } from "react";
import { IconPlay } from "./Icons";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { value: "500+", label: "ארגונים משתמשים" },
    { value: "98%", label: "שביעות רצון" },
    { value: "3×", label: "מהירות הטמעה" },
    { value: "40%", label: "חיסכון בזמן הדרכה" },
  ];

  return (
    <section style={{ background: "#000F61", paddingTop: 72 }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px 64px",
        }}
      >
        {/* Eyebrow */}
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              background: "#F08700",
              color: "white",
              fontSize: 12,
              fontWeight: 800,
              padding: "5px 16px",
              borderRadius: 3,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            מערכת ניהול ידע ארגוני
          </span>
        </div>

        {/* Headline */}
        <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 24px" }}>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(36px, 5.5vw, 66px)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            הידע הארגוני שלכם –{" "}
            <span style={{ background: "#FFE4C2", color: "#000F61", padding: "0 8px", display: "inline" }}>
              מנוהל ומניב תוצאות
            </span>
          </h1>
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(16px, 2vw, 20px)",
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto 44px",
            lineHeight: 1.75,
          }}
        >
          פלטפורמה All-in-One לבניית הכשרות, ניהול הדרכות ומעקב ביצועי עובדים –
          עם כלי AI שחוסכים 40% מזמן יצירת תוכן.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 72,
          }}
        >
          <a
            href="#contact"
            className="btn-primary"
            style={{ fontSize: 17, padding: "15px 36px" }}
          >
            קבעו דמו חינם ←
          </a>
          <button
            className="btn-outline-white"
            onClick={() => setVideoOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 16,
              padding: "15px 30px",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                background: "#F08700",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <IconPlay size={12} color="white" />
            </span>
            צפו בסרטון הסקירה
          </button>
        </div>

        {/* Dashboard mockup */}
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto 72px",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
            cursor: "pointer",
          }}
          onClick={() => setVideoOpen(true)}
        >
          {/* Browser bar */}
          <div
            style={{
              background: "#0A1A50",
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
            <div
              style={{
                flex: 1,
                marginRight: 14,
                background: "rgba(255,255,255,0.07)",
                borderRadius: 5,
                padding: "4px 14px",
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
              }}
            >
              app.yedalms.io/dashboard
            </div>
          </div>

          {/* Content */}
          <div style={{ background: "#F0F2F8", padding: 20 }}>
            {/* KPI row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
                marginBottom: 16,
              }}
            >
              {[
                { label: "עובדים פעילים", val: "247", color: "#000F61" },
                { label: "הכשרות פעילות", val: "18", color: "#F08700" },
                { label: "השלמה החודש", val: "94%", color: "#10B981" },
                { label: "שעות הדרכה", val: "1,240", color: "#000F61" },
              ].map((k) => (
                <div
                  key={k.label}
                  style={{
                    background: "white",
                    borderRadius: 8,
                    padding: "14px 12px",
                    textAlign: "center",
                    border: "1px solid #DDE1EF",
                  }}
                >
                  <div style={{ fontSize: 22, fontWeight: 800, color: k.color }}>{k.val}</div>
                  <div style={{ fontSize: 11, color: "#A1A5C0", marginTop: 3 }}>{k.label}</div>
                </div>
              ))}
            </div>

            {/* Chart row */}
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 12 }}>
              <div
                style={{
                  background: "white",
                  borderRadius: 8,
                  padding: "14px 16px",
                  border: "1px solid #DDE1EF",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#A1A5C0", marginBottom: 12 }}>
                  השלמת הכשרות לפי מחלקה
                </div>
                {[
                  { d: "מכירות", p: 94, c: "#000F61" },
                  { d: "טכנולוגיה", p: 88, c: "#F08700" },
                  { d: "שיווק", p: 76, c: "#000F61" },
                  { d: "תפעול", p: 82, c: "#F08700" },
                ].map((r) => (
                  <div key={r.d} style={{ marginBottom: 9 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 10,
                        color: "#1B1B1E",
                        marginBottom: 4,
                        fontWeight: 600,
                      }}
                    >
                      <span>{r.d}</span>
                      <span>{r.p}%</span>
                    </div>
                    <div style={{ background: "#F0F2F8", borderRadius: 3, height: 6 }}>
                      <div
                        style={{
                          width: `${r.p}%`,
                          height: "100%",
                          background: r.c,
                          borderRadius: 3,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: 8,
                  padding: "14px 16px",
                  border: "1px solid #DDE1EF",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#A1A5C0", marginBottom: 12 }}>
                  פעילות שבועית
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 6,
                    height: 70,
                  }}
                >
                  {[55, 72, 48, 85, 68, 90, 60].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: i === 5 ? "#F08700" : "#000F61",
                        borderRadius: "3px 3px 0 0",
                        opacity: i === 5 ? 1 : 0.55,
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 9,
                    color: "#A1A5C0",
                    marginTop: 4,
                  }}
                >
                  {["א", "ב", "ג", "ד", "ה", "ו", "ש"].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Play overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 16,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <div style={{ color: "#F08700", fontSize: 34, fontWeight: 900 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ paddingBottom: 80 }} />
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setVideoOpen(false)}
        >
          <div
            style={{ width: "100%", maxWidth: 880, position: "relative" }}
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
                fontSize: 26,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <div
              style={{
                aspectRatio: "16/9",
                background: "#000",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
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
