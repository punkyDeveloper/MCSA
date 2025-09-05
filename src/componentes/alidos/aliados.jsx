import React, { useState, useEffect } from 'react';

const Aliados = () => {
  // ==================== DATOS DEL COMPONENTE ====================
  const datos = {
    titulo: "Nuestros Aliados",
    descripcion: "Conoce a las empresas que confían en nuestro trabajo y colaboran con nosotros.",
    aliados: [
      { 
        id: 1,
        nombre: 'Empresa Verde', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png' 
      },
      { 
        id: 2,
        nombre: 'Soluciones Eco', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png' 
      },
      { 
        id: 3,
        nombre: 'TecnoAmbiente', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Intel-logo.svg/1280px-Intel-logo.svg.png' 
      },
      { 
        id: 4,
        nombre: 'Innova Industrial', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' 
      },
      { 
        id: 5,
        nombre: 'Ambiente Pro', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/768px-Apple_logo_black.svg.png' 
      }
    ]
  };

  // ==================== CONFIGURACIÓN DEL CARRUSEL ====================
  const configuracion = {
    elementosVisibles: 3,
    intervaloCambio: 4000, // 4 segundos
    duracionTransicion: 500 // 500ms
  };

  // ==================== ESTILOS ORGANIZADOS ====================
  const estilos = {
    seccion: "bg-white py-20 px-4 md:px-10",
    contenedorPrincipal: "max-w-7xl mx-auto",
    encabezado: {
      contenedor: "text-center mb-12",
      titulo: "text-4xl font-bold text-emerald-600 mb-4",
      descripcion: "text-gray-700 max-w-2xl mx-auto"
    },
    carrusel: {
      contenedor: "flex items-center justify-center",
      wrapper: "flex gap-6 overflow-hidden max-w-6xl w-full px-4"
    },
    tarjeta: {
      contenedor: "bg-white border-2 border-gray-200 p-6 min-w-[250px] max-w-[300px] w-full rounded-2xl shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-500 text-center",
      logo: {
        contenedor: "flex justify-center mb-4",
        imagen: "w-28 h-16 object-contain"
      },
      titulo: "text-gray-800 font-semibold text-lg"
    }
  };

  // ==================== ESTADO Y EFECTOS ====================
  const [indiceInicio, setIndiceInicio] = useState(0);
  const totalAliados = datos.aliados.length;

  // Efecto para el carrusel automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceInicio(prevIndice => 
        (prevIndice + 1) % totalAliados
      );
    }, configuracion.intervaloCambio);

    return () => clearInterval(intervalo);
  }, [totalAliados]);

  // ==================== FUNCIONES AUXILIARES ====================
  const obtenerAliadosVisibles = () => {
    const inicio = indiceInicio;
    const fin = inicio + configuracion.elementosVisibles;
    
    // Si no hay suficientes elementos, agregar desde el principio
    if (fin > totalAliados) {
      return [
        ...datos.aliados.slice(inicio),
        ...datos.aliados.slice(0, fin % totalAliados)
      ];
    }
    
    return datos.aliados.slice(inicio, fin);
  };

  const aliadosVisibles = obtenerAliadosVisibles();

  // ==================== COMPONENTES AUXILIARES ====================
  const Encabezado = () => (
    <div className={estilos.encabezado.contenedor}>
      <h2 className={estilos.encabezado.titulo}>
        {datos.titulo}
      </h2>
      <p className={estilos.encabezado.descripcion}>
        {datos.descripcion}
      </p>
    </div>
  );

  const TarjetaAliado = ({ aliado, index }) => (
    <div key={`${aliado.id}-${index}`} className={estilos.tarjeta.contenedor}>
      <div className={estilos.tarjeta.logo.contenedor}>
        <img
          src={aliado.logo}
          alt={`Logo de ${aliado.nombre}`}
          className={estilos.tarjeta.logo.imagen}
          loading="lazy"
        />
      </div>
      <h3 className={estilos.tarjeta.titulo}>
        {aliado.nombre}
      </h3>
    </div>
  );

  const Carrusel = () => (
    <div className={estilos.carrusel.contenedor}>
      <div className={estilos.carrusel.wrapper}>
        {aliadosVisibles.map((aliado, index) => (
          <TarjetaAliado 
            key={`aliado-${index}`}
            aliado={aliado} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );

  // ==================== RENDER PRINCIPAL ====================
  return (
    <section className={estilos.seccion}>
      <div className={estilos.contenedorPrincipal}>
        <Encabezado />
        <Carrusel />
      </div>
    </section>
  );
};

export default Aliados;