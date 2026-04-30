"use client";
import { useState } from "react";
import { IconPlay } from "./Icons";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section style={{ background: "#000F61", paddingTop: 72 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 24px 0" }}>

        {/* Eyebrow */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(240,135,0,0.15)", border: "1px solid rgba(240,135,0,0.4)",
            color: "#FFB84D", fontSize: 13, fontWeight: 700,
            padding: "6px 16px", borderRadius: 100,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F08700", display: "inline-block" }} />
            מעל 500 ארגונים כבר עושים את זה נכון
          </span>
        </div>

        {/* Headline */}
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 22px" }}>
          <h1 style={{ color: "white", fontSize: "clamp(36px, 5.5vw, 66px)", fontWeight: 900, lineHeight: 1.08, margin: 0, letterSpacing: "-0.5px" }}>
            הפסיקו לאבד ידע.
            <br />
            <span style={{ background: "#FFE4C2", color: "#000F61", padding: "2px 10px", display: "inline-block", marginTop: 8 }}>
              התחילו לנהל אותו.
            </span>
          </h1>
        </div>

        <p style={{
          color: "rgba(255,255,255,0.7)", fontSize: "clamp(16px, 2vw, 19px)",
          textAlign: "center", maxWidth: 580, margin: "0 auto 44px", lineHeight: 1.75,
        }}>
          Yeda היא הפלטפורמה היחידה שמשלבת ניהול הכשרות, יצירת תוכן AI ומעקב ביצועים
          – במקום אחד, בעברית, עם תמיכה מקומית.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          <a href="#contact" style={{
            background: "#F08700", color: "white", fontWeight: 800,
            padding: "15px 36px", borderRadius: 6, fontSize: 17,
            textDecoration: "none", display: "inline-block", transition: "background 0.2s",
            fontFamily: "inherit",
          }}>
            קבעו דמו חינם – 30 דקות ←
          </a>
          <button onClick={() => setVideoOpen(true)} style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "transparent", color: "white", fontWeight: 700,
            padding: "15px 28px", borderRadius: 6, fontSize: 16,
            border: "2px solid rgba(255,255,255,0.4)", cursor: "pointer",
            transition: "border-color 0.2s", fontFamily: "inherit",
          }}>
            <span style={{
              width: 30, height: 30, background: "#F08700", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <IconPlay size={12} color="white" />
            </span>
            צפו בסרטון (2 דק׳)
          </button>
        </div>

        {/* Platform mockup */}
        <div style={{
          maxWidth: 920, margin: "0 auto",
          borderRadius: "14px 14px 0 0",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "none",
          boxShadow: "0 -8px 80px rgba(0,0,0,0.4)",
        }}>
          {/* Browser bar */}
          <div style={{ background: "#07194A", padding: "11px 18px", display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
            <div style={{
              flex: 1, marginRight: 14, background: "rgba(255,255,255,0.06)",
              borderRadius: 5, padding: "4px 14px", fontSize: 11,
              color: "rgba(255,255,255,0.35)", textAlign: "center",
            }}>
              app.yedalms.io
            </div>
          </div>
          {/* App content */}
          <div style={{ background: "#F0F2F8", padding: "18px 18px 0" }}>
            {/* Top nav simulation */}
            <div style={{ background: "#000F61", borderRadius: "8px 8px 0 0", padding: "10px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 16 }}>
                {["ראשי", "הכשרות", "משתמשים", "תוכן", "דוחות"].map(t => (
                  <span key={t} style={{ color: t === "ראשי" ? "#F08700" : "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#F08700", fontSize: 11, fontWeight: 800, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>מ</div>
              </div>
            </div>
            {/* KPIs */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, padding: "14px 0 10px" }}>
              {[
                { label: "עובדים פעילים", val: "247", delta: "+12", color: "#000F61" },
                { label: "הכשרות פעילות", val: "18", delta: "+3", color: "#F08700" },
                { label: "ממוצע השלמה", val: "94%", delta: "+6%", color: "#10B981" },
                { label: "שעות הדרכה", val: "1,240", delta: "+180", color: "#000F61" },
              ].map(k => (
                <div key={k.label} style={{ background: "white", borderRadius: 8, padding: "12px 14px", border: "1px solid #E0E4F0" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: k.color }}>{k.val}</div>
                  <div style={{ fontSize: 10, color: "#6B7280", margin: "2px 0" }}>{k.label}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#10B981" }}>↑ {k.delta} החודש</div>
                </div>
              ))}
            </div>
            {/* Charts */}
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 10, paddingBottom: 0 }}>
              <div style={{ background: "white", borderRadius: "8px 8px 0 0", padding: "14px 16px 16px", border: "1px solid #E0E4F0", borderBottom: "none" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B7280", marginBottom: 12 }}>השלמת הכשרות לפי מחלקה</div>
                {[
                  { d: "מכירות", p: 94, c: "#000F61" },
                  { d: "טכנולוגיה", p: 88, c: "#F08700" },
                  { d: "שיווק", p: 76, c: "#000F61" },
                  { d: "תפעול", p: 82, c: "#F08700" },
                ].map(r => (
                  <div key={r.d} style={{ marginBottom: 9 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginBottom: 3, color: "#1B1B1E", fontWeight: 600 }}>
                      <span>{r.d}</span><span style={{ color: r.c }}>{r.p}%</span>
                    </div>
                    <div style={{ background: "#F0F2F8", borderRadius: 3, height: 6 }}>
                      <div style={{ width: `${r.p}%`, height: "100%", background: r.c, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "white", borderRadius: "8px 8px 0 0", padding: "14px 16px 16px", border: "1px solid #E0E4F0", borderBottom: "none" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B7280", marginBottom: 10 }}>פעילות שבועית</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 70 }}>
                  {[45, 68, 52, 80, 63, 90, 55].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? "#F08700" : "#000F61", borderRadius: "3px 3px 0 0", opacity: i === 5 ? 1 : 0.45 }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#6B7280", marginTop: 5 }}>
                  {["א","ב","ג","ד","ה","ו","ש"].map(d => <span key={d}>{d}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats stripe */}
      <div style={{ background: "#000A45", marginTop: 0, padding: "24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {[
            { val: "500+", label: "ארגונים" },
            { val: "98%", label: "שביעות רצון" },
            { val: "40%", label: "חיסכון בזמן" },
            { val: "72h", label: "זמן הטמעה" },
          ].map(s => (
            <div key={s.label} style={{ border: "1.5px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "16px 12px", textAlign: "center" }}>
              <div style={{ color: "#F08700", fontSize: 26, fontWeight: 900 }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {videoOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setVideoOpen(false)}>
          <div style={{ width: "100%", maxWidth: 860, position: "relative" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setVideoOpen(false)} style={{ position: "absolute", top: -36, left: 0, color: "white", background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>✕</button>
            <div style={{ aspectRatio: "16/9", background: "#000", borderRadius: 10, overflow: "hidden" }}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Yeda LMS" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media" allowFullScreen style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
