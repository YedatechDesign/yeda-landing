"use client";
import { useState } from "react";

const lmsFeatures = [
  {
    icon: "🎓",
    title: "פורטל הכשרות מותאם אישית",
    desc: "בנו פורטל הדרכות בעיצוב הארגון שלכם – לוגו, צבעים, תחומים וקטגוריות. כל עובד רואה את מה שרלוונטי לתפקידו.",
    tag: "Core LMS",
    color: "#1A5CFF",
  },
  {
    icon: "👥",
    title: "ניהול משתמשים וצוותים",
    desc: "הגדרת הרשאות, ניהול קבוצות, אפיון מסלולי למידה לפי מחלקה, תפקיד או רמה – הכל ממקום אחד.",
    tag: "Core LMS",
    color: "#1A5CFF",
  },
  {
    icon: "📈",
    title: "מעקב התקדמות וניתוח ביצועים",
    desc: "דשבורד מנהלים בזמן אמת: מי צפה, מי השלים, מה הציון, איפה יש פערים. קבלו החלטות מבוססות נתונים.",
    tag: "Analytics",
    color: "#7C3AED",
  },
  {
    icon: "🏆",
    title: "תעודות והסמכות אוטומטיות",
    desc: "בסיום הכשרה – עובדים מקבלים תעודה מותאמת אישית אוטומטית. מינהל הסמכות דיגיטלי ומלא.",
    tag: "Compliance",
    color: "#10B981",
  },
  {
    icon: "🎥",
    title: "דיגיטלי, Zoom וכיתה – במקום אחד",
    desc: "ניהול אחיד של כל סוגי ההדרכה: לומדות דיגיטליות, שידורים חיים דרך Zoom, מפגשים פיזיים ולוח שנה מובנה.",
    tag: "Multi-format",
    color: "#F59E0B",
  },
  {
    icon: "📋",
    title: "רישום נוכחות אוטומטי",
    desc: "מעקב נוכחות אוטומטי לכל סוגי ההדרכה. דוחות נוכחות מוכנים בלחיצת כפתור לצרכי רגולציה ובקרה.",
    tag: "Automation",
    color: "#EF4444",
  },
  {
    icon: "📚",
    title: "ספרייה ארגונית",
    desc: "מאגר ידע מרכזי לכל הארגון – מסמכים, נהלים, סרטונים, מצגות. נגיש, מאורגן ותמיד מעודכן.",
    tag: "Knowledge",
    color: "#1A5CFF",
  },
  {
    icon: "🤖",
    title: "עוזר AI ארגוני",
    desc: "צ'אטבוט AI שמאומן על חומרי הארגון שלכם. עובדים שואלים שאלות ומקבלים תשובות מדויקות מתוך הידע הארגוני.",
    tag: "AI",
    color: "#7C3AED",
  },
  {
    icon: "⚙️",
    title: "אוטומציות ואינטגרציות",
    desc: "חיבור ל-WhatsApp, מנוי חודשי ל-AI, ענפים נפרדים לכל לקוח – אנחנו בונים את מה שהארגון שלכם צריך.",
    tag: "Custom",
    color: "#FF6B35",
  },
];

const labsFeatures = [
  {
    icon: "✨",
    title: "יצירת לומדות AI בדקות",
    desc: "מעלים חומר גלם – מצגת, מסמך, הקלטה – והמערכת יוצרת לומדה אינטראקטיבית מלאה עם חידונים ותרגילים.",
    tag: "AI Content",
    color: "#7C3AED",
  },
  {
    icon: "🎬",
    title: "סרטוני הסבר AI",
    desc: "יצירת סרטוני הדרכה מקצועיים עם דוברים AI, תמלול אוטומטי, כתוביות ותרגום לשפות שונות.",
    tag: "Video",
    color: "#EF4444",
  },
  {
    icon: "🖼️",
    title: "מצגות אינטראקטיביות",
    desc: "AI שהופך כל מצגת לחוויית למידה אינטראקטיבית עם שאלות, הפסקות ומשימות לתלמידים.",
    tag: "Presentations",
    color: "#F59E0B",
  },
  {
    icon: "🎙️",
    title: "תמלול, תרגום ווויס-אובר",
    desc: "תמלול אוטומטי לסרטונים קיימים, תרגום לעשרות שפות ושכפול קול ל-AI voice-over – הכל אוטומטי.",
    tag: "Localization",
    color: "#10B981",
  },
  {
    icon: "🧪",
    title: "שאלונים והערכות AI",
    desc: "בניה אוטומטית של שאלות הבנה, מבחני ידע ומשימות הערכה מתוך תוכן קיים – תוך שניות.",
    tag: "Assessment",
    color: "#1A5CFF",
  },
  {
    icon: "🤖",
    title: "סוכן AI אישי לכל עובד",
    desc: "כל עובד מקבל סוכן AI אישי שמלווה אותו בתהליך הלמידה, עונה על שאלות ומתאים את הקצב לפי הביצועים.",
    tag: "AI Agent",
    color: "#7C3AED",
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
          <div className="section-badge">הפתרון המלא</div>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0D2137",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            כל מה שצריך לניהול ידע ארגוני
          </h2>
          <p style={{ fontSize: 18, color: "#64748B", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            שתי מערכות שמשלימות אחת את השנייה: LMS לניהול הכשרות ולומדות, ו-Labs ליצירת תוכן מבוסס AI.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 48,
            background: "#F1F5F9",
            padding: 6,
            borderRadius: 14,
            width: "fit-content",
            margin: "0 auto 48px",
          }}
        >
          <button
            className={`tab-btn ${activeTab === "lms" ? "active" : ""}`}
            onClick={() => setActiveTab("lms")}
          >
            🎓 Yeda LMS
          </button>
          <button
            className={`tab-btn ${activeTab === "labs" ? "active" : ""}`}
            onClick={() => setActiveTab("labs")}
          >
            🤖 Yeda Labs AI
          </button>
        </div>

        {/* Context text */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 40,
            padding: "16px 24px",
            background: activeTab === "lms" ? "#EBF3FF" : "#F3EEFF",
            borderRadius: 12,
            maxWidth: 700,
            margin: "0 auto 40px",
          }}
        >
          <p style={{ fontSize: 15, color: "#1E293B", fontWeight: 500 }}>
            {activeTab === "lms"
              ? "מערכת ניהול למידה חדשנית – בנו פורטל הדרכות בעיצוב אישי, נהלו משתמשים, עקבו אחרי התקדמות ונהלו ידע ארגוני במקום אחד."
              : "סביבת יצירת תוכן מבוססת AI – הפכו כל חומר גלם ללומדה אינטראקטיבית, סרטון הסבר מקצועי או שאלון הערכה – אוטומטית."}
          </p>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="feature-card card-hover">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${feature.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 700,
                      color: feature.color,
                      background: `${feature.color}15`,
                      padding: "2px 8px",
                      borderRadius: 6,
                      marginBottom: 6,
                    }}
                  >
                    {feature.tag}
                  </span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0D2137", lineHeight: 1.3 }}>
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 17, padding: "15px 36px" }}>
            ראו את כל הפיצ׳רים בדמו חי →
          </a>
        </div>
      </div>
    </section>
  );
}
