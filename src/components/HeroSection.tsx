import { Button } from "@/components/ui/button";
import heroYonatan from "@/assets/hero-yonatan2.png";
import smokeBg from "@/assets/smoke-bg.png";

const bullets = [
  "לפי הלוז שלך: חדר כושר / בית / פארק",
  "הרגלי תזונה אפקטיביים (לא תפריט קשיח שמבלבל אותך)",
  "מעקב שבועי + וואטסאפ שתישאר במסלול ותתקדם",
];

const HeroSection = () => {
  const scrollToFinalCTA = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <img src={smokeBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-black/30" />

      {/* התיקון הקודם: pt-12 pb-0 כדי שהתמונה תשב על הרצפה */}
      <div className="container-premium relative z-10 pt-12 md:pt-16 pb-0">
        <div className="grid items-end gap-10 md:gap-12 md:grid-cols-2">
          {/* IMAGE (left on desktop) */}
          <div className="order-2 md:order-1 self-end flex justify-center md:justify-start animate-scale-in">
            <div className="relative w-full h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
              <div className="absolute -inset-6 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
              <img
                src={heroYonatan}
                alt="יונתן עם-שלום - מאמן כושר"
                className="absolute bottom-0 left-0 right-0 mx-auto md:mx-0 md:right-auto w-[82%] max-w-md md:w-full md:max-w-lg object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* TEXT (right on desktop) */}
          {/* התיקון הקודם: הוספת pb-12 md:pb-16 לטקסט */}
          <div className="order-1 md:order-2 text-center md:text-right space-y-4 md:space-y-5 animate-fade-in pb-12 md:pb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight">
              מרגיש שהגוף שלך <span className="text-gradient">לא משדר</span> את מי שאתה
            </h1>

            <p className="text-lg md:text-2xl lg:text-3xl text-foreground/90 font-medium max-w-[38ch] mx-auto md:ml-auto">
              אתה עושה את העבודה אני דואג שתראה מזה תוצאות.
            </p>

            {/* RTL bullets */}
            <ul className="space-y-2.5 pt-1 text-base md:text-lg lg:text-xl font-medium text-foreground/95 max-w-[48ch] mx-auto md:ml-auto">
              {bullets.map((item, i) => (
                <li key={i} className="relative pr-7 text-right leading-relaxed">
                  <span className="absolute right-0 top-1 text-primary text-xl leading-none">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA aligned right on desktop */}
            {/* FIX: שיניתי כאן את ה-DIV העוטף של הכפתור */}
            {/* 1. הוספתי max-w-[48ch] mx-auto md:ml-auto כדי שיתיישר בדיוק כמו הבולטים למעלה */}
            {/* 2. שיניתי ל-items-start (במקום items-end) שב-RTL זה אומר ימין */}
            <div className="pt-3 flex flex-col items-center md:items-start gap-3 w-full max-w-[48ch] mx-auto md:ml-auto">
              <Button
                onClick={scrollToFinalCTA}
                size="lg"
                className="text-lg md:text-xl px-9 py-7 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.03]"
              >
                לקביעת שיחת אפיון בחינם
              </Button>

              <p className="text-sm md:text-base lg:text-lg text-foreground/70">
                ללא התחייבות • שיחה של 5–10 דק׳ • נתניה / אונליין
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
