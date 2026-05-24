import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <footer className="relative w-full bg-folk-forest text-folk-sand font-sans py-20 px-6 flex flex-col justify-center overflow-hidden border-t border-folk-taupe/20">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-folk-taupe/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-folk-brown/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
      >
        <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-bold text-folk-cream tracking-tight leading-[0.85] mb-2">
            {t("footer.title_normal")} <br/><span className="text-folk-taupe font-serif italic font-normal">{t("footer.title_italic")}</span>
          </h2>
          <p className="text-folk-taupe/90 font-sans font-regular text-sm md:text-base max-w-sm mb-6 leading-relaxed">
            {t("footer.description")}
          </p>
          
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="w-11 h-11 rounded-full bg-folk-taupe/10 flex items-center justify-center group-hover:bg-folk-taupe/20 group-hover:scale-110 transition-all duration-300">
                <Mail size={18} className="text-folk-taupe group-hover:text-folk-cream transition-colors" />
              </div>
              <a href="mailto:santos.caroline26@hotmail.com" className="text-sm font-medium text-folk-sand/90 group-hover:text-folk-cream transition-colors">
                santos.caroline26@hotmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 group w-fit">
              <div className="w-11 h-11 rounded-full bg-folk-taupe/10 flex items-center justify-center group-hover:bg-folk-taupe/20 group-hover:scale-110 transition-all duration-300">
                <MapPin size={18} className="text-folk-taupe group-hover:text-folk-cream transition-colors" />
              </div>
              <p className="text-sm font-medium text-folk-sand/90 group-hover:text-folk-cream transition-colors">{t("footer.location")}</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="lg:col-span-4 space-y-5 lg:pl-12 lg:pt-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-folk-taupe font-bold">{t("footer.socials")}</p>
          <div className="flex flex-col gap-5 items-start">
            <a href="https://github.com/carolinelage" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-xl md:text-2xl font-sans font-bold text-folk-cream hover:text-folk-taupe transition-colors">
              <span className="border-b border-folk-taupe/30 pb-1 group-hover:border-folk-taupe transition-colors">Github</span> <ArrowUpRight size={22} className="text-folk-taupe opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/caroline-slage/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-xl md:text-2xl font-sans font-bold text-folk-cream hover:text-folk-taupe transition-colors">
              <span className="border-b border-folk-taupe/30 pb-1 group-hover:border-folk-taupe transition-colors">LinkedIn</span> <ArrowUpRight size={22} className="text-folk-taupe opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
            <a href="https://thedevelopersversion.substack.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-xl md:text-2xl font-sans font-bold text-folk-cream hover:text-folk-taupe transition-colors">
              <span className="border-b border-folk-taupe/30 pb-1 group-hover:border-folk-taupe transition-colors">Substack</span> <ArrowUpRight size={22} className="text-folk-taupe opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col md:items-end lg:items-end justify-between h-full space-y-10 lg:space-y-0 lg:pt-4">
          <div className="text-left md:text-right lg:text-right space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-folk-taupe font-bold">
              {t("footer.developed_by")}
            </p>
            <p className="font-bold text-folk-cream text-base">Caroline Moreira Lage</p>
            <p className="text-xs text-folk-taupe font-serif italic mt-1">
              © {new Date().getFullYear()}
            </p>
          </div>
          <div className="pt-4">
            <a href="#inicio" className="text-[10px] font-bold uppercase tracking-widest text-folk-taupe hover:text-folk-cream transition-colors flex items-center gap-2 pb-1.5 border-b border-folk-taupe/30 hover:border-folk-cream">
              {t("footer.back_to_top")}
            </a>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}