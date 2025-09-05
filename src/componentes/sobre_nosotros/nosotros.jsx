import React from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import ImagenEquipo from '../../assets/mapa2.png';

const SobreNosotros = () => {
  // Datos del componente organizados
  const contenido = {
    badge: "QUIÉNES SOMOS",
    titulo: "Sobre Nosotros",
    parrafo1: "Somos una empresa dedicada a brindar soluciones en ingeniería ambiental e industrial, comprometidos con la sostenibilidad, la innovación y la excelencia en el servicio.",
    parrafo2: "Nuestro equipo está conformado por profesionales altamente capacitados que trabajan con pasión para ofrecer servicios de calibración, monitoreo, automatización y más."
  };

  const valores = [
    { icono: <Target className="w-5 h-5 text-emerald-600" />, texto: "Sostenibilidad" },
    { icono: <Award className="w-5 h-5 text-emerald-600" />, texto: "Excelencia" },
    { icono: <Users className="w-5 h-5 text-emerald-600" />, texto: "Profesionalismo" },
    { icono: <CheckCircle className="w-5 h-5 text-emerald-600" />, texto: "Innovación" }
  ];

  const estadisticas = [
    { numero: "10+", texto: "Años de experiencia" },
    { numero: "500+", texto: "Proyectos completados" },
    { numero: "100+", texto: "Clientes satisfechos" },
    { numero: "24/7", texto: "Soporte técnico" }
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Sección de Texto */}
        <div className="space-y-6">
          {/* Badge */}
          <div>
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {contenido.badge}
            </span>
          </div>
          
          {/* Título */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {contenido.titulo.split(' ')[0]} <span className="text-emerald-600">{contenido.titulo.split(' ')[1]}</span>
          </h2>
          
          {/* Párrafos */}
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              {contenido.parrafo1}
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              {contenido.parrafo2}
            </p>
          </div>

          {/* Lista de valores */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {valores.map((valor, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  {valor.icono}
                </div>
                <span className="text-gray-800 font-medium text-sm">
                  {valor.texto}
                </span>
              </div>
            ))}
          </div>

          {/* Botón */}
          <div className="pt-6">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Conocer Más Detalles
            </button>
          </div>
        </div>

        {/* Sección de Imagen */}
        <div className="relative">
          <div className="relative group">
            {/* Contenedor de la imagen con efectos */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={ImagenEquipo}
                  alt="Equipo de trabajo - Ingeniería ambiental e industrial"
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-teal-500 rounded-full opacity-60"></div>
          </div>
        </div>
        
      </div>

      {/* Sección de Estadísticas */}
      <div className="max-w-7xl mx-auto mt-20 pt-16 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {estadisticas.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                {stat.numero}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.texto}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;