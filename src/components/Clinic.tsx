import { Activity, Dumbbell, Flame, HeartPulse, Sparkles, ClipboardCheck } from "lucide-react";
import { CLINIC_SERVICES, DR_INFO } from "../data";
import clinicImg from "../assets/images/modern_clinic_interior_1781029984987.png";

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
    { title: "1. Consulta Detalhada", desc: "Análise profunda do seu histórico metabólico, físico-desportivo e exames de sangue detalhados." },
    { title: "2. Avaliação Corporal", desc: "Mensuração precisa com equipamentos de alta tecnologia para calcular gordura e massa magra." },
    { title: "3. Planejamento Sob Medida", desc: "Prescrição individualizada de suplementação, rotina nutricional e treinamento baseado na fisiologia." },
    { title: "4. Acompanhamento Contínuo", desc: "Suporte ativo para tirar dúvidas e monitorar seus objetivos de evolução física." }
  ];

  return (
    <section id="consultorio" className="py-20 bg-[#090b0f] scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gray-100 border border-brand-green/20">
            <ClipboardCheck className="w-4 h-4 text-brand-green" />
            <span className="text-xs font-semibold text-brand-green uppercase tracking-wider font-mono">
              Alta Performance & Medicina Esportiva
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilares e Tratamento Integrado
          </h2>
          <p className="text-sm sm:text-base text-brand-gray-600 font-light max-w-2xl mx-auto">
            Metodologias médicas focadas em emagrecimento sustentado, ajuste do perfil hormonal e nutrição voltada aos treinos intensos sem falsas promessas em Sorocaba.
          </p>
        </div>

        {/* Services Grid (Whites over Grey background representation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CLINIC_SERVICES.map((serv, idx) => (
            <div
              key={idx}
              className="bg-brand-gray-100 p-8 rounded-2xl border border-brand-green/10 shadow-xl hover:border-brand-green/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gray-200 group-hover:bg-brand-green transition-colors" />

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="p-3.5 rounded-xl bg-brand-gray-200 flex items-center justify-center shrink-0 group-hover:bg-brand-green-light transition-colors">
                  {getIcon(serv.iconName)}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-green transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed font-light">
                    {serv.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Split Visual block: Clinic interior and Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-brand-gray-100 p-6 sm:p-10 rounded-3xl border border-brand-green/10">
          
          {/* Left Column: Visual generated Clinic photo */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 border border-brand-green/30 rounded-2xl pointer-events-none z-10" />
            <img
              src={clinicImg}
              alt="Imersão futurista e sofisticada da clínica do Dr. Fábio Pizzini"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-brand-gray-50/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-brand-green/20">
              <span className="text-[10px] font-mono font-bold text-white">CONFORTO & TECNOLOGIA</span>
            </div>
          </div>

          {/* Right Column: Steps list */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Como funciona o acompanhamento esportivo?
              </h3>
              <p className="text-xs text-brand-gray-600">
                Uma jornada científica projetada para trazer o máximo retorno metabólico e de hipertrofia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((st, sIdx) => (
                <div key={sIdx} className="space-y-2 p-4 rounded-xl bg-brand-gray-200/50 border border-brand-green/5">
                  <div className="text-brand-green font-display font-black text-lg tracking-tight">
                    {st.title.split(".")[0]}.
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    {st.title.split(".")[1] || st.title}
                  </h4>
                  <p className="text-xs text-brand-gray-600 leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center lg:text-left">
              <a
                href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-brand-gray-50 font-extrabold text-sm sm:text-base rounded-xl items-center gap-3 transition-all duration-200 glow-green shadow-xs"
              >
                RESERVAR AGENDAMENTO NO WHATSAPP
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
