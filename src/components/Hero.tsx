import { ArrowRight, Star, HeartPulse, Activity, Flame } from "lucide-react";
import { DR_INFO } from "../data";

export default function Hero() {
  const highlightPoints = [
    { icon: <Flame className="w-5 h-5 text-brand-green" />, text: "Emagrecimento Saudável e Sustentável" },
    { icon: <Activity className="w-5 h-5 text-brand-green" />, text: "Alta Performance & Ganho de Massa" },
    { icon: <HeartPulse className="w-5 h-5 text-brand-green" />, text: "Qualidade de Vida e Equilíbrio Metabólico" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-gray-50 overflow-hidden">
      {/* Decorative clean background layouts resembling clinical aesthetic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray-100/40 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-brand-green/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-gray-200 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-brand-gray-600 uppercase">
                Medicina Baseada em Evidências
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-gray-950 leading-tight">
              A melhor opção em{" "}
              <span className="text-brand-green block sm:inline underline decoration-brand-gray-300 decoration-wavy underline-offset-4">
                emagrecimento, nutrição
              </span>{" "}
              e treinamento de Sorocaba!
            </h1>

            {/* Rich Subtext as highlighted in the request */}
            <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Você acaba de encontrar a melhor assessoria integrada em Sorocaba e Região para transformar sua composição corporal, otimizar sua nutrição diária e potencializar seus resultados físicos.
            </p>

            {/* Feature Check list */}
            <div className="space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              {highlightPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 rounded bg-white shadow-xs border border-brand-gray-100 flex items-center justify-center">
                    {pt.icon}
                  </div>
                  <span className="text-sm font-medium text-brand-gray-800">{pt.text}</span>
                </div>
              ))}
            </div>

            {/* Main CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-bold text-base rounded-xl flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md glow-green cursor-pointer"
                id="hero-cta-whatsapp"
              >
                AGENDAR CONSULTA NO WHATSAPP
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#avaliacao"
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-brand-gray-100 border border-brand-gray-300 text-brand-gray-800 font-semibold text-base rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                Avaliar Meu Perfil de Saúde
              </a>
            </div>

            {/* Customer Trust and Clinic Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-brand-gray-200/80">
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-semibold text-brand-gray-800 ml-1">
                  Excelente no Google
                </span>
              </div>
              <div className="h-4 w-px bg-brand-gray-200 hidden sm:block" />
              <div className="text-xs text-brand-gray-600">
                Atendimento presencial em <strong>Sorocaba - SP</strong>
              </div>
            </div>

          </div>

          {/* Right Column Modern Aesthetic Health UI Concept Card representation */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl premium-shadow border border-brand-gray-100 overflow-hidden transform hover:scale-[1.01] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green-light/60 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                
                {/* Visual Medical Aesthetic Header representation */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center">
                      <HeartPulse className="w-6 h-6 text-brand-green-hover" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-brand-gray-950 text-base leading-none">
                        Dr. Fábio Pizzini
                      </h3>
                      <p className="text-xs font-mono text-brand-gray-600 pt-1">RQE 130.636 | Medicina Esportiva</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-brand-green-light text-brand-gray-800 px-2 py-1 rounded bg-brand-green/10">
                    Atendimento Premium
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-gray-100/50 border border-brand-gray-200/50 space-y-3">
                  <span className="text-xs font-mono font-semibold text-brand-green block">PREPARAÇÃO & COMPOSIÇÃO</span>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-brand-gray-800">Emagrecimento Saudável</span>
                    <span className="text-sm font-bold text-brand-gray-950">Nutrologia Esportiva</span>
                  </div>
                  {/* Visual health bar indicator using our brand-green */}
                  <div className="w-full bg-brand-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-green h-full rounded-full w-[88%]" />
                  </div>
                </div>

                {/* Patient focus quote */}
                <div className="relative">
                  <span className="absolute -top-3 -left-2 text-7xl text-brand-green-light font-serif leading-none select-none -z-10">“</span>
                  <p className="text-sm italic text-brand-gray-600 relative z-10 leading-relaxed pl-3 font-light">
                    &quot;O segredo de resultados consistentes em Sorocaba consiste em unir planejamento médico esportivo rigoroso e reeducação metabólica personalizada.&quot;
                  </p>
                </div>

                {/* Visual Schedule Quick Form Link */}
                <a
                  href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-gray-100 hover:bg-brand-green hover:text-brand-gray-950 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-brand-gray-800 transition-all group"
                >
                  Verificar horários disponíveis
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Safety Seal info */}
                <div className="text-[10px] font-mono text-center text-brand-gray-600 pt-2 border-t border-brand-gray-100">
                  Consulte a disponibilidade de cobertura e retorno para Sorocaba e Região
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
