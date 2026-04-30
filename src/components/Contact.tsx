"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", size: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    border: "1.5px solid #E2E8F0",
    fontSize: 15,
    color: "#1E293B",
    background: "white",
    outline: "none",
    transition: "border-color 0.2s",
    textAlign: "right" as const,
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    color: "#334155",
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      className="gradient-hero"
      style={{ padding: "96px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Decorations */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
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
          className="contact-grid"
        >
          {/* Left text */}
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,107,53,0.15)",
                color: "#FF9B73",
                fontSize: 13,
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: 100,
                marginBottom: 16,
              }}
            >
              30 דקות • ללא התחייבות
            </div>
            <h2
              style={{
                color: "white",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              מוכנים לראות
              <br />
              <span style={{ color: "#FF6B35" }}>את Yeda בפעולה?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
              בדמו של 30 דקות נראה לכם בדיוק איך Yeda LMS עובד עבור ארגון שדומה לשלכם –
              עם דוגמאות רלוונטיות ותשובות לכל שאלה.
            </p>

            {/* What you get */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "הדגמה חיה של כל הפיצ׳רים הרלוונטיים לכם",
                "ניתוח צרכים בחינם מהמומחים שלנו",
                "הצעת מחיר מותאמת לגודל הארגון",
                "תמיכה בשלב ההטמעה ללא עלות נוספת",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#FF6B35",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 11,
                      color: "white",
                      fontWeight: 900,
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 8 }}>
                מעדיפים ליצור קשר ישירות?
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                <a
                  href="tel:0723385091"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
                >
                  📞 072-338-5091
                </a>
                <a
                  href="mailto:info@yedalms.io"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
                >
                  ✉️ info@yedalms.io
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div>
            <div
              style={{
                background: "white",
                borderRadius: 24,
                padding: "40px 36px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0D2137", marginBottom: 12 }}>
                    תודה! קיבלנו את הפרטים
                  </h3>
                  <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.65 }}>
                    נחזור אליכם תוך 24 שעות לתיאום מועד הדמו. מצפים לדבר אתכם!
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0D2137", marginBottom: 6 }}>
                    קבעו דמו חינם
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>
                    מלאו את הפרטים ונחזור אליכם תוך 24 שעות
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>שם מלא *</label>
                        <input
                          required
                          style={inputStyle}
                          placeholder="ישראל ישראלי"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={(e) => (e.target.style.borderColor = "#1A5CFF")}
                          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>שם החברה *</label>
                        <input
                          required
                          style={inputStyle}
                          placeholder="חברת XYZ"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          onFocus={(e) => (e.target.style.borderColor = "#1A5CFF")}
                          onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>אימייל עסקי *</label>
                      <input
                        required
                        type="email"
                        style={inputStyle}
                        placeholder="name@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "#1A5CFF")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      />
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>טלפון</label>
                      <input
                        style={inputStyle}
                        placeholder="050-000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "#1A5CFF")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      />
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <label style={labelStyle}>מספר עובדים בארגון</label>
                      <select
                        style={{ ...inputStyle, cursor: "pointer" }}
                        value={form.size}
                        onChange={(e) => setForm({ ...form, size: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "#1A5CFF")}
                        onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                      >
                        <option value="">בחרו טווח</option>
                        <option value="10-50">10–50 עובדים</option>
                        <option value="50-200">50–200 עובדים</option>
                        <option value="200-1000">200–1,000 עובדים</option>
                        <option value="1000+">1,000+ עובדים</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: "100%", textAlign: "center", fontSize: 17, padding: "15px" }}
                    >
                      קבעו דמו חינם →
                    </button>

                    <p style={{ fontSize: 12, color: "#94A3B8", textAlign: "center", marginTop: 12 }}>
                      ללא עלות, ללא התחייבות. המידע מאובטח ולא יועבר לצד שלישי.
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
