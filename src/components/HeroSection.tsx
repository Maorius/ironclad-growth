import { Button } from "@/components/ui/button";
import heroYonatan from "@/assets/hero-yonatan.jpg";

const HeroSection = () => {
  const scrollToFinalCTA = () => {
    const element = document.getElementById("final-cta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container-premium section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Text Content - Right side in RTL */}
          <div className="order-1 lg:order-1 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              מרגיש שהגוף שלך <span className="text-gradient">לא משדר</span> את מי שאתה?
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              אתה עושה את העבודה — אני דואג שתראה מזה תוצאות.
            </p>

            <div className="space-y-3">
              {[
                "לפי הלוז שלך: חדר כושר / בית / פארק",
                "הרגלי תזונה אפקטיביים (לא תפריט קשיח שמבלבל אותך)",
                "מעקב שבועי + וואטסאפ — שתישאר במסלול ותתקדם",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground/90"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-primary text-lg">✓</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
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

          {/* Image - Left side in RTL */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
              <img
                src={heroYonatan}
                alt="יונתן עם-שלום - מאמן כושר"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-premium object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
