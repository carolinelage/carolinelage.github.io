import Navbar from "./components/Navbar";
import Hero from "./features/hero/Hero";
import AboutSection from "./features/about/AboutSection";
import ExperienceSection from "./features/experience/ExperienceSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-folk-cream text-folk-forest selection:bg-folk-taupe/20 antialiased min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;