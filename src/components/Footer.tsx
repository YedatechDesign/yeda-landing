"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#080F1E", color: "rgba(255,255,255,0.6)", padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "linear-gradient(135deg, #1A5CFF, #FF6B35)",
                  borderRadius: 9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 17,
                  color: "white",
                }}
              >
                Y
              </div>
              <span style={{ color: "white", fontWeight: 800, fontSize: 20 }}>
                Yeda<span style={{ color: "#FF6B35" }}>LMS</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              הפלטפורמה החכמה לניהול ידע ארגוני, הכשרות והדרכות – עם כלי AI מתקדמים שמאיצים את תהליכי הלמידה בארגון.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
              {["LinkedIn", "YouTube", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(26,92,255,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "מוצר",
              links: ["Yeda LMS", "Yeda Labs AI", "דאשבורד", "אינטגרציות", "אבטחה"],
            },
            {
              title: "חברה",
              links: ["אודות", "לקוחות", "בלוג", "קריירה", "יצירת קשר"],
            },
            {
              title: "תמיכה",
              links: ["מרכז עזרה", "תיעוד API", "הדרכות", "שאלות נפוצות", "צור קשר"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ color: "white", fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
                {col.title}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13 }}>© 2025 Yeda LMS | YedaLabs. כל הזכויות שמורות.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["מדיניות פרטיות", "תנאי שימוש", "נגישות"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
