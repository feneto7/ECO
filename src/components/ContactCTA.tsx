import { PhoneCall, Calendar } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-logo rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-brand-logo/20">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="text-lg text-brand-50/90 mb-10">
              Agende sua consulta ou exame agora mesmo. Nossa equipe está disponível para tirar todas as suas dúvidas.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-brand-logo bg-brand-400 rounded-full hover:bg-brand-300 transition-colors shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Agendar via WhatsApp
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                Ligar Agora
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
