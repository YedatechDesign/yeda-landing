const differentiators = [
  {
    number: "01",
    title: "הכל במקום אחד – לא 5 כלים שלא מדברים ביניהם",
    desc: "LMS, יצירת תוכן AI, מעקב ביצועים, תעודות, ספריית ידע וצ'אטבוט ארגוני – בפלטפורמה אחת. ללא אינטגרציות מסובכות, ללא תחזוקה מפוצלת.",
    highlight: "מתחרים מחייבים אתכם לשלם על 3-5 מוצרים נפרדים",
  },
  {
    number: "02",
    title: "בנוי לישראל – לא תרגום של מוצר זר",
    desc: "ממשק מלא בעברית, תמיכה מקומית ישירה, ידע רגולטורי ישראלי מובנה, ושרתים שממוקמים בישראל לעמידה בדרישות פרטיות.",
    highlight: "90% מהמתחרים הם מוצרים זרים שתורגמו לעברית",
  },
  {
    number: "03",
    title: "AI שיוצר תוכן – לא רק מארגן אותו",
    desc: "מצגת? מסמך? הקלטה? ה-AI של Yeda הופך כל חומר גלם להכשרה מלאה עם שאלות, תעודה וניתוח ביצועים – תוך דקות.",
    highlight: "יצירת הכשרה שלוקחת שבועות – אצלנו לוקחת שעות",
  },
  {
    number: "04",
    title: "הטמעה ב-72 שעות, תמיכה שמגיבה",
    desc: "אנחנו לא מוכרים ו'נעלמים'. צוות ישראלי שמלווה אתכם מהיום הראשון, עם SLA מוגדר ומנהל לקוח ייעודי.",
    highlight: "ממוצע הטמעה בשוק: 3-6 חודשים",
  },
];

export default function WhyYeda() {
  return (
    <section style={{ background: "white", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-badge">למה Yeda</span>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
            למה ארגונים בוחרים בנו{" "}
            <span style={{ background: "#FFE4C2", color: "#000F61", padding: "0 6px" }}>
              על פני המתחרים
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            לא עוד LMS גנרי. Yeda נבנתה ספציפית לארגונים ישראליים שרוצים תוצאות אמיתיות.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {differentiators.map((d, i) => (
            <div
              key={d.number}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "0 32px",
                padding: "36px 0",
                borderBottom: i < differentiators.length - 1 ? "1px solid #E0E4F0" : "none",
                alignItems: "start",
              }}
            >
              <div style={{
                fontSize: 42, fontWeight: 900, color: "#E0E4F0", lineHeight: 1,
                fontVariantNumeric: "tabular-nums", paddingTop: 4,
              }}>
                {d.number}
              </div>
              <div>
                <h3 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 800, color: "#000F61", marginBottom: 10, lineHeight: 1.3 }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75, marginBottom: 14 }}>
                  {d.desc}
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0F2F8", padding: "7px 14px", borderRadius: 6 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#000F61", flexShrink: 0, display: "block" }} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#000F61" }}>{d.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 52, padding: "44px", background: "#F0F2F8", borderRadius: 12 }}>
          <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, color: "#000F61", marginBottom: 8 }}>
            מוכנים לראות את ההבדל בעצמכם?
          </p>
          <p style={{ fontSize: 15, color: "#6B7280", marginBottom: 28 }}>
            30 דקות דמו ויובן לכם למה 500+ ארגונים בחרו ב-Yeda
          </p>
          <a href="#contact" className="btn-primary">
            קבעו דמו חינם ←
          </a>
        </div>
      </div>
    </section>
  );
}
