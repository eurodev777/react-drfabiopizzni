import { Award, GraduationCap, ShieldCheck, Heart, User, CheckCircle2 } from "lucide-react";
import { CREDENTIALS, DR_INFO } from "../data";
import dietImg from "../assets/images/athletic_diet_performance_1781029960262.png";

export default function About() {
  return (
    <section id="quem-sou" className="py-20 bg-[#030508] border-y border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Custom Highlight */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gray-100 border border-brand-green/20">
            <User className="w-4 h-4 text-brand-green" />
            <span className="text-xs font-semibold text-brand-green uppercase tracking-wider font-mono">
              Fundamentação Médica & Científica
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quem Vai Ajudar Você?
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray-600 font-light max-w-2xl mx-auto">
            Conheça o Dr. Fábio Pizzini: formação sólida, pós-graduado pela ABRAN e médico dedicado à união entre nutrologia clínica, performance muscular e reeducação metabólica.
          </p>
        </div>

        {/* Content Grid: Left side Doctor Bio / Right side Credentials list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Profile Showcase with Visual Elements */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative p-6 sm:p-8 bg-brand-gray-100 rounded-2xl border border-brand-green/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-green" />
              
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-brand-green tracking-wider block uppercase">
                  Médico do Esporte & Nutrologia
                </span>
                <h3 className="font-display text-2xl font-extrabold text-white">
                  {DR_INFO.name}
                </h3>
                
                <div className="space-y-2 pt-1 text-xs sm:text-sm text-brand-gray-600 font-light leading-relaxed">
                  <p>
                    Unindo planejamento desportivo moderno com reeducação metabólica personalizada para reverter quadros de sobrepeso e otimizar massa magra.
                  </p>
                  <p>
                    Com foco na fisiologia prática do exercício físico, o Dr. Fábio busca conciliar saúde plena com o suporte energético e suplementação adequados à sua rotina real de treinos.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>RQE 130.636 - Sociedade Brasileira de Medicina do Exercício e do Esporte</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>CRM-SP Registrado</span>
                  </div>
                </div>

                {/* Direct WhatsApp Call with Doctor badge */}
                <div className="pt-4 border-t border-brand-green/10">
                  <a
                    href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-green hover:bg-brand-green-hover text-brand-gray-50 transform active:scale-95 transition-all font-bold text-xs sm:text-sm rounded-xl shadow-sm glow-green"
                  >
                    Fale diretamente com nossa equipe
                  </a>
                </div>
              </div>
            </div>

            {/* Nutrition Rich Graphic Segment to fulfill visual preference */}
            <div className="p-4 rounded-2xl bg-brand-gray-100 border border-brand-green/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="relative rounded-lg overflow-hidden h-36">
                  <img
                    src={dietImg}
                    alt="Nutrição funcional e muscular esportiva"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-brand-green uppercase">Nutrologia do Treino</span>
                  <p className="text-xs font-bold text-white leading-tight">Dietas Baseadas na Fisiologia</p>
                  <p className="text-[11px] text-brand-gray-600 font-light leading-snug">
                    Suporte completo em emagrecimento ativo com macronutrientes calculados sob medida para o seu gasto físico diário em Sorocaba.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive/Rich Credentials Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-display text-lg font-bold text-white tracking-tight flex items-center gap-2 pb-2">
              <Award className="w-5 h-5 text-brand-green" />
              Títulos e Certificações Oficiais
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CREDENTIALS.map((item, idx) => (
                <div
                  key={item.id}
                  className="group bg-brand-gray-100 hover:bg-brand-gray-200 p-5 rounded-xl border border-brand-green/5 hover:border-brand-green/30 transition-all duration-300 shadow-xs relative"
                >
                  {/* Subtle hover indicator dot */}
                  <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-brand-gray-300 group-hover:bg-brand-green transition-colors" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-brand-gray-200 text-brand-green tracking-wider bg-brand-green/10">
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h5 className="font-sans font-bold text-sm text-white group-hover:text-brand-green transition-colors leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-[11px] text-brand-gray-600 leading-normal font-light">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary list */}
            <div className="mt-8 pt-6 border-t border-brand-green/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5 text-xs text-brand-gray-600 font-light">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Tratamento integrado (Diagnóstico, Metabolismo & Nutrição)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-gray-600 font-light">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Suporte pós-consulta direto e focado no paciente</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
