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
    background: "#F5F7FD",
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
      {/* Background glow */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(10,89,235,0.18) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(10,89,235,0.1) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(10,89,235,0.3)", border: "1px solid rgba(10,89,235,0.5)",
              borderRadius: 100, padding: "6px 18px", marginBottom: 22,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF50", flexShrink: 0 }} />
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 700 }}>30 דקות • ללא עלות וללא התחייבות</span>
            </div>
            <h2
              style={{
                color: "white",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              מוכנים לראות את{" "}
              <span style={{
                background: "linear-gradient(135deg, #76A4F9, #B4CCFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Yeda בפעולה?
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              בדמו של 30 דקות נראה לכם בדיוק איך Yeda LMS עובד עבור ארגון שדומה לשלכם –
              עם דוגמאות רלוונטיות ותשובות לכל שאלה.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "הדגמה חיה של כל הפיצ׳רים הרלוונטיים לכם",
                "ניתוח צרכים בחינם מהמומחים שלנו",
                "הצעת מחיר מותאמת לגודל הארגון",
                "הטמעת תוכני הלמידה — מקבלים מערכת מוכנה לעבודה",
              ].map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, padding: "12px 16px",
                }}>
                  <div
                    style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: "linear-gradient(135deg, #0A59EB, #3B82F6)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, boxShadow: "0 0 12px rgba(10,89,235,0.4)",
                    }}
                  >
                    <IconCheck size={13} color="white" />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.95)", fontSize: 15, fontWeight: 500 }}>{item}</span>
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
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginBottom: 12 }}>
                מעדיפים ליצור קשר ישירות?
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href="tel:0723385091"
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A59EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.48 2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.95-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  072-338-5091
                </a>
                <a
                  href="mailto:info@yedalms.io"
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A59EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
                  </svg>
                  info@yedalms.io
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
                      background: "#0A59EB",
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
                  <p style={{ fontSize: 15, color: "#4B5472", lineHeight: 1.65 }}>
                    נחזור אליכם תוך 24 שעות לתיאום מועד הדמו.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#000F61", marginBottom: 6 }}>
                    קבעו דמו חינם
                  </h3>
                  <p style={{ fontSize: 14, color: "#4B5472", marginBottom: 28 }}>
                    מלאו את הפרטים ונחזור אליכם תוך 24 שעות
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
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
                          onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F5F7FD"; }}
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
                          onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F5F7FD"; }}
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
                        onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F5F7FD"; }}
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
                        onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F5F7FD"; }}
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
                        onBlur={(e) => { e.target.style.borderColor = "#DDE1EF"; e.target.style.background = "#F5F7FD"; }}
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

                    <p style={{ fontSize: 12, color: "#4B5472", textAlign: "center", marginTop: 12 }}>
                      ללא עלות, ללא התחייבות. המידע לא יועבר לצד שלישי.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
