import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { num: "75%", label: "קיצור בזמן יצירת תוכן" },
  { num: "100+", label: "שפות לתרגום אוטומטי" },
  { num: "3 דק׳", label: "מקובץ ללומדה מלאה" },
];

const featureSections: {
  img: string; tag: string; title: string; titleBlue: string;
  desc: string; bullets: string[]; reverse: boolean;
}[] = [
  {
    img: "/labs-import.png",
    tag: "יצירה מחומר קיים",
    title: "מעלים קובץ ‎PDF —",
    titleBlue: "AI‎ הופך אותו ללומדה",
    desc: "מעלים קובץ PDF או סרטון MP4, ומטמיעים קישור YouTube — ה-AI מנתח את החומר ויוצר לומדה אינטראקטיבית מלאה תוך דקות. מצגת PowerPoint, Word, Google Slides? ממירים ל-PDF ומעלים בקלות.",
    bullets: [
      "העלאת PDF — כל מצגת או מסמך ניתן להמיר בקלות",
      "סרטון MP4 או קישור YouTube — מכל מקום שהוקלט",
      "שילוב מסמך + סרטון + פרומפט בלומדה אחת",
      "יצירה מאפס עם פרומפט בעברית",
    ],
    reverse: false,
  },
  {
    img: "/labs-transcription.png",
    tag: "תמלול וכתוביות",
    title: "תמלול אוטומטי וכתוביות",
    titleBlue: "לכל סרטון",
    desc: "ה-AI מתמלל כל סרטון הדרכה קיים בדיוק גבוה, מוסיף כתוביות ויוצר שאלות הבנה אינטראקטיביות לאורך הסרטון — שניתן לערוך לפני פרסום.",
    bullets: [
      "תמלול אוטומטי ב-100+ שפות",
      "כתוביות מסונכרנות אוטומטית",
      "שאלות הבנה אינטראקטיביות שנוצרות אוטומטית",
      "עריכה מלאה של התוכן לפני פרסום",
    ],
    reverse: true,
  },
  {
    img: "/labs-dubbing.png",
    tag: "דיבוב AI",
    title: "דיבוב עם קול AI —",
    titleBlue: "ללא אולפן הקלטה",
    desc: "לאחר עריכת התוכן, בוחרים קול AI ומייצרים את הסרטון. מגוון קולות — גבר, אישה, גוון שונה — ללא צוות הפקה חיצוני.",
    bullets: [
      "עשרות קולות AI לבחירה",
      "שאלות אינטראקטיביות מובנות בסרטון",
      "יצירת סרטון מלא בלחיצה אחת",
      "ללא אולפן הקלטה וללא עלות הפקה",
    ],
    reverse: false,
  },
  {
    img: "/labs-translation.png",
    tag: "תרגום ודיבוב רב-לשוני",
    title: "לומדה אחת —",
    titleBlue: "יותר ממאה שפות",
    desc: "מפיצים כל לומדה ב-100+ שפות עם תרגום ודיבוב AI מדויק. אידיאלי לחברות גלובליות וצוותים מגוונים — ללא תרגמנים חיצוניים ובחלק קטן מהעלות.",
    bullets: [
      "תרגום אוטומטי ל-100+ שפות",
      "דיבוב AI בכל שפה שנבחרת",
      "כתוביות מתואמות אוטומטית",
      "לומדה אחת לכל הצוותים בעולם",
    ],
    reverse: true,
  },
];

function CheckMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="#F08700" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function LabsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 72 }}>

        {/* ── Hero ─────────────────────────────────────── */}
        <section style={{ background: "#000F61", padding: "88px 24px 80px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "10%", right: "8%", width: 500, height: 500, borderRadius: "50%", background: "none" }} />
            <div style={{ position: "absolute", bottom: "-10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "none" }} />
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: 100, padding: "6px 18px", marginBottom: 28,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white" }} />
              <span style={{ color: "rgba(255,255,255,0.95)", fontSize: 15, fontWeight: 700 }}>Yeda Labs — בינה מלאכותית ליצירת תוכן</span>
            </div>

            <h1 style={{ fontSize: "clamp(30px, 5vw, 58px)", fontWeight: 900, color: "white", lineHeight: 1.12, marginBottom: 24 }}>
              צרו לומדות מקצועיות
              <br />
              <span style={{ color: "#FFC170" }}>
                תוך דקות, עם AI
              </span>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.75 }}>
              קובץ PDF, סרטוני הדרכה או פרומפט — ה-AI יוצר לומדה אינטראקטיבית מלאה עם תסריט, דיבוב, שאלות ותרגום לכל שפה. בנוסף, יש כלי ייעודי ליצירת לומדות HTML אינטראקטיביות.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
                בקשו הדגמה חינם ←
              </a>
              <a href="#features" style={{
                fontSize: 16, padding: "14px 36px", borderRadius: 999,
                border: "1.5px solid rgba(255,255,255,0.35)", color: "white",
                textDecoration: "none", fontWeight: 600, fontFamily: "inherit",
                background: "rgba(255,255,255,0.07)",
              }}>
                ראו את היכולות
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats strip ──────────────────────────────── */}
        <section className="no-pad" style={{ background: "#000A45" }}>
          <div className="labs-stats-grid" style={{
            maxWidth: 900, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          }}>
            {stats.map((s, i) => (
              <div key={s.label} className="labs-stat-item" style={{
                padding: "28px 20px", textAlign: "center",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "white", lineHeight: 1, marginBottom: 8 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 560px) {
              .labs-stats-grid { grid-template-columns: 1fr !important; }
              .labs-stat-item { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.07); }
              .labs-stat-item:first-child { border-top: none; }
            }
          `}</style>
        </section>

        {/* ── How it works ──────────────────────────────── */}
        <section style={{ background: "#000F61", padding: "88px 24px", position: "relative", overflow: "hidden" }}>
          {/* Background glows */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "-5%", right: "0%", width: 600, height: 600, borderRadius: "50%", background: "none" }} />
            <div style={{ position: "absolute", bottom: "5%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "none" }} />
          </div>

          <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 1 }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.5)",
                fontSize: 14, fontWeight: 800, padding: "5px 18px",
                borderRadius: 999, letterSpacing: "0.08em", marginBottom: 18,
              }}>איך זה עובד</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: 14 }}>
                מחומר גלם ללומדה מוכנה —{" "}
                <span style={{ color: "white" }}>7 שלבים</span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 460, margin: "0 auto" }}>
                בממוצע תוך 10–15 דקות
              </p>
            </div>

            {/* ── Phase label helper ── */}
            {(["שלב הכנה — מגדירים ומעלים", "שלב יצירה — AI עובד בשבילכם"] as const).map((label, phaseIdx) => {
              const phaseSteps = phaseIdx === 0
                ? [
                    { n: "01", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", title: "הגדרת הלומדה", desc: "בוחרים שפת יצירה, צבעי המותג ולוגו — הלומדה תיראה בדיוק כמו שאר חומרי הארגון" },
                    { n: "02", icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12", title: "העלאת תכנים", desc: "PDF, סרטון MP4 או קישור YouTube — ניתן לשלב הכל, או פשוט לכתוב פרומפט בחופשיות" },
                    { n: "03", icon: "M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6", title: "הגדרות יצירה", desc: "שיטת יצירה (סקירה / צמוד למקור), אורך הלומדה וכמות האינטראקציות שייווצרו אוטומטית" },
                  ]
                : [
                    { n: "04", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "AI בונה את הלומדה", desc: "המערכת יוצרת שקפים, כותבת תסריט ומוסיפה תמונות — מהחומרים שלכם ומ-AI" },
                    { n: "05", icon: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z", title: "עריכה ואישור", desc: "עוברים על הלומדה ועורכים כל שקף, טקסט או שאלה — ומאשרים לפרסום" },
                    { n: "06", icon: "M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.889L15 14 M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z", title: "הפקת הסרטון", desc: "בלחיצה אחת — המערכת מייצרת סרטון עם קול AI, כתוביות ואנימציות" },
                  ];

              return (
                <div key={label} style={{ marginBottom: phaseIdx === 0 ? 12 : 0 }}>
                  {/* Phase label */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white", flexShrink: 0 }} />
                      <span style={{ fontSize: 14, fontWeight: 800, color: "white", letterSpacing: "0.08em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>{label}</span>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white", flexShrink: 0 }} />
                    </div>
                    <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
                  </div>

                  {/* Row with connecting line */}
                  <div style={{ position: "relative" }}>
                    {/* Connecting line between dots */}
                    <div style={{
                      position: "absolute", top: 24,
                      left: "calc(100% / 6)", right: "calc(100% / 6)",
                      height: 1,
                      background: "rgba(255,193,112,0.3)",
                      zIndex: 0,
                    }} />

                    <div className="flow-inner-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                      {phaseSteps.map((step) => (
                        <div key={step.n} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          {/* Numbered dot */}
                          <div style={{
                            width: 48, height: 48, borderRadius: "50%",
                            background: "#F08700",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 14, fontWeight: 900, color: "white",
                            boxShadow: "0 0 20px rgba(255,255,255,0.55)",
                            position: "relative", zIndex: 1,
                            marginBottom: 18,
                            border: "2px solid rgba(255,255,255,0.15)",
                            flexShrink: 0,
                          }}>
                            {step.n}
                          </div>

                          {/* Card */}
                          <div style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 18,
                            padding: "22px 18px",
                            width: "100%",
                            textAlign: "center",
                            backdropFilter: "blur(4px)",
                          }}>
                            {/* Icon */}
                            <div style={{
                              width: 40, height: 40, borderRadius: 10,
                              background: "rgba(255,255,255,0.3)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              margin: "0 auto 14px",
                            }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                style={{ display: "block" }}>
                                <path d={step.icon} />
                              </svg>
                            </div>
                            <h3 style={{ color: "white", fontSize: 15, fontWeight: 800, margin: "0 0 8px", lineHeight: 1.35 }}>
                              {step.title}
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow between phases */}
                  {phaseIdx === 0 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: "50%",
                        background: "rgba(255,255,255,0.25)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14 M5 12l7 7 7-7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Down arrow to final step */}
            <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(16,185,129,0.2)",
                border: "1px solid rgba(16,185,129,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14 M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>

            {/* Final step — full width */}
            <div style={{
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.35)",
              borderRadius: 22, padding: "40px 36px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center",
            }}>
              {/* Check circle */}
              <div style={{
                width: 68, height: 68, borderRadius: "50%",
                background: "#10B981",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 32px rgba(16,185,129,0.45)",
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                  stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#34D399", letterSpacing: "0.12em", marginBottom: 8 }}>שלב 07</div>
                <h3 style={{ color: "white", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, margin: "0 0 10px" }}>
                  הלומדה מוכנה לפרסום!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, margin: 0, lineHeight: 1.65, maxWidth: 520 }}>
                  מפיצים לעובדים, עוקבים אחר ההתקדמות בדאשבורד בזמן אמת — ויוצרים את הלומדה הבאה
                </p>
              </div>

              <a href="/#contact" className="btn-primary" style={{ fontSize: 15, marginTop: 4 }}>
                רוצים לראות את זה? ←
              </a>
            </div>
          </div>

          <style>{`
            @media (max-width: 720px) {
              .flow-inner-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Alternating feature sections ─────────────── */}
        <div id="features">
          {featureSections.map((sec, i) => (
            <section key={sec.tag} style={{
              background: i % 2 === 0 ? "white" : "#F5F7FD",
              padding: "80px 24px",
            }}>
              <div className="labs-feature-grid" style={{
                maxWidth: 1100, margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
                direction: sec.reverse ? "ltr" : "rtl",
              }}>
                {/* Text */}
                <div style={{ direction: "rtl" }}>
                  <span style={{
                    display: "inline-block",
                    background: "#FFF3E6", color: "#F08700",
                    fontSize: 14, fontWeight: 800, padding: "5px 14px",
                    borderRadius: 999, letterSpacing: "0.06em", marginBottom: 16,
                  }}>
                    {sec.tag}
                  </span>
                  <h2 dir="rtl" style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#000F61", lineHeight: 1.2, marginBottom: 16 }}>
                    {sec.title}{" "}
                    <span style={{ color: "#F08700" }}>{sec.titleBlue}</span>
                  </h2>
                  <p style={{ fontSize: 16, color: "#4B5472", lineHeight: 1.8, marginBottom: 24 }}>
                    {sec.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {sec.bullets.map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%",
                          background: "#FFF3E6",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}>
                          <CheckMark />
                        </div>
                        <span style={{ fontSize: 15, color: "#2D3142", fontWeight: 500 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div style={{ direction: "rtl" }}>
                  <img
                    src={sec.img}
                    alt={sec.title}
                    style={{
                      width: "100%",
                      borderRadius: 16,
                      boxShadow: "0 20px 60px rgba(0,15,97,0.14)",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── Use cases grid ────────────────────────────── */}
        <section style={{ background: "#F5F7FD", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{
                display: "inline-block",
                background: "#FFF3E6", color: "#F08700",
                fontSize: 14, fontWeight: 800, padding: "5px 14px",
                borderRadius: 999, letterSpacing: "0.06em", marginBottom: 16,
              }}>שימושים</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, color: "#000F61", lineHeight: 1.2, marginBottom: 16 }}>
                לכל צורך הדרכה בארגון —{" "}
                <span style={{ color: "#F08700" }}>לומדה תוך דקות</span>
              </h2>
              <p style={{ fontSize: 17, color: "#4B5472", lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
                מה שלקח שבועות ועלה <strong style={{ color: "#000F61" }}>6,500–15,000 ₪ לסוכנויות חיצוניות</strong> —
                עכשיו ניתן ליצור בתוך הארגון, תוך דקות, בשפה הגרפית של הארגון.
              </p>
            </div>

            <div className="reg-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}>
              {[
                {
                  d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                  title: "יצירת לומדות",
                  desc: "כל PDF, מסמך או סרטון — הופך ללומדה אינטראקטיבית מלאה תוך דקות, ללא צורך במעצב או מפתח",
                },
                {
                  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
                  title: "קליטת עובדים",
                  desc: "Onboarding מובנה ואחיד לכל עובד חדש — מיום ראשון, בשפת הארגון ובשפה הגרפית שלו",
                },
                {
                  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                  title: "הכשרות רגולטוריות",
                  desc: "בטיחות, מניעת הטרדה, נגישות, ציות — לומדות חובה שנתיות שניתן ליצור בתוך הארגון, ללא תשלום לסוכנות",
                },
                {
                  d: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4",
                  title: "אבטחת מידע וסייבר",
                  desc: "הדרכת עובדים לנהלי אבטחה, סיסמאות, פישינג ואיומי סייבר — חובה בכל ארגון מודרני",
                },
                {
                  d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                  title: "פיתוח מנהלים",
                  desc: "מנהיגות, ניהול עובדים, שיחות משוב — תוכניות פיתוח מקצועי לכל רמה בארגון",
                },
                {
                  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
                  title: "עדכוני נהלים ותהליכים",
                  desc: "שינוי נוהל? רגולציה חדשה? הכינו לומדה תוך דקות ושלחו לכל הרלוונטיים — עם מעקב השלמה",
                },
              ].map(item => (
                <div key={item.title} style={{
                  background: "white",
                  borderRadius: 18,
                  border: "1px solid #E3E7F2",
                  padding: "28px 24px",
                  boxShadow: "0 2px 8px rgba(0,15,97,0.05)",
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "#FFE4C2",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                      stroke="#F08700" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      style={{ display: "block" }}>
                      <path d={item.d} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#000F61", margin: "0 0 10px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#4B5472", lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/#contact" className="btn-primary" style={{ fontSize: 15 }}>
                קבעו דמו וראו איך זה עובד ←
              </a>
            </div>
          </div>
        </section>

        {/* ── Before / After ───────────────────────────── */}
        <section style={{ background: "#000F61", padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "white", lineHeight: 1.15 }}>
                לפני Yeda Labs · <span style={{ color: "white" }}>אחרי Yeda Labs</span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginTop: 12 }}>
                כך נראה פיתוח לומדה לפני ואחרי AI
              </p>
            </div>

            <div className="comparison-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {/* Before */}
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 24 }}>סוכנות לומדות מסורתית ✕</div>
                {[
                  "6,500–15,000 ₪ ללומדה אחת",
                  "4–8 שבועות לפיתוח ואספקה",
                  "תלות מלאה במומחה חיצוני",
                  "תרגום יקר לכל שפה — ידנית",
                  "שינוי קטן = הפקה מחדש בתשלום",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              {/* After */}
              <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(255,255,255,0.4)" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "white", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 24 }}>עם Yeda Labs ✓</div>
                {[
                  "לומדה מלאה תוך 3–10 דקות",
                  "עצמאות מלאה — יצירה והפצה בתוך הארגון",
                  "דיבוב לשפות רבות עם AI תוך דקות ספורות",
                  "תרגום אוטומטי ל-100+ שפות",
                  "עריכה חיה ושינויים בלחיצה אחת",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, color: "rgba(255,255,255,0.9)", fontSize: 15 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AI Chatbot showcase ──────────────────────── */}
        <section style={{ background: "#000F61", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.35)", color: "white",
                fontSize: 14, fontWeight: 800, padding: "5px 14px",
                borderRadius: 999, letterSpacing: "0.06em", marginBottom: 16,
                border: "1px solid rgba(255,255,255,0.5)",
              }}>
                עוזר AI ארגוני
              </span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "white", marginBottom: 14, lineHeight: 1.2 }}>
                צ׳אטבוט AI שמכיר את הארגון שלכם
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                עובדים שואלים — מקבלים תשובות מיידיות מדויקות, מבוססות על חומרי הארגון.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { img: "/assistant-knowledge.png", label: "מקבל ידע ממגוון מקורות ארגוניים" },
                { img: "/feature-chatbot.png",     label: "זמין לעובדים 24/7 — מכל מכשיר" },
                { img: "/assistant-admin.png",     label: "ממשק אדמין לניטור ופיקוח על שיחות" },
              ].map((item) => (
                <div key={item.img} style={{
                  borderRadius: 16, overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}>
                  <img src={item.img} alt={item.label} style={{ width: "100%", display: "block" }} />
                  <div style={{ padding: "14px 16px", background: "rgba(255,255,255,0.05)" }}>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600, margin: 0, textAlign: "center" }}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section style={{ background: "#F5F7FD", padding: "88px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <span className="section-badge-navy">התחילו היום</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, color: "#000F61", marginBottom: 20, lineHeight: 1.15, marginTop: 16 }}>
              רוצים לראות את <span style={{ color: "#F08700" }}>Yeda Labs</span> בפעולה?
            </h2>
            <p style={{ fontSize: 17, color: "#4B5472", lineHeight: 1.75, maxWidth: 500, margin: "0 auto 36px" }}>
              בדמו של 30 דקות נראה לכם איך להפוך את החומרים שלכם ללומדות AI — בדיוק לפי הצרכים של הארגון שלכם.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <a href="/#contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
                קבעו דמו חינם ←
              </a>
              <a href="/" style={{
                fontSize: 16, padding: "14px 36px", borderRadius: 999,
                border: "1.5px solid #FFD9A8", color: "#000F61",
                textDecoration: "none", fontWeight: 600, fontFamily: "inherit",
              }}>
                בחזרה לדף הבית
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
              {["ללא עלות וללא התחייבות", "30 דקות בלבד", "הדגמה חיה עם חומרים שלכם"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, color: "#36405E", fontSize: 14, fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F08700" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 860px) {
          .labs-feature-grid {
            grid-template-columns: 1fr !important;
            direction: rtl !important;
          }
        }
        @media (max-width: 720px) {
          .reg-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .reg-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
