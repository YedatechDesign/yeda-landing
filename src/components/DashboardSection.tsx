"use client";
import { useState } from "react";

function SvgIcon({ d, size = 18, color = "#F08700" }: { d: string; size?: number; color?: string }) {
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

type PeriodKey = "month" | "quarter" | "year";

const PERIODS: { key: PeriodKey; label: string }[] = [
  { key: "month",   label: "החודש" },
  { key: "quarter", label: "רבעון" },
  { key: "year",    label: "שנה" },
];

const DATA: Record<PeriodKey, {
  metrics: { label: string; value: string; change: string }[];
  bars: number[];
  depts: { name: string; pct: number }[];
}> = {
  month: {
    metrics: [
      { label: "עובדים פעילים", value: "284", change: "+12%" },
      { label: "הכשרות שהושלמו", value: "1,247", change: "+23%" },
      { label: "ממוצע ציונים", value: "87%", change: "+4%" },
      { label: "תעודות שהונפקו", value: "93", change: "+8%" },
    ],
    bars: [60, 45, 75, 55, 80, 65, 90, 70, 85, 72, 95, 88],
    depts: [
      { name: "מחלקת מכירות", pct: 92 },
      { name: "מחלקת תפעול", pct: 78 },
      { name: "מחלקת שירות", pct: 85 },
    ],
  },
  quarter: {
    metrics: [
      { label: "עובדים פעילים", value: "612", change: "+18%" },
      { label: "הכשרות שהושלמו", value: "3,904", change: "+31%" },
      { label: "ממוצע ציונים", value: "89%", change: "+6%" },
      { label: "תעודות שהונפקו", value: "274", change: "+15%" },
    ],
    bars: [50, 62, 58, 70, 66, 80, 76, 84, 79, 90, 86, 94],
    depts: [
      { name: "מחלקת מכירות", pct: 88 },
      { name: "מחלקת תפעול", pct: 83 },
      { name: "מחלקת שירות", pct: 90 },
    ],
  },
  year: {
    metrics: [
      { label: "עובדים פעילים", value: "1,940", change: "+41%" },
      { label: "הכשרות שהושלמו", value: "15,802", change: "+52%" },
      { label: "ממוצע ציונים", value: "91%", change: "+9%" },
      { label: "תעודות שהונפקו", value: "1,118", change: "+27%" },
    ],
    bars: [40, 48, 55, 60, 64, 70, 73, 80, 84, 88, 92, 97],
    depts: [
      { name: "מחלקת מכירות", pct: 94 },
      { name: "מחלקת תפעול", pct: 87 },
      { name: "מחלקת שירות", pct: 91 },
    ],
  },
};

export default function DashboardSection() {
  const [period, setPeriod] = useState<PeriodKey>("month");
  const d = DATA[period];

  return (
    <section id="dashboard" style={{ background: "#F5F7FD", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge-navy">דאשבורד ניהולי</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, color: "#1A1F36", marginBottom: 14, lineHeight: 1.15, }}>
            סטטיסטיקה והתקדמות בתוך המערכת
          </h2>
          <p style={{ fontSize: 16, color: "#4B5472", maxWidth: 540, margin: "0 auto", lineHeight: 1.75 }}>
            נראות מלאה על הכשרות וביצועי עובדים בזמן אמת — מהשלמות, דרך ציונים,
            ועד דוחות לרגולציה. מותאם לנתוני הארגון שלכם.
          </p>
        </div>

        <div className="dashboard-grid" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>

          {/* Dashboard frame */}
          <div>
            <div className="float-slow" style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 72px rgba(0,15,97,0.18)", border: "1px solid #D0D5E8" }}>
              {/* Window chrome */}
              <div style={{ background: "#1E2A5E", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c, flexShrink: 0 }} />
                  ))}
                </div>
                <span style={{ flex: 1, color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 700, textAlign: "center" }}>
                  סטטיסטיקה והתקדמות בתוך המערכת
                </span>
                <div style={{ width: 54 }} />
              </div>

              {/* Body */}
              <div style={{ background: "#0F1F6B", padding: "22px 24px" }}>
                {/* Period tabs */}
                <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
                  {PERIODS.map((p) => {
                    const active = p.key === period;
                    return (
                      <button
                        key={p.key}
                        onClick={() => setPeriod(p.key)}
                        style={{
                          padding: "7px 18px", borderRadius: 999, border: "none",
                          fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                          background: active ? "#F08700" : "rgba(255,255,255,0.08)",
                          color: active ? "white" : "rgba(255,255,255,0.7)",
                          transition: "all 0.2s",
                        }}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>

                {/* Metric cards */}
                <div className="metric-cards" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
                  {d.metrics.map((m) => (
                    <div key={m.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 10px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div style={{ fontSize: 23, fontWeight: 900, color: "white", lineHeight: 1 }}>{m.value}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 5, lineHeight: 1.3 }}>{m.label}</div>
                      <div style={{ fontSize: 12, color: "#4ADE80", fontWeight: 700, marginTop: 5 }}>{m.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 14, marginBottom: 14, border: "1px solid rgba(255,255,255,0.08)", height: 120, display: "flex", alignItems: "flex-end", gap: 6 }}>
                  {d.bars.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1, height: `${h}%`,
                        background: i === d.bars.length - 1 ? "#F08700" : "rgba(255,255,255,0.22)",
                        borderRadius: "3px 3px 0 0",
                        transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  ))}
                </div>

                {/* Department progress */}
                {d.depts.map((dept) => (
                  <div key={dept.name} style={{ marginBottom: 9 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{dept.name}</span>
                      <span style={{ fontSize: 13, color: "#F08700", fontWeight: 700 }}>{dept.pct}%</span>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 4, height: 6 }}>
                      <div style={{ width: `${dept.pct}%`, background: "#F08700", borderRadius: 4, height: "100%", transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ textAlign: "center", fontSize: 14, color: "#7A84A0", marginTop: 12 }}>
              תצוגה לדוגמה — בארגון שלכם הנתונים מוצגים בזמן אמת לפי המחלקות, ההכשרות והעובדים.
            </p>
          </div>

          {/* Capabilities list */}
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#000F61", marginBottom: 6, lineHeight: 1.3 }}>
              מה ניתן לראות ולנהל בדאשבורד
            </h3>
            <p style={{ fontSize: 14, color: "#4B5472", marginBottom: 24, lineHeight: 1.65 }}>
              כל הנתונים שמנהל HR או L&D צריך — ללא צורך לאסוף אותם ידנית.
            </p>

            <div className="stagger-grid" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {capabilities.map((cap) => (
                <div key={cap.title} style={{
                  display: "flex", gap: 14, padding: "14px 16px",
                  background: "white", borderRadius: 12, border: "1px solid #E3E7F2", alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9, background: "#FFE4C2",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <SvgIcon d={cap.icon} size={16} color="#F08700" />
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#1A1F36", marginBottom: 4 }}>{cap.title}</div>
                    <div style={{ fontSize: 14, color: "#4B5472", lineHeight: 1.5 }}>{cap.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary"
              style={{ display: "block", textAlign: "center", marginTop: 20, fontSize: 14 }}>
              קבעו דמו וראו את הדאשבורד האמיתי ←
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .metric-cards {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
