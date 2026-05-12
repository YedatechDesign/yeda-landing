"use client";
import { useState } from "react";

const faqs = [
  {
    q: "כמה זמן לוקחת ההטמעה בארגון?",
    a: "תהליך ההטמעה המלא אורך עד 14 ימי עסקים — כולל עיצוב ממשק מותאם למותג שלכם, הטמעת התכנים הקיימים, ייבוא עובדים ומחלקות והגדרת כל זרימות העבודה. משך הזמן המדויק תלוי בעיקר בקצב העברת הנתונים ואישורים מצידכם — אנחנו נהיה מוכנים.",
  },
  {
    q: "איך הנתונים שלנו מאובטחים? מה לגבי GDPR?",
    a: "המערכת בנויה עם שכבות אבטחה מרובות: הצפנת SSL/TLS על כל התקשורת, הגנת CSRF, מניעת SQL Injection, חומת אש לאפליקציה (WAF) שחוסמת DDoS, ואימות דו-שלבי (2FA). הנתונים מאוחסנים בשרתי Hetzner בגרמניה (SOC2 מוסמך), עם גיבויים מוצפנים אוטומטיים. המערכת עומדת בדרישות GDPR ובחוק הגנת הפרטיות הישראלי, עם ניטור אבטחה רציף ובדיקות חדירה תקופתיות.",
  },
  {
    q: "האם המערכת מתחברת ל-HRIS / ל-CRM הקיים שלנו?",
    a: "כן — Yeda מתחברת ל-SAP, Priority, Monday, Salesforce, Workday ועוד, דרך API פתוח או קונקטורים מוכנים. סנכרון עובדים, מחלקות ותפקידים קורה אוטומטית — עדכון בצד שלכם מתעדכן אצלנו בזמן אמת.",
  },
  {
    q: "איך הסוכן AI יודע לענות לעובדים שלנו על הנהלים שלנו?",
    a: "אתם מעלים את חומרי הארגון — נהלים, מדריכים, מסמכי HR, וידאו — והסוכן לומד מהם. הוא עונה בעברית, ערבית, אנגלית וכל שפה אחרת, ומצטט את המקור המדויק לכל תשובה. ניתן להגביל אילו מסמכים זמינים לכל קבוצת עובדים.",
  },
  {
    q: "האם ניתן להעביר תכנים מהמערכת הקיימת שלנו?",
    a: "כן. Yeda תומכת בייבוא מ-SCORM, xAPI, Moodle, TalentLMS ועוד. תכנים ב-PowerPoint, PDF, וידאו — מועברים ישירות. הצוות שלנו מבצע את ה-Migration בשבילכם.",
  },
  {
    q: "מה כוללת תמיכת ה-Onboarding והתמיכה השוטפת?",
    a: "כל לקוח מקבל מנהל הטמעה ייעודי, הדרכות מותאמות לצוות ה-HR, ותמיכה טכנית זמינה בעברית לאורך כל הדרך.",
  },
  {
    q: "האם Yeda היא פלטפורמה ישראלית?",
    a: "כן — Yeda היא מערכת כחול-לבן לכל דבר. פיתחנו את כל המערכת מאפס בישראל, עם צוות מקומי שמבין לעומק את הצרכים של הארגון הישראלי: עברית כשפת ממשק ראשית, תמיכה בפריסות רגולטוריות ישראליות, וזמינות לשיחה בעברית — לא כרטיס תמיכה שנענה מעבר לים.",
  },
  {
    q: "מה מייחד את Yeda לעומת פתרונות LMS אחרים בשוק?",
    a: "רוב פתרונות ה-LMS בשוק דורשים הקמה טכנית מורכבת, ממשק שאינו עברי ותמיכה גלובלית שלא מכירה את הצרכים הישראליים. Yeda פועלת ישר מהקופסה — ממשק מלא בעברית, AI ליצירת תוכן, אינטגרציות לכלים הנפוצים בישראל, ותמיכה מקומית שמדברת את השפה שלכם. ובניגוד לפתרונות מדף — פיתחנו את כל הקוד בעצמנו, כך שאנחנו יכולים להתאים ולבנות כל פיצ'ר שתצטרכו.",
  },
  {
    q: "האם ניתן לייצר תוכן הכשרה עם AI?",
    a: "זה אחד היתרונות הכי גדולים של Yeda. אתם מעלים מצגת, PDF או וידאו — ה-AI של המערכת הופך אותו להכשרה אינטראקטיבית עם שאלות, פעילויות ותעודה תוך דקות. ארגונים מדווחים על קיצור של עד 75% בזמן יצירת תוכן. אפשר גם לייצר תוכן מאפס עם prompt בעברית.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: "#F5F7FD", padding: "88px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge">שאלות נפוצות</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
            כל מה שרציתם לדעת על Yeda
          </h2>
          <p style={{ fontSize: 16, color: "#36405E", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            יש שאלה שלא ענינו עליה?{" "}
            <a href="#contact" style={{ color: "#0A59EB", fontWeight: 700, textDecoration: "none" }}>דברו איתנו</a>.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: "white", borderRadius: 16,
                border: isOpen ? "1px solid #0A59EB" : "1px solid #E3E7F2",
                boxShadow: isOpen ? "0 4px 20px rgba(10,89,235,0.1)" : "0 1px 4px rgba(0,15,97,0.05)",
                overflow: "hidden", transition: "border-color 0.25s, box-shadow 0.25s",
                position: "relative",
              }}>
                {/* Blue left accent */}
                <div style={{
                  position: "absolute", top: 0, right: 0, bottom: 0, width: 4,
                  background: "#0A59EB",
                  transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top", transition: "transform 0.25s ease",
                  borderRadius: "0 16px 16px 0",
                }} />

                <button
                  className="faq-btn"
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", background: isOpen ? "#EBF1FD" : "none",
                    border: "none", padding: "22px 28px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: 16, cursor: "pointer", fontFamily: "inherit",
                    textAlign: "right", transition: "background 0.2s",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: isOpen ? "#000F61" : "#1A1F36", flex: 1, textAlign: "right" }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                    background: isOpen ? "#0A59EB" : "#EEF1F8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.25s",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={isOpen ? "white" : "#36405E"} strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s" }}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <div style={{
                  maxHeight: isOpen ? 400 : 0, overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}>
                  <div className="faq-body" style={{ padding: "18px 28px 24px", borderTop: "1px solid #EBF1FD" }}>
                    <p style={{ fontSize: 16, color: "#36405E", lineHeight: 1.85, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 15 }}>
            שאלות נוספות? דברו איתנו ←
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .faq-btn { padding: 16px 18px !important; }
          .faq-body { padding: 0 18px 20px !important; }
        }
      `}</style>
    </section>
  );
}
