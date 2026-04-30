"use client";
import { useState } from "react";
import {
  IconUsers, IconChart, IconCertificate, IconVideo, IconCalendar,
  IconBook, IconBot, IconSettings, IconZap, IconMic, IconPresentation, IconStar
} from "./Icons";

const lmsFeatures = [
  {
    Icon: IconSettings,
    title: "פורטל הכשרות מותאם אישית",
    desc: "פורטל בעיצוב הארגון שלכם – לוגו, צבעים, תחומים וקטגוריות. כל עובד רואה את מה שרלוונטי לתפקידו.",
    color: "#000F61",
  },
  {
    Icon: IconUsers,
    title: "ניהול משתמשים וצוותים",
    desc: "הגדרת הרשאות, ניהול קבוצות, אפיון מסלולי למידה לפי מחלקה, תפקיד או רמה – הכל ממקום אחד.",
    color: "#000F61",
  },
  {
    Icon: IconChart,
    title: "מעקב התקדמות וניתוח ביצועים",
    desc: "דשבורד מנהלים בזמן אמת: מי צפה, מי השלים, מה הציון, איפה יש פערים. קבלו החלטות מבוססות נתונים.",
    color: "#F08700",
  },
  {
    Icon: IconCertificate,
    title: "תעודות והסמכות אוטומטיות",
    desc: "בסיום הכשרה – עובדים מקבלים תעודה מותאמת אישית אוטומטית. מינהל הסמכות דיגיטלי ומלא.",
    color: "#F08700",
  },
  {
    Icon: IconVideo,
    title: "דיגיטלי, Zoom וכיתה – במקום אחד",
    desc: "ניהול אחיד של כל סוגי ההדרכה: לומדות דיגיטליות, שידורים חיים, מפגשים פיזיים ולוח שנה מובנה.",
    color: "#000F61",
  },
  {
    Icon: IconCalendar,
    title: "רישום נוכחות אוטומטי",
    desc: "מעקב נוכחות אוטומטי לכל סוגי ההדרכה. דוחות נוכחות מוכנים בלחיצת כפתור לצרכי רגולציה.",
    color: "#000F61",
  },
  {
    Icon: IconBook,
    title: "ספרייה ארגונית",
    desc: "מאגר ידע מרכזי לכל הארגון – מסמכים, נהלים, סרטונים, מצגות. נגיש, מאורגן ותמיד מעודכן.",
    color: "#F08700",
  },
  {
    Icon: IconBot,
    title: "עוזר AI ארגוני",
    desc: "צ'אטבוט AI שמאומן על חומרי הארגון שלכם. עובדים שואלים שאלות ומקבלים תשובות מדויקות.",
    color: "#F08700",
  },
  {
    Icon: IconSettings,
    title: "אוטומציות ואינטגרציות",
    desc: "חיבור ל-WhatsApp, מנוי חודשי ל-AI, ענפים נפרדים לכל לקוח – אנחנו בונים את מה שהארגון צריך.",
    color: "#000F61",
  },
];

const labsFeatures = [
  {
    Icon: IconZap,
    title: "יצירת לומדות AI בדקות",
    desc: "מעלים חומר גלם – מצגת, מסמך, הקלטה – והמערכת יוצרת לומדה אינטראקטיבית מלאה עם חידונים.",
    color: "#000F61",
  },
  {
    Icon: IconVideo,
    title: "סרטוני הסבר AI",
    desc: "יצירת סרטוני הדרכה מקצועיים עם דוברים AI, תמלול אוטומטי, כתוביות ותרגום לשפות שונות.",
    color: "#F08700",
  },
  {
    Icon: IconPresentation,
    title: "מצגות אינטראקטיביות",
    desc: "AI שהופך כל מצגת לחוויית למידה אינטראקטיבית עם שאלות, הפסקות ומשימות לעובדים.",
    color: "#000F61",
  },
  {
    Icon: IconMic,
    title: "תמלול, תרגום ווויס-אובר",
    desc: "תמלול אוטומטי לסרטונים קיימים, תרגום לעשרות שפות ושכפול קול ל-AI voice-over – אוטומטי.",
    color: "#F08700",
  },
  {
    Icon: IconStar,
    title: "שאלונים והערכות AI",
    desc: "בניה אוטומטית של שאלות הבנה, מבחני ידע ומשימות הערכה מתוך תוכן קיים – תוך שניות.",
    color: "#000F61",
  },
  {
    Icon: IconBot,
    title: "סוכן AI אישי לכל עובד",
    desc: "כל עובד מקבל סוכן AI אישי שמלווה אותו בתהליך הלמידה, עונה על שאלות ומתאים את הקצב.",
    color: "#F08700",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState<"lms" | "labs">("lms");
  const features = activeTab === "lms" ? lmsFeatures : labsFeatures;

  return (
    <section id="features" style={{ background: "white", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-badge">הפתרון המלא</span>
          <h2 className="heading-section" style={{ marginBottom: 16 }}>
            כל מה שצריך לניהול ידע ארגוני
          </h2>
          <p style={{ fontSize: 17, color: "#A1A5C0", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            שתי מערכות שמשלימות אחת את השנייה: LMS לניהול הכשרות, ו-Labs ליצירת תוכן מבוסס AI.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 44,
            background: "#F0F2F8",
            padding: 5,
            borderRadius: 8,
            width: "fit-content",
            margin: "0 auto 44px",
          }}
        >
          <button
            className={`tab-btn ${activeTab === "lms" ? "active" : ""}`}
            onClick={() => setActiveTab("lms")}
          >
            Yeda LMS
          </button>
          <button
            className={`tab-btn ${activeTab === "labs" ? "active" : ""}`}
            onClick={() => setActiveTab("labs")}
          >
            Yeda Labs AI
          </button>
        </div>

        {/* Context strip */}
        <div
          style={{
            background: activeTab === "lms" ? "#000F61" : "#F08700",
            borderRadius: 8,
            padding: "16px 24px",
            maxWidth: 720,
            margin: "0 auto 40px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "white", fontSize: 15, fontWeight: 600, margin: 0 }}>
            {activeTab === "lms"
              ? "מערכת ניהול למידה חדשנית – בנו פורטל הכשרות מותאם אישית, נהלו משתמשים ועקבו אחרי ביצועים במקום אחד."
              : "סביבת יצירת תוכן מבוססת AI – הפכו כל חומר גלם ללומדה אינטראקטיבית, סרטון מקצועי או שאלון הערכה."}
          </p>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {features.map(({ Icon, title, desc, color }) => (
            <div key={title} className="feature-card">
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
                <div
                  className="icon-box"
                  style={{
                    background: color,
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="white" />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#000F61", lineHeight: 1.3, margin: 0, paddingTop: 4 }}>
                  {title}
                </h3>
              </div>
              <p style={{ fontSize: 14, color: "#A1A5C0", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
            ראו את כל הפיצ׳רים בדמו חי ←
          </a>
        </div>
      </div>
    </section>
  );
}
