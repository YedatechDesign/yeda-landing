"use client";
import Image from "next/image";

const clients = [
  { name: "HackerU",            logo: "client1.png" },
  { name: "מכללת IPC",          logo: "client2.png" },
  { name: "אורין שפלטר",        logo: "client3.png" },
  { name: "ThriveDX",           logo: "client4.png" },
  { name: "מרכז גומא גבים",    logo: "client5.png" },
  { name: "קול המס",            logo: "client6.png" },
  { name: "HIGHQ",              logo: "client7.png" },
  { name: "פישר עו\"ד",         logo: "client8.png" },
  { name: "קבוצת מובמנט",       logo: "client9.png" },
  { name: "אולג'ובס",           logo: "client10.png" },
  { name: "מלם טים",            logo: "client11.png" },
  { name: "כלכליסט",            logo: "client12.png" },
  { name: "INT",                logo: "client13.png" },
  { name: "Allen Carr",         logo: "client14.png" },
  { name: "APRIL",              logo: "client15.png" },
  { name: "Elevation",          logo: "client16.png" },
  { name: "מטבחי רגבה",         logo: "client17.png" },
  { name: "ישראל קנדה",         logo: "client18.png" },
  { name: "Lastminute",         logo: "client19.png" },
  { name: "הבצפר",              logo: "client20.png" },
  { name: "Golan",              logo: "client21.png" },
  { name: "התאחדות הסטודנטים", logo: "client22.png" },
  { name: "JUMP!N",             logo: "client23.png" },
];

// Duplicate for seamless infinite scroll
const doubled = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section style={{ background: "#F5F7FD", padding: "36px 0 40px", borderBottom: "1px solid #E3E7F2", overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <span className="section-badge">בין לקוחותינו</span>
      </div>

      {/* Marquee track */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          display: "flex",
          gap: 40,
          alignItems: "center",
          width: "max-content",
          animation: "marquee 40s linear infinite",
        }}>
          {doubled.map((c, i) => (
            <div key={i} style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 130,
              height: 64,
              padding: "10px 14px",
              background: "white",
              borderRadius: 10,
              boxShadow: "0 1px 6px rgba(0,15,97,0.08)",
              opacity: 0.85,
              transition: "opacity 0.2s, box-shadow 0.2s",
              filter: "grayscale(20%)",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,15,97,0.14)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.filter = "grayscale(20%)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,15,97,0.08)"; }}
            >
              <Image
                src={`/${c.logo}`}
                alt={c.name}
                width={110}
                height={44}
                style={{ objectFit: "contain", maxHeight: 44 }}
              />
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: "100%", background: "linear-gradient(to left, #F5F7FD, transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: 80, height: "100%", background: "linear-gradient(to right, #F5F7FD, transparent)", pointerEvents: "none" }} />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
