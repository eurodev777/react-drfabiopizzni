import { useState } from "react";
import { ASSESSMENT_QUIZ, DR_INFO } from "../data";
import { Clipboard, ArrowRight, CheckCircle2, RotateCcw, AlertTriangle, Send, ShieldAlert, Cpu } from "lucide-react";
import diagnosticImg from "../assets/images/fitness_diagnostic_assessment_1781029971412.png";

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { text: string; value: string; points: number }>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (questionId: number, option: { text: string; value: string; points: number }) => {
    setAnswers({
      ...answers,
      [questionId]: option
    });

    // Automatically transition to the next step or finish
    if (currentStep < ASSESSMENT_QUIZ.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 350);
    } else {
      setTimeout(() => {
        setIsFinished(true);
      }, 350);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  // Determine user profile based on points or goals
  const getProfileResult = () => {
    const totalPoints = (Object.values(answers) as any[]).reduce((acc, curr) => acc + (curr?.points || 0), 0);
    const mainGoal = answers[1]?.value || "emagrecimento";

    let profileName = "Perfil Metabólico Saudável";
    let bioDescription = "Seu metabolismo está equilibrado, mas você tem potencial para mais performance.";
    let recommendation = "Ideal focar em nutrição crono-alimentar e treinamento de força direcionada.";

    if (mainGoal === "emagrecimento") {
      profileName = "Perfil Foco em Emagrecimento e Definição";
      bioDescription = "Seu foco está direcionado em redefinir a composição corporal, perdendo gordura corporal persistente preservando massa magra.";
      recommendation = "Recomenda-se um plano de déficit calórico inteligente e exames para avaliar tireoide, insulina e cortisol.";
    } else if (mainGoal === "hipertrofia") {
      profileName = "Perfil Foco em Hipertrofia e Condicionamento";
      bioDescription = "A meta prioritária é o ganho de massa muscular sólida e desenvolvimento de fibras do tipo II.";
      recommendation = "Recomendado ajuste calórico hiperproteico, periodização de treinos intensos e monitoramento hormonal.";
    } else if (mainGoal === "performance") {
      profileName = "Perfil Alta Performance Esportiva";
      bioDescription = "Usuário engajado que busca atingir o auge do rendimento atlético diário sem sofrer lesões.";
      recommendation = "Importante otimizar a suplementação intra-treino, minerais críticos e ciclo de recuperação mitocondrial.";
    } else if (mainGoal === "longevidade") {
      profileName = "Perfil Longevidade e Equilíbrio Preventivo";
      bioDescription = "Busca por um envelhecimento ativo, com qualidade de energia, bem-estar e menor inflamação crônica.";
      recommendation = "Estratégia voltada à alimentação anti-inflamatória, ativação de sirtuínas e estabilização de exames de rotina.";
    }

    return {
      name: profileName,
      desc: bioDescription,
      recom: recommendation,
      score: totalPoints
    };
  };

  // Formats text message to send on WhatsApp
  const generateWhatsAppHref = () => {
    const result = getProfileResult();
    const q1 = answers[1]?.text || "Não respondido";
    const q2 = answers[2]?.text || "Não respondido";
    const q3 = answers[3]?.text || "Não respondido";
    const q4 = answers[4]?.text || "Não respondido";

    const text = `Olá, Dr. Fábio Pizzini! Realizei a avaliação rápida de saúde do seu site. Seguem as minhas respostas:

1. Objetivo Principal: ${q1}
2. Atividade Física: ${q2}
3. Energia Diária: ${q3}
4. Rotina/Sono: ${q4}

Perfil Calculado: *${result.name}* (Pontuação: ${result.score})

Gostaria de agendar uma consulta para tratar desse perfil e de minhas metas de saúde em Sorocaba.`;

    return `https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="avaliacao" className="py-20 bg-[#06080d] scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-green/3 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gray-100 border border-brand-green/20">
            <Clipboard className="w-4 h-4 text-brand-green" />
            <span className="text-xs font-semibold text-brand-green uppercase tracking-wider font-mono">
              Triagem Digital & Fisiológica
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Avalie o Seu Perfil de Saúde e Performance
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray-600 font-light max-w-2xl mx-auto">
            Responda às 4 perguntas do console abaixo para estimar as necessidades do seu metabolismo. Dr. Fábio analisará os pontos em Sorocaba.
          </p>
        </div>

        {/* Outer Split layout representing modern sporty clinic interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column Graphic panel showing the computed muscle performance display */}
          <div className="lg:col-span-5 bg-brand-gray-100 rounded-3xl border border-brand-green/10 p-6 flex flex-col justify-between overflow-hidden relative shadow-xl">
            <div className="absolute top-3 right-3 text-[10px] font-mono text-brand-green bg-brand-green/10 px-2 py-0.5 rounded font-bold animate-pulse">
              ANALYS_ACTIVE
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-green" />
                <span className="text-xs font-mono font-bold text-white uppercase">Mapeamento Esportivo</span>
              </div>
              <p className="text-xs text-brand-gray-600 leading-relaxed font-light">
                A composição de gordura visceral e distribuição de massa muscular é monitorada em conjunto com o consumo de nitrogênio e exames de fôlego celular.
              </p>
            </div>

            {/* Generated clinical display graphic image */}
            <div className="my-6 relative rounded-2xl overflow-hidden border border-brand-green/20 h-56 group">
              <img
                src={diagnosticImg}
                alt="Dados clínicos de hipertrofia e exames esportivos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            <div className="text-[10px] font-mono text-brand-gray-600 border-t border-brand-green/10 pt-4 flex justify-between">
              <span>TRIAL PROFILE ENG_V5</span>
              <span className="text-brand-green">100% SEGURO</span>
            </div>
          </div>

          {/* Right Column: Quiz Console Box */}
          <div className="lg:col-span-7 bg-brand-gray-100 rounded-3xl border border-brand-green/15 p-6 sm:p-8 relative flex flex-col justify-center shadow-xl">
            
            {!isFinished ? (
              <div className="space-y-6">
                
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-mono text-brand-gray-600 uppercase">
                    <span>MÉTRICA DIGITADA</span>
                    <span>Pergunta {currentStep + 1} de {ASSESSMENT_QUIZ.length}</span>
                  </div>
                  <div className="w-full bg-brand-gray-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-brand-green h-full transition-all duration-300 rounded-full glow-green-sm"
                      style={{ width: `${((currentStep + 1) / ASSESSMENT_QUIZ.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Current Question */}
                <div className="space-y-6">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug">
                    {ASSESSMENT_QUIZ[currentStep].question}
                  </h3>

                  <div className="space-y-2.5">
                    {ASSESSMENT_QUIZ[currentStep].options.map((opt, idx) => {
                      const isSelected = answers[ASSESSMENT_QUIZ[currentStep].id]?.value === opt.value;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(ASSESSMENT_QUIZ[currentStep].id, opt)}
                          className={`w-full p-3.5 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-brand-green-light border-brand-green text-brand-green glow-green-sm"
                              : "bg-brand-gray-200/40 border-brand-green/5 text-brand-gray-800 hover:border-brand-green/35 hover:bg-brand-gray-200"
                          }`}
                        >
                          <span>{opt.text}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                            isSelected ? "border-brand-green bg-brand-green" : "border-brand-gray-300"
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-brand-gray-50" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Back navigation */}
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-brand-gray-600 hover:text-brand-green flex items-center gap-1.5 pt-4 hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Voltar para pergunta anterior
                  </button>
                )}

              </div>
            ) : (
              /* Results Panel */
              <div className="space-y-6 animate-fadeIn text-center sm:text-left">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start border-b border-brand-green/10 pb-4">
                  <div className="w-12 h-12 bg-brand-green text-brand-gray-50 rounded-xl flex items-center justify-center font-display font-black text-xl shrink-0 glow-green">
                    {getProfileResult().score}
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-[10px] font-mono font-bold text-brand-green uppercase tracking-widest leading-none">Perfil Estimado</span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      {getProfileResult().name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="space-y-1 p-3.5 rounded-xl bg-brand-gray-200/50 border border-brand-green/5">
                    <span className="text-[10px] font-bold text-white uppercase block">Análise Preliminar</span>
                    <p className="text-xs text-brand-gray-600 leading-normal font-light">
                      {getProfileResult().desc}
                    </p>
                  </div>

                  <div className="space-y-1 p-3.5 rounded-xl bg-[rgba(108,220,4,0.06)] border border-brand-green/20">
                    <span className="text-[10px] font-bold text-brand-green uppercase block">Recomendação Desportiva</span>
                    <p className="text-xs text-white leading-normal font-semibold">
                      {getProfileResult().recom}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-gray-200/30 border border-amber-600/20 flex gap-3 text-left">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 animate-bounce" />
                  <p className="text-[10px] text-brand-gray-600 leading-normal font-light">
                    <strong>Importante:</strong> Esta estimativa é apenas uma aproximação preliminar de composição laboral e metabólica. A consulta presencial com exames bioquímicos integrados em Sorocaba é indispensável.
                  </p>
                </div>

                {/* Share & WhatsApp scheduling */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={generateWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-brand-green hover:bg-brand-green-hover text-brand-gray-50 transform active:scale-95 transition-all font-bold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md glow-green"
                    id="quiz-submit-whatsapp"
                  >
                    <Send className="w-4 h-4" />
                    ENVIAR RESULTADO NO WHATSAPP
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-4 py-3 bg-brand-gray-200 hover:bg-brand-gray-300 border border-brand-green/10 text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Refazer
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
