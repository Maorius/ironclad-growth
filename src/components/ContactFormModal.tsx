import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/meelrykb";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const closeModal = () => {
    onClose();
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") closeModal();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-border bg-card p-6 md:p-8 shadow-premium animate-in fade-in zoom-in-95 duration-300">
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
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-foreground mb-1.5">
                  שם מלא *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="השם שלך"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-foreground mb-1.5">
                  טלפון *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="050-0000000"
                  dir="rtl"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors text-left"
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-foreground mb-1.5">
                  הערות (אופציונלי)
                </label>
                <textarea
                  id="modal-message"
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
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "שליחה"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
