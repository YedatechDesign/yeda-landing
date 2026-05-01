"use client";
import { useState } from "react";

function Icon({ d, size = 20, color = "currentColor" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  portal:    "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  users:     "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  chart:     "M18 20V10 M12 20V4 M6 20v-6",
  cert:      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  calendar:  "M3 4h18v18H3z M16 2v4 M8 2v4 M3 10h18",
  lock:      "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4",
  book:      "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z",
  bot:       "M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H3a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z M9 14h.01 M15 14h.01",
  settings:  "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  shield:    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  clipboard: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2 M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2 M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 M12 12v4 M10 14h4",
  zap:       "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  video:     "M23 7l-7 5 7 5V7z M1 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z",
  present:   "M2 3h20v14H2z M8 21h8 M12 17v4",
  mic:       "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8",
  star:      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  agent:     "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  chevron:   "M6 9l6 6 6-6",
};

const lmsFeatures = [
  { icon: "portal" as const, title: "פורטל הכשרות בעיצוב הארגון", tag: "ניהול", ai: false,
    subtitle: "ממשק בצבעי ובלוגו הארגון שלכם",
    desc: "כל עובד רואה רק את ההכשרות הרלוונטיות לתפקידו ומחלקתו.",
    bullets: ["לוגו וצבעי מותג מותאמים", "תחומים וקטגוריות לפי מבנה ארגוני", "גישה לפי תפקיד ומחלקה"] },
  { icon: "users" as const, title: "ניהול עובדים, צוותים ומחלקות", tag: "ניהול", ai: false,
    subtitle: "הגדרות הרשאות ומסלולי הכשרה",
    desc: "ניהול קבוצות עובדים, הקצאת מסלולי הכשרה לפי תפקיד, רמה או מחלקה.",
    bullets: ["הגדרת הרשאות גישה גרנולריות", "ניהול קבוצות ותת-קבוצות", "הקצאת מסלולי למידה אוטומטית"] },
  { icon: "chart" as const, title: "דאשבורד ביצועים בזמן אמת", tag: "אנליטיקה", ai: false,
    subtitle: "נתונים מלאים לכל מנהל",
    desc: "מי צפה, מי השלים, מה הציון ואיפה יש פערים — הכל במסך אחד.",
    bullets: ["מעקב השלמה לפי עובד ומחלקה", "זיהוי פערי ידע אוטומטי", "דוחות לייצוא לרגולציה ו-ISO"] },
  { icon: "cert" as const, title: "תעודות והסמכות אוטומטיות", tag: "אוטומציה", ai: false,
    subtitle: "תעודה אישית בסיום כל הכשרה",
    desc: "עם השלמת הכשרה, עובד מקבל תעודה מותאמת אישית אוטומטית.",
    bullets: ["תבניות תעודה מותאמות למותג", "ניהול הסמכות דיגיטלי מלא", "תזכורות לחידוש הסמכה"] },
  { icon: "calendar" as const, title: "דיגיטלי, Zoom וכיתה — מקום אחד", tag: "ניהול", ai: false,
    subtitle: "כל פורמטי ההדרכה בממשק אחד",
    desc: "ניהול אחיד של לומדות דיגיטליות, שידורים חיים, מפגשים פיזיים ולוח שנה.",
    bullets: ["לוח שנה מובנה לכל ההדרכות", "נוכחות אוטומטית לכל פורמט", "רישום ונרשמות עצמית לקורסים"] },
  { icon: "book" as const, title: "ספריית ידע ארגונית", tag: "ידע", ai: false,
    subtitle: "מאגר ידע מרכזי לכל הארגון",
    desc: "מסמכים, נהלים, סרטונים, מצגות — מאורגן, נגיש ותמיד מעודכן לכל עובד.",
    bullets: ["חיפוש חכם בכל הארגון", "ניהול גרסאות ועדכונים", "גישה מהירה מכל מכשיר"] },
  { icon: "bot" as const, title: "עוזר AI מבוסס חומרי הארגון", tag: "AI", ai: true,
    subtitle: "צ׳אטבוט AI שמאומן על הנהלים שלכם",
    desc: "עובדים שואלים — ומקבלים תשובות מדויקות ומיידיות עם הפניות למקורות.",
    bullets: ["אימון על מסמכי הארגון", "תשובות בעברית ובשפות נוספות", "הפניות למקורות מדויקות"] },
  { icon: "settings" as const, title: "אינטגרציות ואוטומציות", tag: "אינטגרציה", ai: false,
    subtitle: "חיבור למערכות קיימות בארגון",
    desc: "חיבור ל-WhatsApp, Slack, מערכות HR, ועוד — בהתאמה אישית.",
    bullets: ["חיבור ל-WhatsApp ו-Slack", "אינטגרציה עם מערכות HR", "ענפים נפרדים לכל יחידה עסקית"] },
  { icon: "shield" as const, title: "אבטחת תוכן ושליטה בגישה", tag: "אבטחה", ai: false,
    subtitle: "הגנה על תכנים ומניעת הדלפות",
    desc: "כל תוכן נגיש רק למי שאמור לראות אותו — לפי תפקיד, מחלקה, קבוצה או תנאי השלמה. אין אפשרות לשתף או להוריד ללא אישור.",
    bullets: ["גישה לתוכן לפי תפקיד ומחלקה", "מניעת הורדה ושיתוף לא מורשה", "לוג גישה ופעילות מלא"] },
  { icon: "clipboard" as const, title: "ניהול ציות ורגולציה", tag: "ציות", ai: false,
    subtitle: "דוחות מוכנים לביקורת ורגולציה",
    desc: "מעקב אוטומטי אחר עמידה בדרישות הכשרה רגולטוריות — ISO, בטיחות, הטרדה מינית ועוד. דוחות מוכנים לייצוא בלחיצה אחת.",
    bullets: ["מעקב עמידה בדרישות רגולציה", "דוחות לייצוא לביקורות ISO", "תזכורות אוטומטיות לחידוש הסמכה"] },
];

const labsFeatures = [
  { icon: "zap" as const, title: "יצירת הכשרות AI תוך דקות", tag: "יצירה", ai: true,
    subtitle: "חומר גלם → לומדה מלאה",
    desc: "מעלים מצגת, מסמך או הקלטה — המערכת יוצרת לומדה אינטראקטיבית מלאה עם חידונים.",
    bullets: ["יצירה אוטומטית מ-PPT, PDF, וידאו", "חידונים ומשימות מובנות", "עריכה ידנית לאחר יצירה"] },
  { icon: "video" as const, title: "סרטוני הסבר מקצועיים עם AI", tag: "וידאו", ai: true,
    subtitle: "דוברים AI, כתוביות ותרגום",
    desc: "יצירת סרטוני הדרכה עם דוברים AI, תמלול אוטומטי, כתוביות ותרגום לשפות שונות.",
    bullets: ["דוברי AI ריאליסטיים", "כתוביות אוטומטיות", "תרגום לעשרות שפות"] },
  { icon: "present" as const, title: "מצגות אינטראקטיביות", tag: "יצירה", ai: true,
    subtitle: "AI שהופך מצגת לחוויית הכשרה",
    desc: "הופך כל מצגת לחוויית הכשרה אינטראקטיבית עם שאלות, הפסקות ומשימות.",
    bullets: ["שאלות הבנה בין שקפים", "הפסקות חכמות לחיזוק ידע", "מעקב השלמה אוטומטי"] },
  { icon: "mic" as const, title: "תמלול, תרגום ווויס-אובר", tag: "שפות", ai: true,
    subtitle: "אוטומציית שפה מלאה",
    desc: "תמלול אוטומטי לסרטונים קיימים, תרגום לעשרות שפות ושכפול קול AI voice-over.",
    bullets: ["תמלול אוטומטי מדויק", "תרגום בכל שפה", "Voice-over AI איכותי"] },
  { icon: "star" as const, title: "שאלונים ומבחני הערכה AI", tag: "הערכה", ai: true,
    subtitle: "הערכת ידע אוטומטית מתוכן קיים",
    desc: "בניה אוטומטית של שאלות הבנה, מבחני ידע ומשימות הערכה — תוך שניות.",
    bullets: ["שאלות בינה מלאכותית מהתוכן", "מבחני רב-ברירה ושאלות פתוחות", "ניתוח תשובות אוטומטי"] },
  { icon: "agent" as const, title: "סוכן AI אישי לכל עובד", tag: "AI", ai: true,
    subtitle: "מלווה אישי לאורך כל ההכשרה",
    desc: "כל עובד מקבל סוכן AI אישי שמלווה אותו, עונה על שאלות ומתאים את הקצב.",
    bullets: ["תמיכה אישית 24/7", "התאמת קצב לכל עובד", "זיכרון שיחה מצטבר"] },
];

type FeatureItem = typeof lmsFeatures[0];

function AccordionItem({ feature, index }: { feature: FeatureItem; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      style={{
        background: "white",
        border: open ? "1px solid #0A59EB" : "1px solid #E3E7F2",
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s",
        boxShadow: open ? "0 4px 16px rgba(10,89,235,0.1)" : "0 1px 2px rgba(0,15,97,0.05)",
        position: "relative",
      }}
    >
      {/* Blue left accent on open */}
      <div style={{
        position: "absolute",
        top: 0, right: 0, bottom: 0,
        width: 4,
        background: "#0A59EB",
        transform: open ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: "transform 0.25s ease",
        borderRadius: "0 16px 16px 0",
      }} />

      {/* Header row */}
      <button
        className="acc-btn"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: open ? "#EBF1FD" : "none",
          border: "none",
          padding: "22px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          cursor: "pointer",
          fontFamily: "inherit",
          textAlign: "right",
          transition: "background 0.2s",
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = "#F5F8FF"; }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = "none"; }}
      >
        <div className="acc-left" style={{ display: "flex", alignItems: "center", gap: 16, flex: 1, minWidth: 0 }}>
          {/* Icon */}
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: open ? "#0A59EB" : "#D6E3FC",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.25s",
          }}>
            <Icon d={ICONS[feature.icon]} size={22} color={open ? "white" : "#0A59EB"} />
          </div>

          {/* Title block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#1A1F36", marginBottom: 3 }}>
              {feature.title}
            </div>
            <div style={{ fontSize: 14, color: "#36405E", fontWeight: 400 }}>{feature.subtitle}</div>
          </div>
        </div>

        <div className="acc-right" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {feature.ai && (
            <span style={{
              background: "linear-gradient(135deg, #0A59EB, #000F61)",
              color: "white",
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 999,
              letterSpacing: "0.04em",
            }}>AI</span>
          )}
          <span style={{
            background: open ? "#0A59EB" : "#EEF1F8",
            color: open ? "white" : "#36405E",
            fontSize: 10,
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: 999,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
            transition: "all 0.2s",
          }}>{feature.tag}</span>

          {/* Toggle chevron */}
          <div style={{
            width: 34, height: 34, borderRadius: 10, flexShrink: 0,
            background: open ? "#0A59EB" : "#EEF1F8",
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "all 0.25s",
          }}>
            <Icon d={ICONS.chevron} size={16} color={open ? "white" : "#36405E"} />
          </div>
        </div>
      </button>

      {/* Expandable body */}
      <div style={{
        maxHeight: open ? 400 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{
          padding: "0 28px 28px",
          borderTop: "1px solid #EBF1FD",
          paddingTop: 20,
          marginTop: 0,
        }}>
          <p style={{ fontSize: 17, color: "#2D3142", lineHeight: 1.8, marginBottom: 18 }}>
            {feature.desc}
          </p>
          <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {feature.bullets.map(b => (
              <div key={b} style={{
                display: "flex", alignItems: "flex-start", gap: 10,
                fontSize: 16, color: "#2D3142", lineHeight: 1.6,
                padding: "11px 14px",
                background: "#EBF1FD",
                borderRadius: 10,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#0A59EB", marginTop: 8, flexShrink: 0,
                }} />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesNew() {
  const [tab, setTab] = useState<"lms" | "labs">("lms");
  const features = tab === "lms" ? lmsFeatures : labsFeatures;

  return (
    <section id="features" style={{ background: "white", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="section-badge">הפתרון המלא</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#1A1F36", marginBottom: 14, lineHeight: 1.15, }}>
            כל מה שהארגון שלכם צריך לניהול ידע והכשרות
          </h2>
          <p style={{ fontSize: 19, color: "#36405E", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            שתי מערכות שמשלימות אחת את השנייה: LMS לניהול הכשרות, ו-Labs ליצירת תוכן AI.
          </p>
        </div>

        {/* Tab pills */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 8, marginBottom: 36,
          background: "#EEF1F8", padding: 5, borderRadius: 999,
          width: "fit-content", margin: "0 auto 36px",
        }}>
          <button className={`tab-btn ${tab === "lms" ? "active" : ""}`} onClick={() => setTab("lms")}>
            Yeda LMS — ניהול הכשרות
          </button>
          <button className={`tab-btn ${tab === "labs" ? "active" : ""}`} onClick={() => setTab("labs")}>
            Yeda Labs — יצירת תוכן AI
          </button>
        </div>

        {/* Context banner */}
        <div style={{
          background: tab === "lms" ? "#000F61" : "#0A59EB",
          borderRadius: 14, padding: "16px 28px",
          maxWidth: 760, margin: "0 auto 32px", textAlign: "center",
          transition: "background 0.3s",
        }}>
          <p style={{ color: "white", fontSize: 15, fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
            {tab === "lms"
              ? "מערכת ניהול הכשרות ארגוניות — פורטל מותאם, ניהול עובדים, מעקב ביצועים ורגולציה ממקום אחד."
              : "כלי AI ליצירת תוכן הכשרה — הפכו כל חומר גלם ללומדה, סרטון, שאלון או מצגת אינטראקטיבית תוך דקות."}
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "grid", gap: 12 }}>
          {features.map((f, i) => (
            <AccordionItem key={f.title} feature={f} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 15 }}>
            ראו את כל הפיצ׳רים בדמו חי ←
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .acc-btn {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 18px 18px !important;
            gap: 12px !important;
          }
          .acc-left {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
            width: 100% !important;
          }
          .acc-right {
            width: 100% !important;
            justify-content: flex-end !important;
          }
        }
      `}</style>
    </section>
  );
}
