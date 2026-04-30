"use client";
import { useState } from "react";
import { IconCheck } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", size: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 6,
    border: "1.5px solid #DDE1EF",
    fontSize: 15,
    color: "#1B1B1E",
    background: "#F0F2F8",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    textAlign: "right",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{ background: "#000F61", padding: "96px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative block */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 6,
          height: "100%",
          background: "#F08700",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <span
              style={{
                display: "inline-block",
                background: "#F08700",
                color: "white",
                fontSize: 12,
                fontWeight: 800,
                padding: "5px 14px",
                borderRadius: 3,
                marginBottom: 18,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              30 דקות • ללא התחייבות
            </span>
            <h2
              style={{
                color: "white",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              מוכנים לראות את{" "}
              <span style={{ background: "#FFE4C2", color: "#000F61", padding: "0 8px" }}>
                Yeda בפעולה?
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              בדמו של 30 דקות נראה לכם בדיוק איך Yeda LMS עובד עבור ארגון שדומה לשלכם –
              עם דוגמאות רלוונטיות ותשובות לכל שאלה.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "הדגמה חיה של כל הפיצ׳רים הרלוונטיים לכם",
                "ניתוח צרכים בחינם מהמומחים שלנו",
                "הצעת מחיר מותאמת לגודל הארגון",
                "תמיכה בשלב ההטמעה ללא עלות נוספת",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#F08700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <IconCheck size={13} color="white" />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.82)", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 36,
                paddingTop: 32,
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: 12 }}>
                מעדיפים ליצור קשר ישירות?
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href="tel:0723385091"
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span style={{ color: "#F08700" }}>📞</span> 072-338-5091
                </a>
                <a
                  href="mailto:info@yedalms.io"
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span style={{ color: "#F08700" }}>✉</span> info@yedalms.io
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div
              style={{
                background: "white",
                borderRadius: 12,
                padding: "40px 36px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: "#F08700",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <IconCheck size={28} color="white" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#000F61", marginBottom: 12 }}>
                    תודה! קיבלנו את הפרטים
                  </h3>
                  <p style={{ fontSize: 15, color: "#A1A5C0", lineHeight: 1.65 }}>
                    נחזור אליכם תוך 24 שעות לתיאום מועד הדמו.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#000F61", marginBottom: 6 }}>
                    קבעו דמו חינם
                  </h3>
                  <p style={{ fontSize: 14, color: "#A1A5C0", marginBottom: 28 }}>
                    מלאו את הפרטים ונחזור אליכם תוך 24 שעות
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#000F61", marginBottom: 6 }}>
                          שם מלא *
                        </label>
                        <input
                          required
                          style={inputStyle}
                          placeholder="ישראל ישראלי"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={(e) => { e.target.style.borderColor = "#000F61"; e.target.style.background = "white"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F0F2F8"; }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#000F61", marginBottom: 6 }}>
                          שם החברה *
                        </label>
                        <input
                          required
                          style={inputStyle}
                          placeholder="חברת XYZ"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          onFocus={(e) => { e.target.style.borderColor = "#000F61"; e.target.style.background = "white"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F0F2F8"; }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: 14 }}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#000F61", marginBottom: 6 }}>
                        אימייל עסקי *
                      </label>
                      <input
                        required
                        type="email"
                        style={inputStyle}
                        placeholder="name@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={(e) => { e.target.style.borderColor = "#000F61"; e.target.style.background = "white"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F0F2F8"; }}
                      />
                    </div>

                    <div style={{ marginBottom: 14 }}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#000F61", marginBottom: 6 }}>
                        טלפון
                      </label>
                      <input
                        style={inputStyle}
                        placeholder="050-000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={(e) => { e.target.style.borderColor = "#000F61"; e.target.style.background = "white"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F0F2F8"; }}
                      />
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#000F61", marginBottom: 6 }}>
                        מספר עובדים בארגון
                      </label>
                      <select
                        style={{ ...inputStyle, cursor: "pointer" }}
                        value={form.size}
                        onChange={(e) => setForm({ ...form, size: e.target.value })}
                        onFocus={(e) => { e.target.style.borderColor = "#000F61"; e.target.style.background = "white"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F0F2F8"; }}
                      >
                        <option value="">בחרו טווח</option>
                        <option>10–50 עובדים</option>
                        <option>50–200 עובדים</option>
                        <option>200–1,000 עובדים</option>
                        <option>1,000+ עובדים</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: "100%", textAlign: "center", fontSize: 16, padding: "14px" }}
                    >
                      קבעו דמו חינם ←
                    </button>

                    <p style={{ fontSize: 12, color: "#A1A5C0", textAlign: "center", marginTop: 12 }}>
                      ללא עלות, ללא התחייבות. המידע לא יועבר לצד שלישי.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
