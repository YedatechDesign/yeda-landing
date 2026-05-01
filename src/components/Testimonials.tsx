"use client";
import { useRef, useEffect, useState } from "react";

const namedTestimonials = [
  {
    quote: "מערכת LMS ברמה מאוד גבוהה, בחנתי מספר מערכות גלובליות והמערכת הזאת כחול לבן! ואינה נופלת טכנולוגית משום מערכת שראיתי אף מתעלה עליהן. הצוות של Yeda מובילים במקצועיות ובהבנה עמוקה של התחום. זמינים ותמיד מעוניינים לשפר ולהתאים את המערכת לצרכים הארגוניים.",
    name: "עידן סיבן",
    title: "פישר | עורכי דין",
    initials: "עס",
    source: "Google Reviews ★★★★★",
  },
  {
    quote: "נתקלנו במערכת ידע בעת חיפוש מערכת LMS ידידותית עבור קורסים המיועדים ללקוחות החברה. לשמחתנו המערכת ענתה על כל הציפיות, הצרכים והרצונות שלנו ואף יותר. באמצעותה לקוחותינו נהנים מכל מה שיש למרכז ההדרכה להציע — צפייה בשעורים, מבחנים, תעודות וניהול מלא.",
    name: "דבי רוח משיח",
    title: "מנהלת מרכז הדרכה, חטיבת TeamCAD · קבוצת MalamTeam",
    initials: "דר",
    source: "MalamTeam",
  },
  {
    quote: "בעבר השתמשנו במספר מערכות LMS שונות לכל מוצר. Yeda סיפקה לנו סוף-סוף פתרון אחד מקיף וגמיש שמתאים לכל צורכי ההדרכה שלנו. היום אנו מנהלים קורסים פרונטליים, היברידיים ודיגיטליים במערכת אחת — ומעניקים ללקוחות בכל רחבי העולם חווית למידה אחידה.",
    name: "גיא מנדל",
    title: "מנהל מערכות מידע · Hacker.U",
    initials: "גמ",
    source: "Hacker.U",
  },
];

const anonTestimonials = [
  "עברנו מ-Excel ומיילים לפלטפורמה מנוהלת תוך שלושה ימים. היום המנהלים שלנו רואים בזמן אמת מי עומד בדרישות הרגולציה ומי לא — משהו שלא היה לנו בכלל קודם.",
  "הדבר שהכי הפתיע אותנו הוא כמה מהר ה-AI יוצר תוכן. מצגת שלקח לנו חודש לבנות לקורס — הפכה ללומדה מלאה תוך שעה. הצוות שלי פשוט לא האמין.",
  "ניסינו שני מוצרים זרים לפני Yeda. שניהם נכשלו על הממשק בעברית וחוסר תמיכה מקומית. עם Yeda קיבלנו פתרון שעובד, בעברית, עם אנשים שמבינים את הצרכים שלנו.",
];

export default function Testimonials() {
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
          <span className="section-badge">לקוחות מספרים</span>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#1A1F36", marginBottom: 14, lineHeight: 1.15, }}>
            תוצאות אמיתיות מארגונים אמיתיים
          </h2>
          <p style={{ fontSize: 16, color: "#36405E", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            לא מדברים בכללי — מדברים בחוויות אמיתיות.
          </p>
        </div>

        {/* Named testimonials */}
        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 20, marginBottom: 48 }}>
          {namedTestimonials.map((t, i) => (
            <div key={t.name} className="card-lift" style={{
              background: "white",
              borderRadius: 16,
              padding: "32px 28px",
              border: "1px solid #E3E7F2",
              boxShadow: "0 4px 16px rgba(0,15,97,0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: visible ? 1 : 0,
              animation: visible ? `fadeInUp 0.5s ease ${i * 0.1}s both` : "none",
            }}>
              <div>
                <div style={{ fontSize: 36, color: "#0A59EB", fontWeight: 900, lineHeight: 1, marginBottom: 14, fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ fontSize: 16, color: "#2D3142", lineHeight: 1.85, marginBottom: 24 }}>
                  {t.quote}
                </p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", background: "#000F61",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: 14, fontWeight: 800, color: "white",
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1F36" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#36405E", lineHeight: 1.4 }}>{t.title}</div>
                  </div>
                </div>
                <div style={{ background: "#EBF1FD", borderRadius: 8, padding: "5px 12px", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A59EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0A59EB" }}>{t.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Anonymous quotes strip */}
        <div style={{
          background: "white",
          borderRadius: 20,
          padding: "40px 36px",
          border: "1px solid #E3E7F2",
        }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#7A84A0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 28, textAlign: "center" }}>
            אומרים עלינו גם...
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {anonTestimonials.map((q, i) => (
              <div key={i} style={{
                background: "#F5F7FD",
                borderRadius: 12,
                padding: "20px 20px",
                borderRight: "3px solid #0A59EB",
              }}>
                <div style={{ fontSize: 22, color: "#0A59EB", fontWeight: 900, lineHeight: 1, marginBottom: 10, fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ fontSize: 15, color: "#2D3142", lineHeight: 1.8, margin: 0 }}>{q}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href="#contact" className="btn-primary">
            הצטרפו ללקוחות שכבר שינו ←
          </a>
        </div>
      </div>
    </section>
  );
}
