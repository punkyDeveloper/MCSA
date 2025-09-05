import React from 'react';
import { ShieldCheck, Wrench, Activity, Zap } from 'lucide-react';

const servicios = [
  {
    titulo: 'Calibración de Equipos',
    descripcion: 'Garantizamos la precisión de tus instrumentos con estándares certificados.',
    icono: <ShieldCheck className="w-12 h-12 text-emerald-600" />,
  },
  {
    titulo: 'Monitoreo Ambiental',
    descripcion: 'Soluciones para medir calidad del aire, agua y ruido en tiempo real.',
    icono: <Activity className="w-12 h-12 text-emerald-600" />,
  },
  {
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Prolonga la vida útil de tus equipos industriales con mantenimiento periódico.',
    icono: <Wrench className="w-12 h-12 text-emerald-600" />,
  },
  {
    titulo: 'Automatización de Procesos',
    descripcion: 'Optimiza tu producción con soluciones tecnológicas personalizadas.',
    icono: <Zap className="w-12 h-12 text-emerald-600" />,
  },
];

const Servicios = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-16">

        <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Nuestros Servicios
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Ofrecemos soluciones integrales para tu empresa en el área de ingeniería ambiental e industrial, 
          con la más alta calidad y tecnología de vanguardia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {servicios.map((servicio, idx) => (
          <div key={idx} className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300">
                {servicio.icono}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-emerald-700 transition-colors duration-300">
              {servicio.titulo}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {servicio.descripcion}
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="/servicios"> <button className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <span className="relative z-10">Ver Todos los Servicios</span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button></a>
      </div>
    </section>
  );
};

export default Servicios;