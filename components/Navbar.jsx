import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0C]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-mono-custom font-bold tracking-tight text-[#FAFAFA] flex items-center">
            <span className="text-[#3ECF8E] mr-1.5 transform rotate-[30deg] inline-block">//</span>tech<span className="text-[#3ECF8E]">ops</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8 text-xs font-mono-custom uppercase tracking-wider text-[#8E8E9F]">
          <a href="#servicios" className="hover:text-[#FAFAFA] transition-colors">Especialidades</a>
          <a href="#observability-deck" className="hover:text-[#3ECF8E] transition-colors">Observabilidad</a>
          <a href="#simulador" className="hover:text-[#FAFAFA] transition-colors">Calculadora FinOps</a>
          <a href="#gctorque" className="text-[#3ECF8E] hover:text-emerald-300 transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] animate-ping" />
            GCTorque ERP
          </a>
          <a href="#diagnostico" className="hover:text-[#FAFAFA] transition-colors">Diagnóstico</a>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/taller" className="hidden sm:inline-block text-xs font-mono-custom text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider">
            Planes ERP GT
          </Link>
          <a href="#diagnostico" className="bg-gradient-to-r from-[#3ECF8E] to-emerald-500 hover:from-emerald-400 hover:to-emerald-600 text-[#0A0A0C] text-xs font-mono-custom uppercase tracking-wider font-bold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/10">
            Iniciar Diagnóstico
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-[#8E8E9F] hover:text-white">
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-lg`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-4 pb-4 border-t border-white/5 pt-4 space-y-3 text-sm font-mono-custom">
          <a href="#servicios" onClick={() => setOpen(false)} className="block text-[#8E8E9F] hover:text-white">Especialidades</a>
          <a href="#observability-deck" onClick={() => setOpen(false)} className="block text-[#8E8E9F] hover:text-[#3ECF8E]">Observabilidad</a>
          <a href="#simulador" onClick={() => setOpen(false)} className="block text-[#8E8E9F] hover:text-white">Calculadora FinOps</a>
          <a href="#gctorque" onClick={() => setOpen(false)} className="block text-[#3ECF8E]">GCTorque ERP</a>
          <a href="#diagnostico" onClick={() => setOpen(false)} className="block text-[#8E8E9F] hover:text-white">Diagnóstico</a>
          <Link to="/taller" onClick={() => setOpen(false)} className="block text-indigo-400">Planes ERP GT</Link>
        </div>
      )}
    </nav>
  );
}
