import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bioYonatan from "@/assets/bio-yonatan.png";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const BioSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-background pt-10 md:pt-14 pb-0">
      <div className="container-premium">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 md:mb-12">
          המאמן <span className="text-gradient">שילווה אותך</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Image */}
          <div
            ref={imageRef}
            className={`order-2 lg:order-2 flex justify-center lg:justify-start items-end transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <img
              src={bioYonatan}
              alt="יונתן עם-שלום"
              className="w-full max-w-xl lg:max-w-2xl max-h-[62vh] object-contain self-end -mb-1"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-1 space-y-6 lg:pt-2">
            <div className="text-xl md:text-2xl leading-relaxed text-foreground/90 space-y-4">
              <p>
                <span className="text-3xl md:text-4xl font-semibold text-foreground">
                  שמי יונתן עם-שלום , נעים מאוד.
                </span>
              </p>

              <p>
                <span className="text-foreground font-semibold">פעם הייתי נער שחיף עם כרס. חלש וחסר ביטחון, </span>
                <span className="text-foreground font-semibold">עד שפחדתי להוריד חולצה ליד אנשים. </span>
                <span className="text-foreground font-semibold">החלטתי לשנות ונכנסתי לעולם הכושר, </span>
                <span className="text-foreground font-semibold">
                  {" "}
                  נשאבתי לקליסטניקס, והתאהבתי בשיטה שמביאה שליטה אמיתית בגוף.{" "}
                </span>
                <span className="text-foreground font-semibold">בצבא כלוחם למדתי מה זה חוסן. ואז נפצעתי, </span>
                <span className="text-foreground font-semibold">
                  ושם הבנתי דבר פשוט! שכדי להתקדם לא צריך להתאמן יותר, צריך להתאמן נכון, חכם, ובקצב שאפשר להתמיד
                  בו.{" "}
                </span>

                <span className="text-foreground font-semibold">
                  היום אני מלווה גברים לחיטוב ולביטחון בגוף שלהם, באמצעות שיטה ייחודית שפיתחתי כך שתעבוד גם כשאין
                  חשק.{" "}
                </span>

                <span className="text-foreground font-semibold">ותייצר התקדמות עקבית לאורך זמן. </span>
              </p>

              <p className="text-2xl md:text-3xl font-semibold text-foreground">
                המטרה שלי פשוטה: להביא אותך לפוטנציאל שלך מבלי לוותר על איכות חיים.
              </p>
            </div>

            <div className="space-y-2 py-4 border-y border-border">
              <p className="text-lg md:text-xl text-foreground/75">
                <span className="text-primary">•</span> 8 שנות ניסיון • נתניה / אונליין • הסמכות: אימון פונקציונלי
              </p>
              <p className="text-lg md:text-xl text-foreground/75">
                <span className="text-primary">•</span> מדריך כושר גופני ובריאות • מאמן אישי
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="text-xl px-10 py-7 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                לקביעת שיחת אפיון בחינם
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
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default BioSection;
