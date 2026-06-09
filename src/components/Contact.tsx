import { useState, FormEvent } from "react";
import { DR_INFO } from "../data";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, Navigation } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", goal: "emagrecimento", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Simulate sending message
    setIsSent(true);
    setTimeout(() => {
      // Direct option to send on WhatsApp if they'd like, or show success.
      const text = `Olá, Dr. Fábio Pizzini! Me chamo *${formData.name}* e gostaria de agendar uma consulta sobre *${formData.goal}*. Falei pelo site.`;
      window.open(`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    }, 1200);
  };

  const contactOptions = [
    { icon: <MapPin className="w-5 h-5 text-brand-green" />, title: "Local de Atendimento", value: DR_INFO.address, actionLabel: "Como Chegar (Maps)", link: "https://maps.google.com" },
    { icon: <Phone className="w-5 h-5 text-brand-green" />, title: "Telefone & WhatsApp", value: DR_INFO.phone, actionLabel: "Abrir Conversa", link: `https://wa.me/${DR_INFO.whatsappNumber}` },
    { icon: <Mail className="w-5 h-5 text-brand-green" />, title: "E-mail Geral", value: DR_INFO.email, actionLabel: "Enviar E-mail", link: `mailto:${DR_INFO.email}` },
    { icon: <Clock className="w-5 h-5 text-brand-green" />, title: "Horários de Atendimento", value: "Segunda a Sexta: 08:00 às 20:00", actionLabel: "Consultar Vagas", link: "#avaliacao" }
  ];

  return (
    <section id="contato" className="py-20 bg-brand-gray-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-gray-200">
            <Mail className="w-4 h-4 text-brand-green" />
            <span className="text-xs font-semibold text-brand-gray-600 uppercase tracking-wider">
              Canais Oficiais
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-gray-950 tracking-tight">
            Agende Sua Consulta em Sorocaba
          </h2>
          <p className="text-base text-brand-gray-600 font-light">
            Entre em contato hoje mesmo. Se preferir, use nossa mensagem rápida pelo whatsapp ou envie uma solicitação personalizada preenchendo o formulário abaixo.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact metadata information cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-gray-200/80 space-y-6">
              <h3 className="font-display font-bold text-base text-brand-gray-950 border-b border-brand-gray-100 pb-3 uppercase tracking-wider">
                Dados de Endereço e Contato
              </h3>

              <div className="space-y-6">
                {contactOptions.map((opt, optIdx) => (
                  <div key={optIdx} className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-lg bg-brand-gray-100 flex items-center justify-center shrink-0">
                      {opt.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold font-mono tracking-wider text-brand-gray-600 uppercase">
                        {opt.title}
                      </h4>
                      <p className="text-sm font-medium text-brand-gray-800 leading-normal">
                        {opt.value}
                      </p>
                      {opt.link ? (
                        <a
                          href={opt.link}
                          target={opt.link.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-brand-green-hover hover:underline inline-flex items-center gap-0.5"
                        >
                          {opt.actionLabel}
                          <Navigation className="w-3 h-3 ml-0.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick map visual representation placeholder card */}
            <div className="p-6 rounded-2xl bg-brand-gray-950 text-white space-y-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl -z-10" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase bg-brand-green text-brand-gray-950 px-2 py-0.5 rounded font-bold">Unidade Campolim</span>
                <h4 className="font-display font-semibold text-sm">Prédio Comercial de Alto Padrão</h4>
              </div>
              <p className="text-xs text-brand-gray-300 leading-relaxed font-light">
                O consultório do Dr. Fábio Pizzini fica localizado em uma das principais avenidas do <strong>Parque Campolim</strong>, com estacionamento interno, segurança dedicada, manobrista e rampas de acessibilidade total.
              </p>
            </div>

          </div>

          {/* Right Column - Custom Form / State Handling */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-brand-gray-200 shadow-sm">
              <h3 className="font-display font-bold text-lg text-brand-gray-950 mb-6">
                Solicite Atendimento Personalizado
              </h3>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-5" id="clinic-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-xs font-semibold text-brand-gray-600 uppercase">Seu Nome Completo *</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="Ex: João da Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-gray-100 border border-brand-gray-200 text-sm rounded-xl focus:border-brand-green focus:bg-white focus:outline-none transition-all placeholder:text-brand-gray-600/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-phone" className="text-xs font-semibold text-brand-gray-600 uppercase">Telefone Celular (WhatsApp) *</label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        placeholder="Ex: (15) 99123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-gray-100 border border-brand-gray-200 text-sm rounded-xl focus:border-brand-green focus:bg-white focus:outline-none transition-all placeholder:text-brand-gray-600/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-xs font-semibold text-brand-gray-600 uppercase font-mono">Endereço de E-mail *</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="Ex: joao@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-gray-100 border border-brand-gray-200 text-sm rounded-xl focus:border-brand-green focus:bg-white focus:outline-none transition-all placeholder:text-brand-gray-600/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-goal" className="text-xs font-semibold text-brand-gray-600 uppercase">Qual o seu Objetivo? *</label>
                      <select
                        id="form-goal"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-gray-100 border border-brand-gray-200 text-sm rounded-xl focus:border-brand-green focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="emagrecimento">Emagrecimento Metabólico</option>
                        <option value="hipertrofia">Ganho de Massa e Força</option>
                        <option value="performance">Nutrologia & Alto Rendimento</option>
                        <option value="longevidade">Saúde, Energia & Longevidade</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-xs font-semibold text-brand-gray-600 uppercase">Observações, Sintomas ou Metas</label>
                    <textarea
                      id="form-message"
                      rows={3}
                      placeholder="Conte um pouco sobre suas metas ou sintomas atuais de saúde..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-gray-100 border border-brand-gray-200 text-sm rounded-xl focus:border-brand-green focus:bg-white focus:outline-none transition-all placeholder:text-brand-gray-600/60"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-bold rounded-xl flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all glow-green cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      ENVIAR SOLICITAÇÃO AGORA
                    </button>
                  </div>
                </form>
              ) : (
                /* Success message state transition */
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-brand-green-light text-brand-green rounded-full flex items-center justify-center mx-auto border border-brand-green/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-brand-gray-950">Solicitação Enviada!</h4>
                  <p className="text-sm text-brand-gray-600 max-w-sm mx-auto leading-relaxed font-light">
                    Obrigado, seu interesse foi gerado. Se a janela do WhatsApp não se abriu automaticamente, clique no botão rápido abaixo para contatar a recepção:
                  </p>
                  <div className="pt-4 max-w-xs mx-auto">
                    <a
                      href={`https://wa.me/${DR_INFO.whatsappNumber}?text=${encodeURIComponent(`Olá! Me chamo ${formData.name} e enviei o formulário do portal.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-brand-green hover:bg-brand-green-hover text-brand-gray-950 font-bold rounded-xl block text-sm shadow-xs"
                    >
                      Inicar WhatsApp Manualmente
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
