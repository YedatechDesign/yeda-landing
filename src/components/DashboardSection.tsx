"use client";

function SvgIcon({ d, size = 18, color = "#0A59EB" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

/* ---- Data (snapshot mirroring a live Yeda management dashboard) ---- */

const kpis = [
  { value: "142", label: "רישומים חדשים", sub: "ב-30 הימים האחרונים", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M19 8v6 M22 11h-6" },
  { value: "12",  label: "מסלולים",       sub: "סה״כ מסלולים / תוכניות", icon: "M3 12h4l3 8 4-16 3 8h4" },
  { value: "68",  label: "הדרכות",        sub: "סה״כ הדרכות במערכת", icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
  { value: "712", label: "משתמשים",       sub: "כלל העובדים הרשומים במערכת", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
];

const SEG = ["#0A59EB", "#16a34a", "#8b5cf6", "#f59e0b", "#ec4899", "#cbd5e1"];

const enrollment = {
  title: "בכמה הדרכות רשומים המשתמשים",
  sub: "רישומים פעילים לפי משתמשים ייחודיים · 712 סה״כ",
  rows: [
    { label: "הדרכה אחת", n: 271, pct: 38 },
    { label: "2 הדרכות",  n: 192, pct: 27 },
    { label: "3 הדרכות",  n: 100, pct: 14 },
    { label: "4 הדרכות",  n: 64,  pct: 9 },
    { label: "5+ הדרכות", n: 57,  pct: 8 },
    { label: "אף הדרכה",  n: 28,  pct: 4 },
  ],
};

const completion = {
  title: "כמה הדרכות סיימו המשתמשים",
  sub: "הדרכות שהושלמו במלואן לפי משתמשים ייחודיים · 712 סה״כ",
  rows: [
    { label: "הדרכה אחת", n: 292, pct: 41 },
    { label: "2 הדרכות",  n: 171, pct: 24 },
    { label: "3+ הדרכות", n: 92,  pct: 13 },
    { label: "אף הדרכה",  n: 157, pct: 22 },
  ],
};

const newRegs = {
  title: "רישומים חדשים להדרכות",
  sub: "כמה רישומים חדשים נוצרו בתקופה",
  rows: [
    { label: "היום",  n: 6 },
    { label: "השבוע", n: 38 },
    { label: "החודש", n: 142 },
  ],
};

const courses = {
  title: "הדרכות עם הכי הרבה רישומים",
  sub: "פירוט סטטוס ההתקדמות בכל הכשרה — נרשמו, התחילו, מעל / מתחת ל-50% וסיימו",
  cols: ["שם ההדרכה", "נרשמו", "פעילים", "לא התחילו", "מתחת 50%", "מעל 50%", "סיימו", "התקדמות ממוצעת"],
  rows: [
    { name: "ריענון בטיחות שנתי",              vals: [680, 680, 88, 22, 12, 558], avg: 82 },
    { name: "הכשרת בטיחות — עובדים חדשים",      vals: [185, 185, 6, 3, 2, 174],    avg: 94 },
    { name: "עבודה בגובה — הסמכה",              vals: [140, 140, 12, 6, 4, 118],   avg: 89 },
    { name: "הכשרת מנופאים ומפעילי ציוד",       vals: [120, 120, 8, 4, 2, 106],    avg: 88 },
    { name: "הכשרת מערכות אלקטרומכניות",        vals: [95, 95, 5, 2, 2, 86],       avg: 91 },
    { name: "חניכת עובדים חדשים (Onboarding)",  vals: [45, 45, 12, 3, 2, 28],      avg: 62 },
  ],
};

const capabilities = [
  { icon: "M18 20V10 M12 20V4 M6 20v-6",                                              title: "נתוני השלמה בזמן אמת", desc: "כמה עובדים השלימו כל הכשרה, בכל מחלקה" },
  { icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4l3 3",                    title: "זיהוי פערי ידע",       desc: "איתור אוטומטי של עובדים שמפגרים אחרי היעד" },
  { icon: "M23 6l-9.5 9.5-5-5L1 18",                                                  title: "מגמות לאורך זמן",      desc: "גרפי ביצועים חודשיים, רבעוניים ושנתיים" },
  { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8", title: "דוחות לרגולציה", desc: "יצוא אוטומטי לאקסל לביקורות, ISO ועמידה בתקנים" },
];

function DistroPanel({ title, sub, rows }: { title: string; sub: string; rows: { label: string; n: number; pct: number }[] }) {
  return (
    <div style={{ background: "white", border: "1px solid rgba(196,216,253,0.5)", borderRadius: 18, padding: "20px 22px" }}>
      <div style={{ fontSize: 15, fontWeight: 800, color: "#0A1B4D" }}>{title}</div>
      <div style={{ fontSize: 12.5, color: "#7A84A0", marginTop: 3, marginBottom: 16 }}>{sub}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {rows.map((r, i) => (
          <div key={r.label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}>
              <span style={{ fontSize: 13.5, color: "#3A4366", fontWeight: 600 }}>{r.label}</span>
              <span style={{ fontSize: 13, color: "#7A84A0" }}>
                <strong style={{ color: "#0A1B4D", fontSize: 14 }}>{r.n.toLocaleString()}</strong>&nbsp;· {r.pct}%
              </span>
            </div>
            <div style={{ background: "#EEF2FB", borderRadius: 6, height: 8, overflow: "hidden" }}>
              <div style={{ width: `${r.pct}%`, background: SEG[i % SEG.length], height: "100%", borderRadius: 6 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardSection() {
  return (
    <section id="dashboard" style={{ background: "#F5F7FD", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-badge-navy">דאשבורד ניהולי</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, color: "#1A1F36", marginBottom: 14, lineHeight: 1.15 }}>
            סטטיסטיקה והתקדמות בתוך המערכת
          </h2>
          <p style={{ fontSize: 16, color: "#4B5472", maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
            תמונת מצב חיה של רישומים, מסלולים והתקדמות משתמשים — כפי שהיא נראית בפועל בדשבורד הניהול.
            כל הנתונים מתעדכנים אוטומטית וניתנים לייצוא לאקסל בלחיצה.
          </p>
        </div>

        {/* Dashboard panel */}
        <div style={{ background: "white", border: "1px solid rgba(196,216,253,0.6)", borderRadius: 24, padding: "clamp(20px, 3vw, 34px)", boxShadow: "0 24px 72px rgba(10,27,77,0.10)" }}>

          {/* KPI row */}
          <div className="kpi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 22 }}>
            {kpis.map((k) => (
              <div key={k.label} className="kpi-card" style={{ background: "#F7F9FE", border: "1px solid rgba(196,216,253,0.5)", borderRadius: 16, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                <div className="kpi-icon" style={{ width: 46, height: 46, borderRadius: 13, background: "#E7EFFE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <SvgIcon d={k.icon} size={20} color="#0A59EB" />
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#0A1B4D", lineHeight: 1 }}>{k.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1F36", marginTop: 4 }}>{k.label}</div>
                  <div style={{ fontSize: 12, color: "#7A84A0", marginTop: 2 }}>{k.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Distributions row */}
          <div className="distro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 0.8fr", gap: 16, marginBottom: 22 }}>
            <DistroPanel {...enrollment} />
            <DistroPanel {...completion} />
            <div style={{ background: "white", border: "1px solid rgba(196,216,253,0.5)", borderRadius: 18, padding: "20px 22px" }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#0A1B4D" }}>{newRegs.title}</div>
              <div style={{ fontSize: 12.5, color: "#7A84A0", marginTop: 3, marginBottom: 16 }}>{newRegs.sub}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {newRegs.rows.map((r) => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F7F9FE", border: "1px solid rgba(196,216,253,0.5)", borderRadius: 12, padding: "12px 14px" }}>
                    <span style={{ fontSize: 14, color: "#3A4366", fontWeight: 600 }}>{r.label}</span>
                    <span style={{ fontSize: 20, fontWeight: 900, color: "#0A59EB" }}>{r.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Courses table */}
          <div style={{ border: "1px solid rgba(196,216,253,0.5)", borderRadius: 18, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "18px 22px", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#0A1B4D" }}>{courses.title}</div>
                <div style={{ fontSize: 12.5, color: "#7A84A0", marginTop: 3 }}>{courses.sub}</div>
              </div>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#E7EFFE", color: "#0A59EB", border: "1px solid rgba(10,89,235,0.2)", borderRadius: 10, padding: "9px 14px", fontSize: 13, fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}>
                <SvgIcon d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3" size={15} color="#0A59EB" />
                ייצוא לאקסל
              </button>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
                <thead>
                  <tr style={{ background: "#F2F6FD" }}>
                    {courses.cols.map((c, i) => (
                      <th key={c} style={{ padding: "12px 12px", fontSize: 12.5, fontWeight: 800, color: "#5A6280", textAlign: i === 0 ? "right" : "center", whiteSpace: "nowrap", borderBottom: "1px solid rgba(196,216,253,0.6)" }}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {courses.rows.map((r) => (
                    <tr key={r.name}>
                      <td style={{ padding: "13px 12px", fontSize: 13.5, fontWeight: 700, color: "#1A1F36", textAlign: "right", whiteSpace: "nowrap", borderBottom: "1px solid #EEF2FB" }}>{r.name}</td>
                      {r.vals.map((v, i) => (
                        <td key={i} style={{ padding: "13px 12px", fontSize: 13.5, color: "#3A4366", textAlign: "center", borderBottom: "1px solid #EEF2FB" }}>{v}</td>
                      ))}
                      <td style={{ padding: "13px 12px", borderBottom: "1px solid #EEF2FB", minWidth: 140 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ flex: 1, background: "#EEF2FB", borderRadius: 5, height: 7, overflow: "hidden" }}>
                            <div style={{ width: `${r.avg}%`, background: r.avg >= 85 ? "#16a34a" : r.avg >= 70 ? "#0A59EB" : "#f59e0b", height: "100%", borderRadius: 5 }} />
                          </div>
                          <span style={{ fontSize: 13, fontWeight: 800, color: "#0A1B4D", width: 36, textAlign: "left" }}>{r.avg}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Capabilities + CTA */}
        <div style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "#000F61", marginBottom: 6, textAlign: "center" }}>מה ניתן לראות ולנהל בדאשבורד</h3>
          <p style={{ fontSize: 15, color: "#4B5472", marginBottom: 26, textAlign: "center" }}>כל הנתונים שמנהל HR או L&amp;D צריך — ללא צורך לאסוף אותם ידנית.</p>
          <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {capabilities.map((cap) => (
              <div key={cap.title} style={{ background: "white", borderRadius: 14, border: "1px solid #E3E7F2", padding: "18px 18px" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "#E7EFFE", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <SvgIcon d={cap.icon} size={17} color="#0A59EB" />
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1F36", marginBottom: 5 }}>{cap.title}</div>
                <div style={{ fontSize: 13.5, color: "#4B5472", lineHeight: 1.55 }}>{cap.desc}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary" style={{ display: "block", width: "fit-content", margin: "28px auto 0", fontSize: 15, padding: "13px 30px" }}>
            קבעו דמו וראו את הדאשבורד על הנתונים שלכם ←
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .distro-grid { grid-template-columns: 1fr !important; }
          .cap-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .kpi-card { flex-direction: column !important; align-items: center !important; text-align: center; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
