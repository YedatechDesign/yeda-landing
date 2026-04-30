"use client";
import { useState } from "react";

export default function Dashboard() {
  const [activeView, setActiveView] = useState<"overview" | "detail">("overview");

  return (
    <section
      id="dashboard"
      style={{
        background: "linear-gradient(180deg, #F8FAFF 0%, #EBF3FF 100%)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="dashboard-grid"
        >
          {/* Left text */}
          <div>
            <div className="section-badge">דאשבורד מנהלים</div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: 800,
                color: "#0D2137",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              נראות מלאה על
              <br />
              <span style={{ color: "#1A5CFF" }}>הידע הארגוני שלכם</span>
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, marginBottom: 32 }}>
              דאשבורד מנהלים מקיף ומותאם אישית – עם נתוני למידה בזמן אמת, מעקב ביצועים לפי מחלקה,
              ניתוח פערי ידע ודוחות עמידה ברגולציה.
            </p>

            {/* Feature bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[
                { icon: "📊", text: "גרפים ותרשימים מותאמים אישית (drag & drop)" },
                { icon: "🔔", text: "התראות אוטומטיות – מי לא השלים הכשרה חובה" },
                { icon: "📤", text: "ייצוא דוחות לExcel ו-PDF בלחיצת כפתור" },
                { icon: "🔍", text: "ניתוח פערי ידע לפי תפקיד, מחלקה ותחום" },
                { icon: "⚙️", text: "תצוגות מותאמות לכל מנהל ותפקיד" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                  <span style={{ fontSize: 15, color: "#334155", lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://yeda-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                צפו בדאשבורד החי →
              </a>
              <a href="#contact" className="btn-secondary" style={{ color: "#1A5CFF", borderColor: "#1A5CFF" }}>
                קבעו הדגמה
              </a>
            </div>
          </div>

          {/* Right - Dashboard preview */}
          <div>
            {/* Tab toggle */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 16,
                background: "#E2E8F0",
                padding: 5,
                borderRadius: 12,
                width: "fit-content",
              }}
            >
              <button
                onClick={() => setActiveView("overview")}
                style={{
                  padding: "7px 18px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  background: activeView === "overview" ? "white" : "transparent",
                  color: activeView === "overview" ? "#0D2137" : "#64748B",
                  boxShadow: activeView === "overview" ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.2s",
                }}
              >
                סקירה כללית
              </button>
              <button
                onClick={() => setActiveView("detail")}
                style={{
                  padding: "7px 18px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  background: activeView === "detail" ? "white" : "transparent",
                  color: activeView === "detail" ? "#0D2137" : "#64748B",
                  boxShadow: activeView === "detail" ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.2s",
                }}
              >
                פירוט לפי עובד
              </button>
            </div>

            {/* Dashboard mockup */}
            <div
              style={{
                background: "white",
                borderRadius: 20,
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                overflow: "hidden",
                border: "1px solid #E2E8F0",
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  background: "#F8FAFF",
                  borderBottom: "1px solid #E2E8F0",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                <div
                  style={{
                    flex: 1,
                    marginRight: 12,
                    background: "#E2E8F0",
                    borderRadius: 6,
                    padding: "3px 10px",
                    fontSize: 11,
                    color: "#64748B",
                    textAlign: "center",
                  }}
                >
                  yeda-dashboard.vercel.app
                </div>
              </div>

              {/* Dashboard content */}
              {activeView === "overview" ? (
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0D2137", marginBottom: 14 }}>
                    דוח נוכחות ומעורבות – Q1 2025
                  </div>
                  {/* KPI row */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
                    {[
                      { label: "עובדים פעילים", val: "247", change: "+12%", up: true },
                      { label: "ממוצע השלמה", val: "87%", change: "+5%", up: true },
                      { label: "שעות הדרכה", val: "1,240", change: "-3%", up: false },
                    ].map((kpi) => (
                      <div
                        key={kpi.label}
                        style={{
                          background: "#F8FAFF",
                          borderRadius: 10,
                          padding: "12px 10px",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontSize: 22, fontWeight: 800, color: "#0D2137" }}>{kpi.val}</div>
                        <div style={{ fontSize: 10, color: "#64748B", margin: "2px 0" }}>{kpi.label}</div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: kpi.up ? "#10B981" : "#EF4444" }}>
                          {kpi.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bar chart */}
                  <div
                    style={{
                      background: "#F8FAFF",
                      borderRadius: 10,
                      padding: 14,
                      marginBottom: 14,
                    }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", marginBottom: 10 }}>
                      השלמת הכשרות לפי מחלקה
                    </div>
                    {[
                      { dept: "מכירות", pct: 94, color: "#1A5CFF" },
                      { dept: "טכנולוגיה", pct: 88, color: "#7C3AED" },
                      { dept: "שיווק", pct: 76, color: "#10B981" },
                      { dept: "תפעול", pct: 82, color: "#F59E0B" },
                      { dept: "כספים", pct: 91, color: "#EF4444" },
                    ].map((row) => (
                      <div key={row.dept} style={{ marginBottom: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#64748B", marginBottom: 3 }}>
                          <span>{row.dept}</span>
                          <span style={{ fontWeight: 700, color: "#0D2137" }}>{row.pct}%</span>
                        </div>
                        <div style={{ background: "#E2E8F0", borderRadius: 4, height: 6 }}>
                          <div
                            style={{
                              width: `${row.pct}%`,
                              height: "100%",
                              background: row.color,
                              borderRadius: 4,
                              transition: "width 0.8s ease",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Badge */}
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px",
                      background: "#EBF3FF",
                      borderRadius: 8,
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#1A5CFF", fontWeight: 600 }}>
                      ✦ הדאשבורד מותאם אישית לצרכי הארגון שלכם
                    </span>
                  </div>
                </div>
              ) : (
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0D2137", marginBottom: 14 }}>
                    פירוט למידה לפי עובד
                  </div>
                  {/* Table */}
                  <div style={{ fontSize: 11, color: "#64748B", marginBottom: 8, display: "grid", gridTemplateColumns: "1fr 1fr 60px 60px", gap: 8, padding: "0 6px" }}>
                    <span>שם עובד</span>
                    <span>הכשרה אחרונה</span>
                    <span>סטטוס</span>
                    <span>ציון</span>
                  </div>
                  {[
                    { name: "ישראל כהן", course: "אבטחת מידע", status: "הושלם", score: 95, color: "#10B981" },
                    { name: "מיכל לוי", course: "ניהול לקוחות", status: "בתהליך", score: 67, color: "#F59E0B" },
                    { name: "יוסי אברהם", course: "עמידה ברגולציה", status: "הושלם", score: 88, color: "#10B981" },
                    { name: "רחל גרין", course: "תהליכי עבודה", status: "טרם התחיל", score: 0, color: "#EF4444" },
                    { name: "דוד שפירא", course: "שיפור שירות", status: "הושלם", score: 91, color: "#10B981" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 60px 60px",
                        gap: 8,
                        padding: "9px 6px",
                        borderTop: "1px solid #F1F5F9",
                        fontSize: 12,
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: "#0D2137" }}>{row.name}</span>
                      <span style={{ color: "#64748B" }}>{row.course}</span>
                      <span style={{ color: row.color, fontWeight: 700, fontSize: 11 }}>{row.status}</span>
                      <span style={{ fontWeight: 700, color: row.score > 0 ? "#0D2137" : "#CBD5E1" }}>
                        {row.score > 0 ? row.score : "-"}
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: 12,
                      padding: "8px",
                      background: "#EBF3FF",
                      borderRadius: 8,
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#1A5CFF", fontWeight: 600 }}>
                      ✦ סינון לפי מחלקה, תפקיד ותאריך
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Live link */}
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <a
                href="https://yeda-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "#1A5CFF", fontWeight: 600, textDecoration: "none" }}
              >
                🔗 פתחו את הדאשבורד המלא בחלון חדש
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
