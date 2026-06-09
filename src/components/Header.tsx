import { useState, useEffect } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Music, Phone } from "lucide-react";
import { DR_INFO } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Consultório", href: "#consultorio" },
    { name: "Avaliação Grátis", href: "#avaliacao" },
    { name: "Quem Sou", href: "#quem-sou" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-brand-gray-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Title */}
          <div className="flex flex-col">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-brand-green flex items-center justify-center font-display text-white font-bold text-xl glow-green transform transition-transform group-hover:scale-105">
                FP
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-brand-gray-950 transition-colors group-hover:text-brand-green block leading-none">
                  Dr. Fábio Pizzini
                </span>
                <span className="text-[10px] font-mono tracking-wider text-brand-gray-600 block uppercase pt-1">
                  Medicina do Esporte & Nutrologia
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-gray-800 hover:text-brand-green transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Call & Social Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-3 text-brand-gray-600 border-r border-brand-gray-200 pr-5">
              <a
                href={DR_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Siga no Instagram"
                className="hover:text-brand-green p-1 transition-colors hover:scale-110 transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={DR_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="Acompanhe no Youtube"
                className="hover:text-brand-green p-1 transition-colors hover:scale-110 transform"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={DR_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Siga no Facebook"
                className="hover:text-brand-green p-1 transition-colors hover:scale-110 transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={DR_INFO.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                title="Ouça no Spotify"
                className="hover:text-brand-green p-1 transition-colors hover:scale-110 transform"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Contact Link */}
            <a
              href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-semibold text-sm rounded-lg flex items-center gap-2 transform active:scale-95 transition-all shadow-sm duration-200 glow-green"
            >
              <Phone className="w-4 h-4" />
              Agendar Consulta
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-gray-800 hover:text-brand-green p-2 focus:outline-none"
              aria-label="Alternar menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-gray-200 animate-fadeIn" id="mobile-navigation">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-brand-gray-800 hover:bg-brand-green-light hover:text-brand-green transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-brand-gray-100 my-3"></div>

            {/* Social channels in mobile sidebar */}
            <div className="flex items-center space-x-6 px-3 py-2 text-brand-gray-600">
              <a href={DR_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={DR_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={DR_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={DR_INFO.socials.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">
                <Music className="w-5 h-5" />
              </a>
            </div>

            <div className="px-3 pt-3">
              <a
                href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Agendar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
