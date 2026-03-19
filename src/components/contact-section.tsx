import { useState } from "react";
import { Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { useTranslation, Trans } from "react-i18next";
import SectionHeading from "@/components/section-heading";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      toast({
        title: t("copy-success-title"),
        description: t("copy-success-description", { label }),
      });
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast({
        title: t("copy-error-title"),
        description: t("copy-error-description"),
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: t("required-fields-title"),
        description: t("required-fields-description"),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Carlos Miguel",
        time: new Date().toISOString(),
      };

      await emailjs.send(emailServiceId, emailTemplateId, templateParams, emailPublicKey);

      toast({
        title: t("submit-success-title"),
        description: t("submit-success-description"),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: t("submit-error-title"),
        description: t("submit-error-description"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const completedFields = [formData.name, formData.email, formData.subject, formData.message].filter((value) => value.trim().length > 0).length;
  const completion = Math.round((completedFields / 4) * 100);
  const subjectLength = formData.subject.trim().length;
  const messageLength = formData.message.trim().length;

  return (
    <section id="contact" className="section-shell">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="04" title={<Trans i18nKey="contact-title" components={[<span className="gradient-text" />]} />} subtitle={t("contact-subtitle")} />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <div className="panel reveal" data-reveal="slice">
            <h3 className="text-2xl md:text-4xl mb-8 text-primary" data-testid="contact-info-title">
              {t("contact-info-title")}
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="flex items-center space-x-4 border border-border bg-secondary p-4"
                  data-testid={`contact-info-${index}`}>
                  <div className="w-11 h-11 border border-primary/40 bg-primary/20 flex items-center justify-center">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid={`contact-info-label-${index}`}>
                      {info.label}
                    </h4>
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? (info.label === "GitHub" || info.label === "LinkedIn" ? "me noopener noreferrer" : "noopener noreferrer") : undefined}
                      className="text-text-light hover:text-primary transition-colors"
                      data-testid={`contact-info-link-${index}`}>
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-dark-border">
              <h4 className="font-semibold text-foreground mb-4" data-testid="quick-copy-title">
                {t("quick-copy-title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {contactInfo.map((info, index) => (
                  <Button
                    key={info.label}
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(info.copyValue || info.value, info.label)}
                    className="rounded-none border-border bg-secondary hover:bg-primary/35 text-sm"
                    data-testid={`copy-btn-${index}`}>
                    {copiedItem === info.label ? <Check className="mr-2 h-3 w-3" /> : <Copy className="mr-2 h-3 w-3" />}
                    {copiedItem === info.label ? t("copy-button-copied") : info.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="panel reveal flex flex-col" data-reveal="zoom">
            <h3 className="text-2xl md:text-4xl mb-8 text-primary" data-testid="contact-form-title">
              {t("contact-form-title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
              <motion.div whileFocus={{ scale: 1.005 }}>
                <Label htmlFor="name" className="block text-foreground font-mono uppercase tracking-wider text-xs mb-2">
                  {t("label-name")}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder={t("placeholder-name")}
                  className="w-full bg-input border border-border rounded-none text-foreground focus-visible:ring-primary"
                  required
                  data-testid="input-name"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.005 }}>
                <Label htmlFor="email" className="block text-foreground font-mono uppercase tracking-wider text-xs mb-2">
                  {t("label-email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={t("placeholder-email")}
                  className="w-full bg-input border border-border rounded-none text-foreground focus-visible:ring-primary"
                  required
                  data-testid="input-email"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.005 }}>
                <Label htmlFor="subject" className="block text-foreground font-mono uppercase tracking-wider text-xs mb-2">
                  {t("label-subject")}
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder={t("placeholder-subject")}
                  className="w-full bg-input border border-border rounded-none text-foreground focus-visible:ring-primary"
                  required
                  data-testid="input-subject"
                />
              </motion.div>

              <div>
                <Label htmlFor="message" className="block text-foreground font-mono uppercase tracking-wider text-xs mb-2">
                  {t("label-message")}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={5}
                  placeholder={t("placeholder-message")}
                  className="w-full bg-input border border-border rounded-none text-foreground focus-visible:ring-primary resize-none"
                  required
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                data-magnetic="true"
                className="w-full px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-none transition-colors animate-glow"
                data-testid="submit-btn">
                {isLoading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {t("submit-sending")}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t("submit-send")}
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-5 border-t border-border space-y-3">
              <div className="border border-border bg-secondary/35 p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-text-light">{t("submit-send")}</p>
                  <p className="text-xs font-mono text-primary">{completion}%</p>
                </div>
                <div className="h-1.5 bg-background border border-border">
                  <motion.div className="h-full bg-primary" animate={{ width: `${completion}%` }} transition={{ type: "spring", stiffness: 180, damping: 20 }} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                <div className="border border-border bg-secondary/35 p-3">
                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-text-light mb-2">{t("label-subject")}</p>
                  <p className="text-xl leading-none text-primary">{subjectLength}</p>
                </div>
                <div className="border border-border bg-secondary/35 p-3">
                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-text-light mb-2">{t("label-message")}</p>
                  <p className="text-xl leading-none text-primary">{messageLength}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
