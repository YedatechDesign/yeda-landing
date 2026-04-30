import { IconZap, IconVideo, IconMic, IconStar, IconPresentation, IconBot } from "./Icons";

const ICON_BOX: React.CSSProperties = {
  width: 40, height: 40, borderRadius: 8, background: "rgba(255,255,255,0.15)",
  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
};

const steps = [
  { icon: IconZap,          label: "מעלים חומר גלם",    sub: "מצגת, מסמך, הקלטה" },
  { icon: IconBot,          label: "AI מנתח ומארגן",     sub: "תוך שניות" },
  { icon: IconPresentation, label: "לומדה מוכנה",        sub: "עם שאלות ותעודה" },
];

const capabilities = [
  { Icon: IconZap,   title: "לומדות אינטראקטיביות",   desc: "מהחומר שלכם ללומדה מלאה עם חידונים ומשימות – תוך דקות." },
  { Icon: IconVideo, title: "סרטוני הסבר AI",          desc: "דוברים דיגיטליים, כתוביות אוטומטיות, תרגום לשפות מרובות." },
  { Icon: IconMic,   title: "תמלול ווויס-אובר",        desc: "המרת הקלטות ישנות ללומדות חדשות בלחיצת כפתור." },
  { Icon: IconStar,  title: "שאלונים ומבחנים AI",      desc: "בניה אוטומטית של שאלות הבנה ומבחני ידע מתוך תוכן קיים." },
  { Icon: IconPresentation, title: "מצגות אינטראקטיביות", desc: "AI שהופך כל מצגת לחוויית למידה עם הפסקות ומשימות." },
  { Icon: IconBot,   title: "סוכן AI אישי לעובד",      desc: "מלווה בתהליך הלמידה, עונה על שאלות ומתאים את הקצב." },
];

export default function AISection() {
  return (
    <section style={{ background: "#000F61", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block", background: "rgba(240,135,0,0.2)", border: "1px solid rgba(240,135,0,0.5)",
            color: "#FFB84D", fontSize: 12, fontWeight: 700,
            padding: "5px 16px", borderRadius: 100, marginBottom: 20, letterSpacing: "0.05em",
          }}>
            Yeda Labs AI
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, color: "white", marginBottom: 16, lineHeight: 1.15 }}>
            תוכן הכשרה ב-AI –{" "}
            <span style={{ background: "#FFE4C2", color: "#000F61", padding: "2px 10px", display: "inline-block" }}>
              מהר פי 10
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            שכחו מחודשים של הפקת תוכן. ה-AI של Yeda הופך כל חומר גלם
            ללומדה מקצועית תוך דקות – לא שבועות.
          </p>
        </div>

        {/* Process steps */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginBottom: 56, flexWrap: "wrap" }}>
          {steps.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ ...ICON_BOX, margin: "0 auto 8px" }}>
                  <s.icon size={18} color="#F08700" />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
              </div>
              {i < steps.length - 1 && (
                <div style={{ fontSize: 20, color: "rgba(255,255,255,0.2)", margin: "0 4px", paddingBottom: 20 }}>←</div>
              )}
            </div>
          ))}
        </div>

        {/* Capabilities grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 16, marginBottom: 48 }}>
          {capabilities.map(({ Icon, title, desc }) => (
            <div key={title} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, padding: "22px 20px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={ICON_BOX}>
                  <Icon size={18} color="#F08700" />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>{title}</h3>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div style={{
          background: "#F08700", borderRadius: 10, padding: "32px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <p style={{ color: "white", fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
              קורס שלוקח חודש לבנות – אצלנו לוקח יום אחד.
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, margin: 0 }}>
              ארגונים שעברו ל-Yeda Labs חסכו בממוצע 40% מעלויות הפקת התוכן שלהם.
            </p>
          </div>
          <a href="#contact" style={{
            background: "white", color: "#000F61", fontWeight: 800,
            padding: "13px 28px", borderRadius: 6, fontSize: 15,
            textDecoration: "none", display: "inline-block", whiteSpace: "nowrap",
          }}>
            נסו את ה-AI חינם ←
          </a>
        </div>
      </div>
    </section>
  );
}
