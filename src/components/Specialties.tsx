import { Stethoscope, Heart, Baby, Brain, HeartPulse, Sparkles, UserRound } from "lucide-react";

const specialities = [
  { name: "Médico Clínico", icon: <Stethoscope className="w-5 h-5 text-brand-600" /> },
  { name: "Médico Pediatra", icon: <Baby className="w-5 h-5 text-brand-600" /> },
  { name: "Ginecologista", icon: <Heart className="w-5 h-5 text-brand-600" /> },
  { name: "Psiquiatra", icon: <Brain className="w-5 h-5 text-brand-600" /> },
  { name: "Cardiologista", icon: <HeartPulse className="w-5 h-5 text-brand-600" /> },
  { name: "Dermatologista", icon: <Sparkles className="w-5 h-5 text-brand-600" /> },
  { name: "Psicólogo", icon: <UserRound className="w-5 h-5 text-brand-600" /> },
];

export function Specialties() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-brand-50/30 rounded-3xl my-12" id="especialidades">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Nossas Especialidades
        </h2>
        <p className="text-base text-slate-600 leading-relaxed mb-12">
          Atendimento ambulatorial focado na precisão do diagnóstico e no cuidado humano com cada paciente.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialities.map((s, i) => (
          <div key={i} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center">
              {s.icon}
            </div>
            <span className="font-medium text-slate-800">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
