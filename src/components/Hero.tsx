import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-brand-logo pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-400 to-transparent blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-400/20 text-brand-300 text-sm font-medium tracking-wide uppercase mb-6 border border-brand-400/30">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                Referência em Diagnóstico
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Sua saúde com a <span className="text-brand-400">precisão</span> que você merece.
              </h1>
              
              <p className="mt-6 text-lg text-brand-50 max-w-[30ch] leading-relaxed opacity-90">
                Tecnologia de ponta e corpo clínico especializado para laudos rápidos e precisos, garantindo o melhor cuidado para sua família.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-brand-logo bg-brand-400 rounded-full hover:bg-brand-300 transition-all shadow-lg hover:shadow-brand-400/20 hover:-translate-y-0.5"
                >
                  Agendar Exame
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors"
                >
                  Nossos Serviços
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-brand-100/80">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-400" /> Resultados Online</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-400" /> Atendimento Humanizado</div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:h-[540px] w-full hidden lg:block border border-white/10">
              <img 
                src="/hero.png" 
                alt="Recepção moderna e acolhedora da Clínica ECO" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-logo mb-1">15+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Anos de Tradição</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-logo mb-1">50k+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Exames Realizados</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-logo mb-1">20+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Especialistas</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-logo mb-1">ISO</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Certificação 9001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
