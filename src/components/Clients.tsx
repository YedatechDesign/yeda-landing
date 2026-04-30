"use client";
export default function Clients() {
  const clients = [
    "Success College", "HackerU", "IPC College",
    "בנק מזרחי", "קרן השתלמות", "אמדוקס",
    "מכון הייצוא", "בזק", "כללית",
    "האוניברסיטה הפתוחה", "עמידר", "הפועל ירושלים",
  ];

  const testimonials = [
    {
      quote: "Yeda LMS חסך לנו מעל 60% מזמן ההדרכה של עובדים חדשים. תהליך ה-Onboarding ירד מ-3 שבועות לשבוע אחד.",
      name: "מנהל למידה ופיתוח",
      org: "חברת טכנולוגיה, 800 עובדים",
    },
    {
      quote: "הדאשבורד נתן לנו לראות לראשונה מה באמת קורה עם הידע בארגון. גילינו פערים שלא ידענו שקיימים.",
      name: "מנמ\"ר",
      org: "ארגון פיננסי, 1,200 עובדים",
    },
    {
      quote: "עם Yeda Labs יצרנו 40 לומדות בחודש – מה שלקח לנו 3 חודשים לפני כן. AI שינה הכל.",
      name: "מנהלת תוכן הדרכה",
      org: "קמעונאות, 3,000 עובדים",
    },
  ];

  return (
    <section id="clients" style={{ background: "white", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            textAlign: "center",
            color: "#A1A5C0",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          מעל 500 ארגונים סומכים עלינו
        </p>

        {/* Client logos */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 72,
          }}
        >
          {clients.map((c) => (
            <div
              key={c}
              style={{
                padding: "9px 18px",
                background: "#F0F2F8",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 700,
                color: "#A1A5C0",
                border: "1.5px solid #DDE1EF",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "#000F61";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#000F61";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "#A1A5C0";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#DDE1EF";
              }}
            >
              {c}
            </div>
          ))}
        </div>

        {/* Testimonials header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="section-badge-navy">לקוחות מספרים</span>
          <h2 className="heading-section" style={{ margin: 0 }}>
            מה אומרים הלקוחות שלנו
          </h2>
        </div>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: i === 1 ? "#000F61" : "#F0F2F8",
                borderRadius: 10,
                padding: "28px 24px",
                border: `1.5px solid ${i === 1 ? "transparent" : "#DDE1EF"}`,
                position: "relative",
              }}
            >
              {/* Stars */}
              <div style={{ color: "#F08700", fontSize: 15, marginBottom: 16, letterSpacing: 2 }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: i === 1 ? "rgba(255,255,255,0.85)" : "#1B1B1E",
                  lineHeight: 1.75,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: i === 1 ? "rgba(255,255,255,0.15)" : "#DDE1EF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  👤
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: i === 1 ? "white" : "#000F61",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: i === 1 ? "rgba(255,255,255,0.5)" : "#A1A5C0" }}>
                    {t.org}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
