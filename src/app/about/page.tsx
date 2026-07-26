import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function SvgIcon({ d, size = 22, color = "#0A59EB" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: "block", flexShrink: 0 }}>
      <path d={d} />
    </svg>
  );
}

function IconBox({ d, size = 48, iconSize = 22 }: { d: string; size?: number; iconSize?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 12, background: "#D6E3FC",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      <SvgIcon d={d} size={iconSize} color="#0A59EB" />
    </div>
  );
}

const values = [
  {
    icon: "M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M20 20l-4.35-4.35",
    title: "מחקר ולמידה מתמדת",
    desc: "אנחנו חוקרים דפוסי למידה, חווית משתמש ויישום טכנולוגיות חכמות במערכות ניהול ידע כבר שנים. הפיתוח שלנו מבוסס על נתונים — לא על ניחושים.",
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    title: "גישה אנושית לטכנולוגיה",
    desc: "למידה איכותית מתחילה בהבנה עמוקה של המשתמשים. אנחנו מתכננים כל ממשק, כל תהליך וכל פיצ'ר מנקודת המבט של האדם שישתמש בהם.",
  },
  {
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    title: "חדשנות מעשית",
    desc: "אנחנו לא מפתחים טכנולוגיה למען הטכנולוגיה. כל כלי AI, כל אוטומציה וכל פיצ'ר שאנחנו בונים — חייב לפתור בעיה אמיתית ולחסוך זמן אמיתי.",
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    title: "נגישות לכולם",
    desc: "הכשרות ארגוניות לא צריכות להיות מורכבות ויקרות. אנחנו בונים מערכת שגם עובד בשטח וגם מנהל בכיר יכולים להשתמש בה בלי הכשרה מוקדמת.",
  },
  {
    icon: "M8 21h8 M12 17v4 M6 3H2v5a6 6 0 0 0 6 6h0M18 3h4v5a6 6 0 0 1-6 6h0M12 15a6 6 0 0 1-6-6V3h12v6a6 6 0 0 1-6 6z",
    title: "מצוינות בתוצאות",
    desc: "ההצלחה שלנו נמדדת בהצלחת הלקוחות שלנו. אנחנו עוקבים אחרי תוצאות עסקיות, לא רק אחרי מדדי שימוש.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "אמינות ואבטחה",
    desc: "נתוני הארגון שלכם הם הנכס הכי רגיש שיש. אנחנו פועלים לפי הסטנדרטים הגבוהים ביותר של אבטחת מידע ופרטיות.",
  },
];

const capabilities = [
  {
    title: "מערכת LMS מתקדמת",
    desc: "יצירת מסלולי למידה מדויקים, ניהול לוחות זמנים חכמים, חלוקת משתמשים לקבוצות, הגדרת הרשאות גישה מותאמות ומעקב נוכחות — ידנית או אוטומטית.",
    icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  },
  {
    title: "למידה אינטראקטיבית",
    desc: "סרטוני הדרכה עם עצירות מובנות לשאלות הבנה, מבחני ידע ומשימות — שהופכים כל תוכן פאסיבי לחוויית הכשרה מעורבת.",
    icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    title: "ניטור ואנליטיקה",
    desc: "מעקב השתתפות בזמן אמת, מדידת קצב התקדמות, זיהוי אוטומטי של אתגרי למידה ודוחות ניהוליים מפורטים.",
    icon: "M18 20V10 M12 20V4 M6 20v-6",
  },
  {
    title: "עוזר AI ארגוני",
    desc: "עוזר AI חכם הטמון בכל הכשרה, מאומן על חומרי הארגון, עונה בעברית ובשפות נוספות עם הפניות מדויקות למקורות.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 8v4l3 3",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section
          className="about-hero"
          style={{
            background: "#000F61",
            padding: "120px 24px 80px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span
              style={{
                background: "#0A59EB",
                color: "white",
                fontSize: 13,
                fontWeight: 800,
                padding: "5px 14px",
                borderRadius: 4,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 24,
              }}
            >
              הסיפור שלנו
            </span>
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              אנחנו משנים את הדרך שבה ארגונים מנהלים ידע
            </h1>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 19px)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
                maxWidth: 620,
                margin: "0 auto",
              }}
            >
              קבוצה של אנשי אקדמיה וטכנולוגיה שחוקרים ומפתחים מערכות ליצירה, ניהול
              ושיווק של הכשרות דיגיטליות — עם חזון ברור: להפוך למידה דיגיטלית לחוויה
              חכמה, אינטראקטיבית ומעוררת.
            </p>
          </div>
        </section>

        {/* Mission strip */}
        <section style={{ background: "#0A59EB", padding: "40px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: "clamp(18px, 2.5vw, 26px)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              &ldquo;למידה איכותית מתחילה בהבנה עמוקה של המשתמשים,
              טכנולוגיה חדשנית וגישה אנושית&rdquo;
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section style={{ background: "white", padding: "88px 24px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Text */}
            <div>
              <span className="section-badge">הפילוסופיה שלנו</span>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: 800,
                  color: "#000F61",
                  lineHeight: 1.25,
                  marginBottom: 20,
                }}
              >
                בעולם שבו ידע הוא כוח — הדרך שלנו ללמד ולתעד משתנה
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#4B5472",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                בעולם שבו תהליכים זזים במהירות ועובדים מתחלפים, ארגונים מאבדים ידע
                קריטי כל הזמן. אנחנו חוקרים את הבעיה הזו לעומקה — ובונים כלים
                שפותרים אותה בפועל.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "#4B5472",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                Yeda נולדה מתוך שאלה פשוטה: למה תהליך בניית הכשרות ארגוניות
                לוקח חודשים ועולה הון, כשהוא יכול לקחת ימים ולעלות שבריר? עם AI,
                הפכנו את זה לאפשרי.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { num: "2019", label: "שנת הקמה" },
                  { num: "50+", label: "ארגונים לקוחות" },
                  { num: "17", label: "אנשי צוות" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontSize: 36,
                        fontWeight: 900,
                        color: "#0A59EB",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </div>
                    <div style={{ fontSize: 14, color: "#4B5472", marginTop: 4 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div
              style={{
                background: "#000F61",
                borderRadius: 16,
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <div style={{
                width: 72, height: 72, borderRadius: 18, background: "rgba(10,89,235,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
              }}>
                <SvgIcon d="M9 21h6 M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" size={32} color="#6B93F4" />
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "white",
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}
              >
                החזון שלנו
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                להפוך למידה דיגיטלית לחוויה חכמה, אינטראקטיבית ומעוררת השראה
                — לכל ארגון, בכל גודל, בכל שפה.
              </p>
              <div
                style={{
                  background: "#0A59EB",
                  borderRadius: 8,
                  padding: "14px 24px",
                  color: "white",
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                &ldquo;אנחנו משנים את חוקי המשחק&rdquo;
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              section > div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* Values */}
        <section style={{ background: "#F5F7FD", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="section-badge-navy">הערכים שלנו</span>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 36px)",
                  fontWeight: 800,
                  color: "#000F61",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                מה מנחה אותנו בכל החלטה
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {values.map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: "white",
                    borderRadius: 16,
                    padding: "28px 24px",
                    border: "1px solid #E3E7F2",
                    borderTopWidth: 3,
                    borderTopColor: "#0A59EB",
                  }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <IconBox d={v.icon} />
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#1A1F36",
                      marginBottom: 10,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#4B5472",
                      lineHeight: 1.72,
                      margin: 0,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ background: "white", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="section-badge">מה אנחנו בונים</span>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 36px)",
                  fontWeight: 800,
                  color: "#000F61",
                  marginBottom: 14,
                }}
              >
                הפלטפורמה שנבנתה לפתור בעיות אמיתיות
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: 24,
              }}
            >
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  style={{
                    textAlign: "center",
                    padding: "32px 20px",
                    borderRadius: 16,
                    border: "1px solid #E3E7F2",
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: 16, background: "#D6E3FC",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <SvgIcon d={c.icon} size={26} color="#0A59EB" />
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#000F61",
                      marginBottom: 10,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#4B5472",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ background: "#F5F7FD", padding: "88px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="section-badge">הצוות שלנו</span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#000F61", marginBottom: 14, lineHeight: 1.2 }}>
                האנשים שמאחורי Yeda
              </h2>
              <p style={{ fontSize: 16, color: "#4B5472", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
                צוות של מומחי טכנולוגיה, חינוך ועיצוב — שעובדים יחד כדי להפוך ניהול ידע ארגוני לפשוט וחכם.
              </p>
            </div>

            <div className="about-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 24 }}>
              {[
                { name: "Alexey Kogan",          title: "CEO & Founder",           img: "/team-alexey.png"    },
                { name: "Ronen Nahmias",          title: "Chairperson",             img: "/team-ronen.png"     },
                { name: "Seva Konradt",           title: "COO",                     img: "/team-seva.png"      },
                { name: "Adi Sharon",             title: "Academic Director",       img: "/team-adi.png"       },
                { name: "Yoav Yelin",             title: "CTO",                     img: "/team-yoav.png"      },
                { name: "Evgeny Dobryansky",      title: "Development Team Leader", img: "/team-evgeny.png"    },
                { name: "Alexander Parkhomenko",  title: "DevOps",                  img: "/team-alexander.png" },
                { name: "Vitalina Rebalsky",      title: "Senior Project Manager",  img: "/team-vitalina.png"  },
                { name: "Liza Pavlova",           title: "Product Designer",        img: "/team-liza.png"      },
              ].map((member) => (
                <div key={member.name} className="card-lift" style={{
                  background: "white",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid #E3E7F2",
                  boxShadow: "0 2px 12px rgba(0,15,97,0.06)",
                  textAlign: "center",
                }}>
                  <div className="about-member-photo" style={{ background: "#EBF1FD", height: 180, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div className="about-member-text" style={{ padding: "16px 12px 20px" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1A1F36", marginBottom: 6 }}>{member.name}</h3>
                    <span style={{
                      display: "inline-block",
                      background: "#EBF1FD", color: "#0A59EB",
                      fontSize: 13, fontWeight: 700,
                      padding: "4px 10px", borderRadius: 999,
                    }}>{member.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section
          style={{
            background: "#000F61",
            padding: "72px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 800,
                color: "white",
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              רוצים להכיר אותנו יותר לעומק?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              קבעו שיחה עם הצוות שלנו ונסביר איך Yeda יכולה להתאים לצרכי
              הארגון שלכם — ללא התחייבות.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary" style={{ fontSize: 15, padding: "13px 32px" }}>
                קבעו דמו חינם ←
              </Link>
            </div>
          </div>
        </section>

      <style>{`
        /* Hero must clear the fixed header (72px) on all screen sizes */
        .about-hero { padding-top: 120px !important; }
        @media (max-width: 768px) {
          .about-hero { padding-top: 100px !important; padding-bottom: 52px !important; }
          .about-team-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .about-member-photo { height: 150px !important; }
          .about-member-text  { padding: 10px 10px 14px !important; }
        }
      `}</style>
      </main>
      <Footer />
    </>
  );
}
