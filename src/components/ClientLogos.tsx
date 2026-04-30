export default function ClientLogos() {
  const logos = [
    "בנק הפועלים", "מכבי שירותי בריאות", "אלביט מערכות",
    "שטראוס גרופ", "כללית", "רכבת ישראל",
    "בזק", "פרטנר", "מגדל ביטוח", "תנובה",
  ];

  return (
    <section style={{ background: "white", padding: "32px 24px", borderBottom: "1px solid #E0E4F0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
          סומכים עלינו מעל 500 ארגונים מובילים
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 32px" }}>
          {logos.map(name => (
            <div key={name} style={{
              padding: "10px 20px",
              background: "#F0F2F8",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              color: "#9CA3AF",
              whiteSpace: "nowrap",
            }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
