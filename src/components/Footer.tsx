import { DR_INFO } from "../data";
import { Instagram, Youtube, Facebook, Music, Flame, HeartPulse, Activity } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020304] text-brand-gray-600 pt-16 pb-8 border-t border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1 - Brand Info */}
          <div className="md:col-span-12 lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-brand-green flex items-center justify-center font-display text-brand-gray-950 font-extrabold text-lg">
                FP
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Dr. Fábio Pizzini
              </span>
            </a>
            <p className="text-xs text-brand-gray-600 leading-relaxed font-light max-w-sm">
              Serviços de alto nível em Sorocaba voltados ao emagrecimento inteligente, nutrição balanceada, performance atlética de alto rendimento e medicina do esporte integrada.
            </p>
            
            {/* Social channels in footer */}
            <div className="flex items-center space-x-3 text-brand-gray-600 pt-2">
              <a href={DR_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green p-1 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={DR_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green p-1 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={DR_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green p-1 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={DR_INFO.socials.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green p-1 transition-colors">
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Link Groups */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider font-mono">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-brand-green transition-colors font-light">Início / Boas-vindas</a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-brand-green transition-colors font-light">Nosso Consultório</a>
              </li>
              <li>
                <a href="#avaliacao" className="hover:text-brand-green transition-colors font-light">Avaliação de Saúde</a>
              </li>
              <li>
                <a href="#quem-sou" className="hover:text-brand-green transition-colors font-light">Perfil Profissional</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-brand-green transition-colors font-light">Contato / Localização</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Health Pillars */}
          <div className="md:col-span-6 lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider font-mono">
              Foco Científico
            </h4>
            <div className="space-y-3.5 pt-1">
              <div className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded bg-brand-gray-200 flex items-center justify-center shrink-0">
                  <Flame className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <span className="text-xs font-light text-brand-gray-600">Otimização Metabólica Lipídica</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded bg-brand-gray-200 flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <span className="text-xs font-light text-brand-gray-600">Gasto Energético & Fisiologia Cardíaca</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded bg-brand-gray-200 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <span className="text-xs font-light text-brand-gray-600">Nutrição Funcional Atleta & Longevidade</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal and medical Disclaimer */}
        <div className="pt-8 mt-8 border-t border-brand-green/10 space-y-4 text-[10px] sm:text-[11px] text-brand-gray-650 leading-relaxed font-light">
          <p>
            <strong>Nota de Isenção de Responsabilidade Médica (SBD/CFM):</strong> As informações prestadas neste portal têm propósitos estritamente educativos e instrutivos. Elas não servem para autodiagnósticos ou automedicações e sob nenhuma hipótese dispensam a consulta médica presencial. O Dr. Fábio Pizzini reforça que cada corpo possui características bioquímicas individuais que exigem monitoração profissional.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-brand-gray-650 pt-2 border-t border-brand-green/5">
            <div>
              &copy; {currentYear} Dr. Fábio Pizzini. Todos os direitos reservados. CRM-SP | RQE 130.636
            </div>
            <div>
              Atendimento presencial em Sorocaba - SP | Clínica Integrada
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
