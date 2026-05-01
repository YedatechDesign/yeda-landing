"use client";
import { useState } from "react";

const DASHBOARD_URL = "https://yeda-dashboard.vercel.app/";

function SvgIcon({ d, size = 18, color = "#0A59EB" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

const capabilities = [
  { icon: "M18 20V10 M12 20V4 M6 20v-6",                                                                title: "נתוני השלמה בזמן אמת",      desc: "כמה עובדים השלימו כל הכשרה, בכל מחלקה" },
  { icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4l3 3",                                     title: "זיהוי פערי ידע",              desc: "איתור אוטומטי של עובדים שמפגרים אחרי היעד" },
  { icon: "M23 6l-9.5 9.5-5-5L1 18",                                                                    title: "מגמות לאורך זמן",            desc: "גרפי ביצועים חודשיים, רבעוניים ושנתיים" },
  { icon: "M8 21h8 M12 17v4 M6 3H2v5a6 6 0 0 0 6 6h0M18 3h4v5a6 6 0 0 1-6 6h0M12 15a6 6 0 0 1-6-6V3h12v6a6 6 0 0 1-6 6z", title: "דירוג עובדים וצוותים", desc: "לוח מובילים לעידוד תחרות פנים-ארגונית" },
  { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8", title: "דוחות לרגולציה",          desc: "יצוא אוטומטי לביקורות, ISO ועמידה בתקנים" },
  { icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z", title: "התאמה אישית מלאה", desc: "ערכות צבעים, לוגו, KPIs — כל מה שחשוב לארגון" },
];

export default function DashboardSection() {
  const [activeView, setActiveView] = useState<"preview" | "live">("preview");

  return (
    <section id="dashboard" style={{ background: "#F5F7FD", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge-navy">דאשבורד ניהולי</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, color: "#1A1F36", marginBottom: 14, lineHeight: 1.15, }}>
            נראות מלאה על הכשרות וביצועי עובדים
          </h2>
          <p style={{ fontSize: 16, color: "#4B5472", maxWidth: 540, margin: "0 auto", lineHeight: 1.75 }}>
            דאשבורד ניהולי בזמן אמת, מותאם לצרכי הארגון. הכל במקום אחד —
            מהשלמות, דרך ציונים, ועד דוחות לרגולציה.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>

          {/* Dashboard frame */}
          <div>
            {/* View toggle */}
            <div style={{
              display: "flex", gap: 0, marginBottom: 16,
              background: "#E3E7F2", borderRadius: 10, padding: 4, width: "fit-content",
            }}>
              {(["preview", "live"] as const).map((v) => (
                <button key={v} onClick={() => setActiveView(v)} style={{
                  padding: "8px 20px", borderRadius: 7, border: "none", fontSize: 13, fontWeight: 700,
                  cursor: "pointer", fontFamily: "inherit",
                  background: activeView === v ? "#000F61" : "transparent",
                  color: activeView === v ? "white" : "#4B5472",
                  transition: "all 0.2s",
                }}>
                  {v === "preview" ? "תצוגה מקדימה" : "Live — נסו בעצמכם"}
                </button>
              ))}
            </div>

            {/* Browser chrome frame */}
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 72px rgba(0,15,97,0.18)", border: "1px solid #D0D5E8" }}>
              {/* Browser bar */}
              <div style={{ background: "#1E2A5E", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, flexShrink: 0 }} />
                  ))}
                </div>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
                  yeda-dashboard.vercel.app
                </div>
                <div style={{ background: "#0A59EB", borderRadius: 4, padding: "3px 10px", fontSize: 11, color: "white", fontWeight: 700 }}>
                  LIVE
                </div>
              </div>

              {activeView === "preview" ? (
                <div style={{
                  background: "#0F1F6B", height: 420,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: 32,
                }}>
                  <div style={{ width: "100%", maxWidth: 560 }}>
                    {/* Metric cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
                      {[
                        { label: "עובדים פעילים", value: "284", change: "+12%" },
                        { label: "הושלמו החודש", value: "1,247", change: "+23%" },
                        { label: "ממוצע ציונים", value: "87%", change: "+4%" },
                        { label: "תעודות הונפקו", value: "93", change: "+8%" },
                      ].map((m) => (
                        <div key={m.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "12px 10px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
                          <div style={{ fontSize: 18, fontWeight: 900, color: "white", lineHeight: 1 }}>{m.value}</div>
                          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", marginTop: 4, lineHeight: 1.3 }}>{m.label}</div>
                          <div style={{ fontSize: 10, color: "#4ADE80", fontWeight: 700, marginTop: 4 }}>{m.change}</div>
                        </div>
                      ))}
                    </div>
                    {/* Chart */}
                    <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 16, marginBottom: 12, border: "1px solid rgba(255,255,255,0.08)", height: 120, display: "flex", alignItems: "flex-end", gap: 6 }}>
                      {[60, 45, 75, 55, 80, 65, 90, 70, 85, 72, 95, 88].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 11 ? "#0A59EB" : "rgba(255,255,255,0.2)", borderRadius: "3px 3px 0 0" }} />
                      ))}
                    </div>
                    {/* Progress bars */}
                    {[
                      { name: "מחלקת מכירות", pct: 92 },
                      { name: "מחלקת פיתוח", pct: 78 },
                      { name: "מחלקת תמיכה", pct: 85 },
                    ].map((dept) => (
                      <div key={dept.name} style={{ marginBottom: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{dept.name}</span>
                          <span style={{ fontSize: 11, color: "#0A59EB", fontWeight: 700 }}>{dept.pct}%</span>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 4, height: 6 }}>
                          <div style={{ width: `${dept.pct}%`, background: "#0A59EB", borderRadius: 4, height: "100%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setActiveView("live")} style={{
                    background: "#0A59EB", color: "white", border: "none", borderRadius: 999,
                    padding: "12px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                  }}>
                    עברו לדאשבורד החי ←
                  </button>
                </div>
              ) : (
                <iframe src={DASHBOARD_URL} title="Yeda Dashboard" style={{ width: "100%", height: 480, border: "none", display: "block" }} />
              )}
            </div>

            <p style={{ textAlign: "center", fontSize: 13, color: "#7A84A0", marginTop: 12 }}>
              הדאשבורד המוצג הוא דמו חי בלבד — הנתונים של הארגון שלכם יישמרו בסביבה מאובטחת נפרדת.
            </p>
          </div>

          {/* Capabilities list */}
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#000F61", marginBottom: 6, lineHeight: 1.3 }}>
              מה ניתן לראות ולנהל בדאשבורד
            </h3>
            <p style={{ fontSize: 14, color: "#4B5472", marginBottom: 24, lineHeight: 1.65 }}>
              כל הנתונים שמנהל HR או L&D צריך — בלי להתאמץ לאסוף אותם.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {capabilities.map((cap) => (
                <div key={cap.title} style={{
                  display: "flex", gap: 14, padding: "14px 16px",
                  background: "white", borderRadius: 12, border: "1px solid #E3E7F2", alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9, background: "#D6E3FC",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <SvgIcon d={cap.icon} size={16} color="#0A59EB" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1F36", marginBottom: 2 }}>{cap.title}</div>
                    <div style={{ fontSize: 12, color: "#4B5472", lineHeight: 1.5 }}>{cap.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "block", textAlign: "center", marginTop: 20, fontSize: 14 }}>
              פתחו את הדאשבורד בחלון נפרד ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #dashboard > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
