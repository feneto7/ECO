import { Microscope, Users, Zap, Shield } from "lucide-react";

const differentials = [
  {
    icon: <Microscope className="w-6 h-6 text-brand-logo" />,
    title: "Tecnologia Avançada",
    desc: "Equipamentos de última geração para imagens em alta definição."
  },
  {
    icon: <Users className="w-6 h-6 text-brand-logo" />,
    title: "Atendimento Humanizado",
    desc: "Cuidado e empatia em cada etapa da sua jornada conosco."
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-logo" />,
    title: "Laudos Rápidos",
    desc: "Plataforma online para acesso rápido e seguro aos seus resultados."
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-logo" />,
    title: "Corpo Clínico Renomado",
    desc: "Especialistas qualificados pelos melhores hospitais do país."
  }
];

export function Differentials() {
  return (
    <section className="py-24 bg-slate-900" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3 block">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Por que escolher a Eco?
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Unimos o que há de mais moderno na medicina diagnóstica com o atendimento que faz você se sentir em casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-brand-400/10 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
