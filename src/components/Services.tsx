import { Stethoscope, Heart, Baby, Brain, HeartPulse, Sparkles, UserRound, ArrowRight } from "lucide-react";

const services = [
  { 
    name: "Ultrassonografia", 
    description: "Exames de imagem precisos para diagnóstico seguro.",
    list: ["Obstétrica", "Abdome Total", "Pélvica"],
    icon: <Sparkles className="w-6 h-6 text-brand-400" /> 
  },
  { 
    name: "Raio-X Digital", 
    description: "Tecnologia digital com menor radiação e alta definição.",
    list: ["Tórax", "Coluna", "Extremidades"],
    icon: <Stethoscope className="w-6 h-6 text-brand-400" /> 
  },
  { 
    name: "Cardiologia", 
    description: "Avaliação completa da saúde do seu coração.",
    list: ["Ecocardiograma", "Eletrocardiograma", "Mapa/Holter"],
    icon: <HeartPulse className="w-6 h-6 text-brand-400" /> 
  },
  { 
    name: "Saúde da Mulher", 
    description: "Cuidado especializado em todas as fases da vida.",
    list: ["Mamografia", "Preventivo", "Densitometria"],
    icon: <Heart className="w-6 h-6 text-brand-400" /> 
  },
  { 
    name: "Pediatria", 
    description: "Atendimento acolhedor para o desenvolvimento infantil.",
    list: ["Puericultura", "Vacinas", "Emergência Pediátrica"],
    icon: <Baby className="w-6 h-6 text-brand-400" /> 
  },
  { 
    name: "Saúde Mental", 
    description: "Apoio psicológico e psiquiátrico de forma integrada.",
    list: ["Terapia", "Avaliação Psiquiátrica", "Neurologia"],
    icon: <Brain className="w-6 h-6 text-brand-400" /> 
  }
];

export function Services() {
  return (
    <section className="py-24 bg-brand-50/50" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-logo font-semibold tracking-wide uppercase text-sm mb-3 block">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Exames e consultas em um só lugar.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Estrutura completa e equipamentos de última geração para cuidar da sua saúde com a agilidade que você precisa.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-500 transition-colors">
            Ver todos os exames <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-logo group-hover:text-white transition-colors">
                <div className="group-hover:brightness-200 transition-all">{s.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed min-h-[40px]">{s.description}</p>
              
              <ul className="space-y-2 mb-8">
                {s.list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1 h-1 bg-brand-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-logo group-hover:text-brand-400 transition-colors">
                Saiba mais <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
