import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react";

import personalTrainer from "@/assets/certificates/personal-trainer.jpg";
import functionalTraining from "@/assets/certificates/functional-training.jpg";
import fitnessInstructor from "@/assets/certificates/fitness-instructor.jpg";

const certificates = [
  {
    id: 1,
    title: "מאמן אישי",
    image: personalTrainer,
  },
  {
    id: 2,
    title: "אימון פונקציונלי",
    image: functionalTraining,
  },
  {
    id: 3,
    title: "מדריך כושר גופני ובריאות",
    image: fitnessInstructor,
  },
];

const CertificatesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <main className="min-h-screen bg-background section-padding">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              תעודות <span className="text-gradient">והסמכות</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              לשקיפות מלאה — הנה ההסמכות שלי.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-premium">
              {/* Main Image */}
              <div
                className="aspect-[3/4] max-h-[70vh] md:max-h-[600px] rounded-xl overflow-hidden bg-muted flex items-center justify-center cursor-pointer mb-6 mx-auto"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={certificates[currentIndex].image}
                  alt={certificates[currentIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center mb-6">
                {certificates[currentIndex].title}
              </h2>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex
                          ? "bg-primary"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/" className="inline-flex items-center gap-2">
                חזרה לדף הראשי
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={certificates[currentIndex].image}
            alt={certificates[currentIndex].title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </main>
  );
};

export default CertificatesPage;
