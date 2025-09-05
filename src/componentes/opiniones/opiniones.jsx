import React from 'react';
import { Star } from 'lucide-react';

const testimonios = [
  {
    nombre: 'Carlos Rojas',
    cargo: 'Gerente de Planta',
    empresa: 'Ecoplasma S.A.S.',
    mensaje:
      'La atención personalizada y el profesionalismo del equipo marcaron la diferencia. Los recomiendo totalmente.',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    nombre: 'Laura Gómez',
    cargo: 'Jefe de Calidad',
    empresa: 'Ambiental Plus',
    mensaje:
      'Gracias a su servicio de monitoreo ambiental, hemos logrado cumplir con las normativas locales sin contratiempos.',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    nombre: 'Miguel Torres',
    cargo: 'Coordinador Técnico',
    empresa: 'Industrias Verdes',
    mensaje:
      'Su equipo técnico resolvió cada detalle en tiempo récord. La automatización mejoró notablemente nuestra producción.',
    foto: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
];

const Opiniones = () => {
  return (
    <section className="bg-white text-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Testimonios</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lo que dicen nuestros clientes sobre nuestros servicios y el impacto que generamos en sus empresas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonio.foto}
                alt={testimonio.nombre}
                className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-green-400">{testimonio.nombre}</h3>
                <p className="text-sm text-gray-300">{testimonio.cargo} - {testimonio.empresa}</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 text-sm">“{testimonio.mensaje}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opiniones;
