"use client";
import { IconUsers, IconChart, IconBook, IconZap, IconSettings, IconCertificate } from "./Icons";

const ICON_BOX: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 8,
  background: "#000F61",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginBottom: 16,
};

const pains = [
  { Icon: IconBook,        title: "ידע כלוא אצל אנשים",              desc: "כשעובד עוזב – הוא לוקח איתו את הידע. אין תיעוד מסודר, אין מאגר נגיש, ואין דרך להעביר הלאה." },
  { Icon: IconUsers,       title: "הדרכת עובדים חדשים לוקחת נצח",    desc: "תהליכי הטמעה ארוכים, חוסר אחידות בין מדריכים, ואין דרך לעקוב מי הבין ומי לא." },
  { Icon: IconChart,       title: "אין נראות על ביצועי למידה",        desc: "מנהלים לא יודעים מי השלים הדרכה, מי לא, ואיפה נמצאים פערי הידע בצוות." },
  { Icon: IconSettings,    title: "תוכן מפוזר בעשרות מקומות",         desc: "מצגות ב-Drive, סרטונים ב-YouTube, מסמכים במייל – אין מקום אחד שמחזיק הכל." },
  { Icon: IconZap,         title: "עלויות תוכן הכשרה גבוהות",         desc: "יצירת קורסי הדרכה מקצועיים דורשת תקציב, זמן ומשאבים שרוב הארגונים אין להם." },
  { Icon: IconCertificate, title: "עמידה ברגולציה קשה לניהול",        desc: "הסמכות, חידושי רישיונות ועמידה בדרישות חוק – ניהול ידני מוביל לטעויות ואי-עמידה." },
];

export default function PainPoints() {
  return (
    <section style={{ background: "#F0F2F8", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge">האתגרים שמכירים</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
            הכאב הארגוני שאף אחד לא מדבר עליו
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            אלו האתגרים שאנחנו שומעים מארגונים כל יום. אם אחד מהם מוכר לכם – המשיכו לקרוא.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 18 }}>
          {pains.map(({ Icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: "white",
                borderRadius: 10,
                padding: "28px 24px",
                border: "1.5px solid #E0E4F0",
                borderInlineStart: "4px solid #F08700",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,15,97,0.09)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={ICON_BOX}>
                <Icon size={20} color="white" />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#000F61", marginBottom: 8, lineHeight: 1.3 }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div style={{
          marginTop: 44,
          background: "#000F61",
          borderRadius: 10,
          padding: "28px 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <p style={{ color: "white", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
              יש פתרון. והוא כבר עובד ב-500+ ארגונים.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0 }}>
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
