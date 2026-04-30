"use client";
import YedaLogo from "./YedaLogo";

export default function Footer() {
  return (
    <footer style={{ background: "#000A45", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <YedaLogo color="white" height={28} />
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 260 }}>
              הפלטפורמה החכמה לניהול ידע ארגוני, הכשרות והדרכות – עם כלי AI מתקדמים שמאיצים תהליכי למידה בארגון.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              {["in", "▶", "f"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 34,
                    height: 34,
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F08700";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#F08700";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "מוצר", links: ["Yeda LMS", "Yeda Labs AI", "דאשבורד", "אינטגרציות", "אבטחה"] },
            { title: "חברה", links: ["אודות", "לקוחות", "בלוג", "קריירה", "יצירת קשר"] },
            { title: "תמיכה", links: ["מרכז עזרה", "תיעוד", "הדרכות", "שאלות נפוצות", "צור קשר"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ color: "white", fontSize: 13, fontWeight: 800, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {col.title}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            © 2025 Yeda LMS | YedaLabs. כל הזכויות שמורות.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["מדיניות פרטיות", "תנאי שימוש", "נגישות"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
