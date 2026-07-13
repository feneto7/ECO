import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-start gap-4">
          <img 
            src="/logo.png" 
            alt="Clínica ECO Logo" 
            className="h-10 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
          />
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs mt-2">
            O cuidado médico que você merece, com excelência, precisão diagnóstica e atendimento humanizado.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-4 tracking-tight">Atendimento</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-slate-600">
              <Phone className="w-4 h-4 text-slate-400" />
              <span>(XX) XXXX-XXXX</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-600">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>contato@clinicaeco.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-4 tracking-tight">Endereço</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>Rua Exemplo, 123, Sala 405<br />Bairro Saúde - Cidade/UF<br />CEP 00000-000</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-4 tracking-tight">Horário</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>Segunda a Sexta: 08h às 18h</li>
            <li>Sábados: 08h às 12h</li>
            <li>Domingos: Fechado</li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Clínica ECO Diagnóstico por Imagem. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
