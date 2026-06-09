import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clinic from "./components/Clinic";
import Assessment from "./components/Assessment";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageSquare, Phone, ArrowUp, Sparkles, Star } from "lucide-react";
import { DR_INFO } from "./data";

export default function App() {
  const [showFloatingBt, setShowFloatingBt] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingBt(true);
      } else {
        setShowFloatingBt(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Show a small beautiful toast after 3 seconds to guide the patient
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-gray-50 text-brand-gray-800 flex flex-col relative selection:bg-brand-green/20 selection:text-brand-gray-950">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Home Hero Section */}
        <Hero />

        {/* Clinic Services Section */}
        <Clinic />

        {/* Assessment Quiz Section */}
        <Assessment />

        {/* About Doctor Profile Section */}
        <About />

        {/* Contact info & Map location section */}
        <Contact />
      </main>

      {/* Footer credits and CFM rules legal disclosure */}
      <Footer />

      {/* Small medical support toast at the bottom left */}
      {showToast && (
        <div
          id="appointment-toast"
          className="fixed bottom-6 left-6 z-50 max-w-xs bg-brand-gray-950 text-white rounded-2xl p-4 shadow-xl border border-brand-gray-800 animate-slideUp flex gap-3.5 items-start"
        >
          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center shrink-0">
            <Sparkles className="w-4.5 h-4.5 text-brand-gray-950 animate-pulse" />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold font-display tracking-tight text-white flex items-center gap-1.5">
              Agenda Aberta!
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-green" />
            </h4>
            <p className="text-[11px] text-brand-gray-300 leading-normal font-light">
              Restam poucas vagas para atendimento presencial este mês em Sorocaba.
            </p>
            <div className="flex gap-2.5 pt-1.5">
              <a
                href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowToast(false)}
                className="text-[11px] font-bold text-brand-green hover:underline cursor-pointer"
              >
                Garantir Minha Vaga
              </a>
              <button
                onClick={() => setShowToast(false)}
                className="text-[11px] text-brand-gray-400 hover:text-white cursor-pointer font-medium"
              >
                Dispensar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button (WhatsApp & Scroll to top combo) */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        showFloatingBt ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}>
        {/* Scroll up */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full bg-white hover:bg-brand-gray-100 border border-brand-gray-200 text-brand-gray-600 hover:text-brand-gray-950 flex items-center justify-center transition-all shadow-md group cursor-pointer"
          title="Voltar ao início"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* WhatsApp Floating */}
        <a
          href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 flex items-center justify-center transition-all shadow-lg glow-green hover:scale-105 active:scale-95 group relative cursor-pointer"
          title="Fale conosco no WhatsApp"
          id="floating-whatsapp-btn"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gray-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gray-950"></span>
          </span>
        </a>
      </div>
    </div>
  );
}
