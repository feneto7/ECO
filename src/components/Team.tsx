const team = [
  {
    name: "Dr. João Silva",
    role: "Médico Clínico",
    image: "/doctor.png"
  },
  {
    name: "Dra. Maria Souza",
    role: "Ginecologista",
    image: "/doctor.png"
  },
  {
    name: "Dr. Carlos Mendes",
    role: "Cardiologista",
    image: "/doctor.png"
  },
  {
    name: "Dra. Ana Costa",
    role: "Pediatra",
    image: "/doctor.png"
  }
];

export function Team() {
  return (
    <section className="py-24 bg-white" id="equipe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Corpo Clínico
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Nossos especialistas estão prontos para oferecer o melhor atendimento para você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col">
              <div className="relative aspect-[3/4] mb-5 overflow-hidden bg-slate-100 rounded-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{member.name}</h3>
              <p className="text-brand-logo font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
