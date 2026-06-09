import { Award, GraduationCap, ShieldCheck, Heart, User, CheckCircle2 } from "lucide-react";
import { CREDENTIALS, DR_INFO } from "../data";

export default function About() {
  return (
    <section id="quem-sou" className="py-20 bg-white border-y border-brand-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Custom Highlight */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-light border border-brand-green/20">
            <User className="w-4 h-4 text-brand-green-hover" />
            <span className="text-xs font-semibold text-brand-gray-800 uppercase tracking-wider">
              Profissional de Confiança
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-gray-950 tracking-tight">
            Quem Vai Ajudar Você?
          </h2>
          <p className="text-base text-brand-gray-600 font-light">
            Conheça a formação sólida e especializada que fundamenta todos os atendimentos, diagnósticos e planos médicos promovidos pelo Dr. Fábio Pizzini.
          </p>
        </div>

        {/* Content Grid: Left side Doctor Bio / Right side Credentials list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Profile Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative p-6 sm:p-8 bg-brand-gray-100 rounded-2xl border border-brand-gray-200/60 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-green" />
              
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-brand-green-hover tracking-wider block uppercase">
                  Médico Responsável
                </span>
                <h3 className="font-display text-2xl font-extrabold text-brand-gray-950">
                  {DR_INFO.name}
                </h3>
                
                <div className="space-y-2 pt-2 text-sm text-brand-gray-600 font-light leading-relaxed">
                  <p>
                    Com foco em reabilitação física, controle do perfil metabólico e no desenvolvimento físico de atletas e pessoas comuns, o Dr. Fábio Pizzini busca unir a ciência da medicina esportiva moderna às rotinas realistas de seus pacientes.
                  </p>
                  <p>
                    O acompanhamento é totalmente individualizado, partindo de avaliações clínicas e acompanhamentos dinâmicos que geram resultados concretos em emagrecimento saudável e otimização hormonal.
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-gray-800">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>RQE 130.636 - Médico do Esporte</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-gray-800">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>CRM-SP Registrado</span>
                  </div>
                </div>

                {/* Direct WhatsApp Call with Doctor badge */}
                <div className="pt-6 border-t border-brand-gray-200">
                  <a
                    href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(DR_INFO.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-bold text-sm rounded-xl transition-all shadow-sm glow-green"
                  >
                    Fale diretamente com a equipe
                  </a>
                </div>
              </div>
            </div>

            {/* Scientific Guideline message block */}
            <div className="p-5 rounded-2xl bg-brand-gray-50 border border-brand-gray-200 flex gap-4 items-start shadow-xs">
              <Heart className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-brand-gray-950">Tratamento Seguro e Ético</h4>
                <p className="text-xs text-brand-gray-600 leading-relaxed font-light">
                  Todos os protocolos recomendados pelo Dr. Fábio Pizzini cumprem rigorosamente com as diretivas e diretrizes do Conselho Federal de Medicina (CFM).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Interactive/Rich Credentials Cards */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-display text-lg font-bold text-brand-gray-950 tracking-tight flex items-center gap-2 pb-2">
              <Award className="w-5 h-5 text-brand-green" />
              Títulos e Certificações Oficiais
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CREDENTIALS.map((item, idx) => (
                <div
                  key={item.id}
                  className="group bg-brand-gray-50 hover:bg-white p-5 rounded-xl border border-brand-gray-200/80 hover:border-brand-green/30 transition-all duration-300 shadow-xs relative"
                >
                  {/* Subtle hover indicator dot */}
                  <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-brand-gray-300 group-hover:bg-brand-green transition-colors" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-brand-gray-200 text-brand-gray-600 tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h5 className="font-sans font-bold text-sm text-brand-gray-950 leading-snug group-hover:text-brand-green transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-xs text-brand-gray-600 leading-relaxed font-light">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary list */}
            <div className="mt-8 pt-6 border-t border-brand-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5 text-xs text-brand-gray-600 font-light">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Tratamento multidisciplinar integrado (Médico, Treinamento & Nutrição)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-gray-600 font-light">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Rápida marcação e acompanhamento digital pós-consulta</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
