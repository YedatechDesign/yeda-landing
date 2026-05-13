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
    bullets: ["לוגו וצבעי מותג מותאמים", "תחומים וקטגוריות לפי מבנה ארגוני", "גישה לפי תפקיד ומחלקה"],
    image: null as string | null },
  { icon: "users" as const, title: "ניהול עובדים, צוותים ומחלקות", tag: "ניהול", ai: false,
    subtitle: "הגדרות הרשאות ומסלולי הכשרה",
    desc: "ניהול קבוצות עובדים, הקצאת מסלולי הכשרה לפי תפקיד, רמה או מחלקה.",
    bullets: ["הגדרת הרשאות גישה גרנולריות", "ניהול קבוצות ותת-קבוצות", "הקצאת מסלולי למידה אוטומטית"],
    image: null as string | null },
  { icon: "chart" as const, title: "דאשבורד ביצועים בזמן אמת", tag: "אנליטיקה", ai: false,
    subtitle: "נתונים מלאים לכל מנהל",
    desc: "מי צפה, מי השלים, מה הציון ואיפה יש פערים — הכל במסך אחד.",
    bullets: ["מעקב השלמה לפי עובד ומחלקה", "זיהוי פערי ידע אוטומטי", "דוחות לייצוא לרגולציה ו-ISO"],
    image: null as string | null },
  { icon: "cert" as const, title: "תעודות והסמכות אוטומטיות", tag: "אוטומציה", ai: false,
    subtitle: "תעודה אישית בסיום כל הכשרה",
    desc: "עם השלמת הכשרה, עובד מקבל תעודה מותאמת אישית אוטומטית.",
    bullets: ["תבניות תעודה מותאמות למותג", "ניהול הסמכות דיגיטלי מלא", "תזכורות לחידוש הסמכה"],
    image: null as string | null },
  { icon: "calendar" as const, title: "דיגיטלי, Zoom ופרונטלי — מקום אחד", tag: "ניהול", ai: false,
    subtitle: "כל פורמטי ההדרכה בממשק אחד",
    desc: "ניהול אחיד של הכשרות דיגיטליות, שידורים חיים, מפגשים פרונטליים ולוח שנה.",
    bullets: ["לוח שנה מובנה לכל ההכשרות", "נוכחות אוטומטית לכל פורמט", "רישום והרשמה עצמית להכשרות"],
    image: null as string | null },
  { icon: "book" as const, title: "ספריית ידע ארגונית", tag: "ידע", ai: false,
    subtitle: "מאגר ידע מרכזי לכל הארגון",
    desc: "מסמכים, נהלים, סרטונים, מצגות — מאורגן, נגיש ותמיד מעודכן לכל עובד.",
    bullets: ["חיפוש חכם בכל הארגון", "ניהול גרסאות ועדכונים", "גישה מהירה מכל מכשיר"],
    image: null as string | null },
  { icon: "settings" as const, title: "אינטגרציות ואוטומציות", tag: "אינטגרציה", ai: false,
    subtitle: "חיבור למערכות קיימות בארגון",
    desc: "חיבור ל-WhatsApp, Slack, מערכות HR, ועוד — בהתאמה אישית.",
    bullets: ["חיבור ל-WhatsApp ו-Slack", "אינטגרציה עם מערכות HR", "ענפים נפרדים לכל יחידה עסקית"],
    image: null as string | null },
  { icon: "shield" as const, title: "אבטחת תוכן ושליטה בגישה", tag: "אבטחה", ai: false,
    subtitle: "הגנה על תכנים ומניעת הדלפות",
    desc: "כל תוכן נגיש רק למי שאמור לראות אותו — לפי תפקיד, מחלקה, קבוצה או תנאי השלמה. אין אפשרות לשתף או להוריד ללא אישור.",
    bullets: ["גישה לתוכן לפי תפקיד ומחלקה", "מניעת הורדה ושיתוף לא מורשה", "לוג גישה ופעילות מלא"],
    image: null as string | null },
  { icon: "clipboard" as const, title: "ניהול ציות ורגולציה", tag: "ציות", ai: false,
    subtitle: "דוחות מוכנים לביקורת ורגולציה",
    desc: "מעקב אוטומטי אחר עמידה בדרישות הכשרה רגולטוריות — ISO, בטיחות, הטרדה מינית ועוד. דוחות מוכנים לייצוא בלחיצה אחת.",
    bullets: ["מעקב עמידה בדרישות רגולציה", "דוחות לייצוא לביקורות ISO", "תזכורות אוטומטיות לחידוש הסמכה"],
    image: null as string | null },
];

const labsFeatures = [
  { icon: "zap" as const, title: "יצירת הכשרות AI תוך דקות", tag: "יצירה", ai: true,
    subtitle: "חומר גלם → הכשרה מלאה",
    desc: "מעלים קובץ PDF או סרטון — המערכת יוצרת הכשרה אינטראקטיבית מלאה עם חידונים. PPT, Word וכל מסמך ניתן להמיר ל-PDF בקלות.",
    bullets: ["יצירה מ-PDF וסרטוני הדרכה", "חידונים ומשימות מובנות", "עריכה ידנית לאחר יצירה"],
    image: null as string | null },
  { icon: "video" as const, title: "סרטוני הסבר מקצועיים עם AI", tag: "וידאו", ai: true,
    subtitle: "קול AI, כתוביות ותרגום",
    desc: "יצירת סרטוני הדרכה עם קולות AI, תמלול אוטומטי, כתוביות ותרגום לשפות שונות.",
    bullets: ["מגוון קולות AI לבחירה", "כתוביות אוטומטיות", "תרגום לעשרות שפות"],
    image: null as string | null },
  { icon: "present" as const, title: "מצגות אינטראקטיביות", tag: "יצירה", ai: true,
    subtitle: "AI שהופך מצגת לחוויית הכשרה",
    desc: "הופך כל מצגת לחוויית הכשרה אינטראקטיבית עם שאלות, הפסקות ומשימות.",
    bullets: ["שאלות הבנה בין שקפים", "הפסקות חכמות לחיזוק ידע", "מעקב השלמה אוטומטי"],
    image: null as string | null },
  { icon: "mic" as const, title: "תמלול, תרגום ווויס-אובר", tag: "שפות", ai: true,
    subtitle: "אוטומציית שפה מלאה",
    desc: "תמלול אוטומטי לסרטונים קיימים, תרגום לעשרות שפות ושכפול קול AI voice-over.",
    bullets: ["תמלול אוטומטי מדויק", "תרגום בכל שפה", "Voice-over AI איכותי"],
    image: null as string | null },
  { icon: "star" as const, title: "שאלונים ומבחני הערכה AI", tag: "הערכה", ai: true,
    subtitle: "הערכת ידע אוטומטית מתוכן קיים",
    desc: "בניה אוטומטית של שאלות הבנה, מבחני ידע ומשימות הערכה — תוך שניות.",
    bullets: ["שאלות בינה מלאכותית מהתוכן", "מבחני רב-ברירה ושאלות פתוחות", "ניתוח תשובות אוטומטי"],
    image: null as string | null },
  { icon: "agent" as const, title: "סוכן AI אישי לכל עובד", tag: "AI", ai: true,
    subtitle: "מלווה אישי לאורך כל ההכשרה",
    desc: "כל עובד מקבל סוכן AI אישי שמלווה אותו, עונה על שאלות ומתאים את הקצב.",
    bullets: ["תמיכה אישית 24/7", "התאמת קצב לכל עובד", "זיכרון שיחה מצטבר"],
    image: null as string | null },
  { icon: "bot" as const, title: "עוזר AI ארגוני מבוסס חומרי הארגון", tag: "AI", ai: true,
    subtitle: "צ׳אטבוט AI שמאומן על הנהלים שלכם",
    desc: "עובדים שואלים — ומקבלים תשובות מדויקות ומיידיות עם הפניות למקורות.",
    bullets: ["אימון על מסמכי הארגון", "תשובות בעברית ובשפות נוספות", "הפניות למקורות מדויקות"],
    image: null as string | null },
];

type FeatureItem = typeof lmsFeatures[0] | typeof labsFeatures[0];

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
            <div style={{ fontSize: 18, fontWeight: 800, color: "#1A1F36", marginBottom: 4 }}>
              {feature.title}
            </div>
            <div style={{ fontSize: 15, color: "#1A1F36", fontWeight: 500, opacity: 0.7 }}>{feature.subtitle}</div>
          </div>
        </div>

        <div className="acc-right" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {feature.ai && (
            <span style={{
              background: "linear-gradient(135deg, #0A59EB, #000F61)",
              color: "white",
              fontSize: 12,
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: 999,
              letterSpacing: "0.04em",
            }}>AI</span>
          )}
          <span style={{
            background: open ? "#0A59EB" : "#EEF1F8",
            color: open ? "white" : "#36405E",
            fontSize: 12,
            fontWeight: 700,
            padding: "4px 12px",
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
        maxHeight: open ? (feature.image ? 700 : 400) : 0,
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{
          padding: "20px 28px 28px",
          borderTop: "1px solid #EBF1FD",
        }}>
          <p style={{ fontSize: 17, color: "#2D3142", lineHeight: 1.8, marginBottom: 18 }}>
            {feature.desc}
          </p>
          <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: feature.image ? 20 : 0 }}>
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
          {feature.image && (
            <div style={{
              borderRadius: 12, overflow: "hidden",
              border: "1px solid #E3E7F2",
              boxShadow: "0 8px 32px rgba(0,15,97,0.1)",
            }}>
              <img
                src={feature.image}
                alt={feature.title}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LabsHeroCard() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #000F61 0%, #0A1F7A 55%, #0A59EB 100%)",
      borderRadius: 24, padding: "52px 48px", marginBottom: 28, textAlign: "center",
    }} className="labs-hero-card">
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "rgba(10,89,235,0.35)", border: "1px solid rgba(118,164,249,0.45)",
        borderRadius: 999, padding: "6px 20px", marginBottom: 22,
      }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#76A4F9" }} />
        <span style={{ color: "#B4CCFF", fontSize: 15, fontWeight: 700, letterSpacing: "0.06em" }}>
          Yeda Labs AI — בינה מלאכותית ליצירת לומדות
        </span>
      </div>
      <h3 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "white", margin: "0 auto 16px", lineHeight: 1.25, maxWidth: 680 }}>
        בנו לומדות מקצועיות תוך דקות —{" "}
        <span style={{ color: "#76A4F9" }}>מדף, בשפה הגרפית שלכם</span>
      </h3>
      <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 36px" }}>
        מעלים חומר גלם — ה-AI יוצר לומדה מלאה, מותאמת לצבעי ולוגו הלקוח. לומדות רגולטוריות, הדרכות בטיחות, ISO — ללא תשלום לחברות חיצוניות.
      </p>
      <div className="labs-hero-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 780, margin: "0 auto 36px" }}>
        {[
          { num: "01", title: "דקות, לא חודשים", desc: "סוכנויות לומדות לוקחות 4–8 שבועות. עם AI — לומדה מלאה תוך דקות בלבד" },
          { num: "02", title: "בשפה הגרפית שלכם", desc: "לוגו, צבעים וגרפיקה של הלקוח — הלומדה נראית כחלק מהמותג" },
          { num: "03", title: "חסכו אלפי שקלים", desc: "לומדת בטיחות / הטרדה מינית עולה 6,500–15,000 ₪ בסוכנות — עם Yeda Labs: בונים לבד" },
        ].map(item => (
          <div key={item.num} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 18, padding: "26px 22px", textAlign: "right" }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#76A4F9", letterSpacing: "0.08em", marginBottom: 8 }}>{item.num}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "white", marginBottom: 8, lineHeight: 1.3 }}>{item.title}</div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <a href="#contact" className="btn-primary" style={{ fontSize: 15, display: "inline-block" }}>
        בקשו דמו חינם ←
      </a>
    </div>
  );
}

function LmsBanner() {
  return (
    <div style={{ background: "#000F61", borderRadius: 14, padding: "16px 28px", maxWidth: 760, margin: "0 auto 32px", textAlign: "center" }}>
      <p style={{ color: "white", fontSize: 15, fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
        מערכת ניהול הכשרות ארגוניות — פורטל מותאם, ניהול עובדים, מעקב ביצועים ורגולציה ממקום אחד.
      </p>
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
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#1A1F36", marginBottom: 14, lineHeight: 1.15 }}>
            כל מה שהארגון שלכם צריך לניהול ידע והכשרות
          </h2>
          <p style={{ fontSize: 19, color: "#36405E", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            שתי מערכות שמשלימות אחת את השנייה: LMS לניהול הכשרות, ו-Labs ליצירת תוכן AI.
          </p>
        </div>

        {/* ── DESKTOP: tab-controlled view ── */}
        <div className="features-desktop-view">
          {/* Tab pills */}
          <div className="tab-wrap" style={{
            display: "flex", justifyContent: "center", gap: 8, marginBottom: 36,
            background: "#EEF1F8", padding: 5, borderRadius: 999,
            width: "fit-content", margin: "0 auto 36px",
            maxWidth: "100%", overflowX: "auto",
          }}>
            <button className={`tab-btn ${tab === "lms" ? "active" : ""}`} onClick={() => setTab("lms")}>
              Yeda LMS — ניהול הכשרות
            </button>
            <button className={`tab-btn ${tab === "labs" ? "active" : ""}`} onClick={() => setTab("labs")}>
              Yeda Labs — יצירת תוכן AI
            </button>
          </div>

          {tab === "labs" && <LabsHeroCard />}
          {tab === "lms"  && <LmsBanner />}

          <div style={{ display: "grid", gap: 12 }}>
            {features.map((f, i) => (
              <AccordionItem key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>

        {/* ── MOBILE: both sections always visible ── */}
        <div className="features-mobile-view">
          {/* LMS section */}
          <div style={{ marginBottom: 48 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
              background: "#EEF1F8", borderRadius: 12, padding: "12px 18px",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#000F61", flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 800, color: "#000F61", letterSpacing: "0.04em" }}>
                Yeda LMS — ניהול הכשרות
              </span>
            </div>
            <LmsBanner />
            <div style={{ display: "grid", gap: 10 }}>
              {lmsFeatures.map((f, i) => (
                <AccordionItem key={f.title} feature={f} index={i} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ flex: 1, height: 1, background: "#E3E7F2" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0A59EB", flexShrink: 0 }} />
            <div style={{ flex: 1, height: 1, background: "#E3E7F2" }} />
          </div>

          {/* Labs section */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
              background: "linear-gradient(135deg, #000F61, #0A1F7A)",
              borderRadius: 12, padding: "12px 18px",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#76A4F9", flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 800, color: "white", letterSpacing: "0.04em" }}>
                Yeda Labs — יצירת תוכן AI
              </span>
            </div>

            <LabsHeroCard />

            <div style={{ display: "grid", gap: 10 }}>
              {labsFeatures.map((f, i) => (
                <AccordionItem key={f.title} feature={f} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 15 }}>
            ראו את כל הפיצ׳רים בדמו חי ←
          </a>
        </div>
      </div>

      <style>{`
        .tab-btn {
          background: none;
          border: none;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 600;
          color: #36405E;
          cursor: pointer;
          border-radius: 999px;
          font-family: inherit;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .tab-btn.active {
          background: #000F61;
          color: white;
        }
        /* Desktop: show tab view, hide mobile stacked view */
        .features-desktop-view { display: block; }
        .features-mobile-view  { display: none; }

        @media (max-width: 768px) {
          /* Switch to always-visible stacked layout on mobile */
          .features-desktop-view { display: none !important; }
          .features-mobile-view  { display: block !important; }
          .labs-hero-card { padding: 32px 20px !important; }
          .labs-hero-grid { grid-template-columns: 1fr !important; }
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
