"use client";
import { useState } from "react";
import { IconPlay } from "./Icons";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { value: "500+", label: "ארגונים משתמשים" },
    { value: "98%",  label: "שביעות רצון" },
    { value: "3×",   label: "מהירות הטמעה" },
    { value: "40%",  label: "חיסכון בזמן הדרכה" },
  ];

  return (
    <section style={{ background: "#000F61", paddingTop: 72 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px 0" }}>

        {/* Eyebrow */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{
            display: "inline-block", background: "#F08700", color: "white",
            fontSize: 11, fontWeight: 800, padding: "4px 14px", borderRadius: 3,
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            מערכת ניהול ידע ארגוני
          </span>
        </div>

        {/* Headline */}
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 20px" }}>
          <h1 style={{ color: "white", fontSize: "clamp(34px, 5.5vw, 62px)", fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
            הידע הארגוני שלכם –{" "}
            <span style={{ background: "#FFE4C2", color: "#000F61", padding: "2px 8px" }}>
              מנוהל ומניב תוצאות
            </span>
          </h1>
        </div>

        <p style={{
          color: "rgba(255,255,255,0.72)", fontSize: "clamp(15px, 2vw, 18px)",
          textAlign: "center", maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.75,
        }}>
          פלטפורמה All-in-One לבניית הכשרות, ניהול הדרכות ומעקב ביצועי עובדים –
          עם כלי AI שחוסכים 40% מזמן יצירת תוכן.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 34px" }}>
            קבעו דמו חינם ←
          </a>
          <button
            className="btn-outline-white"
            onClick={() => setVideoOpen(true)}
            style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, padding: "14px 28px" }}
          >
            <span style={{
              width: 28, height: 28, background: "#F08700", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <IconPlay size={11} color="white" />
            </span>
            צפו בסרטון הסקירה
          </button>
        </div>

        {/* Platform mockup */}
        <div style={{
          maxWidth: 900, margin: "0 auto",
          borderRadius: "12px 12px 0 0",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          borderBottom: "none",
          boxShadow: "0 -4px 60px rgba(0,0,0,0.35)",
        }}>
          {/* Browser bar */}
          <div style={{
            background: "#0A1A50", padding: "11px 16px",
            display: "flex", alignItems: "center", gap: 7,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
            <div style={{
              flex: 1, marginRight: 12, background: "rgba(255,255,255,0.07)",
              borderRadius: 5, padding: "3px 14px", fontSize: 11,
              color: "rgba(255,255,255,0.4)", textAlign: "center",
            }}>
              app.yedalms.io/dashboard
            </div>
          </div>

          {/* Dashboard preview */}
          <div style={{ background: "#F0F2F8", padding: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 14 }}>
              {[
                { label: "עובדים פעילים", val: "247",   color: "#000F61" },
                { label: "הכשרות פעילות", val: "18",    color: "#F08700" },
                { label: "השלמה החודש",   val: "94%",   color: "#10B981" },
                { label: "שעות הדרכה",    val: "1,240", color: "#000F61" },
              ].map(k => (
                <div key={k.label} style={{
                  background: "white", borderRadius: 8, padding: "12px 10px",
                  textAlign: "center", border: "1px solid #E0E4F0",
                }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: k.color }}>{k.val}</div>
                  <div style={{ fontSize: 10, color: "#6B7280", marginTop: 3 }}>{k.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 10 }}>
              <div style={{ background: "white", borderRadius: 8, padding: "14px 16px", border: "1px solid #E0E4F0" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B7280", marginBottom: 10 }}>
                  השלמת הכשרות לפי מחלקה
                </div>
                {[
                  { d: "מכירות",   p: 94, c: "#000F61" },
                  { d: "טכנולוגיה", p: 88, c: "#F08700" },
                  { d: "שיווק",    p: 76, c: "#000F61" },
                  { d: "תפעול",    p: 82, c: "#F08700" },
                ].map(r => (
                  <div key={r.d} style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginBottom: 3 }}>
                      <span style={{ color: "#1B1B1E", fontWeight: 600 }}>{r.d}</span>
                      <span style={{ color: "#000F61", fontWeight: 700 }}>{r.p}%</span>
                    </div>
                    <div style={{ background: "#F0F2F8", borderRadius: 3, height: 5 }}>
                      <div style={{ width: `${r.p}%`, height: "100%", background: r.c, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "white", borderRadius: 8, padding: "14px 16px", border: "1px solid #E0E4F0" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B7280", marginBottom: 10 }}>פעילות שבועית</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 64 }}>
                  {[55, 72, 48, 85, 68, 90, 60].map((h, i) => (
                    <div key={i} style={{
                      flex: 1, height: `${h}%`,
                      background: i === 5 ? "#F08700" : "#000F61",
                      borderRadius: "3px 3px 0 0",
                      opacity: i === 5 ? 1 : 0.5,
                    }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#6B7280", marginTop: 4 }}>
                  {["א","ב","ג","ד","ה","ו","ש"].map(d => <span key={d}>{d}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: "#000A45", padding: "28px 24px" }}>
        <div style={{
          maxWidth: 760, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12,
        }}>
          {stats.map(s => (
            <div key={s.label} className="stat-box">
              <div style={{ color: "#F08700", fontSize: 30, fontWeight: 900 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)",
          zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
        }} onClick={() => setVideoOpen(false)}>
          <div style={{ width: "100%", maxWidth: 860, position: "relative" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setVideoOpen(false)} style={{
              position: "absolute", top: -36, left: 0,
              color: "white", background: "none", border: "none", fontSize: 24, cursor: "pointer",
            }}>✕</button>
            <div style={{ aspectRatio: "16/9", background: "#000", borderRadius: 10, overflow: "hidden" }}>
              <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Yeda LMS" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
