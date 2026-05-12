"use client";
import { useRef, useEffect, useState } from "react";

function SvgIcon({ d, size = 20, color = "#0A59EB" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

function IconBox({ d, bg = "#D6E3FC", color = "#0A59EB" }: { d: string; bg?: string; color?: string }) {
  return (
    <div style={{
      width: 48, height: 48, borderRadius: 12, background: bg,
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      <SvgIcon d={d} size={22} color={color} />
    </div>
  );
}

const pains = [
  {
    icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1",
    title: "עובד עוזב — ידע נעלם",
    desc: "כל מה שעובד ותיק צבר — נהלים, ניסיון, תהליכים — נעלם עם פרישתו. הארגון ממציא את הגלגל שוב ושוב.",
    cost: "שווה ערך ל-6-9 חודשי שכר לכל עזיבה",
  },
  {
    icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
    title: "הכשרות מפוזרות בכל מקום",
    desc: "חומרי הדרכה ב-Google Drive, מצגות ב-email, הכשרות ב-Zoom — אין מקום אחד. עובדים לא יודעים מה רלוונטי להם.",
    cost: "בממוצע 3.5 שעות שבועיות מבוזבזות לחיפוש",
  },
  {
    icon: "M18 20V10 M12 20V4 M6 20v-6",
    title: "אפס נראות על ביצועים",
    desc: "מי השלים? מי תקוע? איפה הפערים? בלי דאשבורד מנהלים, ההחלטות מתקבלות לפי תחושת בטן — לא נתונים.",
    cost: "68% מהמנהלים לא יודעים מי עבר הכשרה",
  },
  {
    icon: "M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83",
    title: "בניית תוכן לוקחת חודשים",
    desc: "תסריט, הפקה, עריכה, פרסום — מודול הדרכה אחד דורש שבועות עבודה. עד שהוא מוכן, המידע כבר לא רלוונטי.",
    cost: "40-80 שעות עבודה ליצירת שעת תוכן אחת",
  },
  {
    icon: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    title: "רגולציה שמצריכה תיעוד",
    desc: "ביקורת בטיחות, רישוי מקצועי, דרישות ISO — כל אלה מצריכות הוכחת הכשרה. בלי מערכת, זה כאוס של טפסים.",
    cost: "קנסות רגולטוריים מגיעים לאלפי שקלים",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    title: "עובדים בשטח שמוחמצים",
    desc: "חלק מהצוות מרוחק, חלק בשטח, חלק בעברית וחלק בשפה אחרת. הכשרה אחידה לכולם — פשוט לא קורה.",
    cost: "42% מהעובדים מרגישים לא מוכנים לתפקיד",
  },
];

export default function PainPointsNew() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#F5F7FD", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-badge">האתגר הארגוני</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#000F61", marginBottom: 16, lineHeight: 1.2 }}>
            ניהול ידע ארגוני — הכאב שעסקים לא מדברים עליו
          </h2>
          <p style={{ fontSize: 19, color: "#4B5472", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            כל אחד מהאתגרים הבאים עולה לארגון שלכם כסף, זמן ויעילות.
            Yeda נבנה כדי לפתור את כולם.
          </p>
        </div>

        <div
          ref={gridRef}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}
        >
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              className="card-lift"
              style={{
                background: "white",
                borderRadius: 16,
                padding: "28px 24px",
                border: "1px solid #E3E7F2",
                borderTopWidth: 3,
                borderTopColor: "#0A59EB",
                boxShadow: "0 4px 16px rgba(0,15,97,0.07)",
                opacity: visible ? 1 : 0,
                animation: visible ? `fadeInUp 0.5s ease ${i * 0.08}s both` : "none",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <IconBox d={pain.icon} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1A1F36", marginBottom: 10, lineHeight: 1.3 }}>
                {pain.title}
              </h3>
              <p style={{ fontSize: 15, color: "#4B5472", lineHeight: 1.75, marginBottom: 18 }}>
                {pain.desc}
              </p>
              <div style={{
                background: "#EBF1FD", borderRadius: 8, padding: "8px 12px",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}>
                <SvgIcon d="M13 10V3L4 14h7v7l9-11h-7z" size={13} color="#0A59EB" />
                <span style={{ color: "#0A59EB", fontSize: 14, fontWeight: 700 }}>{pain.cost}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: "center", marginTop: 52, padding: "40px 32px",
          background: "#000F61", borderRadius: 20,
        }}>
          <p style={{ color: "white", fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>
            מכירים לפחות 3 מהאתגרים האלה?
          </p>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 16, marginBottom: 28, lineHeight: 1.6 }}>
            90% מהלקוחות שלנו ראו שיפור מדיד תוך 60 יום מהשקה.
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: 15 }}>
            קבעו שיחת אבחון חינם ←
          </a>
        </div>
      </div>
    </section>
  );
}
