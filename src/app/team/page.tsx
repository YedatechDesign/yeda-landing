"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const management = [
  { name: "Alexey Kogan",   role: "מייסד ומנכ\"ל",          emoji: "👨‍💼", color: "#000F61", photo: "/team-alexey.png" },
  { name: "Ronen Nahmias",  role: "Chairperson",             emoji: "🏛️", color: "#000F61", photo: "/team-ronen.png"  },
  { name: "Adi Sharon",     role: "מנהלת אקדמית",           emoji: "🎓", color: "#000F61", photo: "/team-adi.png"    },
  { name: "Seva Konradt",   role: "סמנכ\"ל תפעול (COO)",    emoji: "⚙️", color: "#000F61", photo: "/team-seva.png"   },
  { name: "Yoav Davidovich",role: "סמנכ\"ל כספים (CFO)",    emoji: "📊", color: "#000F61", photo: null               },
];

const rd = [
  { name: "Arthur Tsidkilov",    role: "סמנכ\"ל פיתוח ומייסד שותף", emoji: "🛠️", color: "#A94700", photo: null                   },
  { name: "Yoav Yelin",          role: "מנהל טכנולוגיה (CTO)",       emoji: "💻", color: "#A94700", photo: "/team-yoav.png"         },
  { name: "Alina Zimina",        role: "UI/UX Designer",              emoji: "🎨", color: "#A94700", photo: null                   },
  { name: "Evgeny Dobryansky",   role: "ראש צוות פיתוח",             emoji: "👨‍💻", color: "#A94700", photo: "/team-evgeny.png"      },
  { name: "Alexander Parkhomenko",role: "DevOps",                     emoji: "🔧", color: "#A94700", photo: "/team-alexander.png"   },
  { name: "Vitalina Rebalsky",   role: "מנהלת פרויקטים בכירה",       emoji: "📋", color: "#A94700", photo: "/team-vitalina.png"    },
  { name: "Katya Klymenko",      role: "Product Designer",            emoji: "✏️", color: "#A94700", photo: null                   },
  { name: "Andrey Novosad",      role: "מפתח Backend — Laravel",      emoji: "⚡", color: "#A94700", photo: null                   },
  { name: "Yaroslaw Almazow",    role: "מפתח Frontend — Angular",     emoji: "🌐", color: "#A94700", photo: null                   },
  { name: "Katya Nesin",         role: "מעצבת גרפית",                 emoji: "🖌️", color: "#A94700", photo: null                   },
];

const marketing = [
  { name: "Alon Soler",    role: "מנהל שיווק",       emoji: "📣", color: "#000F61", photo: null },
  { name: "Yossi Toledano",role: "סמנכ\"ל מכירות",   emoji: "🤝", color: "#000F61", photo: null },
];

function TeamCard({
  name,
  role,
  emoji,
  color,
  photo,
}: {
  name: string;
  role: string;
  emoji: string;
  color: string;
  photo: string | null;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="team-card"
      style={{
        background: "white",
        borderRadius: 14,
        border: "1.5px solid #E0E4F0",
        transition: "box-shadow 0.2s, border-color 0.2s",
        cursor: "default",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,15,97,0.1)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#E0E4F0";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Photo area — rectangular on mobile, circular on desktop */}
      <div className="team-photo-area" style={{ background: "#E8EBF5", width: "100%", aspectRatio: "1 / 1.1", overflow: "hidden", position: "relative" }}>
        {photo ? (
          <img src={photo} alt={name} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, fontWeight: 900, color: "white", letterSpacing: "-1px",
          }}>
            {initials}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="team-card-text" style={{ padding: "14px 14px 16px", textAlign: "center" }}>
        <h3 style={{ fontSize: 14, fontWeight: 800, color: "#1B1B1E", marginBottom: 4, lineHeight: 1.3, direction: "ltr" }}>
          {name}
        </h3>
        <p style={{ fontSize: 13, color: "#6B7280", margin: "0 0 10px", lineHeight: 1.4 }}>
          {role}
        </p>
        <div className="team-emoji-tag" style={{
          display: "inline-block",
          background: color === "#A94700" ? "#FFE4C2" : "#E8EBF8",
          borderRadius: 20, padding: "3px 10px", fontSize: 14,
        }}>
          {emoji}
        </div>
      </div>
    </div>
  );
}

function Section({
  badge,
  title,
  subtitle,
  members,
  bg,
}: {
  badge: string;
  title: string;
  subtitle: string;
  members: typeof management;
  bg: string;
}) {
  return (
    <section style={{ background: bg, padding: "72px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className={bg === "white" ? "section-badge" : "section-badge-navy"}>
            {badge}
          </span>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 800,
              color: "#000F61",
              marginBottom: 10,
              lineHeight: 1.25,
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>{subtitle}</p>
        </div>

        <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 18 }}>
          {members.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>

        {/* Hero */}
        <section
          style={{
            background: "#000F61",
            paddingTop: 72,
            padding: "120px 24px 80px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <span
              style={{
                background: "#A94700",
                color: "white",
                fontSize: 11,
                fontWeight: 800,
                padding: "5px 14px",
                borderRadius: 4,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 24,
              }}
            >
              הצוות שלנו
            </span>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.2,
                marginBottom: 22,
              }}
            >
              הכירו את הצוות של Yeda
            </h1>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
                maxWidth: 560,
                margin: "0 auto 36px",
              }}
            >
              מוזאיקה אנושית של מומחי טכנולוגיה, פדגוגיה ועסקים — שמובילים
              אתכם לאורך האסטרטגיה, הפיתוח ויישום הפלטפורמה.
            </p>

            {/* Quick stats */}
            <div
              style={{
                display: "flex",
                gap: 32,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "17", label: "אנשי צוות" },
                { num: "5+", label: "לאומיות" },
                { num: "6", label: "מחלקות" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 900,
                      color: "#A94700",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      marginTop: 6,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management */}
        <Section
          bg="white"
          badge="הנהלה"
          title="ההנהלה הבכירה"
          subtitle="הצוות שמוביל את החזון האסטרטגי של Yeda"
          members={management}
        />

        {/* R&D */}
        <Section
          bg="#F0F2F8"
          badge="מחקר ופיתוח"
          title="צוות הפיתוח והעיצוב"
          subtitle="המוחות שבונים, מתכננים ומשפרים את הפלטפורמה מדי יום"
          members={rd}
        />

        {/* Marketing */}
        <Section
          bg="white"
          badge="שיווק ומכירות"
          title="צוות שיווק ומכירות"
          subtitle="האנשים שמחברים בין Yeda לבין הלקוחות שלה"
          members={marketing}
        />

        {/* CTA */}
        <section
          style={{
            background: "#000F61",
            padding: "72px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 800,
                color: "white",
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              רוצים להצטרף לצוות?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              אנחנו תמיד מחפשים אנשים מוכשרים שרוצים לשנות את עולם הלמידה
              הארגונית. שלחו לנו מייל ונשמח לשוחח.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:Info@YedaLMS.io"
                className="btn-primary"
                style={{ fontSize: 15, padding: "13px 32px" }}
              >
                Info@YedaLMS.io ←
              </a>
              <a
                href="/about"
                className="btn-outline-white"
                style={{ fontSize: 15, padding: "13px 32px" }}
              >
                קראו על הסיפור שלנו
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .team-card-text {
            padding: 10px 10px 12px !important;
          }
          .team-emoji-tag {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
