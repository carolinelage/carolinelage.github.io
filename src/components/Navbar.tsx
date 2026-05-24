import { Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "experiencia"];
      let currentSection = "inicio";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith("pt") ? "en" : "pt");
  };

  const navLinks = [
    { id: "inicio", label: t("nav.home") },
    { id: "sobre", label: t("nav.about") },
    { id: "experiencia", label: t("nav.journey") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-folk-sand/50 bg-folk-cream/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <a href="#inicio" className="flex items-center">
          <Logo className="h-10 w-auto text-folk-forest" />
        </a>
        
        <div className="hidden md:flex gap-10 text-[12px] uppercase tracking-widest font-sans">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`transition-all duration-300 ${
                activeSection === link.id 
                  ? "text-folk-brown font-bold" 
                  : "text-folk-forest/80 font-medium hover:text-folk-brown"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-5 items-center text-folk-forest/70">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider text-folk-forest/80 hover:text-folk-brown transition-colors border border-folk-taupe/30 px-3 py-1.5 rounded-md bg-folk-sand/20"
          >
            <Globe size={13} />
            {i18n.language.startsWith("pt") ? "EN" : "PT"}
          </button>

          <a href="https://github.com/carolinelage" target="_blank" rel="noreferrer" className="hover:text-folk-brown transition-colors"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/caroline-slage/" target="_blank" rel="noreferrer" className="hover:text-folk-brown transition-colors"><FaLinkedinIn size={18} /></a>
          <a href="https://thedevelopersversion.substack.com/" target="_blank" rel="noreferrer" className="hover:text-folk-brown transition-colors"><SiSubstack size={18} /></a>
        </div>
      </div>
    </nav>
  );
}
