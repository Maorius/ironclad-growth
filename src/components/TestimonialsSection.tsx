import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=972532257673&text=%D7%94%D7%99%D7%99%20%D7%99%D7%95%D7%A0%D7%AA%D7%9F,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%93%D7%A3%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%A4%D7%99%D7%95%D7%9F%20%D7%91%D7%97%D7%99%D7%A0%D7%9D.%20%20%20";

const testimonials = [
  {
    quote: "סוף סוף היה לי סדר. לא נפלתי אחרי שבועיים.",
    name: "דניאל",
    location: "אונליין",
  },
  {
    quote: "ראיתי שינוי כבר אחרי חודש. הגישה של יונתן פשוט עובדת.",
    name: "אורי",
    location: "נתניה",
  },
  {
    quote: "לראשונה מישהו התאים לי תוכנית שאני באמת מצליח לעמוד בה.",
    name: "תומר",
    location: "אונליין",
  },
  {
    quote: "המעקב השבועי זה מה שעשה את ההבדל. יש מישהו שאכפת לו.",
    name: "גיא",
    location: "נתניה",
  },
  {
    quote: "עברתי כמה מאמנים לפני — זו הפעם הראשונה שהרגשתי ליווי אמיתי.",
    name: "עידן",
    location: "אונליין",
  },
  {
    quote: "התחלתי מאפס ותוך 3 חודשים הרגשתי אחרת לגמרי.",
    name: "רועי",
    location: "נתניה",
  },
];

const ITEMS_PER_SLIDE = 3;
const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const currentTestimonials = testimonials.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            לא עוד דיבורים.{" "}
            <span className="text-gradient">הנה מה שגברים שעשו איתי תהליך אומרים.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            אנשים אמיתיים. מילים שלהם. שינוי אמיתי.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative">
          {/* Navigation arrows */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentSlide ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-500">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="bg-gradient-card rounded-2xl p-6 lg:p-8 shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              >
                <div className="text-5xl text-primary/40 font-serif leading-none mb-4">
                  "
                </div>
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="text-muted-foreground">
                  <span className="font-semibold text-foreground">— {testimonial.name}</span>
                  <span className="mx-2">•</span>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              לקביעת שיחת אפיון בחינם
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
