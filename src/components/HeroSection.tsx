import { Button } from "@/components/ui/button";
import heroYonatan from "@/assets/hero-yonatan2.png";
import smokeBg from "@/assets/smoke-bg.png";

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

      <div className="container-premium relative z-10 py-12 md:py-16">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
          {/* TEXT (right on desktop) */}
          <div className="order-2 md:order-1 text-center md:text-right space-y-4 md:space-y-5 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight">
              מרגיש שהגוף שלך <span className="text-gradient">לא משדר</span> את מי שאתה
            </h1>

            <p className="text-lg md:text-2xl lg:text-3xl text-foreground/90 font-medium max-w-2xl mx-auto md:mx-0 md:mr-auto">
              אתה עושה את העבודה — אני דואג שתראה מזה תוצאות.
            </p>

            <div className="flex flex-col items-center md:items-start gap-2.5 pt-1">
              {[
                "לפי הלוז שלך: חדר כושר / בית / פארק",
                "הרגלי תזונה אפקטיביים (לא תפריט קשיח שמבלבל אותך)",
                "מעקב שבועי + וואטסאפ — שתישאר במסלול ותתקדם",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-foreground/95">
                  <span className="text-primary text-xl leading-none mt-0.5">✓</span>
                  <span className="text-base md:text-lg lg:text-xl font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-3">
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

          {/* IMAGE (left on desktop) */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start items-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
              <img
                src={heroYonatan}
                alt="יונתן עם-שלום - מאמן כושר"
                className="relative w-[78%] max-w-md md:w-full md:max-w-lg object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
