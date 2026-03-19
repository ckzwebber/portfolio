import { Github, Linkedin, Globe, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { useScrambleText } from "@/hooks/use-scramble-text";
import { personalInfo } from "@/lib/constants";
import profileImage from "../assets/Perfil.jpg";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const typingText = useTypingAnimation(["Backend Developer", "Node.js & NestJS Specialist", "TypeScript Enthusiast", "CS Student at UNESC"]);
  const heroName = `${personalInfo.name.split(" ")[0]} ${personalInfo.name.split(" ")[1]}`;
  const { display: scrambledName, isComplete: scrambleComplete } = useScrambleText(heroName, 1150);
  const { t } = useTranslation();

  const handleSmoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="section-shell min-h-screen flex items-center justify-center pt-20 md:pt-28">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.13,
                delayChildren: 0.24,
              },
            },
          }}
          className="grid lg:grid-cols-[1.06fr_0.94fr] gap-6 md:gap-8 lg:gap-14 items-end">
          <motion.div variants={{ hidden: { opacity: 0, y: 45 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="panel reveal active" data-reveal="lift">
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-text-light mb-3">{t("welcome")}</p>

            <h1 className="text-[clamp(2.3rem,8vw,6.5rem)] leading-[0.88] mb-5 glitch-hover relative inline-block max-w-full" data-text={heroName} data-testid="hero-title">
              <span className="invisible">{heroName}</span>
              <span className="gradient-text absolute inset-0">{scrambleComplete ? heroName : scrambledName}</span>
            </h1>

            <div className="text-lg md:text-2xl text-text-light mb-8 min-h-[2rem] font-mono" data-testid="typing-animation">
              <span className="typing-cursor">{typingText}</span>
            </div>

            <p className="text-base md:text-lg text-text-light mb-9 md:mb-10 max-w-2xl leading-relaxed text-balance" data-testid="hero-description">
              {t("hero-description")} <strong className="text-primary">Node.js</strong>,<strong className="text-primary"> TypeScript</strong> {t("hero-description-after")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center">
              <Button
                onClick={() => handleSmoothScroll("#projects")}
                data-magnetic="true"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-none transition-colors animate-glow"
                data-testid="view-projects-btn">
                <Code className="mr-2 h-4 w-4" />
                {t("see-projects")}
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSmoothScroll("#contact")}
                data-magnetic="true"
                className="inline-flex items-center justify-center px-8 py-3 glass-light hover:bg-primary/30 hover:text-white font-semibold rounded-none transition-colors"
                data-testid="contact-btn">
                <Mail className="mr-2 h-4 w-4" />
                {t("contact-me")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 55, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            transition={{ duration: 1.04, ease: [0.16, 1, 0.3, 1] }}
            className="panel reveal active"
            data-reveal="zoom">
            <div className="relative">
              <div className="absolute -inset-1 border border-primary/50" />
              <img src={profileImage} alt="Carlos Miguel Webber professional headshot" className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover" data-testid="profile-image" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs md:text-sm font-mono uppercase tracking-widest text-white/75">
                <span>{personalInfo.title}</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex justify-between mt-6 border-t border-border pt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" data-magnetic="true" className="text-text-light hover:text-primary transition-colors" data-testid="github-link">
                <Github className="h-6 w-6" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" data-magnetic="true" className="text-text-light hover:text-primary transition-colors" data-testid="linkedin-link">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" data-magnetic="true" className="text-text-light hover:text-primary transition-colors" data-testid="portfolio-link">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
