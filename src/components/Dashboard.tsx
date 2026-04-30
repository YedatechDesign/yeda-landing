"use client";
import { useState } from "react";
import { IconChart, IconBell, IconDownload, IconSettings, IconUsers } from "./Icons";

export default function Dashboard() {
  const [activeView, setActiveView] = useState<"overview" | "detail">("overview");

  return (
    <section
      id="dashboard"
      style={{ background: "#F0F2F8", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          {/* Text side */}
          <div>
            <span className="section-badge">דאשבורד מנהלים</span>
            <h2 className="heading-section" style={{ marginBottom: 20 }}>
              נראות מלאה על{" "}
              <span className="text-highlight">הידע הארגוני</span>
            </h2>
            <p style={{ fontSize: 16, color: "#A1A5C0", lineHeight: 1.75, marginBottom: 32 }}>
              דאשבורד מנהלים מקיף ומותאם אישית – עם נתוני למידה בזמן אמת,
              מעקב ביצועים לפי מחלקה, ניתוח פערי ידע ודוחות עמידה ברגולציה.
            </p>

            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {[
                { Icon: IconChart, text: "גרפים ותרשימים מותאמים אישית (drag & drop)" },
                { Icon: IconBell, text: "התראות אוטומטיות – מי לא השלים הכשרה חובה" },
                { Icon: IconDownload, text: "ייצוא דוחות לExcel ו-PDF בלחיצת כפתור" },
                { Icon: IconSettings, text: "תצוגות מותאמות לכל מנהל ותפקיד" },
                { Icon: IconUsers, text: "ניתוח פערי ידע לפי תפקיד ומחלקה" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "#000F61",
                      borderRadius: 7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} color="white" />
                  </div>
                  <span style={{ fontSize: 15, color: "#1B1B1E", lineHeight: 1.5 }}>{text}</span>
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
                צפו בדאשבורד החי ←
              </a>
              <a href="#contact" className="btn-outline-navy">
                קבעו הדגמה
              </a>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div>
            {/* View toggle */}
            <div
              style={{
                display: "flex",
                gap: 6,
                marginBottom: 14,
                background: "#DDE1EF",
                padding: 4,
                borderRadius: 7,
                width: "fit-content",
              }}
            >
              {(["overview", "detail"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveView(v)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 5,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "inherit",
                    background: activeView === v ? "white" : "transparent",
                    color: activeView === v ? "#000F61" : "#A1A5C0",
                    boxShadow: activeView === v ? "0 1px 6px rgba(0,0,0,0.1)" : "none",
                    transition: "all 0.2s",
                  }}
                >
                  {v === "overview" ? "סקירה כללית" : "פירוט לפי עובד"}
                </button>
              ))}
            </div>

            {/* Card */}
            <div
              style={{
                background: "white",
                borderRadius: 12,
                border: "1.5px solid #DDE1EF",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,15,97,0.08)",
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  background: "#F0F2F8",
                  borderBottom: "1px solid #DDE1EF",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                <div
                  style={{
                    flex: 1,
                    marginRight: 12,
                    background: "#DDE1EF",
                    borderRadius: 5,
                    padding: "3px 12px",
                    fontSize: 11,
                    color: "#A1A5C0",
                    textAlign: "center",
                  }}
                >
                  yeda-dashboard.vercel.app
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 20 }}>
                {activeView === "overview" ? (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#000F61", marginBottom: 14 }}>
                      דוח נוכחות ומעורבות – Q1 2025
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 16 }}>
                      {[
                        { label: "עובדים פעילים", val: "247", change: "+12%", up: true },
                        { label: "ממוצע השלמה", val: "87%", change: "+5%", up: true },
                        { label: "שעות הדרכה", val: "1,240", change: "-3%", up: false },
                      ].map((k) => (
                        <div
                          key={k.label}
                          style={{
                            background: "#F0F2F8",
                            borderRadius: 8,
                            padding: "12px 10px",
                            textAlign: "center",
                          }}
                        >
                          <div style={{ fontSize: 20, fontWeight: 800, color: "#000F61" }}>{k.val}</div>
                          <div style={{ fontSize: 10, color: "#A1A5C0", margin: "2px 0" }}>{k.label}</div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: k.up ? "#10B981" : "#EF4444" }}>
                            {k.change}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: "#F0F2F8", borderRadius: 8, padding: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#A1A5C0", marginBottom: 10 }}>
                        השלמת הכשרות לפי מחלקה
                      </div>
                      {[
                        { dept: "מכירות", pct: 94, c: "#000F61" },
                        { dept: "טכנולוגיה", pct: 88, c: "#F08700" },
                        { dept: "שיווק", pct: 76, c: "#000F61" },
                        { dept: "תפעול", pct: 82, c: "#F08700" },
                        { dept: "כספים", pct: 91, c: "#000F61" },
                      ].map((r) => (
                        <div key={r.dept} style={{ marginBottom: 8 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginBottom: 3 }}>
                            <span style={{ color: "#1B1B1E", fontWeight: 600 }}>{r.dept}</span>
                            <span style={{ color: "#000F61", fontWeight: 700 }}>{r.pct}%</span>
                          </div>
                          <div style={{ background: "#DDE1EF", borderRadius: 3, height: 6 }}>
                            <div style={{ width: `${r.pct}%`, height: "100%", background: r.c, borderRadius: 3 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#000F61", marginBottom: 14 }}>
                      פירוט למידה לפי עובד
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 70px 50px",
                        gap: 8,
                        fontSize: 10,
                        color: "#A1A5C0",
                        fontWeight: 700,
                        padding: "0 6px 8px",
                        borderBottom: "1px solid #F0F2F8",
                      }}
                    >
                      <span>שם עובד</span><span>הכשרה</span><span>סטטוס</span><span>ציון</span>
                    </div>
                    {[
                      { name: "ישראל כהן", course: "אבטחת מידע", status: "הושלם", score: 95, sc: "#10B981" },
                      { name: "מיכל לוי", course: "ניהול לקוחות", status: "בתהליך", score: 67, sc: "#F08700" },
                      { name: "יוסי אברהם", course: "עמידה ברגולציה", status: "הושלם", score: 88, sc: "#10B981" },
                      { name: "רחל גרין", course: "תהליכי עבודה", status: "טרם התחיל", score: 0, sc: "#EF4444" },
                      { name: "דוד שפירא", course: "שיפור שירות", status: "הושלם", score: 91, sc: "#10B981" },
                    ].map((r) => (
                      <div
                        key={r.name}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 70px 50px",
                          gap: 8,
                          padding: "9px 6px",
                          borderBottom: "1px solid #F0F2F8",
                          fontSize: 12,
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontWeight: 700, color: "#000F61" }}>{r.name}</span>
                        <span style={{ color: "#A1A5C0" }}>{r.course}</span>
                        <span style={{ color: r.sc, fontWeight: 700, fontSize: 11 }}>{r.status}</span>
                        <span style={{ fontWeight: 700, color: r.score > 0 ? "#000F61" : "#DDE1EF" }}>
                          {r.score > 0 ? r.score : "–"}
                        </span>
                      </div>
                    ))}
                  </>
                )}
                <div
                  style={{
                    marginTop: 14,
                    padding: "8px 12px",
                    background: "#F0F2F8",
                    borderRadius: 6,
                    textAlign: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#000F61",
                  }}
                >
                  הדאשבורד מותאם אישית לצרכי הארגון שלכם ✦
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 14 }}>
              <a
                href="https://yeda-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "#000F61", fontWeight: 700, textDecoration: "none" }}
              >
                פתחו את הדאשבורד המלא ←
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
