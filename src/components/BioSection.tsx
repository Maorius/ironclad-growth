import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bioYonatan from "@/assets/bio-yonatan.png";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=972532257673&text=%D7%94%D7%99%D7%99%20%D7%99%D7%95%D7%A0%D7%AA%D7%9F,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%93%D7%A3%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%A4%D7%99%D7%95%D7%9F%20%D7%91%D7%97%D7%99%D7%A0%D7%9D.%20%20%20";

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
      { threshold: 0.2 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-background pb-0">
      <div className="container-premium">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          המאמן <span className="text-gradient">שילווה אותך</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          {/* Image - pops up from below */}
          <div
            ref={imageRef}
            className={`order-2 lg:order-2 flex justify-center items-end transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}
          >
            <img
              src={bioYonatan}
              alt="יונתן עם-שלום"
              className="w-full max-w-lg object-cover"
              style={{ marginBottom: '-1px' }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-1 space-y-4 pb-12 lg:-mt-4">
            <div className="text-lg leading-relaxed text-foreground/90 space-y-4">
              <p>
                <span className="text-2xl font-semibold text-foreground">שמי יונתן עם-שלום</span>, נעים מאוד.
              </p>
              <p>
                הייתי פעם נער שחיף עם כרס, חלש וחסר ביטחון — עד שפחדתי להוריד חולצה ליד אנשים.
              </p>
              <p>
                התחלתי להתאמן, חקרתי את התחום לעומק, התאהבתי בקליסטניקס, עברתי גם כושר קרבי, למדתי המון על אימון נכון ושיקום, והיום אני מלווה גברים בתהליך מסודר כדי לחסוך להם את הטעויות שאני עשיתי בדרך.
              </p>
              <p className="text-xl font-medium text-foreground">
                המטרה: גוף חזק וביטחון — בלי קסמים ובלי קיצורי דרך.
              </p>
            </div>

            <div className="space-y-2 py-4 border-y border-border">
              <p className="text-muted-foreground">
                <span className="text-primary">•</span> 8 שנות ניסיון • נתניה / אונליין • הסמכות: אימון פונקציונלי
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">•</span> מדריך כושר גופני ובריאות • מאמן אישי
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  לקביעת שיחת אפיון בחינם
                </a>
              </Button>

              <Link
                to="/certificates"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
              >
                לצפייה בתעודות
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
