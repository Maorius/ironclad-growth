import { Check, X } from "lucide-react";

const WhoSection = () => {
  const scrollToFinalCTA = () => {
    const element = document.getElementById("final-cta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const suitable = [
    "רוצה לעשות שינוי אמיתי ומוכן להשקיע בעצמך",
    "מחפש מסגרת ומעקב שיחזיקו אותך במסלול",
    "מבין שזה תהליך לא פתרון קסם של לילה אחד",
    "פתוח לקבל הכוונה ולעבוד לפי תוכנית",
  ];

  const notSuitable = [
    "מחפש פתרונות קסם או תוצאות ללא מאמץ",
    "לא מוכן להתחייב לתהליך של לפחות כמה חודשים",
    "לא פתוח לשנות הרגלים",
    "מחפש רק מישהו שיגיד לך מה לעשות בלי ליווי אמיתי",
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            למי זה מתאים <span className="text-gradient">(ולמי לא)</span>
          </h2>
          <p className="text-xl text-muted-foreground">ב-10 שניות תדע אם זה בשבילך.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Suitable */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-premium border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </span>
              מתאים לך אם...
            </h3>
            <ul className="space-y-4">
              {suitable.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Suitable */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-premium border border-destructive/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </span>
              לא מתאים לך אם...
            </h3>
            <ul className="space-y-4">
              {notSuitable.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={openModal}
            className="text-primary hover:text-primary/80 font-medium transition-colors text-2xl md:text-3xl"
          >
            נשמע מתאים? בוא נתחיל ←
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
