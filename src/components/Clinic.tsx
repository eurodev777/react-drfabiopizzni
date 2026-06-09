import { Activity, Dumbbell, Flame, HeartPulse, Sparkles, ClipboardCheck } from "lucide-react";
import { CLINIC_SERVICES, DR_INFO } from "../data";

export default function Clinic() {
  // Map standard icons easily based on iconName string representation
  const getIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-6 h-6 text-brand-green" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-brand-green" />;
      case "Dumbbell":
        return <Dumbbell className="w-6 h-6 text-brand-green" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-brand-green" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-green" />;
    }
  };

  const steps = [
    { title: "1. Consulta Detalhada", desc: "Análise profunda do seu histórico alimentar, físico, sono e exames laboratoriais." },
    { title: "2. Avaliação Corporal", desc: "Mensuração exata da gordura e massa muscular para basear seu plano." },
    { title: "3. Prescrição Sob Medida", desc: "Suplementação, cardápio e rotinas de treino adaptadas do zero para você." },
    { title: "4. Acompanhamento Contínuo", desc: "Suporte para dúvidas e ajustes regulares rumo ao seu objetivo." }
  ];

  return (
    <section id="consultorio" className="py-20 bg-brand-gray-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-gray-200 shadow-xs">
            <ClipboardCheck className="w-4 h-4 text-brand-green" />
            <span className="text-xs font-semibold text-brand-gray-600 uppercase tracking-wider">
              Áreas de Atuação
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-gray-950 tracking-tight">
            Consultório Médico Integrado
          </h2>
          <p className="text-base text-brand-gray-600 font-light">
            Soluções completas baseadas em nutrologia de alto rendimento e fisiologia do exercício para acelerar sua transformação em Sorocaba.
          </p>
        </div>

        {/* Services Grid (Whites over Grey background representation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CLINIC_SERVICES.map((serv, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-brand-gray-200/65 shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gray-200 group-hover:bg-brand-green transition-colors" />

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="p-3.5 rounded-xl bg-brand-gray-100 flex items-center justify-center shrink-0 group-hover:bg-brand-green-light transition-colors">
                  {getIcon(serv.iconName)}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-brand-gray-950 group-hover:text-brand-green transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-sm text-brand-gray-600 leading-relaxed font-light">
                    {serv.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Consultation Journey Steps inside the Office */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl font-bold text-brand-gray-950">
              Como funciona o acompanhamento do Dr. Fábio?
            </h3>
            <p className="text-xs text-brand-gray-600 mt-2">
              Uma metodologia de quatro etapas projetada para reeducação permanente e monitoramento de metas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((st, sIdx) => (
              <div key={sIdx} className="relative space-y-3 p-5 rounded-xl bg-brand-gray-50 border border-brand-gray-100">
                <div className="text-brand-green font-display font-black text-xl tracking-tight">
                  {st.title.split(".")[0]}.
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-gray-900">
                  {st.title.split(".")[1] || st.title}
                </h4>
                <p className="text-xs text-brand-gray-600 leading-relaxed font-light">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-bold text-base rounded-xl items-center gap-3 transition-all duration-200 glow-green shadow-xs"
            >
              RESERVAR MINHA VAGA DE CONSULTA
            </a>
            <p className="text-[10px] text-brand-gray-600 mt-2 font-mono uppercase">
              Vagas limitadas por mês para garantir atendimento personalizado e exclusivo
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
