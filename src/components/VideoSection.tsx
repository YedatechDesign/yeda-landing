const VIDEO_SRC = "https://iframe.yedatech.io/embed/vz-ac26fd16-36a/4cf217df-8fc6-405d-a114-d410ac5b8181";

function SvgIcon({ d, size = 16, color = "white" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

const trustItems = [
  { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10", text: "מאות לקוחות" },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", text: "אלפי עובדים מוכשרים" },
  { icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", text: "4.9 / 5 שביעות רצון" },
];

export default function VideoSection() {
  return (
    <section className="no-pad-top" style={{ background: "#000F61", padding: "0 24px 72px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{
            color: "rgba(255,255,255,0.75)", fontSize: 15, fontWeight: 700,
            letterSpacing: "0.08em", textTransform: "uppercase", margin: 0,
          }}>
            ראו את המערכת בפעולה
          </p>
        </div>

        <div style={{
          position: "relative", borderRadius: 14, overflow: "hidden",
          border: "2px solid rgba(255,255,255,0.12)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          background: "#000", aspectRatio: "16/9",
        }}>
          <iframe
            src={VIDEO_SRC}
            title="Yeda LMS — סקירה מלאה של הפלטפורמה"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>

        {/* Chips row — below the video to avoid overflow clipping */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
          {["ניהול הכשרות", "יצירת תוכן AI", "דאשבורד ניהולי", "תעודות אוטומטיות"].map((chip) => (
            <span key={chip} style={{
              background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)",
              fontSize: 14, fontWeight: 600, padding: "5px 14px", borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.3)",
            }}>
              {chip}
            </span>
          ))}
        </div>

        {/* Trust strip — SVG icons instead of emoji */}
        <div style={{ display: "flex", justifyContent: "center", gap: 36, marginTop: 24, flexWrap: "wrap" }}>
          {trustItems.map((item) => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.75)", fontSize: 15, fontWeight: 500 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7,
                background: "rgba(255,255,255,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <SvgIcon d={item.icon} size={14} color="white" />
              </div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
