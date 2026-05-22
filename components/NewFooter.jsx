import React from 'react';

export default function NewFooter() {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xs font-mono-custom text-[#8E8E9F]">
          &copy; 2026 TechOps Engineering Ltd. Todos los derechos reservados. GCTorque ERP es una marca registrada de TechOps.
        </span>
        <div className="flex space-x-6 text-xs font-mono-custom text-[#8E8E9F]">
          <a href="#diagnostico" className="hover:text-[#FAFAFA] transition-colors">Auditor&iacute;as</a>
          <a href="#" className="hover:text-[#FAFAFA] transition-colors">T&eacute;rminos de Servicio</a>
          <a href="#" className="hover:text-[#FAFAFA] transition-colors">Seguridad de Datos</a>
        </div>
      </div>
    </footer>
  );
}
