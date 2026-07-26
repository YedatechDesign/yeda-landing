import YedaLogo from "./YedaLogo";

export default function Footer() {
  return (
    <footer style={{ background: "#000A45", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <YedaLogo height={40} />
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: 260 }}>
              הפלטפורמה החכמה לניהול ידע ארגוני, הכשרות והדרכות – עם כלי AI מתקדמים שמאיצים תהליכי למידה בארגון.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              {[
                {
                  href: "https://www.linkedin.com/company/yedalms",
                  label: "LinkedIn",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                },
                {
                  href: "https://www.youtube.com/@yedalms",
                  label: "YouTube",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000A45"/></svg>,
                },
                {
                  href: "https://www.facebook.com/yedalms",
                  label: "Facebook",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-link"
                  style={{
                    width: 34,
                    height: 34,
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.72)",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.2s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "מוצר", links: [
              { label: "Yeda LMS", href: "/" },
              { label: "Yeda Labs AI", href: "/labs" },
              { label: "דאשבורד", href: "/#dashboard" },
              { label: "אינטגרציות", href: "/#features" },
              { label: "אבטחה", href: "/security" },
            ] },
            { title: "חברה", links: [
              { label: "לקוחות", href: "/#clients" },
              { label: "יצירת קשר", href: "/#contact" },
            ] },
            { title: "תמיכה", links: [
              { label: "שאלות נפוצות", href: "/#faq" },
              { label: "צור קשר", href: "/#contact" },
            ] },
          ].map((col) => (
            <div key={col.title}>
              <p style={{ color: "white", fontSize: 13, fontWeight: 800, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {col.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="footer-nav-link"
                    style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.68)" }}>
            © 2026 Yeda LMS | YedaLabs. כל הזכויות שמורות.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a
              href="mailto:coo@yedalms.io?subject=%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA%20%D7%91%D7%90%D7%AA%D7%A8%20orglms.co.il"
              style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              דיווח על בעיית נגישות
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .footer-social-link:hover {
          background: #A94700 !important;
          color: white !important;
          border-color: #A94700 !important;
        }
        .footer-nav-link:hover { color: white !important; }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
