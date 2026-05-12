"use client";
import { IconBook, IconUsers, IconChart, IconSettings, IconZap, IconCertificate } from "./Icons";

const ICON_BOX: React.CSSProperties = {
  width: 44, height: 44, borderRadius: 8, background: "#000F61",
  display: "flex", alignItems: "center", justifyContent: "center",
  flexShrink: 0, marginBottom: 16,
};

const problems = [
  {
    Icon: IconBook,
    title: "ידע כלוא אצל אנשים",
    desc: "כשעובד עוזב – הוא לוקח איתו את הידע. אין תיעוד מסודר, אין מאגר נגיש, אין דרך להעביר הלאה.",
    cost: "עלות ממוצעת: 6 חודשי שכר לאיש מקצוע חדש",
  },
  {
    Icon: IconUsers,
    title: "הכנסת עובדים חדשים לוקחת נצח",
    desc: "Onboarding ארוך, חוסר אחידות בין מדריכים, ואין דרך לעקוב מי הבין ומי לא.",
    cost: "ממוצע: 3-6 חודשים עד עצמאות מלאה",
  },
  {
    Icon: IconChart,
    title: "מנהלים עיוורים לביצועי הצוות",
    desc: "אין נראות מי השלים הדרכה, מי לא, ואיפה פערי הידע שמעכבים את הצוות.",
    cost: "40% מהמנהלים לא יודעים מה הפערים",
  },
  {
    Icon: IconSettings,
    title: "תוכן מפוזר בעשרות מקומות",
    desc: "מצגות ב-Drive, סרטונים ב-YouTube, מסמכים במייל – אין מקום אחד שמחזיק הכל.",
    cost: "עובדים מבזבזים 2.5 שעות/יום בחיפוש מידע",
  },
  {
    Icon: IconZap,
    title: "יצירת תוכן הכשרה = פרויקט ענק",
    desc: "בניית קורס מקצועי דורשת תקציב, זמן ומשאבים שרוב הארגונים אין להם.",
    cost: "שעת תוכן הכשרה = 100+ שעות עבודה",
  },
  {
    Icon: IconCertificate,
    title: "עמידה ברגולציה – ניהול ידני = סיכון",
    desc: "הסמכות, חידושי רישיונות ועמידה בדרישות חוק – ניהול ידני מוביל לטעויות ואי-עמידה.",
    cost: "קנסות רגולטוריים ממוצעים: עשרות אלפי ₪",
  },
];

export default function Problems() {
  return (
    <section style={{ background: "#F0F2F8", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge">האתגרים שמכירים</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
            הכאב הארגוני שאף אחד לא מדבר עליו
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            אלו האתגרים שאנחנו שומעים מ-HR ומנהלים כל יום. אם אחד מהם מוכר לכם – יש לנו פתרון.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 18 }}>
          {problems.map(({ Icon, title, desc, cost }) => (
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
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, margin: "0 0 12px" }}>{desc}</p>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#F08700", background: "rgba(240,135,0,0.08)", padding: "5px 10px", borderRadius: 5 }}>
                {cost}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 44, background: "#000F61", borderRadius: 10,
          padding: "28px 36px", display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
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
