import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bioYonatan from "@/assets/bio-yonatan.jpg";
import { ArrowLeft } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=972532257673&text=%D7%94%D7%99%D7%99%20%D7%99%D7%95%D7%A0%D7%AA%D7%9F,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%93%D7%A3%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%A4%D7%99%D7%95%D7%9F%20%D7%91%D7%97%D7%99%D7%A0%D7%9D.%20%20%20";

const BioSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          המאמן <span className="text-gradient">שילווה אותך</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Left in RTL */}
          <div className="order-2 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
              <img
                src={bioYonatan}
                alt="יונתן עם-שלום"
                className="relative w-full max-w-lg rounded-2xl shadow-premium object-cover"
              />
            </div>
          </div>

          {/* Content - Right in RTL */}
          <div className="order-1 lg:order-1 space-y-6">
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
