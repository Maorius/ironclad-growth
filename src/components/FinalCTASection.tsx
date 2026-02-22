import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, CheckCircle, Loader2 } from "lucide-react";
import smokeBg from "@/assets/smoke-bg.png";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=972532257673&text=%D7%94%D7%99%D7%99%20%D7%99%D7%95%D7%A0%D7%AA%D7%9F,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%93%D7%A3%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%A4%D7%99%D7%95%D7%9F%20%D7%91%D7%97%D7%99%D7%A0%D7%9D.%20%20%20";

const FORMSPREE_URL = "https://formspree.io/f/XXXXXXXX";

const FinalCTASection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const openModal = () => {
    setIsOpen(true);
    setIsSuccess(false);
    setErrors({});
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setName("");
      setPhone("");
      setMessage("");
      setIsSuccess(false);
      setErrors({});
    }, 300);
  };

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = "שדה חובה";
    if (!phone.trim()) newErrors.phone = "שדה חובה";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), message: message.trim() }),
      });
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch {
      // silent fail
    } finally {
      setIsSubmitting(false);
    }
  };

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
              onClick={openModal}
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

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          onKeyDown={(e) => { if (e.key === "Escape") closeModal(); }}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200" />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card p-6 md:p-8 shadow-premium animate-in fade-in zoom-in-95 duration-300">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="סגור"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center space-y-4 py-8 animate-in fade-in duration-300">
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">הפרטים נשלחו בהצלחה!</h3>
                <p className="text-muted-foreground text-lg">אחזור אליך בהקדם 💪</p>
                <Button onClick={closeModal} variant="outline" className="mt-4">
                  סגור
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground text-center mb-2">בדיקת התאמה בחינם</h3>
                <p className="text-muted-foreground text-center mb-6">השאר פרטים ואחזור אליך תוך 24 שעות</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="cta-name" className="block text-sm font-medium text-foreground mb-1.5">
                      שם מלא *
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="השם שלך"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="cta-phone" className="block text-sm font-medium text-foreground mb-1.5">
                      טלפון *
                    </label>
                    <input
                      id="cta-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="050-0000000"
                      dir="ltr"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors text-left"
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="cta-message" className="block text-sm font-medium text-foreground mb-1.5">
                      הערות (אופציונלי)
                    </label>
                    <textarea
                      id="cta-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="ספר לי קצת על עצמך..."
                      rows={3}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-lg py-6 font-semibold shadow-glow hover:shadow-primary/50 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "שליחה"
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FinalCTASection;
