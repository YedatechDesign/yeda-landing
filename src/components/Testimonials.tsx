const testimonials = [
  {
    quote: "עברנו מ-Excel ומיילים לפלטפורמה מנוהלת תוך שלושה ימים. היום המנהלים שלנו רואים בזמן אמת מי עומד בדרישות הרגולציה ומי לא – משהו שלא היה לנו בכלל קודם.",
    name: "דנה שפירא",
    title: "סמנכ\"ל HR",
    company: "חברת ביטוח מובילה",
    metric: "↓ 60% זמן ניהול הכשרות",
  },
  {
    quote: "הדבר שהכי הפתיע אותנו זה כמה מהר ה-AI יוצר תוכן. מצגת שלקח לנו חודש לבנות לקורס – הפכה ללומדה מלאה תוך שעה. הצוות שלי פשוט לא האמין.",
    name: "רן לוי",
    title: "מנהל למידה ופיתוח",
    company: "חברת טכנולוגיה, 1,200 עובדים",
    metric: "↑ פי 8 מהירות יצירת תוכן",
  },
  {
    quote: "ניסינו שני מוצרים זרים לפני Yeda. שניהם נכשלו על הממשק בעברית וחוסר תמיכה מקומית. עם Yeda קיבלנו פתרון שעובד, בעברית, עם אנשים שמבינים את הצרכים שלנו.",
    name: "מיכל אברהם",
    title: "מנכ\"לית",
    company: "רשת קמעונאות, 800 עובדים",
    metric: "הטמעה תוך 72 שעות",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#F0F2F8", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge">לקוחות מספרים</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
            תוצאות אמיתיות מארגונים אמיתיים
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            לא מדברים בכללי – מדברים במספרים ובחוויות אמיתיות.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 20 }}>
          {testimonials.map(t => (
            <div key={t.name} style={{
              background: "white",
              borderRadius: 12,
              padding: "32px 28px",
              border: "1.5px solid #E0E4F0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: 32, color: "#F08700", fontWeight: 900, lineHeight: 1, marginBottom: 16, fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ fontSize: 15, color: "#1B1B1E", lineHeight: 1.8, marginBottom: 24 }}>
                  {t.quote}
                </p>
              </div>
              <div>
                <div style={{ background: "#F0F2F8", borderRadius: 7, padding: "8px 14px", marginBottom: 20, display: "inline-block" }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#000F61" }}>{t.metric}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%", background: "#000F61",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: 16, fontWeight: 800, color: "white",
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#000F61" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>{t.title} · {t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href="#contact" className="btn-primary">
            הצטרפו ל-500+ הארגונים שכבר שינו ←
          </a>
        </div>
      </div>
    </section>
  );
}
