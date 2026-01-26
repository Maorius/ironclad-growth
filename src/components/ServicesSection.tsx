import serviceTraining from "@/assets/service-training.jpg";
import serviceNutrition from "@/assets/service-nutrition.jpg";
import serviceTracking from "@/assets/service-tracking.jpg";

const services = [
  {
    title: "תוכנית אימונים",
    description: "מכון / בית / פארק, לפי לוז, רמה ומגבלות. תדע בדיוק מה עושים כבר השבוע.",
    image: serviceTraining,
  },
  {
    title: "ליווי תזונתי",
    description: "לא דיאטה, שיטה. הרגלי תזונה שיקדמו אותך אל המטרה לאורך זמן.",
    image: serviceNutrition,
  },
  {
    title: "מעקב שבועי",
    description: "אחריות שמחזיקה אותך במסלול: זמינות בוואטסאפ + שקילה יומית → מדד שבועי → התאמות",
    image: serviceTracking,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            מפסיקים לנחש.{" "}
            <span className="text-gradient">מתחילים להתקדם.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ליווי שמחזיק אותך בין האימונים עד שרואים שינוי
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-card rounded-2xl overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
