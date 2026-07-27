const namedTestimonials = [
  {
    quote: "מערכת LMS ברמה מאוד גבוהה, בחנתי מספר מערכות גלובליות והמערכת הזאת כחול לבן! ואינה נופלת טכנולוגית משום מערכת שראיתי אף מתעלה עליהן. הצוות של Yeda מובילים במקצועיות ובהבנה עמוקה של התחום. זמינים ותמיד מעוניינים לשפר ולהתאים את המערכת לצרכים הארגוניים.",
    name: "עידן סיוון",
    title: "פישר | עורכי דין",
    initials: "עס",
    photo: null as string | null,
    source: "Google Reviews",
  },
  {
    quote: "נתקלנו במערכת ידע בעת חיפוש מערכת LMS ידידותית עבור קורסים המיועדים ללקוחות החברה. לשמחתנו המערכת ענתה על כל הציפיות, הצרכים והרצונות שלנו ואף יותר. באמצעותה לקוחותינו נהנים מכל מה שיש למרכז ההדרכה להציע — צפייה בשעורים, מבחנים, תעודות וניהול מלא.",
    name: "דבי רוח משיח",
    title: "מנהלת מרכז הדרכה, חטיבת TeamCAD · קבוצת MalamTeam",
    initials: "דר",
    photo: "https://yedalms.io/wp-content/uploads/2023/05/Debi-Messiah.png" as string | null,
    source: "MalamTeam",
  },
  {
    quote: "בעבר השתמשנו במספר מערכות LMS שונות לכל מוצר. Yeda סיפקה לנו סוף-סוף פתרון אחד מקיף וגמיש שמתאים לכל צורכי ההדרכה שלנו. היום אנו מנהלים קורסים פרונטליים, היברידיים ודיגיטליים במערכת אחת — ומעניקים ללקוחות בכל רחבי העולם חווית למידה אחידה.",
    name: "גיא מנדל",
    title: "מנהל מערכות מידע · Hacker.U",
    initials: "גמ",
    photo: "https://yedalms.io/wp-content/uploads/2025/12/hackeru-leader.png" as string | null,
    source: "Hacker.U",
  },
];

export default function Testimonials() {
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 20, marginBottom: 48 }}>
          {namedTestimonials.map((t) => (
            <div key={t.name} className="card-lift" style={{
              background: "white",
              borderRadius: 16,
              padding: "32px 28px",
              border: "1px solid #E3E7F2",
              boxShadow: "0 4px 16px rgba(0,15,97,0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: 36, color: "#F08700", fontWeight: 900, lineHeight: 1, marginBottom: 14, fontFamily: "Georgia, serif" }}>&quot;</div>
                <p style={{ fontSize: 16, color: "#2D3142", lineHeight: 1.85, marginBottom: 24 }}>
                  {t.quote}
                </p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  {t.photo ? (
                    <img src={t.photo} alt={t.name} loading="lazy" decoding="async" style={{
                      width: 48, height: 48, borderRadius: "50%", objectFit: "cover",
                      flexShrink: 0, border: "2px solid #E3E7F2",
                    }} />
                  ) : (
                    <div style={{
                      width: 48, height: 48, borderRadius: "50%", background: "#000F61",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 14, fontWeight: 800, color: "white",
                    }}>
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1F36" }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "#36405E", lineHeight: 1.4 }}>{t.title}</div>
                  </div>
                </div>
                <div style={{ background: "#FFF3E6", borderRadius: 8, padding: "5px 12px", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#9A3F00" }}>{t.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href="#contact" className="btn-primary">
            הצטרפו לארגונים שכבר עברו ל-Yeda ←
          </a>
        </div>
      </div>
    </section>
  );
}
