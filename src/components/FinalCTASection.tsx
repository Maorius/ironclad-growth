import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import smokeBg from "@/assets/smoke-bg.png";
import ContactFormModal from "@/components/ContactFormModal";

const WHATSAPP_LINK =
  "https://wa.me/972532257673?text=%D7%94%D7%99%D7%99%2C%20%D7%99%D7%A9%20%D7%9C%D7%99%20%D7%A9%D7%90%D7%9C%D7%95%D7%AA%20%D7%91%D7%A0%D7%95%D7%92%D7%A2%20%D7%9C%D7%AA%D7%94%D7%9C%D7%99%D7%9A%20%D7%9C%D7%99%D7%95%D7%95%D7%99";

const FinalCTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="final-cta" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <img src={smokeBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />

      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            מוכן להפסיק <span className="text-gradient">להישאר תקוע?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground">בלי התחייבות • שיחה של 5–10 דק׳</p>

          <div className="pt-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="text-2xl px-10 py-7 font-semibold shadow-glow hover:shadow-primary/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              בדיקת התאמה בחינם
            </Button>

            <p className="mt-4 text-2xl md:text-3xl text-muted-foreground">אם הגעת עד לכאן זה אומר שזה רלוונטי</p>
          </div>

          <p className="text-2xl md:text-3xl text-muted-foreground pt-8">
            יש עוד שאלה?{" "}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              שלח לי הודעה בוואטסאפ
            </a>
          </p>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default FinalCTASection;
