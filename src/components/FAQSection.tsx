import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactFormModal from "@/components/ContactFormModal";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=972532257673&text=%D7%94%D7%99%D7%99%20%D7%99%D7%95%D7%A0%D7%AA%D7%9F,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%93%D7%A3%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%A4%D7%99%D7%95%D7%9F%20%D7%91%D7%97%D7%99%D7%A0%D7%9D.%20%20%20";

const faqs = [
  {
    question: "אין לי זמן, זה באמת מתאים?",
    answer: "כן. בונים מינימום אפקטיבי ללוז שלך. המטרה היא עקביות לא להיות מושלם.",
  },
  {
    question: "אני מפחד להיפצע / יש לי כאבים",
    answer: "עובדים לפי מגבלות ומתקדמים בצורה חכמה ובטוחה.",
  },
  {
    question: "אני מתחיל מאפס / לא בכושר זה בעיה?",
    answer: "לא. התהליך לפי נקודת פתיחה. מתחילים חכם ומתקדמים בהדרגה.",
  },
  {
    question: "כבר ניסיתי ולא הצלחתי להתמיד",
    answer: "רוב האנשים נופלים בלי מסגרת. פה יש מעקב ואחריות שמחזיקים אותך במסלול.",
  },
  {
    question: "כמה זמן עד שרואים שינוי?",
    answer: "תלוי נקודת פתיחה. המטרה: התקדמות מדידה שבוע אחרי שבוע.",
  },
  {
    question: "זה אונליין או פרונטלי?",
    answer: "גם וגם: פרונטלי בנתניה / אונליין מכל מקום.",
  },
];

const FAQSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section-padding bg-background">
      <div className="container-premium max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          שאלות <span className="text-gradient">נפוצות</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-card rounded-xl px-6 border-none shadow-premium"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            אם זה נשמע לך מדויק כנראה שזה הזמן לבדוק התאמה.
          </h3>

          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="text-xl px-8 py-6 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
          >
            לקביעת שיחת אפיון בחינם
          </Button>

          <p className="text-2xl md:text-3xl text-muted-foreground">
            יש שאלה שלא עניתי עליה?{" "}
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

export default FAQSection;
