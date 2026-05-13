"use client";
import Image from "next/image";

const companies = [
  { name: "כלכליסט",       logo: "client12.png", desc: "אתר החדשות הכלכלי המוביל בישראל" },
  { name: "ThriveDX",      logo: "client4.png",  desc: "חברה גלובלית המתמחה בהכשרות דיגיטליות" },
  { name: "קבוצת מובמנט",  logo: "client9.png",  desc: "החברה המובילה בארץ לקידום בריאות בארגונים" },
  { name: "מלם טים",       logo: "client11.png", desc: "קבוצת שירותי ה-IT המובילה בישראל" },
  { name: "ישראל קנדה",    logo: "client18.png", desc: "חברת נדל\"ן מובילה — ייזום, ביצוע והשבחה" },
  { name: "Allen Carr",    logo: "client14.png", desc: "הרשת המובילה בעולם לגמילה מהתמכרויות" },
  { name: "אולג'ובס",      logo: "client10.png", desc: "האתר המוביל בישראל לחיפוש עבודה" },
  { name: "APRIL",         logo: "client15.png", desc: "רשת חנויות קוסמטיקה וביישום" },
  { name: "פישר עו\"ד",    logo: "client8.png",  desc: "משרדי עורכי הדין הגדולים והמובילים בישראל" },
  { name: "Golan",         logo: "client21.png", desc: "מהחברות המובילות בעולם בפיתוח ושיווק מערכות" },
  { name: "Lastminute",    logo: "client19.png", desc: "חברת תיירות מקוונת בינלאומית" },
  { name: "Elevation",     logo: "client16.png", desc: "החברה המובילה בפתרונות טכנולוגיים לארגונים" },
  { name: "מטבחי רגבה",   logo: "client17.png", desc: "חברה מובילה בתכנון, עיצוב וייצור מטבחים" },
  { name: "INT",           logo: "client13.png", desc: "חברה מובילה בפתרונות טכנולוגיה ארגונית" },
];


function LogoCard({ client }: { client: typeof companies[0] }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
    }}>
      <div style={{
        width: "100%",
        height: 76,
        background: "white",
        borderRadius: 12,
        border: "1px solid #E3E8F5",
        boxShadow: "0 1px 6px rgba(0,15,97,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 14px",
        transition: "box-shadow 0.2s, border-color 0.2s",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,15,97,0.12)";
          (e.currentTarget as HTMLElement).style.borderColor = "#C5D4F6";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,15,97,0.06)";
          (e.currentTarget as HTMLElement).style.borderColor = "#E3E8F5";
        }}
      >
        <Image
          src={`/${client.logo}`}
          alt={client.name}
          width={130}
          height={56}
          style={{ objectFit: "contain", maxHeight: 56, filter: "grayscale(20%)" }}
        />
      </div>
      <p style={{
        fontSize: 14,
        color: "#4B5563",
        lineHeight: 1.5,
        textAlign: "center",
        margin: 0,
      }}>
        {client.desc}
      </p>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section style={{ background: "#F7F9FF", padding: "64px 24px", borderBottom: "1px solid #EEF1F8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Label */}
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#1A1F36",
          marginBottom: 44, lineHeight: 1.2,
        }}>
          בין לקוחותינו
        </h2>

        {/* Logo grid */}
        <div className="client-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "28px 20px",
        }}>
          {companies.map(client => (
            <LogoCard key={client.name} client={client} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .client-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .client-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px 12px !important; }
        }
      `}</style>
    </section>
  );
}
