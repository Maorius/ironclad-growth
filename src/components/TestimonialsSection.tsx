import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ContactFormModal from "@/components/ContactFormModal";

import client1Before1 from "@/assets/client1-before1.jpg";
import client1Before2 from "@/assets/client1-before2.jpg";
import client1After1 from "@/assets/client1-after1.jpg";
import client1After2 from "@/assets/client1-after2.jpg";

type TransformationPair = {
  before: string;
  after: string;
};

type ClientSlide = {
  name: string;
  age: number;
  location: string;
  pairs: [TransformationPair, TransformationPair];
};

const slides: ClientSlide[] = [
  {
    name: "יאיר",
    age: 19,
    location: "צפת",
    pairs: [
      { before: client1Before1, after: client1After1 },
      { before: client1Before2, after: client1After2 },
    ],
  },
];

const ImageLabel = ({ label }: { label: string }) => (
  <span className="absolute top-3 right-3 bg-background/70 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-md border border-border/40 select-none pointer-events-none">
    {label}
  </span>
);

const TransformationImage = ({ src, label }: { src: string; label: string }) => (
  <div className="relative overflow-hidden rounded-xl group">
    <AspectRatio ratio={4 / 5}>
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </AspectRatio>
    <ImageLabel label={label} />
  </div>
);

const TestimonialsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
    },
    [isTransitioning, current],
  );

  const next = () => goTo((current + 1) % total);
  const prev = () => goTo((current - 1 + total) % total);

  useEffect(() => {
    if (!isTransitioning) return;
    const t = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(t);
  }, [isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      // RTL: swipe left = prev, swipe right = next
      if (diff > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            לא עוד דיבורים. <span className="text-gradient">הנה מה שגברים שעשו איתי תהליך אומרים.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">אנשים אמיתיים. מילים שלהם. שינוי אמיתי.</p>
        </div>

        {/* Carousel */}
        <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {/* Slide content */}
          <div key={current} className="animate-fade-in">
            {/* Before/After pairs grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              {slide.pairs.map((pair, i) => (
                <div key={i} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <TransformationImage src={pair.before} label="לפני" />
                    <TransformationImage src={pair.after} label="אחרי" />
                  </div>
                </div>
              ))}
            </div>

            {/* Caption */}
            <p className="text-center text-lg md:text-xl text-muted-foreground mt-8 font-medium">
              {slide.name} , {slide.age} • {slide.location}
            </p>
          </div>

          {/* Navigation */}
          {total > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                aria-label="Previous slide"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-primary/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                aria-label="Next slide"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="text-xl px-8 py-6 font-semibold shadow-glow hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
          >
            לקביעת שיחת אפיון בחינם
          </Button>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default TestimonialsSection;
