import { ArrowRight, Star, HeartPulse, Activity, Flame, Shield } from "lucide-react";
import { DR_INFO } from "../data";
import heroImg from "../assets/images/sports_medicine_hero_1781029947478.png";

export default function Hero() {
  const highlightPoints = [
    { icon: <Flame className="w-5 h-5 text-brand-green" />, text: "Emagrecimento Saudável de Alta Performance" },
    { icon: <Activity className="w-5 h-5 text-brand-green" />, text: "Preparação Metabólica & Ganho de Massa" },
    { icon: <HeartPulse className="w-5 h-5 text-brand-green" />, text: "Nutrologia Integrada & Longevidade Ativa" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#030508] overflow-hidden">
      {/* Dynamic Background glows resembling sports high-tech vibe */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(108,220,4,0.08),transparent_50%)] -z-10" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 rounded-full bg-brand-green/3 blur-3xl -z-10" />
      
      {/* High-tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,220,4,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(108,220,4,0.01)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gray-100 border border-brand-green/20 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse glow-green-sm" />
              <span className="text-xs font-mono font-bold tracking-wider text-brand-green uppercase">
                EMAGRECIMENTO & PERFORMANCE • SOROCABA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              A melhor opção em{" "}
              <span className="text-brand-green block">
                Emagrecimento e Performance
              </span>{" "}
              física da Região!
            </h1>

            {/* Rich Subtext as highlighted in the request */}
            <p className="text-base sm:text-lg text-brand-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Transforme seu corpo, otimize sua saúde nutricional e alcance resultados consistentes. Uma abordagem médica esportiva moderna feita para você evoluir de verdade.
            </p>

            {/* Feature Check list */}
            <div className="space-y-3.5 max-w-md mx-auto lg:mx-0 text-left">
              {highlightPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-brand-gray-100 border border-brand-green/10 flex items-center justify-center">
                    {pt.icon}
                  </div>
                  <span className="text-sm font-semibold text-brand-gray-800">{pt.text}</span>
                </div>
              ))}
            </div>

            {/* Main CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-brand-gray-50 font-black text-sm sm:text-base rounded-xl flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg glow-green cursor-pointer"
                id="hero-cta-whatsapp"
              >
                AGENDAR CONSULTA NO WHATSAPP
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#avaliacao"
                className="w-full sm:w-auto px-6 py-4 bg-brand-gray-100 hover:bg-brand-gray-200 border border-brand-green/20 hover:border-brand-green/50 text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Avaliar Meu Perfil Esportivo
              </a>
            </div>

            {/* Customer Trust and Clinic Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-brand-gray-200/20">
              <div className="flex items-center gap-1.5 text-brand-green">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-brand-green" />
                ))}
                <span className="text-xs font-bold text-white ml-1">
                  Avaliações 5 Estrelas
                </span>
              </div>
              <div className="h-4 w-px bg-brand-gray-200/30 hidden sm:block" />
              <div className="text-xs text-brand-gray-600 font-mono">
                RQE 130.636 | Cuidado Médico Premium
              </div>
            </div>

          </div>

          {/* Right Column with our generated rich high-tech athletic image */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg rounded-2xl overflow-hidden group">
              {/* Outer Neon corner accent line */}
              <div className="absolute inset-0 border-2 border-brand-green/20 rounded-2xl group-hover:border-brand-green/60 transition-colors pointer-events-none z-10" />
              
              <img
                src={heroImg}
                alt="Médico analisando dados de performance de atleta"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Float Widget - Live Performance Track tag */}
              <div className="absolute bottom-5 left-5 right-5 bg-brand-gray-50/90 backdrop-blur-md p-4 rounded-xl border border-brand-green/30 shadow-2xl flex justify-between items-center z-10 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-tight text-white leading-none">Status Metabólico</h4>
                    <p className="text-[10px] font-mono text-brand-green pt-1 uppercase">Otimização máxima ativa</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold bg-brand-green/10 text-brand-green px-2 py-1 rounded">
                    RQE 130.636
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
