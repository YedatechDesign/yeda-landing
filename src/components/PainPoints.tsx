export default function PainPoints() {
  const pains = [
    {
      icon: "🔒",
      title: "ידע כלוא אצל אנשים",
      desc: "כשעובד עוזב – הוא לוקח איתו את הידע. אין תיעוד מסודר, אין מאגר נגיש, ואין דרך להעביר הלאה.",
    },
    {
      icon: "⏱️",
      title: "הדרכת עובדים חדשים לוקחת נצח",
      desc: "תהליכי הטמעה ארוכים, חוסר אחידות בין מדריכים, ואין דרך לעקוב מי הבין ומי לא.",
    },
    {
      icon: "📊",
      title: "אין נראות על ביצועי למידה",
      desc: "מנהלים לא יודעים מי השלים הדרכה, מי לא, ואיפה נמצאים פערי הידע בצוות.",
    },
    {
      icon: "🔀",
      title: "תוכן מפוזר בעשרות מקומות",
      desc: "מצגות ב-Drive, סרטונים ב-YouTube, מסמכים במייל – אין מקום אחד שמחזיק הכל.",
    },
    {
      icon: "💸",
      title: "עלויות תוכן הכשרה גבוהות",
      desc: "יצירת קורסי הדרכה מקצועיים דורשת תקציב, זמן ומשאבים שרוב הארגונים אין להם.",
    },
    {
      icon: "⚖️",
      title: "עמידה ברגולציה קשה לניהול",
      desc: "הסמכות, חידושי רישיונות ועמידה בדרישות חוק – ניהול ידני מוביל לטעויות ואי-עמידה.",
    },
  ];

  return (
    <section style={{ background: "#F8FAFF", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-badge">האתגרים שמכירים</div>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0D2137",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            הכאב הארגוני שאף אחד לא מדבר עליו
          </h2>
          <p style={{ fontSize: 18, color: "#64748B", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            אלו האתגרים שאנחנו שומעים מארגונים כל יום. אם אחד מהם מוכר לכם – המשיכו לקרוא.
          </p>
        </div>

        {/* Pain cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {pains.map((pain) => (
            <div key={pain.title} className="pain-card card-hover">
              <div style={{ fontSize: 36, marginBottom: 16 }}>{pain.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D2137", marginBottom: 10 }}>
                {pain.title}
              </h3>
              <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.65 }}>{pain.desc}</p>
            </div>
          ))}
        </div>

        {/* Transition message */}
        <div
          style={{
            textAlign: "center",
            marginTop: 56,
            padding: "32px 40px",
            background: "linear-gradient(135deg, #0D2137, #1A3A7A)",
            borderRadius: 20,
            color: "white",
          }}
        >
          <p style={{ fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 700, marginBottom: 12 }}>
            יש פתרון. והוא כבר עובד ב-500+ ארגונים.
          </p>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>
            Yeda LMS הוא פתרון All-in-One שנבנה בדיוק לאתגרים האלה.
          </p>
        </div>
      </div>
    </section>
  );
}
