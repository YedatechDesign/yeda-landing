"use client";
import { useState } from "react";

const faqs = [
  {
    q: "כמה זמן לוקחת ההטמעה?",
    a: "הטמעה בסיסית – 72 שעות. פורטל מלא עם תוכן ועובדים פעילים – שבוע עד שבועיים. צוות ה-Customer Success שלנו מלווה אתכם בכל שלב.",
  },
  {
    q: "האם המערכת מתממשקת עם מערכות HR קיימות?",
    a: "כן. Yeda מתממשקת עם SAP, Priority, Monday, Salesforce, ועשרות מערכות נוספות דרך API פתוח ו-SSO. נבנה עבורכם את האינטגרציה הנדרשת.",
  },
  {
    q: "מה עם אבטחת מידע ורגולציה ישראלית?",
    a: "השרתים ממוקמים בישראל. המערכת עומדת בדרישות חוק הגנת הפרטיות, תקן ISO 27001, ומספקת דוחות לרגולציה כמו רשות שוק ההון ומשרד הבריאות.",
  },
  {
    q: "האם ניתן לנהל הכשרות Zoom ופיזיות גם?",
    a: "בהחלט. Yeda מנהלת כל סוגי ההדרכה: לומדות דיגיטליות, שידורים חיים ב-Zoom/Teams, ומפגשים פיזיים – לוח שנה אחד, מעקב נוכחות אחד, דוח אחד.",
  },
  {
    q: "כמה עולה המערכת?",
    a: "המחיר מבוסס על מספר עובדים פעילים. מחיר התחלתי מ-₪8 לעובד לחודש. ארגונים מעל 500 עובדים מקבלים מחיר מותאם. נשמח להציג הצעת מחיר מדויקת בדמו.",
  },
  {
    q: "מה ההבדל בין Yeda LMS ל-Yeda Labs AI?",
    a: "Yeda LMS היא מערכת ניהול ההכשרות: פורטל עובדים, מעקב ביצועים, תעודות, לוח שנה. Yeda Labs AI היא מודול יצירת התוכן: הופך חומרי גלם ללומדות, סרטונים ושאלונים. הם עובדים יחד – אבל ניתן לרכוש כל אחד בנפרד.",
  },
  {
    q: "האם יש תמיכה בעברית?",
    a: "כן – ממשק מלא בעברית, RTL מושלם, תמיכה טלפונית ובוואטסאפ בעברית, ומנהל לקוח ישראלי שמכיר את הצרכים המקומיים.",
  },
  {
    q: "האם ניתן לנסות לפני שקונים?",
    a: "כן. בדמו של 30 דקות תראו את המערכת החיה עם הנתונים שלכם. לאחר מכן מציעים פיילוט מוגבל ללא עלות להוכחת ROI לפני חתימה.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "white", padding: "88px 24px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge">שאלות נפוצות</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
            כל מה שרציתם לשאול
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.75 }}>
            שאלות שעולות בכל שיחת מכירה – עם תשובות ישירות.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid #E0E4F0" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: 16, padding: "20px 0",
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "right", fontFamily: "inherit",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: "#000F61", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: open === i ? "#000F61" : "#F0F2F8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, color: open === i ? "white" : "#6B7280",
                  transition: "all 0.2s",
                }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: 20 }}>
                  <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.8, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48, padding: "36px", background: "#F0F2F8", borderRadius: 10 }}>
          <p style={{ fontSize: 17, fontWeight: 700, color: "#000F61", marginBottom: 6 }}>
            יש לכם שאלה שלא ענינו עליה?
          </p>
          <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 24 }}>
            דברו ישירות עם מומחה Yeda – ללא תסריט מכירה, ללא לחץ.
          </p>
          <a href="#contact" className="btn-primary">
            דברו איתנו ←
          </a>
        </div>
      </div>
    </section>
  );
}
