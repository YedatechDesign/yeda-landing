export default function Clients() {
  const clients = [
    "Success College",
    "HackerU",
    "IPC College",
    "הפועל ירושלים",
    "קרן השתלמות",
    "אמדוקס",
    "מכון הייצוא",
    "בנק מזרחי",
    "עמידר",
    "בזק",
    "כללית",
    "האוניברסיטה הפתוחה",
  ];

  const testimonials = [
    {
      quote: "Yeda LMS חסך לנו מעל 60% מזמן ההדרכה של עובדים חדשים. תהליך ה-Onboarding ירד מ-3 שבועות לשבוע אחד.",
      name: "מנהל למידה ופיתוח",
      org: "חברת טכנולוגיה, 800 עובדים",
      avatar: "👨‍💼",
    },
    {
      quote: "הדאשבורד נתן לנו לראות לראשונה מה באמת קורה עם הידע בארגון. גילינו פערים שלא ידענו שקיימים.",
      name: "מנמ\"ר",
      org: "ארגון פיננסי, 1,200 עובדים",
      avatar: "👩‍💼",
    },
    {
      quote: "עם Yeda Labs יצרנו 40 לומדות בחודש – מה שלקח לנו 3 חודשים לפני כן. AI שינה הכל.",
      name: "מנהלת תוכן הדרכה",
      org: "קמעונאות, 3,000 עובדים",
      avatar: "👩‍🏫",
    },
  ];

  return (
    <section id="clients" style={{ background: "white", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Clients header */}
        <p
          style={{
            textAlign: "center",
            color: "#94A3B8",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          מעל 500 ארגונים סומכים עלינו
        </p>

        {/* Logos marquee */}
        <div
          style={{
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 72,
          }}
        >
          {clients.map((client) => (
            <div
              key={client}
              className="client-logo-item"
              style={{
                padding: "10px 20px",
                background: "#F8FAFF",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                color: "#334155",
                border: "1px solid #E2E8F0",
                whiteSpace: "nowrap",
                cursor: "default",
              }}
            >
              {client}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-badge">לקוחות מספרים</div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#0D2137" }}>
            מה אומרים הלקוחות שלנו
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "#F8FAFF",
                borderRadius: 20,
                padding: "28px 24px",
                border: "1px solid #E2E8F0",
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontSize: 48,
                  color: "#1A5CFF",
                  lineHeight: 1,
                  marginBottom: 16,
                  opacity: 0.3,
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </div>
              <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#EBF3FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0D2137" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#64748B" }}>{t.org}</div>
                </div>
              </div>
              {/* Stars */}
              <div style={{ marginTop: 16, color: "#FBBF24", fontSize: 16 }}>★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
