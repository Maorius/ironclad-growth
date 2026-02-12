import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import smokeBg from "@/assets/smoke-bg.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=972532257673&text=%D7%94%D7%99%D7%99%20%D7%99%D7%95%D7%A0%D7%AA%D7%9F,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%93%D7%A3%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%A4%D7%99%D7%95%D7%9F%20%D7%91%D7%97%D7%99%D7%A0%D7%9D.%20%20%20";

const FinalCTASection = () => {
  return (
    <section
      id="final-cta"
      className="section-padding relative overflow-hidden"
    >
      {/* Smoke background image */}
      <div className="absolute inset-0 bg-background" />
      <img src={smokeBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />

      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            מוכן להפסיק{" "}
            <span className="text-gradient">להישאר תקוע?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground">
            בלי התחייבות • שיחה של 5–10 דק׳
          </p>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="text-2xl px-10 py-7 font-semibold shadow-glow hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                בדיקת התאמה בחינם
              </a>
            </Button>

            <p className="mt-4 text-2xl md:text-3xl text-muted-foreground">
              מענה מהיר בוואטסאפ
            </p>
          </div>

          <p className="text-2xl md:text-3xl text-muted-foreground pt-8">
            יש עוד שאלה?{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              שלח לי הודעה בוואטסאפ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
