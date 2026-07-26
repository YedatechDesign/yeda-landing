"use client";
import { useState } from "react";
import {
  IconUsers, IconChart, IconCertificate, IconVideo, IconCalendar,
  IconBook, IconBot, IconSettings, IconZap, IconMic, IconPresentation, IconStar
} from "./Icons";

const ICON_BOX = (bg: string): React.CSSProperties => ({
  width: 44,
  height: 44,
  borderRadius: 8,
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

const lmsFeatures = [
  { Icon: IconSettings,    title: "פורטל הכשרות מותאם אישית",      desc: "פורטל בעיצוב הארגון שלכם – לוגו, צבעים, תחומים וקטגוריות. כל עובד רואה את מה שרלוונטי לתפקידו.",                     bg: "#000F61" },
  { Icon: IconUsers,       title: "ניהול משתמשים וצוותים",          desc: "הגדרת הרשאות, ניהול קבוצות, אפיון מסלולי למידה לפי מחלקה, תפקיד או רמה – הכל ממקום אחד.",                            bg: "#000F61" },
  { Icon: IconChart,       title: "מעקב התקדמות וניתוח ביצועים",   desc: "דשבורד מנהלים בזמן אמת: מי צפה, מי השלים, מה הציון, איפה יש פערים. קבלו החלטות מבוססות נתונים.",                    bg: "#A94700" },
  { Icon: IconCertificate, title: "תעודות והסמכות אוטומטיות",       desc: "בסיום הכשרה – עובדים מקבלים תעודה מותאמת אישית אוטומטית. מינהל הסמכות דיגיטלי ומלא.",                              bg: "#A94700" },
  { Icon: IconVideo,       title: "דיגיטלי, Zoom ופרונטלי – במקום אחד", desc: "ניהול אחיד של כל סוגי ההדרכה: הכשרות דיגיטליות, שידורים חיים, מפגשים פרונטליים ולוח שנה מובנה.",                      bg: "#000F61" },
  { Icon: IconCalendar,    title: "רישום נוכחות אוטומטי",           desc: "מעקב נוכחות אוטומטי לכל סוגי ההדרכה. דוחות נוכחות מוכנים בלחיצת כפתור לצרכי רגולציה.",                            bg: "#000F61" },
  { Icon: IconBook,        title: "ספרייה ארגונית",                 desc: "מאגר ידע מרכזי לכל הארגון – מסמכים, נהלים, סרטונים, מצגות. נגיש, מאורגן ותמיד מעודכן.",                              bg: "#A94700" },
  { Icon: IconBot,         title: "עוזר AI ארגוני",                 desc: "צ'אטבוט AI שמאומן על חומרי הארגון שלכם. עובדים שואלים שאלות ומקבלים תשובות מדויקות.",                                bg: "#A94700" },
  { Icon: IconSettings,    title: "אוטומציות ואינטגרציות",          desc: "חיבור ל-WhatsApp, מנוי חודשי ל-AI, ענפים נפרדים לכל לקוח – אנחנו בונים את מה שהארגון צריך.",                         bg: "#000F61" },
];

const labsFeatures = [
  { Icon: IconZap,          title: "יצירת הכשרות AI בדקות",         desc: "מעלים חומר גלם – מצגת, מסמך, הקלטה – והמערכת יוצרת הכשרה אינטראקטיבית מלאה עם חידונים.",                           bg: "#000F61" },
  { Icon: IconVideo,        title: "סרטוני הסבר AI",                desc: "יצירת סרטוני הדרכה מקצועיים עם דוברים AI, תמלול אוטומטי, כתוביות ותרגום לשפות שונות.",                               bg: "#A94700" },
  { Icon: IconPresentation, title: "מצגות אינטראקטיביות",           desc: "AI שהופך כל מצגת לחוויית למידה אינטראקטיבית עם שאלות, הפסקות ומשימות לעובדים.",                                     bg: "#000F61" },
  { Icon: IconMic,          title: "תמלול, תרגום ווויס-אובר",       desc: "תמלול אוטומטי לסרטונים קיימים, תרגום לעשרות שפות ושכפול קול ל-AI voice-over – אוטומטי.",                             bg: "#A94700" },
  { Icon: IconStar,         title: "שאלונים והערכות AI",            desc: "בניה אוטומטית של שאלות הבנה, מבחני ידע ומשימות הערכה מתוך תוכן קיים – תוך שניות.",                                  bg: "#000F61" },
  { Icon: IconBot,          title: "סוכן AI אישי לכל עובד",         desc: "כל עובד מקבל סוכן AI אישי שמלווה אותו בתהליך הלמידה, עונה על שאלות ומתאים את הקצב.",                                bg: "#A94700" },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState<"lms" | "labs">("lms");
  const features = activeTab === "lms" ? lmsFeatures : labsFeatures;

  return (
    <section id="features" style={{ background: "white", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="section-badge">הפתרון המלא</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
            כל מה שצריך לניהול ידע ארגוני
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            שתי מערכות שמשלימות אחת את השנייה: LMS לניהול הכשרות, ו-Labs ליצירת תוכן מבוסס AI.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 6, marginBottom: 36,
          background: "#F0F2F8", padding: 5, borderRadius: 8,
          width: "fit-content", margin: "0 auto 36px",
        }}>
          <button className={`tab-btn ${activeTab === "lms" ? "active" : ""}`} onClick={() => setActiveTab("lms")}>
            Yeda LMS
          </button>
          <button className={`tab-btn ${activeTab === "labs" ? "active" : ""}`} onClick={() => setActiveTab("labs")}>
            Yeda Labs AI
          </button>
        </div>

        {/* Context strip */}
        <div style={{
          background: activeTab === "lms" ? "#000F61" : "#A94700",
          borderRadius: 8, padding: "14px 24px",
          maxWidth: 700, margin: "0 auto 36px", textAlign: "center",
        }}>
          <p style={{ color: "white", fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
            {activeTab === "lms"
              ? "מערכת ניהול למידה חדשנית – בנו פורטל הכשרות מותאם אישית, נהלו משתמשים ועקבו אחרי ביצועים במקום אחד."
              : "סביבת יצירת תוכן מבוססת AI – הפכו כל חומר גלם להכשרה אינטראקטיבית, סרטון מקצועי או שאלון הערכה."}
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
          {features.map(({ Icon, title, desc, bg }) => (
            <div
              key={title}
              style={{
                background: "white",
                border: "1.5px solid #E0E4F0",
                borderRadius: 10,
                padding: "24px 20px",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#000F61";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,15,97,0.09)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#E0E4F0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon + title row */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div style={ICON_BOX(bg)}>
                  <Icon size={20} color="white" />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#000F61", lineHeight: 1.3, margin: 0 }}>
                  {title}
                </h3>
              </div>
              <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 15, padding: "13px 32px" }}>
            ראו את כל הפיצ׳רים בדמו חי ←
          </a>
        </div>
      </div>
    </section>
  );
}
