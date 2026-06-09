import { useState } from "react";
import { ASSESSMENT_QUIZ, DR_INFO } from "../data";
import { Clipboard, ArrowRight, CheckCircle2, RotateCcw, AlertTriangle, Send } from "lucide-react";

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
    <section id="avaliacao" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-light border border-brand-green/20">
            <Clipboard className="w-4 h-4 text-brand-green-hover" />
            <span className="text-xs font-semibold text-brand-gray-800 uppercase tracking-wider">
              Diagnóstico Rápido
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-gray-950 tracking-tight">
            Avalie o Seu Perfil de Saúde
          </h2>
          <p className="text-base text-brand-gray-600 font-light">
            Responda às 4 perguntas abaixo para identificar onde estão as principais carências do seu metabolismo e como o Dr. Fábio Pizzini em Sorocaba ajudará você.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="max-w-2xl mx-auto bg-brand-gray-100 rounded-3xl border border-brand-gray-200/80 p-6 sm:p-10 premium-shadow">
          
          {!isFinished ? (
            <div className="space-y-6">
              
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-brand-gray-600 uppercase">
                  <span>Opções de Perfil</span>
                  <span>Pegunta {currentStep + 1} de {ASSESSMENT_QUIZ.length}</span>
                </div>
                <div className="w-full bg-brand-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-green h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / ASSESSMENT_QUIZ.length) * 105}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-6">
                <h3 className="font-display text-lg sm:text-xl font-bold text-brand-gray-950 leading-snug">
                  {ASSESSMENT_QUIZ[currentStep].question}
                </h3>

                <div className="space-y-3">
                  {ASSESSMENT_QUIZ[currentStep].options.map((opt, idx) => {
                    const isSelected = answers[ASSESSMENT_QUIZ[currentStep].id]?.value === opt.value;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(ASSESSMENT_QUIZ[currentStep].id, opt)}
                        className={`w-full p-4 text-left rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-brand-green-light border-brand-green text-brand-gray-950 glow-green"
                            : "bg-white border-brand-gray-200 text-brand-gray-800 hover:border-brand-green/45 hover:bg-brand-gray-50"
                        }`}
                      >
                        <span>{opt.text}</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                          isSelected ? "border-brand-green bg-brand-green" : "border-brand-gray-300"
                        }`}>
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-brand-gray-950" />}
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
                  className="text-xs font-semibold text-brand-gray-600 hover:text-brand-green flex items-center gap-1 pt-4 hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Voltar para pergunta anterior
                </button>
              )}

            </div>
          ) : (
            /* Results Panel */
            <div className="space-y-8 animate-fadeIn text-center sm:text-left">
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start border-b border-brand-gray-200 pb-6">
                <div className="w-14 h-14 bg-brand-green text-brand-gray-950 rounded-2xl flex items-center justify-center font-display font-extrabold text-2xl shrink-0 glow-green">
                  {getProfileResult().score}
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-mono font-bold text-brand-green-hover uppercase">Resultado da Estimativa</span>
                  <h3 className="font-display text-xl font-bold text-brand-gray-950">
                    {getProfileResult().name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5 p-4 rounded-xl bg-white border border-brand-gray-200/50">
                  <span className="text-xs font-bold text-brand-gray-800 uppercase block">Análise Preliminar</span>
                  <p className="text-sm text-brand-gray-600 leading-relaxed font-light">
                    {getProfileResult().desc}
                  </p>
                </div>

                <div className="space-y-1.5 p-4 rounded-xl bg-brand-green-light border border-brand-green/10">
                  <span className="text-xs font-bold text-brand-gray-800 uppercase block">Recomendação do Dr. Fábio</span>
                  <p className="text-sm text-brand-gray-800 leading-relaxed font-medium">
                    {getProfileResult().recom}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3 text-left">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed font-light">
                  <strong>Importante:</strong> Esta estimativa digital não substitui exames integrados de sangue, exames físicos presenciais em Sorocaba ou diagnósticos clínicos oficiais do consultório.
                </p>
              </div>

              {/* Share & WhatsApp scheduling */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={generateWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-bold text-base rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 shadow-md glow-green"
                  id="quiz-submit-whatsapp"
                >
                  <Send className="w-4 h-4" />
                  EVIAR RESULTADO NO WHATSAPP
                </a>

                <button
                  onClick={handleReset}
                  className="px-5 py-4 bg-white hover:bg-brand-gray-200 border border-brand-gray-300 text-brand-gray-800 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Refazer Avaliação
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
