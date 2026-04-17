import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bioYonatan from "@/assets/hero-yonatan2.png";
import { ArrowLeft, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";
import { cn } from "@/lib/utils";

const credentialBullets = [
  "8 שנות ניסיון • נתניה / אונליין",
  "הסמכות: אימון פונקציונלי",
  "מדריך כושר גופני ובריאות • מאמן אישי",
];

const BioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    /*
     * NO overflow-hidden — it would break the portrait mask and ring glow.
     * Portrait bottom-fade is handled entirely via maskImage.
     */
    <section
      ref={sectionRef}
      className="relative bg-background pt-10 md:pt-14 pb-20 md:pb-28 lg:pb-36 px-5 md:px-8 lg:px-16"
    >
      <div className="container mx-auto max-w-5xl">
        {/* ══════════════════════════════════════
            1. SECTION TITLE
        ══════════════════════════════════════ */}
        <div
          className={cn(
            "text-center mb-20 md:mb-28 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">נעים להכיר</span>
          </h2>
        </div>

        {/* ══════════════════════════════════════
            2. PORTRAIT CIRCLE — emerging from ring
            Layer order (back → front):
              z-0  ambient glow bloom (circle-sized, bottom-anchored)
              z-10 portrait image (bottom-anchored, rises freely above ring)
              z-20 ring border + inner shadow (overlaps portrait at intersection)
        ══════════════════════════════════════ */}
        <div
          className={cn(
            "flex justify-center mb-14 md:mb-20 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          {/* Wrapper is intentionally taller than the circle so the portrait
              head has room to emerge above the ring boundary */}
          <div className="relative w-72 md:w-[22rem] lg:w-[26rem] h-[380px] md:h-[440px] lg:h-[520px]">
            {/* z-0 – glow bloom, sized and anchored to match the circle */}
            <div className="absolute bottom-0 inset-x-0 h-72 md:h-[22rem] lg:h-[26rem] rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl scale-125 z-0 pointer-events-none" />

            {/* z-10 – portrait, anchored to bottom, free to ascend */}
            <img
              src={bioYonatan}
              alt="יונתן עם-שלום"
              className={cn(
                "absolute bottom-0 w-full h-auto object-contain z-10",
                isVisible ? "opacity-100" : "opacity-0",
              )}
              style={{
                left: "50%",
                transform: isVisible ? "translateX(-50%) translateY(0px)" : "translateX(-50%) translateY(20px)",
                transition: "opacity 1000ms 300ms, transform 1000ms 300ms",
                maskImage: "linear-gradient(to top, transparent 0%, black 10%, black 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 10%, black 100%)",
              }}
            />

            {/* z-5 – ring TOP half: behind portrait so head emerges in front */}
            <div
              className="absolute bottom-0 inset-x-0 h-72 md:h-[22rem] lg:h-[26rem] z-[5] pointer-events-none"
              style={{ clipPath: "inset(0 0 5% 0)" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-[0_0_60px_hsl(var(--primary),0.10)]" />
            </div>

            {/* z-20 – ring BOTTOM half: in front of portrait for depth effect */}
            <div
              className="absolute bottom-0 inset-x-0 h-72 md:h-[22rem] lg:h-[26rem] z-20 pointer-events-none"
              style={{ clipPath: "inset(95% 0 0 0)" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-[0_0_60px_hsl(var(--primary),0.10)]" />
              <div className="absolute inset-0 rounded-full shadow-[inset_0_-40px_60px_rgba(0,0,0,0.55)]" />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            3. BIO CONTENT
        ══════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto">
          {/* Name intro */}
          <div
            className={cn(
              "text-center md:text-right mb-8 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <p className="text-foreground text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              שמי יונתן עם-שלום, נעים מאוד.
            </p>
          </div>

          {/* Body paragraphs — Matan-style mixed muted/foreground weights */}
          <div
            className={cn(
              "text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed space-y-5 mb-10 transition-all duration-700 delay-[400ms]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <p>
              <span className="text-foreground font-semibold">פעם הייתי נער שחיף עם כרס.</span> חלש וחסר ביטחון, עד
              שפחדתי להוריד חולצה ליד אנשים.
            </p>
            <p>
              החלטתי לשנות ונכנסתי לעולם הכושר —{" "}
              <span className="text-foreground font-semibold">
                נשאבתי לקליסטניקס, והתאהבתי בשיטה שמביאה שליטה אמיתית בגוף.
              </span>
            </p>
            <p>
              בצבא כלוחם למדתי מה זה חוסן. ואז נפצעתי, ושם הבנתי דבר פשוט:{" "}
              <span className="text-foreground font-semibold">
                כדי להתקדם לא צריך להתאמן יותר — צריך להתאמן נכון, חכם, ובקצב שאפשר להתמיד בו.
              </span>
            </p>
            <p>
              היום אני מלווה גברים לחיטוב ולביטחון בגוף שלהם, באמצעות שיטה ייחודית שפיתחתי כך שתעבוד גם כשאין חשק —{" "}
              ותייצר התקדמות עקבית לאורך זמן.
            </p>
          </div>

          {/* Closing statement */}
          <div
            className={cn(
              "text-center mb-10 md:mb-14 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <p className="text-foreground text-lg md:text-2xl lg:text-3xl font-bold leading-snug max-w-2xl mx-auto">
              המטרה שלי פשוטה: <span className="text-primary">להביא אותך לפוטנציאל שלך מבלי לוותר על איכות חיים.</span>
            </p>
          </div>

          {/* Credentials strip */}
          <div
            className={cn(
              "flex flex-col gap-3 py-6 border-y border-border mb-10 transition-all duration-700 delay-[550ms]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            {credentialBullets.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 items-center justify-center transition-all duration-700 delay-[650ms]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="text-xl px-10 py-7 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              אני רוצה להתחיל שינוי
            </Button>

            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group text-lg"
            >
              לצפייה בתעודות
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default BioSection;
