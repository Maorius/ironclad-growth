import { Button } from "@/components/ui/button";
import heroYonatan from "@/assets/hero-yonatan.jpg";
import smokeBg from "@/assets/smoke-bg.png";

export default function HeroSection() {
  const scrollToFinalCTA = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <img
        src={smokeBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* TEXT (right in RTL) */}
          <div className="text-right md:order-2">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              מרגיש שהגוף שלך <span className="text-emerald-300">לא משדר</span> את מי שאתה
            </h1>

            <p className="mt-4 text-lg md:text-2xl text-white/80 leading-relaxed max-w-[46ch] mr-auto">
              אתה עושה את העבודה, אני דואג שתראה מזה תוצאות.
            </p>

            <ul className="mt-6 space-y-2 text-base md:text-lg text-white/85">
              <li>✓ לפי הלוז שלך: חדר כושר / בית / פארק</li>
              <li>✓ הרגלי תזונה אפקטיביים (לא תפריט קשיח שמבלבל אותך)</li>
              <li>✓ מעקב שבועי + וואטסאפ, שתישאר במסלול ותתקדם</li>
            </ul>

            <div className="mt-7">
              <Button size="lg" onClick={scrollToFinalCTA} className="h-12 md:h-14 px-7 text-base md:text-lg">
                לקביעת שיחת אפיון בחינם
              </Button>

              <p className="mt-3 text-sm md:text-base text-white/60">
                ללא התחייבות • שיחה של 5–10 דק׳ • נתניה / אונליין
              </p>
            </div>
          </div>

          {/* IMAGE (left) */}
          <div className="flex justify-center md:justify-start md:order-1">
            <img
              src={heroYonatan}
              alt="יונתן עם-שלום"
              className="w-[72%] max-w-[420px] md:w-full md:max-w-[520px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
