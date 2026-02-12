import { Button } from "@/components/ui/button";
import heroYonatan from "@/assets/hero-yonatan2.png";
import smokeBg from "@/assets/smoke-bg.png";

const HeroSection = () => {
  const scrollToFinalCTA = () => {
    const element = document.getElementById("final-cta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden min-h-[78vh] md:min-h-[80vh] flex flex-col">
      {/* Smoke background image */}
      <div className="absolute inset-0 bg-background" />
      <img src={smokeBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      {/* subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="container-premium relative z-10 pt-6 md:pt-8 pb-0 flex flex-col flex-1">
        {/* Headings */}
        <div className="text-center space-y-4 md:space-y-5 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight">
            מרגיש שהגוף שלך <span className="text-gradient">לא משדר</span> את מי שאתה
          </h1>

          <p className="text-xl md:text-3xl text-foreground/90 font-medium max-w-2xl mx-auto">
            אתה עושה את העבודה — אני דואג שתראה מזה תוצאות.
          </p>

          <div className="flex flex-col items-center gap-3 md:gap-3.5 pt-1">
            {[
              "לפי הלוז שלך: חדר כושר / בית / פארק",
              "הרגלי תזונה אפקטיביים (לא תפריט קשיח שמבלבל אותך)",
              "מעקב שבועי + וואטסאפ — שתישאר במסלול ותתקדם",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground/95">
                <span className="text-primary text-xl">✓</span>
                <span className="text-lg md:text-xl font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-3">
            <Button
              onClick={scrollToFinalCTA}
              size="lg"
              className="text-xl px-10 py-7 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              לקביעת שיחת אפיון בחינם
            </Button>

            <p className="text-base md:text-lg text-foreground/70">ללא התחייבות • שיחה של 5–10 דק׳ • נתניה / אונליין</p>
          </div>
        </div>

        {/* Image — slightly shifted on desktop to give text more “space” */}
        <div className="-mt-8 md:-mt-12 lg:-mt-16 flex justify-center md:justify-end items-end animate-scale-in">
          <div className="relative self-end md:translate-x-6 lg:translate-x-10">
            <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
            <img
              src={heroYonatan}
              alt="יונתן עם-שלום - מאמן כושר"
              className="relative w-full max-w-md lg:max-w-lg object-contain scale-105 animate-[slideUp_0.8s_ease-out_forwards] -mb-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
