import Header from "@/components/Header";
import Footer from "@/components/Footer";

const badges = ["Hetzner SOC2", "GDPR", "SSL/TLS", "ISO 27001", "2FA & MFA", "WAF & DDoS"];

const highlights = [
  { num: "18", label: "שכבות אבטחה" },
  { num: "100%", label: "הצפנת נתונים" },
  { num: "24/7", label: "ניטור רציף" },
  { num: "SOC2", label: "הסמכת Hetzner" },
];

// Three main sections with images (alternating layout)
const imageSections = [
  {
    img: "https://yedalms.io/wp-content/uploads/2022/10/security-1.png",
    tag: "אבטחת אפליקציה",
    title: "הגנה מלאה על כל נקודת כניסה",
    desc: "כל בקשה למערכת עוברת שלוש שכבות הגנה לפני שמגיעה לשרת — CSRF Tokens, ולידציה מחמירה ומניעת SQL Injection.",
    features: [
      { title: "CSRF Token Protection", desc: "כל טופס במערכת מוגן מפני זיוף בקשות בין-אתרים — רק משתמשים מורשים מעובדים." },
      { title: "ולידציה ופילטור קלטים", desc: "בדיקת גודל וסוג לכל קלט משתמש — מניעת הכנסת נתונים זדוניים." },
      { title: "מניעת SQL Injection", desc: "שכבת הגנה לפני בסיס הנתונים חוסמת ניסיונות הרצת קוד זדוני בשאילתות SQL." },
    ],
    reverse: false,
  },
  {
    img: "https://yedalms.io/wp-content/uploads/2022/10/security-2.png",
    tag: "תשתית ושרתים",
    title: "תשתית ברמת Enterprise — שרתי Hetzner בגרמניה",
    desc: "השרתים פועלים בסביבה מאובטחת, מוסמכת ומפוקחת. הפרדת רשתות, עדכונים אוטומטיים וחסימת DDoS — הכל מובנה.",
    features: [
      { title: "Hetzner SOC2 Certified", desc: "אחסון בגרמניה, עם אבטחה פיזית, גיבוי חשמל ו-DDoS mitigation." },
      { title: "SSH-Only Access", desc: "גישת Ubuntu רק דרך SSH עם אימות מבוסס מפתח — סיכון פריצה מינימלי." },
      { title: "WAF & DDoS Protection", desc: "חומת אש לאפליקציה שחוסמת תעבורה זדונית לפני שמגיעה לתשתית." },
    ],
    reverse: true,
  },
  {
    img: "https://yedalms.io/wp-content/uploads/2022/10/security-3.png",
    tag: "הגנת נתונים",
    title: "הנתונים שלכם מוצפנים — בכל מצב",
    desc: "SSL/TLS על כל תקשורת, PostgreSQL מוצפן בתנועה ובמנוחה, Redis מוגן בסיסמה — אין נקודה חשופה.",
    features: [
      { title: "SSL/TLS Encryption", desc: "כל תקשורת בין המשתמש לשרת מוצפנת ומוגנת מ-Man-in-the-Middle." },
      { title: "PostgreSQL מוצפן", desc: "בקרות גישה מבוססות תפקיד, גישה localhost-only, הצפנה בתנועה ובמנוחה." },
      { title: "Redis מוגן", desc: "סיסמה + הגבלת IP + גישה פנימית בלבד — אין חשיפה לרשת ציבורית." },
    ],
    reverse: false,
  },
];

// Bottom grid sections (no images)
const gridSections = [
  {
    tag: "ניהול גישה",
    title: "אימות דו-שלבי לכולם",
    icon: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4",
    features: [
      { title: "2FA למשתמשים", desc: "קוד חד-פעמי ב-SMS או דואל — לכל כניסה למערכת." },
      { title: "MFA למנהלנים", desc: "אימות דו-שלבי + עקרון הרשאה מינימלית + לוג מלא של פעולות קריטיות." },
    ],
  },
  {
    tag: "ארכיטקטורת רשת",
    title: "הפרדת רשתות חכמה",
    icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    features: [
      { title: "Network Segmentation", desc: "הפרדה ברורה בין Nginx הציבורי לבסיסי הנתונים הפנימיים — חיבורים פנימיים בלבד." },
      { title: "עדכונים אוטומטיים", desc: "כל רכיבי התוכנה מתעדכנים לגרסאות יציבות עם תיקוני אבטחה מיידיים." },
    ],
  },
  {
    tag: "פרטיות וציות",
    title: "GDPR, גיבויים והכשרות",
    icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2 M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2 M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2",
    features: [
      { title: "GDPR Compliant", desc: "גישה מוגבלת לנתונים אישיים, שמירת מינימום נתונים — אף פעם לא נשמרים פרטי כרטיסי אשראי." },
      { title: "גיבוי ושחזור", desc: "גיבויים מוצפנים אוטומטיים דרך Hetzner עם יכולת שחזור מהיר." },
      { title: "הכשרות ובדיקות חדירה", desc: "הצוות מוכשר לפי ISO 27001 ו-SOC2, עם בדיקות חדירה תקופתיות וניטור 24/7." },
    ],
  },
];

function CheckMark() {
  return (
    <div style={{
      width: 22, height: 22, borderRadius: "50%",
      background: "#000F61", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
    }}>
      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  );
}

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 72 }}>

        {/* ─── HERO ─── */}
        <section style={{ background: "#000F61", padding: "80px 24px 72px", overflow: "hidden" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="sec-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

              {/* Text */}
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 100, padding: "6px 18px", marginBottom: 28,
                }}>
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span style={{ color: "white", fontSize: 14, fontWeight: 700, letterSpacing: "0.06em" }}>אבטחת מידע</span>
                </div>

                <h1 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 24 }}>
                  האבטחה שהארגון שלכם מחייב
                </h1>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, marginBottom: 36 }}>
                  18 שכבות אבטחה — מהצפנת SSL/TLS ועד הסמכת SOC2. הנתונים הארגוניים שלכם מוגנים בכל שלב.
                </p>

                {/* Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {badges.map(b => (
                    <div key={b} style={{
                      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 8, padding: "7px 14px",
                      fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)",
                      display: "flex", alignItems: "center", gap: 6,
                    }}>
                      <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero image */}
              <div className="sec-hero-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="https://yedalms.io/wp-content/uploads/2026/01/fc_hero.png"
                  alt="Yeda Security"
                  style={{ width: "100%", maxWidth: 520, display: "block", borderRadius: 16, filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.5))" }}
                />
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .sec-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
              .sec-hero-img { display: none !important; }
            }
          `}</style>
        </section>

        {/* ─── STATS ─── */}
        <section style={{ background: "#000F61" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>
            <div className="sec-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
              {highlights.map((h, i) => (
                <div key={h.label} style={{
                  textAlign: "center", padding: "16px 0",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none",
                }}>
                  <div style={{ fontSize: 34, fontWeight: 900, color: "white", lineHeight: 1 }}>{h.num}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", fontWeight: 600, marginTop: 5 }}>{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ALTERNATING IMAGE SECTIONS ─── */}
        {imageSections.map((sec, idx) => (
          <section key={sec.tag} style={{ background: idx % 2 === 0 ? "white" : "#F5F7FD", padding: "88px 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div className="sec-img-grid" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
                direction: sec.reverse ? "rtl" : "ltr",
              }}>

                {/* Image side */}
                <div style={{ direction: "rtl" }}>
                  <div style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 24px 64px rgba(0,15,97,0.13)",
                    border: "1px solid #E3E7F2",
                  }}>
                    <img
                      src={sec.img}
                      alt={sec.title}
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>
                </div>

                {/* Text side */}
                <div style={{ direction: "rtl" }}>
                  <span style={{
                    display: "inline-block",
                    background: "#FFF3E6", color: "#F08700",
                    fontSize: 14, fontWeight: 800,
                    padding: "5px 14px", borderRadius: 100, marginBottom: 20,
                    letterSpacing: "0.05em", textTransform: "uppercase" as const,
                  }}>{sec.tag}</span>

                  <h2 style={{ fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 800, color: "#000F61", lineHeight: 1.25, marginBottom: 16 }}>
                    {sec.title}
                  </h2>
                  <p style={{ fontSize: 17, color: "#4B5472", lineHeight: 1.8, marginBottom: 32 }}>
                    {sec.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {sec.features.map(f => (
                      <div key={f.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <CheckMark />
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 800, color: "#1A1F36", marginBottom: 4 }}>{f.title}</div>
                          <div style={{ fontSize: 14, color: "#4B5472", lineHeight: 1.7 }}>{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ─── BOTTOM GRID SECTIONS ─── */}
        <section style={{ background: "#000F61", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 14 }}>
                שכבות אבטחה נוספות
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                ניהול גישה, ארכיטקטורת רשת, פרטיות ועמידה בתקנות — מובנים בכל היבט של המערכת.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
              {gridSections.map(sec => (
                <div key={sec.tag} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 20, padding: "32px 28px",
                  borderTop: "3px solid #F08700",
                }}>
                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: "rgba(255,255,255,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d={sec.icon} />
                    </svg>
                  </div>

                  <div style={{
                    display: "inline-block", fontSize: 13, fontWeight: 800,
                    color: "white", letterSpacing: "0.08em", textTransform: "uppercase" as const,
                    marginBottom: 12,
                  }}>{sec.tag}</div>

                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 24, lineHeight: 1.3 }}>
                    {sec.title}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    {sec.features.map(f => (
                      <div key={f.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <div style={{
                          width: 7, height: 7, borderRadius: "50%",
                          background: "white", flexShrink: 0, marginTop: 7,
                        }} />
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 5 }}>{f.title}</div>
                          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ background: "#000F61", padding: "80px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="sec-cta-box" style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24, padding: "56px 48px",
              textAlign: "center",
            }}>
              <div style={{
                width: 68, height: 68, borderRadius: 18,
                background: "#F08700",
                border: "2px solid rgba(255,255,255,0.2)",
                margin: "0 auto 28px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.361a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" />
                </svg>
              </div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "white", marginBottom: 16, lineHeight: 1.3 }}>
                רוצים לראות את Yeda בפעולה?
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 12, lineHeight: 1.75, maxWidth: 540, margin: "0 auto 12px" }}>
                קבעו הדגמה חינם — ללא עלות וללא התחייבות.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 36, lineHeight: 1.7 }}>
                נציג לכם את המערכת, נענה על כל שאלה ונתאים פתרון לצרכי הארגון שלכם.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/#contact" className="btn-primary" style={{ fontSize: 15, padding: "14px 36px" }}>
                  קבעו הדגמה חינם ←
                </a>
                <a href="/" style={{
                  display: "inline-block", padding: "14px 30px",
                  border: "2px solid rgba(255,255,255,0.25)", borderRadius: 10,
                  color: "rgba(255,255,255,0.85)", fontWeight: 700, fontSize: 15, textDecoration: "none",
                }}>
                  חזרה לדף הבית
                </a>
              </div>
            </div>
          </div>
        </section>

      <style>{`
        @media (max-width: 768px) {
          .sec-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sec-stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .sec-stats-grid > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.2) !important; }
          .sec-stats-grid > div:nth-last-child(-n+2) { border-bottom: none !important; }
          .sec-img-grid   { grid-template-columns: 1fr !important; gap: 32px !important; direction: rtl !important; }
          .sec-cta-box    { padding: 36px 24px !important; }
        }
      `}</style>
      </main>
      <Footer />
    </>
  );
}
