import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-folk-sand/10 pt-20">
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-folk-taupe/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 bg-folk-brown/5 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-5 py-2 mb-8 text-xs font-serif italic tracking-widest text-folk-brown bg-folk-sand/50 border border-folk-taupe/30 rounded-full"
        >
          {t("hero.tagline")}
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-folk-forest font-serif mb-8 leading-[1.15]"
        >
          {t("hero.title_normal")} <br />
          <span className="italic font-normal text-folk-brown block mt-2">
            {t("hero.title_italic")}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-folk-forest/80 mb-12 font-sans font-normal leading-relaxed tracking-wide"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center font-sans"
        >
          <a href="#experiencia" className="px-8 py-3.5 bg-folk-forest hover:bg-folk-forest/90 text-folk-cream font-medium rounded-xl transition-all shadow-sm active:scale-98">
            {t("hero.btn_journey")}
          </a>
          <a href="#sobre" className="px-8 py-3.5 bg-transparent hover:bg-folk-sand/40 text-folk-brown border-2 border-folk-taupe/60 rounded-xl font-medium transition-all backdrop-blur-sm">
            {t("hero.btn_about")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}