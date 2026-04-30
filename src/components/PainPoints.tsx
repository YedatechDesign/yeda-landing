"use client";
import {
  IconUsers, IconChart, IconBook, IconZap, IconSettings, IconCertificate
} from "./Icons";

const pains = [
  {
    Icon: IconBook,
    title: "ידע כלוא אצל אנשים",
    desc: "כשעובד עוזב – הוא לוקח איתו את הידע. אין תיעוד מסודר, אין מאגר נגיש, ואין דרך להעביר הלאה.",
  },
  {
    Icon: IconUsers,
    title: "הדרכת עובדים חדשים לוקחת נצח",
    desc: "תהליכי הטמעה ארוכים, חוסר אחידות בין מדריכים, ואין דרך לעקוב מי הבין ומי לא.",
  },
  {
    Icon: IconChart,
    title: "אין נראות על ביצועי למידה",
    desc: "מנהלים לא יודעים מי השלים הדרכה, מי לא, ואיפה נמצאים פערי הידע בצוות.",
  },
  {
    Icon: IconSettings,
    title: "תוכן מפוזר בעשרות מקומות",
    desc: "מצגות ב-Drive, סרטונים ב-YouTube, מסמכים במייל – אין מקום אחד שמחזיק הכל.",
  },
  {
    Icon: IconZap,
    title: "עלויות תוכן הכשרה גבוהות",
    desc: "יצירת קורסי הדרכה מקצועיים דורשת תקציב, זמן ומשאבים שרוב הארגונים אין להם.",
  },
  {
    Icon: IconCertificate,
    title: "עמידה ברגולציה קשה לניהול",
    desc: "הסמכות, חידושי רישיונות ועמידה בדרישות חוק – ניהול ידני מוביל לטעויות ואי-עמידה.",
  },
];

export default function PainPoints() {
  return (
    <section style={{ background: "#F0F2F8", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-badge">האתגרים שמכירים</span>
          <h2 className="heading-section" style={{ marginBottom: 16 }}>
            הכאב הארגוני שאף אחד לא מדבר עליו
          </h2>
          <p style={{ fontSize: 18, color: "#A1A5C0", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            אלו האתגרים שאנחנו שומעים מארגונים כל יום. אם אחד מהם מוכר לכם – המשיכו לקרוא.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {pains.map(({ Icon, title, desc }) => (
            <div key={title} className="pain-card">
              <div
                className="icon-box icon-box-navy"
                style={{ marginBottom: 18, width: 46, height: 46, borderRadius: 8 }}
              >
                <Icon size={20} color="white" />
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#000F61",
                  marginBottom: 10,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 14, color: "#A1A5C0", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          style={{
            marginTop: 48,
            background: "#000F61",
            borderRadius: 10,
            padding: "32px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "clamp(17px, 2.5vw, 22px)",
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              יש פתרון. והוא כבר עובד ב-500+ ארגונים.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15 }}>
              Yeda LMS הוא פתרון All-in-One שנבנה בדיוק לאתגרים האלה.
            </p>
          </div>
          <a href="#features" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            ראו איך ←
          </a>
        </div>
      </div>
    </section>
  );
}
