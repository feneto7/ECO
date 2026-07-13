import { ShieldCheck, Clock, Award } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <span className="text-brand-logo font-semibold tracking-wide uppercase text-sm mb-3 block">Sobre a Eco</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Mais de 15 anos cuidando de gerações com dedicação.
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Fundada com a missão de democratizar o acesso à saúde de qualidade, a Clínica Eco Diagnóstico por Imagem tornou-se referência regional pela combinação perfeita entre tecnologia avançada e atendimento acolhedor.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Equipe Especializada</h3>
                  <p className="text-sm text-slate-500 mt-1">Profissionais altamente capacitados e em constante atualização científica.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Agilidade no Diagnóstico</h3>
                  <p className="text-sm text-slate-500 mt-1">Laudos entregues em tempo recorde para início imediato do tratamento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Segurança Comprovada</h3>
                  <p className="text-sm text-slate-500 mt-1">Protocolos internacionais de biossegurança e calibração de equipamentos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869043e560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Médico analisando exame na Clínica Eco" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoração sutil */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
