import { useState } from "react";
import { Copy, Check, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { useTranslation, Trans } from "react-i18next";

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

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            <Trans i18nKey="contact-title" components={[<span className="gradient-text" />]} />
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto" data-testid="contact-subtitle">
            {t("contact-subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-primary" data-testid="contact-info-title">
                {t("contact-info-title")}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`contact-info-label-${index}`}>
                        {info.label}
                      </h4>
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-text-light hover:text-primary transition-colors"
                        data-testid={`contact-info-link-${index}`}>
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-dark-border">
                <h4 className="font-semibold text-foreground mb-4" data-testid="quick-copy-title">
                  {t("quick-copy-title")}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {contactInfo.map((info, index) => (
                    <Button
                      key={info.label}
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(info.copyValue || info.value, info.label)}
                      className="glass-light hover:bg-primary transition-colors text-sm"
                      data-testid={`copy-btn-${index}`}>
                      {copiedItem === info.label ? <Check className="mr-2 h-3 w-3" /> : <Copy className="mr-2 h-3 w-3" />}
                      {copiedItem === info.label ? t("copy-button-copied") : info.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-primary" data-testid="contact-form-title">
                {t("contact-form-title")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="block text-foreground font-medium mb-2">
                    {t("label-name")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t("placeholder-name")}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-foreground font-medium mb-2">
                    {t("label-email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={t("placeholder-email")}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-foreground font-medium mb-2">
                    {t("label-subject")}
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder={t("placeholder-subject")}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-foreground font-medium mb-2">
                    {t("label-message")}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={5}
                    placeholder={t("placeholder-message")}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
