import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-slate-100 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          {/* O logo precisa adaptar cor se a header for transparente sobre o fundo escuro do hero.
              Como a logo é originalmente verde/colorida, num fundo escuro pode não aparecer bem.
              Vamos aplicar um filtro invertido se NÃO estiver scrolled, ou deixar branca via CSS.
              Por segurança, vamos colocar um fundo branco arredondado na logo se estiver no topo. */}
          <div className={`p-1.5 rounded-lg transition-colors ${scrolled ? '' : 'bg-white/90 backdrop-blur'}`}>
            <img 
              src="/logo.png" 
              alt="Clínica ECO Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#servicos" className={`transition-colors hover:text-brand-400 ${scrolled ? "text-slate-600" : "text-white/90"}`}>Serviços</a>
          <a href="#sobre" className={`transition-colors hover:text-brand-400 ${scrolled ? "text-slate-600" : "text-white/90"}`}>Sobre Nós</a>
          <a href="#diferenciais" className={`transition-colors hover:text-brand-400 ${scrolled ? "text-slate-600" : "text-white/90"}`}>Diferenciais</a>
          <a href="#equipe" className={`transition-colors hover:text-brand-400 ${scrolled ? "text-slate-600" : "text-white/90"}`}>Corpo Clínico</a>
        </nav>
        
        <div className="hidden md:flex">
          <a 
            href="#"
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
              scrolled 
                ? "text-white bg-brand-logo hover:bg-brand-dark" 
                : "text-brand-logo bg-brand-400 hover:bg-brand-300"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </a>
        </div>

        <button 
          className={`md:hidden p-2 rounded-md ${scrolled ? "text-slate-800" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-slate-100 py-4 px-4 flex flex-col gap-4">
          <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium">Serviços</a>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium">Sobre Nós</a>
          <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium">Diferenciais</a>
          <a href="#equipe" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium">Corpo Clínico</a>
          <a 
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-brand-logo rounded-full hover:bg-brand-dark"
          >
            <Phone className="w-4 h-4" />
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  )
}
