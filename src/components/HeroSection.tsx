import { Button } from "@/components/ui/button";
import heroYonatan from "@/assets/hero-yonatan2.png";

const HeroSection = () => {
  const scrollToFinalCTA = () => {
    const element = document.getElementById("final-cta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden min-h-[82vh] md:min-h-[85vh] flex flex-col">
      {/* Vibrant green smoke background */}
      <div className="absolute inset-0 bg-[hsl(195,45%,6%)]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[hsl(150,60%,20%)] rounded-full blur-[180px] opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[hsl(160,50%,15%)] rounded-full blur-[150px] opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[hsl(170,55%,25%)] rounded-full blur-[200px] opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[hsl(140,40%,18%)] rounded-full blur-[120px] opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[hsl(165,45%,12%)] rounded-full blur-[200px] opacity-25" />
      </div>

      {/* IMPORTANT: removed justify-between, using controlled gap */}
      <div className="container-premium relative z-10 pt-6 md:pt-8 pb-0 flex flex-col flex-1">
        {/* Headings */}
        <div className="text-center space-y-4 md:space-y-5 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            מרגיש שהגוף שלך <span className="text-gradient">לא משדר</span> את מי שאתה
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
            אתה עושה את העבודה — אני דואג שתראה מזה תוצאות.
          </p>

          <div className="flex flex-col items-center gap-2 md:gap-3">
            {[
              "לפי הלוז שלך: חדר כושר / בית / פארק",
              "הרגלי תזונה אפקטיביים (לא תפריט קשיח שמבלבל אותך)",
              "מעקב שבועי + וואטסאפ — שתישאר במסלול ותתקדם",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground/90">
                <span className="text-primary text-lg">✓</span>
                <span className="text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-3">
            <Button
              onClick={scrollToFinalCTA}
              size="lg"
              className="text-lg px-8 py-6 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              לקביעת שיחת אפיון בחינם
            </Button>

            <p className="text-sm text-muted-foreground">ללא התחייבות • שיחה של 5–10 דק׳ • נתניה / אונליין</p>
          </div>
        </div>

        {/* Image — closer to headings + still sits on the "floor" */}
        <div className="-mt-8 md:-mt-12 lg:-mt-16 flex justify-center md:justify-end items-end animate-scale-in">
          <div className="relative self-end">
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
