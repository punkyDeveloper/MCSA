import React from 'react';
import fondo from '../../assets/portada2.png'; // o la imagen real de portada

const Portada = () => {
  return (
    <section
      className="relative h-[85vh] lg:h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
          Tu socio en soluciones de ingeniería ambiental
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-6">
          Ofrecemos servicios de calibración, monitoreo y automatización industrial.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-full font-medium transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Portada;
