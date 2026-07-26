import ClickToLoadVideo from "@/components/ClickToLoadVideo";

function SvgIcon({ d, size = 18, color = "white" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

const VIDEO_SRC = "https://iframe.yedatech.io/embed/vz-58de8e1c-6b2/6480e1ed-54d7-474d-8233-c2d44355a5c7";

const capabilities = [
  { icon: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", title: "רואה את המסך בזמן אמת", desc: "מבין בדיוק על מה העובד מסתכל ומהו השלב הבא — בלי הסברים מסובכים" },
  { icon: "M5 12h14 M13 6l6 6-6 6 M9 4v16", title: "מסמן ומדריך על המסך", desc: "חיצים והדגשות חיות שמראות בדיוק איפה ללחוץ ומה למלא" },
  { icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M19 8v6 M22 11h-6", title: "אונבורדינג לעובדים חדשים", desc: "מלווה עובד חדש בכל תהליך עבודה — עד שהוא עצמאי לחלוטין" },
  { icon: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z", title: "עובד בתוך כל מערכת", desc: "לא רק ב-Yeda — בכל כלי וממשק שהארגון עובד איתו ביום-יום" },
];

export default function AIAgentSection() {
  return (
    <section
      id="ai-agent"
      style={{
        background: "linear-gradient(160deg, #000F61 0%, #0A1B6E 55%, #0A2A8C 100%)",
        padding: "88px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(240,135,0,0.15)", color: "#FFB35C",
              border: "1px solid rgba(240,135,0,0.4)",
              fontSize: 13, fontWeight: 800, padding: "6px 14px", borderRadius: 999,
              marginBottom: 18, letterSpacing: "0.02em",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#A94700", display: "inline-block" }} />
            חדש · סוכן AI חי
          </span>

          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "white", lineHeight: 1.18, marginBottom: 16 }}>
            סוכן ה-AI שרואה את המסך<br />ומדריך כל עובד — בזמן אמת
          </h2>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>
            צ׳אטבוט חכם שמתחבר למערכות שבהן העובדים עובדים, רואה את המסך בזמן אמת ומלווה כל פעולה
            צעד-אחר-צעד: מסמן על המסך, מסביר מה לעשות ומוביל את העובד עד לסיום.
            אונבורדינג לעובדים חדשים והדרכה תוך כדי עבודה — בלי לחפש מדריכים, בלי להמתין לתמיכה.
          </p>
        </div>

        {/* Video */}
        <div
          style={{
            position: "relative", borderRadius: 16, overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.14)",
            boxShadow: "0 32px 90px rgba(0,0,0,0.5)",
            background: "#000", aspectRatio: "16/9", maxWidth: 900, margin: "0 auto",
          }}
        >
          <ClickToLoadVideo
            src={VIDEO_SRC}
            title="סוכן ה-AI של Yeda - הדרכה חיה על המסך"
          />
        </div>

        {/* Capabilities */}
        <div
          className="agent-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 40 }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16, padding: "22px 20px",
              }}
            >
              <div
                style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(240,135,0,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
                }}
              >
                <SvgIcon d={cap.icon} size={20} color="#A94700" />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6, lineHeight: 1.3 }}>{cap.title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{cap.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="#contact" className="btn-primary" style={{ display: "inline-block", fontSize: 15, padding: "14px 32px" }}>
            קבעו הדגמה וראו את הסוכן בפעולה ←
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .agent-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .agent-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
