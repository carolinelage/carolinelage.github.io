import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { experiences } from "../../data/portfolioData";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center md:text-left mb-20"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-folk-taupe font-sans block mb-2">
          {t("experience_section.subtitle")}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-folk-forest">
          {t("experience_section.title")}
        </h2>
      </motion.div>

      <div className="relative border-l border-folk-taupe/40 ml-4 md:ml-6 space-y-16">
        {experiences.map((exp) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* O marcador da linha do tempo com animação melhorada */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4">
              {/* Bolinha pulsante por trás (ping suave) */}
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-folk-taupe group-hover:bg-folk-brown transition-colors duration-500"
              />
              {/* Bolinha principal com efeito spring e hover */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.3 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.3 }}
                className="absolute inset-0 rounded-full bg-folk-cream border-2 border-folk-taupe group-hover:border-folk-brown transition-colors duration-300 shadow-sm z-10 cursor-pointer"
              />
            </div>
            
            <div className="mb-4">
              <span className="text-xs font-mono text-folk-taupe/80 block mb-1">{exp.id}.</span>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-serif font-bold text-folk-forest group-hover:text-folk-brown transition-colors">
                    {t(exp.role)}
                  </h3>
                  <p className="text-sm font-sans text-folk-forest/80">{t(exp.company)}</p>
                </div>
                <span className="text-sm font-medium font-sans italic text-folk-forest/80 bg-folk-sand/50 border border-folk-taupe/30 px-3 py-1 rounded-full self-start md:mt-0.5">
                  {t(exp.period)}
                </span>
              </div>
            </div>

            <p className="text-folk-forest/85 font-sans text-sm md:text-base leading-relaxed mb-6 max-w-3xl whitespace-pre-line">
              {t(exp.description)}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-xs font-sans text-folk-forest/90 bg-folk-sand/40 border border-folk-taupe/40 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}