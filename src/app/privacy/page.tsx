import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const title = "מדיניות פרטיות | Yeda";
const description = "מדיניות הפרטיות ותנאי השימוש של ידע פיתוח סביבות למידה בע״מ לאתרי Yeda.";
const canonical = "/privacy";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: `${SITE_URL}${canonical}`,
    siteName: "Yeda",
    title,
    description,
  },
};

const sections: { id?: string; title: string; paragraphs: string[]; bullets?: string[] }[] = [
  {
    title: "איזה מידע אנחנו אוספים",
    paragraphs: [],
    bullets: [
      "פרטים שאתם שולחים בטופס באתר, בצ׳אט באתר או בטופס מודעה: שם מלא, טלפון, אימייל, שם ארגון או מוסד, הודעה, וסוג הצורך אם מילאתם.",
      "שיחות לטלפון 072-338-5091, כולל מספר הטלפון שלכם אם דיווח השיחות פעיל.",
      "נתוני שימוש באתר: עמודים שנצפו, מקור הגעה, מכשיר ודפדפן, מזהי קמפיין (UTM), וכתובת IP.",
      "עוגיות ומזהים לפרסום ולמדידה: Google Tag Manager, Google Ads, Google Analytics, ובחלק מהאתרים גם פיקסל מדידה של Meta.",
    ],
  },
  {
    title: "למה אנחנו משתמשים בזה",
    paragraphs: [],
    bullets: [
      "כדי לחזור אליכם בנוגע להדגמה או למכירה של מערכת LMS.",
      "כדי למדוד פרסום ולשפר את האתרים.",
      "כדי לאבטח את האתר ולמנוע ספאם.",
      "כדי למלא חובה חוקית אם תידרש.",
    ],
  },
  {
    title: "עם מי משתפים",
    paragraphs: ["אין מכירת רשימות אנשי קשר לצד שלישי לשיווק שלהם."],
    bullets: [
      "צוות המכירות והתפעול של ידע.",
      "מערכת ניהול הלידים שבה אנחנו מטפלים בפניות.",
      "ספקי תשתית, אחסון, תגיות, פרסום ומדידה (גוגל, ובחלק מהאתרים מטא), וכלי הצ׳אט באתר.",
    ],
  },
  {
    title: "בדיקת מידע עסקי פומבי",
    paragraphs: ["כדי להתאים את הפנייה, ייתכן שנבדוק מידע עסקי פומבי על הארגון שלכם. לא נמציא חברה, תפקיד או פרטי קשר."],
  },
  {
    title: "שמירה",
    paragraphs: ["נשמור את הפרטים כל עוד נדרש לטיפול בפנייה, לקשר עסקי, או לחובה חוקית. פנייה שלא התקדמה תימחק או תטושטש בפרק זמן סביר."],
  },
  {
    title: "הזכויות שלכם",
    paragraphs: ["לפי חוק הגנת הפרטיות אפשר לבקש עיון, תיקון, מחיקה או התנגדות לשימוש שיווקי. פנו ל-coo@yedalms.io או ל-072-338-5091."],
  },
  {
    title: "עוגיות",
    paragraphs: ["אפשר לחסום עוגיות בהגדרות הדפדפן. חלק מהמדידה והפרסום לא יעבדו בלי עוגיות."],
  },
  {
    title: "קטינים",
    paragraphs: ["האתרים מיועדים לארגונים ומוסדות לימוד, לא לילדים."],
  },
  {
    id: "terms",
    title: "תנאי שימוש",
    paragraphs: ["האתרים האלה מציגים מידע שיווקי על מערכת LMS. אין בהם התחייבות למחיר, לתאריך הקמה או לתוצאה עסקית. השימוש באתר הוא על אחריות המשתמש. הדין החל הוא דין מדינת ישראל, וסמכות השיפוט היא בבתי המשפט בתל אביב."],
  },
  {
    title: "עדכונים",
    paragraphs: ["אם המדיניות תשתנה, נעדכן את העמוד ואת התאריך בראשו."],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section style={{ background: "#000F61", padding: "120px 24px 64px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
              מדיניות פרטיות
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}>
              ידע פיתוח סביבות למידה בע״מ (ח״פ 516072253) · יגאל אלון 123, תל אביב · 072-338-5091 · coo@yedalms.io
              <br />
              עודכן: 14 באוגוסט 2026
            </p>
          </div>
        </section>
        <article style={{ background: "#F6F9FF", padding: "56px 24px 96px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", color: "#2f3552", fontSize: 17, lineHeight: 1.75 }}>
            <p style={{ marginBottom: 28 }}>
              המדיניות הזו חלה על האתרים yedalms.io, yedatech.io, collegelms.co.il ו-orglms.co.il, ועל טפסי יצירת קשר במודעות גוגל שמפנים לאתרים האלה.
            </p>
            {sections.map((section) => (
              <section key={section.title} id={section.id} style={{ marginBottom: 32 }}>
                <h2 style={{ color: "#000F61", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>{section.title}</h2>
                {section.bullets ? (
                  <ul style={{ paddingInlineStart: 22, marginBottom: 12 }}>
                    {section.bullets.map((item) => (
                      <li key={item} style={{ marginBottom: 8 }}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} style={{ marginBottom: 12 }}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
