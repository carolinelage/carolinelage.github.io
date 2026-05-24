import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDownToLine } from "lucide-react";
import perfilImg from "../../assets/perfil-carol-lage.png";
import cvPT from "../../assets/docs/Caroline-Lage-Resume-PT.pdf";
import cvEN from "../../assets/docs/Caroline-Lage-Resume.pdf";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const cvFileUrl = i18n.language.startsWith("en") 
    ? cvEN 
    : cvPT;
  const skills = [
    { name: "BACKEND (C# / .NET)", nameKey: "about_section.skills.backend", percentage: "90%" },
    { name: "DESIGN GRÁFICO E UX DESIGN", nameKey: "about_section.skills.design", percentage: "95%" },
    { name: "FRONTEND (ANGULAR /REACT / VUE)", nameKey: "about_section.skills.frontend", percentage: "80%" },
  ];

  return (
    <section id="sobre" className="py-32 px-6 bg-folk-sand/10 border-y border-folk-sand/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-16 items-center">
        
        <div className="md:col-span-5 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-3/4 w-full max-w-sm rounded-4xl bg-folk-sand border border-folk-taupe/20 shadow-sm group"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -top-14 -right-14 w-36 h-36 z-20 pointer-events-none select-none drop-shadow-md"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-folk-brown font-sans font-bold text-[8.5px] tracking-[0.1em]">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text>
                  <textPath href="#circlePath">
                    FULL STACK DEVELOPER • BRAND DESIGNER • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="w-full h-full rounded-4xl overflow-hidden">
              <img 
                src={perfilImg}
                alt="Carol Lage"
                className="w-full h-full object-cover grayscale-15 sepia-10 contrast-95 group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute inset-0 bg-folk-brown/5 rounded-4xl pointer-events-none" />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 space-y-8 text-left"
        >
          <div className="space-y-2">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-folk-taupe block">
              {t("about_section.subtitle")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-folk-forest tracking-tight">
              {t("about_section.title")}
            </h2>
          </div>
          <div className="space-y-4 text-folk-forest/85 font-sans font-regular text-base md:text-lg leading-relaxed tracking-wide">
            <p>{t("about_section.paragraph_1")}</p>
            <p>{t("about_section.paragraph_2")}</p>
          </div>
          <div className="space-y-5 pt-2">
            {skills.map((skill) => (
              <div key={skill.nameKey} className="space-y-2">
                <div className="flex justify-between items-end text-sm md:text-base font-serif font-bold tracking-wider text-folk-forest">
                  <span>{t(skill.nameKey)}</span>
                  <span className="font-sans font-normal text-folk-brown">{skill.percentage}</span>
                </div>
                <div className="h-[2px] w-full bg-folk-sand rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="h-full bg-folk-brown"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <a 
              href={cvFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-folk-forest hover:bg-folk-forest/90 text-folk-cream font-sans font-medium rounded-xl transition-all shadow-sm active:scale-98 group"
            >
              <ArrowDownToLine size={18} className="text-folk-taupe group-hover:text-folk-cream transition-colors" />
              {t("about_section.cv_button")}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}