import goalWeightLoss from "@/assets/goal-weight-loss.jpg";
import goalToning from "@/assets/goal-toning.jpg";
import goalCalisthenics from "@/assets/goal-calisthenics.jpg";

const goals = [
  { title: "ירידה במשקל", image: goalWeightLoss },
  { title: "חיטוב", image: goalToning },
  { title: "קליסטניקס", image: goalCalisthenics },
];

const GoalsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          מה <span className="text-gradient">המטרה</span> שלך?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={goal.image}
                alt={goal.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {goal.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
